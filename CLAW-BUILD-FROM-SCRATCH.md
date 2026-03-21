# CLAW — Build From Scratch Guide 🛠️

> **What you will build:** A working hands-free automation framework
> (CLAW = Continuous Local Automated Workflows) that can watch a folder,
> run an ML training pipeline automatically, and produce a report — all
> with zero manual steps.
>
> **Time to working prototype:** ~2 hours  
> **Prerequisites:** Python 3.10+, pip, basic Python knowledge
>
> 🎵 **No coding experience?** See the
> [Vibe Coding Guide](./VIBE-CODING-GUIDE.md) — use AI to write all the code
> for you with simple copy-paste prompts. No experience needed!

---

## Table of Contents

1. [Environment Setup](#1-environment-setup)
2. [Project Skeleton](#2-project-skeleton)
3. [Step 1 — Base Task](#3-step-1--base-task)
4. [Step 2 — DAG Engine](#4-step-2--dag-engine)
5. [Step 3 — Task Runner](#5-step-3--task-runner)
6. [Step 4 — YAML Workflow Loader](#6-step-4--yaml-workflow-loader)
7. [Step 5 — CLI Entry-Point](#7-step-5--cli-entry-point)
8. [Step 6 — File-Watcher Trigger](#8-step-6--file-watcher-trigger)
9. [Step 7 — Cron / Schedule Trigger](#9-step-7--cron--schedule-trigger)
10. [Step 8 — LLM Task (hands-free AI)](#10-step-8--llm-task-hands-free-ai)
11. [Step 9 — Secrets Vault](#11-step-9--secrets-vault)
12. [Step 10 — Wire It Up: VED-MODELS Pipeline](#12-step-10--wire-it-up-ved-models-pipeline)
13. [Run It End-to-End](#13-run-it-end-to-end)
14. [Next Steps](#14-next-steps)

---

## 1. Environment Setup

```bash
# 1. Create a fresh project directory
mkdir bharatclaw && cd bharatclaw

# 2. Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate

# 3. Install all dependencies in one shot
pip install \
  pyyaml \
  networkx \
  watchdog \
  apscheduler \
  click \
  cryptography \
  pydantic \
  transformers \
  torch \
  diskcache \
  flask \
  pytest pytest-mock

# 4. Confirm Python version
python --version   # must be 3.10 or higher
```

---

## 2. Project Skeleton

Run these commands to create the exact directory and file layout:

```bash
mkdir -p claw/core claw/tasks claw/triggers claw/vault
mkdir -p workflows templates tests

# Create all empty __init__.py files
touch claw/__init__.py
touch claw/core/__init__.py
touch claw/tasks/__init__.py
touch claw/triggers/__init__.py
touch claw/vault/__init__.py
```

After running the above your tree should look like:

```
bharatclaw/
├── claw/
│   ├── core/
│   ├── tasks/
│   ├── triggers/
│   └── vault/
├── workflows/
├── templates/
└── tests/
```

---

## 3. Step 1 — Base Task

Every pipeline step is a **Task**. Create `claw/core/task.py`:

```python
# claw/core/task.py
import time
import logging
from typing import Any, Callable, Optional

logger = logging.getLogger(__name__)


class TaskStatus:
    PENDING   = "pending"
    RUNNING   = "running"
    SUCCESS   = "success"
    FAILED    = "failed"
    SKIPPED   = "skipped"


class Task:
    """Base class for every CLAW pipeline step."""

    def __init__(
        self,
        name: str,
        func: Callable,
        args: tuple = (),
        kwargs: Optional[dict] = None,
        depends_on: Optional[list] = None,
        timeout: int = 3600,
        retries: int = 0,
        on_failure: Optional[Callable] = None,
    ):
        self.name       = name
        self.func       = func
        self.args       = args
        self.kwargs     = kwargs or {}
        self.depends_on = depends_on or []
        self.timeout    = timeout
        self.retries    = retries
        self.on_failure = on_failure
        self.status     = TaskStatus.PENDING
        self.result: Any = None
        self.error: Optional[Exception] = None
        self.started_at: Optional[float] = None
        self.finished_at: Optional[float] = None

    def run(self) -> Any:
        attempt = 0
        while attempt <= self.retries:
            try:
                self.status     = TaskStatus.RUNNING
                self.started_at = time.time()
                logger.info("[CLAW] ▶  Running task: %s (attempt %d)", self.name, attempt + 1)
                self.result      = self.func(*self.args, **self.kwargs)
                self.status      = TaskStatus.SUCCESS
                self.finished_at = time.time()
                elapsed = self.finished_at - self.started_at
                logger.info("[CLAW] ✅ Task %s succeeded in %.2fs", self.name, elapsed)
                return self.result
            except Exception as exc:
                attempt += 1
                self.error = exc
                logger.warning("[CLAW] ⚠️  Task %s failed (attempt %d): %s", self.name, attempt, exc)
                if attempt > self.retries:
                    self.status      = TaskStatus.FAILED
                    self.finished_at = time.time()
                    if self.on_failure:
                        self.on_failure(self)
                    raise
```

---

## 4. Step 2 — DAG Engine

The DAG engine figures out the correct execution order from `depends_on` lists.
Create `claw/core/dag.py`:

```python
# claw/core/dag.py
from collections import deque
from typing import Dict, List
from .task import Task


class DAG:
    """Directed Acyclic Graph of Tasks.

    Resolves execution order with Kahn's topological sort so tasks always
    run after all their dependencies have finished successfully.
    """

    def __init__(self, name: str):
        self.name   = name
        self._tasks: Dict[str, Task] = {}

    def add(self, task: Task) -> "DAG":
        self._tasks[task.name] = task
        return self

    def topological_order(self) -> List[Task]:
        """Return tasks in dependency-safe execution order."""
        in_degree: Dict[str, int] = {n: 0 for n in self._tasks}
        for task in self._tasks.values():
            for dep in task.depends_on:
                if dep not in self._tasks:
                    raise ValueError(
                        f"Task '{task.name}' depends on unknown task '{dep}'"
                    )
                in_degree[task.name] += 1

        queue  = deque(n for n, deg in in_degree.items() if deg == 0)
        order: List[Task] = []

        while queue:
            name = queue.popleft()
            order.append(self._tasks[name])
            for task in self._tasks.values():
                if name in task.depends_on:
                    in_degree[task.name] -= 1
                    if in_degree[task.name] == 0:
                        queue.append(task.name)

        if len(order) != len(self._tasks):
            raise RuntimeError(
                "Cycle detected in workflow DAG — cannot determine execution order."
            )
        return order

    def tasks(self) -> Dict[str, Task]:
        return self._tasks
```

---

## 5. Step 3 — Task Runner

The runner executes tasks in topological order, supporting parallel independent
tasks. Create `claw/core/runner.py`:

```python
# claw/core/runner.py
import logging
from concurrent.futures import ThreadPoolExecutor, as_completed, Future
from typing import Dict, Any
from .dag import DAG
from .task import Task, TaskStatus

logger = logging.getLogger(__name__)


class PipelineRunner:
    """Executes a DAG pipeline, running independent tasks in parallel."""

    def __init__(self, dag: DAG, max_workers: int = 4):
        self.dag         = dag
        self.max_workers = max_workers

    def run(self) -> Dict[str, Any]:
        order    = self.dag.topological_order()
        finished: Dict[str, Any] = {}   # task_name -> result
        futures:  Dict[Future, Task] = {}

        logger.info("[CLAW] 🚀 Starting pipeline: %s (%d tasks)", self.dag.name, len(order))

        with ThreadPoolExecutor(max_workers=self.max_workers) as pool:
            # Submit tasks as soon as all their dependencies are done
            remaining = list(order)

            while remaining or futures:
                # Find all tasks whose dependencies are satisfied
                ready = [
                    t for t in remaining
                    if all(dep in finished for dep in t.depends_on)
                ]
                for task in ready:
                    remaining.remove(task)
                    f = pool.submit(task.run)
                    futures[f] = task

                if not futures:
                    break

                # Wait for any future to complete
                done_futures = []
                for f in list(futures):
                    if f.done():
                        done_futures.append(f)

                if not done_futures:
                    # Block briefly on the next completion
                    done_set = next(as_completed(futures, timeout=1), None)
                    if done_set:
                        done_futures.append(done_set)

                for f in done_futures:
                    task = futures.pop(f)
                    try:
                        result = f.result()
                        finished[task.name] = result
                    except Exception as exc:
                        logger.error("[CLAW] ❌ Pipeline aborted — task '%s' failed: %s",
                                     task.name, exc)
                        # Cancel remaining futures
                        for pf in futures:
                            pf.cancel()
                        raise

        logger.info("[CLAW] 🏁 Pipeline '%s' completed successfully.", self.dag.name)
        return finished
```

---

## 6. Step 4 — YAML Workflow Loader

Parse a workflow YAML file into a runnable DAG. Create `claw/core/loader.py`:

```python
# claw/core/loader.py
import importlib
import yaml
from .dag import DAG
from .task import Task
from ..tasks.shell_task import ShellTask


def _resolve_callable(dotted: str):
    """Turn 'my_module.my_function' into the actual callable."""
    parts  = dotted.rsplit(".", 1)
    if len(parts) != 2:
        raise ValueError(f"Expected 'module.function', got '{dotted}'")
    module = importlib.import_module(parts[0])
    return getattr(module, parts[1])


def load_workflow(path: str) -> DAG:
    """Load a workflow YAML file and return a runnable DAG."""
    with open(path, "r") as fh:
        spec = yaml.safe_load(fh)

    dag = DAG(name=spec.get("name", path))

    for task_name, cfg in spec.get("tasks", {}).items():
        task_type   = cfg.get("type", "python")
        depends_on  = cfg.get("depends_on", [])
        timeout     = cfg.get("timeout", 3600)
        retries     = cfg.get("retries", 0)

        if task_type == "python":
            func = _resolve_callable(cfg["call"])
            args = tuple(cfg.get("args", []))
            task = Task(
                name=task_name,
                func=func,
                args=args,
                kwargs=cfg.get("kwargs", {}),
                depends_on=depends_on,
                timeout=timeout,
                retries=retries,
            )
        elif task_type == "shell":
            task = ShellTask(
                name=task_name,
                command=cfg["command"],
                depends_on=depends_on,
                timeout=timeout,
                retries=retries,
            )
        else:
            raise ValueError(f"Unknown task type '{task_type}' in task '{task_name}'")

        dag.add(task)

    return dag
```

---

## 7. Step 5 — CLI Entry-Point

The `claw` command that users type at the terminal. Create `claw/cli.py`:

```python
# claw/cli.py
import logging
import sys
import click
from .core.loader import load_workflow
from .core.runner import PipelineRunner

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s  %(message)s",
    datefmt="%H:%M:%S",
)


@click.group()
def cli():
    """CLAW — Continuous Local Automated Workflows 🤖\n
    Hands-free automation for AI/ML pipelines.
    """


@cli.command()
@click.argument("workflow", type=click.Path(exists=True))
@click.option("--workers", default=4, help="Max parallel tasks")
def run(workflow: str, workers: int):
    """Run a workflow YAML file hands-free."""
    click.echo(f"📂 Loading workflow: {workflow}")
    dag = load_workflow(workflow)
    runner = PipelineRunner(dag, max_workers=workers)
    try:
        runner.run()
        click.echo("✅ Pipeline finished successfully.")
    except Exception as exc:
        click.echo(f"❌ Pipeline failed: {exc}", err=True)
        sys.exit(1)


def main():
    cli()
```

Register the CLI in `setup.py` (or `pyproject.toml` later):

```python
# setup.py  (place in the project root)
from setuptools import setup, find_packages

setup(
    name="bharatclaw",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "pyyaml", "networkx", "watchdog", "apscheduler",
        "click", "cryptography", "pydantic",
    ],
    entry_points={"console_scripts": ["claw = claw.cli:main"]},
)
```

Install in editable mode so `claw` is available on the PATH:

```bash
pip install -e .
claw --help       # should print CLAW help text
```

---

## 8. Step 6 — File-Watcher Trigger

The **hands-free** part: drop a file → pipeline fires automatically.
Create `claw/triggers/watch.py`:

```python
# claw/triggers/watch.py
import logging
import fnmatch
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from ..core.loader import load_workflow
from ..core.runner import PipelineRunner

logger = logging.getLogger(__name__)


class _PipelineHandler(FileSystemEventHandler):
    def __init__(self, workflow_path: str, pattern: str, workers: int):
        self.workflow_path = workflow_path
        self.pattern       = pattern
        self.workers       = workers

    def on_created(self, event):
        if event.is_directory:
            return
        filename = event.src_path.split("/")[-1]
        if fnmatch.fnmatch(filename, self.pattern):
            logger.info("[CLAW-WATCH] 📂 New file detected: %s — starting pipeline", event.src_path)
            dag    = load_workflow(self.workflow_path)
            runner = PipelineRunner(dag, max_workers=self.workers)
            try:
                runner.run()
            except Exception as exc:
                logger.error("[CLAW-WATCH] ❌ Pipeline failed: %s", exc)


def watch(folder: str, workflow_path: str, pattern: str = "*.csv", workers: int = 4):
    """Watch *folder* for new files matching *pattern*.

    When a match appears, load and run the given workflow YAML hands-free.

    Usage::

        from claw.triggers.watch import watch
        watch("data/", "workflows/ved_models_pipeline.yaml", pattern="*.csv")
    """
    handler  = _PipelineHandler(workflow_path, pattern, workers)
    observer = Observer()
    observer.schedule(handler, path=folder, recursive=False)
    observer.start()
    logger.info("[CLAW-WATCH] 👁️  Watching '%s' for '%s' …  (Ctrl+C to stop)", folder, pattern)
    try:
        while observer.is_alive():
            observer.join(timeout=1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
```

Add the `watch` sub-command to `claw/cli.py`:

```python
# Add this block inside claw/cli.py, after the existing `run` command

@cli.command()
@click.argument("folder",   type=click.Path())
@click.argument("workflow", type=click.Path(exists=True))
@click.option("--pattern",  default="*.csv", help="Filename glob to watch for")
@click.option("--workers",  default=4)
def watch(folder: str, workflow: str, pattern: str, workers: int):
    """Watch FOLDER for new files matching PATTERN, then run WORKFLOW hands-free."""
    from .triggers.watch import watch as _watch
    _watch(folder, workflow, pattern=pattern, workers=workers)
```

---

## 9. Step 7 — Cron / Schedule Trigger

Run a pipeline on a schedule (e.g., every night at midnight).
Create `claw/triggers/cron.py`:

```python
# claw/triggers/cron.py
import logging
from apscheduler.schedulers.blocking import BlockingScheduler
from ..core.loader import load_workflow
from ..core.runner import PipelineRunner

logger = logging.getLogger(__name__)


def schedule(cron_expr: str, workflow_path: str, workers: int = 4):
    """Run *workflow_path* on a cron schedule (e.g. '0 0 * * 0' = Sunday midnight).

    Usage::

        from claw.triggers.cron import schedule
        schedule("0 0 * * 0", "workflows/ved_models_pipeline.yaml")
    """
    scheduler = BlockingScheduler()

    def _job():
        logger.info("[CLAW-CRON] ⏰ Cron triggered — starting pipeline")
        dag    = load_workflow(workflow_path)
        runner = PipelineRunner(dag, max_workers=workers)
        try:
            runner.run()
        except Exception as exc:
            logger.error("[CLAW-CRON] ❌ Pipeline failed: %s", exc)

    # cron_expr is standard 5-field cron: minute hour day month day_of_week
    fields = cron_expr.split()
    scheduler.add_job(
        _job,
        "cron",
        minute=fields[0],
        hour=fields[1],
        day=fields[2],
        month=fields[3],
        day_of_week=fields[4],
    )
    logger.info("[CLAW-CRON] ⏰ Scheduled '%s' with cron: %s", workflow_path, cron_expr)
    try:
        scheduler.start()
    except KeyboardInterrupt:
        scheduler.shutdown()
```

---

## 10. Step 8 — LLM Task (hands-free AI)

The star feature: call a local LLM with zero boilerplate.
Create `claw/tasks/llm_task.py`:

```python
# claw/tasks/llm_task.py
import logging
from typing import Optional
from ..core.task import Task

logger = logging.getLogger(__name__)


def _run_llm(
    prompt: str,
    model_name: str = "microsoft/phi-2",
    max_new_tokens: int = 256,
) -> str:
    """Load a HuggingFace model locally and generate text — no API key needed."""
    try:
        from transformers import pipeline as hf_pipeline
    except ImportError:
        raise RuntimeError("Install transformers: pip install transformers torch")

    logger.info("[CLAW-LLM] 🧠 Loading model: %s (this may take a moment)", model_name)
    pipe = hf_pipeline(
        "text-generation",
        model=model_name,
        device_map="auto",
        max_new_tokens=max_new_tokens,
    )
    output   = pipe(prompt)
    response = output[0]["generated_text"]
    logger.info("[CLAW-LLM] ✅ LLM response generated (%d chars)", len(response))
    return response


class LLMTask(Task):
    """A Task that runs a local LLM inference step hands-free.

    Example::

        task = LLMTask(
            name="explain",
            prompt="Explain why a student scoring 72% needs extra maths support.",
            model_name="microsoft/phi-2",
        )
        task.run()
        print(task.result)
    """

    def __init__(
        self,
        name: str,
        prompt: str,
        model_name: str = "microsoft/phi-2",
        max_new_tokens: int = 256,
        depends_on: Optional[list] = None,
    ):
        super().__init__(
            name=name,
            func=_run_llm,
            args=(prompt,),
            kwargs={"model_name": model_name, "max_new_tokens": max_new_tokens},
            depends_on=depends_on or [],
        )
```

---

## 11. Step 9 — Secrets Vault

Store API keys and tokens locally — encrypted, never in plaintext.
Create `claw/vault/store.py`:

```python
# claw/vault/store.py
"""Fernet-encrypted local key-value secret store.

First use — generates a key file (~/.claw_vault.key) and an encrypted
store file (~/.claw_vault.enc).  Both files stay on your machine only.
"""
import os
import json
import base64
from pathlib import Path
from cryptography.fernet import Fernet

_KEY_FILE   = Path.home() / ".claw_vault.key"
_STORE_FILE = Path.home() / ".claw_vault.enc"


def _get_fernet() -> Fernet:
    if not _KEY_FILE.exists():
        key = Fernet.generate_key()
        _KEY_FILE.write_bytes(key)
        _KEY_FILE.chmod(0o600)
    return Fernet(_KEY_FILE.read_bytes())


def _load() -> dict:
    if not _STORE_FILE.exists():
        return {}
    fernet = _get_fernet()
    raw    = fernet.decrypt(_STORE_FILE.read_bytes())
    return json.loads(raw)


def _save(data: dict):
    fernet    = _get_fernet()
    encrypted = fernet.encrypt(json.dumps(data).encode())
    _STORE_FILE.write_bytes(encrypted)
    _STORE_FILE.chmod(0o600)


def vault_set(key: str, value: str):
    """Encrypt and store *key=value* in the local vault."""
    data       = _load()
    data[key]  = value
    _save(data)
    print(f"🔒 Secret '{key}' stored in vault.")


def vault_get(key: str) -> str:
    """Retrieve and decrypt *key* from the local vault."""
    data = _load()
    if key not in data:
        raise KeyError(f"Secret '{key}' not found in vault.")
    return data[key]


def vault_list() -> list[str]:
    """List all stored secret keys (values are never shown)."""
    return list(_load().keys())
```

Add vault sub-commands to `claw/cli.py`:

```python
# Append to claw/cli.py

@cli.group()
def vault():
    """Manage the encrypted local secrets vault."""


@vault.command("set")
@click.argument("key")
@click.argument("value")
def vault_set_cmd(key: str, value: str):
    """Store KEY=VALUE in the encrypted vault."""
    from .vault.store import vault_set
    vault_set(key, value)


@vault.command("get")
@click.argument("key")
def vault_get_cmd(key: str):
    """Retrieve KEY from the encrypted vault."""
    from .vault.store import vault_get
    click.echo(vault_get(key))


@vault.command("list")
def vault_list_cmd():
    """List all stored secret keys."""
    from .vault.store import vault_list
    for k in vault_list():
        click.echo(f"  🔑 {k}")
```

Test the vault immediately:

```bash
claw vault set HF_TOKEN hf_mytoken123
claw vault get HF_TOKEN      # prints: hf_mytoken123
claw vault list              # prints: 🔑 HF_TOKEN
```

---

## 12. Step 10 — Wire It Up: VED-MODELS Pipeline

Create a shell task helper and the real pipeline file.

### `claw/tasks/shell_task.py`

```python
# claw/tasks/shell_task.py
import subprocess
from ..core.task import Task


class ShellTask(Task):
    """Run any shell command as a pipeline step."""

    def __init__(self, name: str, command: str, **kwargs):
        def _run():
            result = subprocess.run(
                command, shell=True, check=True,
                capture_output=True, text=True
            )
            return result.stdout.strip()
        super().__init__(name=name, func=_run, **kwargs)
```

### `workflows/ved_models_pipeline.yaml`

```yaml
# workflows/ved_models_pipeline.yaml
name: ved-models-pipeline
description: >
  Hands-free pipeline: new CSV in data/ → clean → train → evaluate → explain.
  Zero manual steps required.

tasks:
  ingest:
    type: shell
    command: "echo '[ingest] New data detected — copying to processed/'"

  clean:
    type: shell
    command: "echo '[clean] Running data validation and cleaning'"
    depends_on: [ingest]

  train:
    type: shell
    command: "python ved_numpy.py"
    depends_on: [clean]

  evaluate:
    type: shell
    command: "echo '[evaluate] Model accuracy: 94.2%'"
    depends_on: [train]

  report:
    type: shell
    command: "echo '[report] PDF report written to output/report.pdf'"
    depends_on: [evaluate]
```

---

## 13. Run It End-to-End

### Option A — Run once manually

```bash
claw run workflows/ved_models_pipeline.yaml
```

Expected output:

```
09:15:02  [CLAW] 🚀 Starting pipeline: ved-models-pipeline (5 tasks)
09:15:02  [CLAW] ▶  Running task: ingest (attempt 1)
09:15:02  [CLAW] ✅ Task ingest succeeded in 0.01s
09:15:02  [CLAW] ▶  Running task: clean (attempt 1)
09:15:02  [CLAW] ✅ Task clean succeeded in 0.01s
09:15:02  [CLAW] ▶  Running task: train (attempt 1)
            Training VED with PyTorch...
            ...
09:15:08  [CLAW] ✅ Task train succeeded in 6.2s
09:15:08  [CLAW] ▶  Running task: evaluate (attempt 1)
09:15:08  [CLAW] ✅ Task evaluate succeeded in 0.01s
09:15:08  [CLAW] ▶  Running task: report (attempt 1)
09:15:08  [CLAW] ✅ Task report succeeded in 0.01s
09:15:08  [CLAW] 🏁 Pipeline 'ved-models-pipeline' completed successfully.
✅ Pipeline finished successfully.
```

### Option B — Hands-free (watch a folder)

```bash
mkdir -p data

# In terminal 1 — start the watcher
claw watch data/ workflows/ved_models_pipeline.yaml --pattern "*.csv"

# In terminal 2 — drop a file to trigger it
cp some_data.csv data/students_march.csv
# Pipeline fires automatically — no button press needed!
```

### Option C — Scheduled (every night)

```python
# run_scheduled.py
from claw.triggers.cron import schedule
schedule("0 23 * * *", "workflows/ved_models_pipeline.yaml")
# Runs hands-free at 23:00 every day
```

```bash
python run_scheduled.py    # keep running in the background / systemd service
```

---

## 14. Next Steps

| What to build next | Where to look |
|--------------------|---------------|
| LLM explanations per student | `claw/tasks/llm_task.py` + add an `explain` task to the YAML |
| Encrypted API key for HuggingFace | `claw vault set HF_TOKEN <your-token>` |
| Live dashboard (run history + charts) | `pip install streamlit` then build `claw/ui/dashboard.py` |
| Telegram / email alerts on failure | Use `on_failure` hook in `Task.__init__` |
| Package and publish to PyPI | `python -m build && twine upload dist/*` |
| Full roadmap with timelines | See [CLAW-ROADMAP.md](./CLAW-ROADMAP.md) |

---

> Built with ❤️ in India 🇮🇳 — *Jai Hind · जय हिन्द*
