# CLAW — Continuous Local Automated Workflows 🤖

> **Clarification:** CLAW is **not** a robotic arm or gripper.
> **CLAW = Continuous Local Automated Workflows** — a hands-free automation
> framework for running AI/ML model pipelines (training, inference, evaluation,
> and deployment) without any manual intervention.
>
> 🛠️ **Ready to build?** Jump straight to the
> [Build From Scratch Guide](./CLAW-BUILD-FROM-SCRATCH.md) for step-by-step
> code and commands to get a working prototype in ~2 hours.
>
> 🎵 **No coding experience?** Start with the
> [Vibe Coding Guide](./VIBE-CODING-GUIDE.md) — describe what you want in
> plain English and let AI write all the code for you.

---

## Table of Contents

1. [What is CLAW?](#1-what-is-claw)
2. [Competitive Analysis](#2-competitive-analysis)
3. [Learning Roadmap (Course Syllabus)](#3-learning-roadmap-course-syllabus)
4. [Build Plan (Phases)](#4-build-plan-phases)
5. [Architecture & Components](#5-architecture--components)
6. [Software Stack](#6-software-stack)
7. [Milestones & Timeline](#7-milestones--timeline)
8. [Contributing](#8-contributing)

---

## 1. What is CLAW?

**CLAW** is a fully open-source, hands-free automation framework that
orchestrates the full AI/ML lifecycle — data ingestion, preprocessing, model
training, evaluation, and deployment — with zero manual steps once triggered.

It is built specifically to run **locally on consumer hardware** (CPU, single
GPU, or Apple Silicon) without depending on any cloud API or paid service.

### Design Goals

| Metric | Make-do scripts | GitHub Actions only | **CLAW target** |
|--------|----------------|---------------------|-----------------|
| Zero-touch pipeline | ❌ manual steps | ✅ CI only | **✅ local + CI** |
| Offline capable | ✅ | ❌ | **✅ fully offline** |
| LLM-aware tasks | ❌ | ❌ | **✅ built-in** |
| Parallel task runner | ❌ | Partial | **✅ native** |
| Scheduling (cron) | ❌ | ✅ | **✅ native** |
| Secrets / config mgmt | Manual | Via repo secrets | **✅ encrypted local vault** |
| License | — | MIT | **Apache 2.0** |

---

## 2. Competitive Analysis

### n8n / Zapier (cloud automation)
- **Strengths:** Excellent UI, hundreds of integrations, no-code friendly.
- **Weaknesses:** Cloud-dependent, per-task pricing, not ML-pipeline-aware,
  cannot run local LLM inference tasks.

### GitHub Actions (CI/CD)
- **Strengths:** Tightly integrated with source control, free for public repos.
- **Weaknesses:** Requires internet/cloud, cannot directly schedule local model
  training jobs, no local secret execution.

### Apache Airflow
- **Strengths:** Production-grade DAG scheduler, large ecosystem.
- **Weaknesses:** Heavy setup (Docker, Postgres), overkill for a single-machine
  ML project, no built-in LLM task type.

### CLAW Advantages
1. **100% local** — runs on your laptop/workstation, no cloud required.
2. **LLM task primitive** — built-in `LLMTask` that calls AirLLM / HuggingFace
   models with no boilerplate.
3. **Hands-free trigger** — file-watcher, cron, and webhook triggers; zero
   manual re-runs.
4. **Tiny footprint** — pure Python, single `pip install`, no Docker daemon.
5. **VED-MODELS native** — ships with ready-made workflows for student
   performance prediction, batch inference, and report generation.
6. **Encrypted local vault** — secrets stored with `cryptography` Fernet,
   never sent off-device.

---

## 3. Learning Roadmap (Course Syllabus)

Work through the modules below in order. Each module lists free resources.

### Module 0 — Python Automation Foundations (1–2 weeks)
| Topic | Resource |
|-------|----------|
| Python scripting best-practices | Real Python "Automating Tasks" series |
| `subprocess`, `pathlib`, `shutil` | Python 3 official docs |
| `schedule` library (cron in Python) | [schedule docs](https://schedule.readthedocs.io) |
| `watchdog` — filesystem event monitoring | [watchdog docs](https://python-watchdog.readthedocs.io) |
| Environment variables & `.env` | python-dotenv README |

**Hands-on:** Write a script that watches a `data/` folder and auto-runs
a pre-processing function whenever a new CSV is dropped in.

### Module 1 — DAG-Based Workflow Design (2 weeks)
| Topic | Resource |
|-------|----------|
| Directed Acyclic Graphs (DAG) concepts | Wikipedia + CS fundamentals |
| Task dependency resolution | Topological sort (MIT 6.006 lecture) |
| `networkx` for DAG modelling | networkx.org tutorials |
| Airflow core concepts (DAG, Operator, XCom) | Airflow official docs |
| Prefect 2 quickstart | docs.prefect.io |

**Hands-on:** Model the VED-MODELS training pipeline as a DAG: ingest → clean
→ feature engineer → train → evaluate → export.

### Module 2 — Local LLM Task Integration (2–3 weeks)
| Topic | Resource |
|-------|----------|
| AirLLM layer-by-layer inference | [`AIRLLM-GUIDE.md`](./AIRLLM-GUIDE.md) |
| HuggingFace `pipeline()` API | HuggingFace docs |
| Prompt templating (Jinja2) | Jinja2 docs |
| Async inference with `asyncio` | Python asyncio HOWTO |
| Result caching (`diskcache`) | diskcache docs |

**Hands-on:** Add an `LLMTask` node to the VED-MODELS pipeline that generates
a plain-English explanation of each student's predicted score automatically.

### Module 3 — Scheduling & Triggers (1–2 weeks)
| Topic | Resource |
|-------|----------|
| Cron syntax | crontab.guru |
| `schedule` vs `APScheduler` | APScheduler docs |
| inotify / watchdog file triggers | watchdog API docs |
| Webhook receiver (Flask micro-server) | Flask quickstart |
| Systemd service unit (Linux) | systemd.unit man page |

**Hands-on:** Schedule the full VED-MODELS pipeline to run at midnight every
Sunday; add a webhook endpoint so a teacher's portal can trigger inference
on-demand.

### Module 4 — Secrets, Config & Security (1 week)
| Topic | Resource |
|-------|----------|
| Fernet symmetric encryption | cryptography.io docs |
| `.env` + `python-dotenv` | python-dotenv docs |
| Local secrets vault design | OWASP Secrets Management Cheat Sheet |
| Config schema validation (`pydantic`) | Pydantic v2 docs |

**Hands-on:** Store HuggingFace token and DB credentials in a Fernet-encrypted
local vault; load them at runtime with zero plaintext exposure.

### Module 5 — Monitoring, Logging & Alerts (1–2 weeks)
| Topic | Resource |
|-------|----------|
| Python `logging` module | Python docs |
| Structured logging (`structlog`) | structlog docs |
| Pipeline health dashboard (Streamlit) | streamlit.io docs |
| Alert via email / Telegram bot | smtplib / python-telegram-bot |
| Prometheus metrics (optional) | prometheus.io |

**Hands-on:** Build a one-page Streamlit dashboard showing last-run status,
duration, errors, and model accuracy trend for every pipeline run.

### Module 6 — CI/CD Integration & Release (1–2 weeks)
| Topic | Resource |
|-------|----------|
| GitHub Actions basics | GitHub Actions docs |
| `act` — run Actions locally | [nektos/act](https://github.com/nektos/act) |
| Docker packaging (optional) | Docker getting-started |
| Semantic versioning + `bump2version` | semver.org |
| `pytest` + `pytest-mock` for pipeline tests | pytest docs |

---

## 4. Build Plan (Phases)

### Phase 1 — Core Engine (Weeks 1–4)
- [ ] Complete Modules 0–1
- [ ] Implement `claw/core/dag.py` — DAG engine with topological sort
- [ ] Implement `claw/core/task.py` — base `Task` class (run, retry, timeout)
- [ ] Implement `claw/core/runner.py` — parallel task executor (`ThreadPoolExecutor`)
- [ ] Write unit tests for DAG resolution and task execution
- [ ] CLI: `claw run <workflow.yaml>`

### Phase 2 — Triggers & Scheduler (Weeks 5–8)
- [ ] Complete Module 3
- [ ] Implement `claw/triggers/cron.py` — APScheduler wrapper
- [ ] Implement `claw/triggers/watch.py` — watchdog filesystem trigger
- [ ] Implement `claw/triggers/webhook.py` — Flask webhook endpoint
- [ ] Integration test: drop a CSV → pipeline auto-runs end-to-end

### Phase 3 — LLM Tasks & VED-MODELS Integration (Weeks 9–12)
- [ ] Complete Module 2
- [ ] Implement `claw/tasks/llm_task.py` — AirLLM + HuggingFace wrapper
- [ ] Ship built-in workflow: `workflows/ved_models_pipeline.yaml`
  - ingest → clean → train → evaluate → llm_explain → report
- [ ] Implement result caching (diskcache) to avoid redundant inference
- [ ] End-to-end demo: new CSV in `data/` → PDF report in `output/` hands-free

### Phase 4 — Secrets Vault & Dashboard (Weeks 13–16)
- [ ] Complete Modules 4–5
- [ ] Implement `claw/vault/` — Fernet-encrypted local secret store
- [ ] CLI: `claw vault set KEY VALUE` / `claw vault get KEY`
- [ ] Streamlit dashboard (`claw ui`) — run history, status, accuracy charts
- [ ] Alert engine: email / Telegram on pipeline failure

### Phase 5 — Polish & Open-Source Release (Weeks 17–20)
- [ ] Complete Module 6
- [ ] Package on PyPI: `pip install bharatclaw`
- [ ] Full documentation site (MkDocs)
- [ ] GitHub Actions CI: lint, test, type-check on every PR
- [ ] Tag v1.0.0 release; publish to BharatHub

---

## 5. Architecture & Components

```
claw/
├── core/
│   ├── dag.py          # DAG engine — topological sort + dependency graph
│   ├── task.py         # Base Task (run, retry, timeout, on_failure hook)
│   └── runner.py       # Parallel executor (ThreadPoolExecutor / asyncio)
├── tasks/
│   ├── shell_task.py   # Run arbitrary shell commands
│   ├── python_task.py  # Call any Python callable
│   ├── llm_task.py     # Hands-free LLM inference (AirLLM / HuggingFace)
│   └── http_task.py    # HTTP request (webhook call, REST API)
├── triggers/
│   ├── cron.py         # APScheduler cron trigger
│   ├── watch.py        # watchdog filesystem trigger
│   └── webhook.py      # Flask one-liner webhook receiver
├── vault/
│   ├── store.py        # Fernet-encrypted key-value store
│   └── cli.py          # `claw vault` sub-commands
├── ui/
│   └── dashboard.py    # Streamlit run-history & metrics dashboard
├── workflows/
│   ├── ved_models_pipeline.yaml   # Full VED-MODELS training pipeline
│   └── batch_inference.yaml       # Batch inference on new student data
└── cli.py              # `claw` entry-point
```

### Workflow YAML example

```yaml
# workflows/ved_models_pipeline.yaml
name: ved-models-pipeline
description: "Hands-free train → evaluate → explain pipeline for VED-MODELS"

triggers:
  - type: watch
    path: data/
    pattern: "*.csv"
  - type: cron
    schedule: "0 0 * * 0"   # every Sunday midnight

tasks:
  ingest:
    type: python
    call: "ved_pipeline.ingest"
    args: ["{trigger.file}"]

  clean:
    type: python
    call: "ved_pipeline.clean"
    depends_on: [ingest]

  train:
    type: python
    call: "ved_pipeline.train"
    depends_on: [clean]
    timeout: 3600

  evaluate:
    type: python
    call: "ved_pipeline.evaluate"
    depends_on: [train]

  explain:
    type: llm
    model: "meta-llama/Llama-3.1-8B-Instruct"
    compression: "4bit"
    prompt_template: "templates/counsellor_report.j2"
    depends_on: [evaluate]

  report:
    type: python
    call: "ved_pipeline.export_pdf"
    depends_on: [explain]
    output: "output/report_{date}.pdf"
```

---

## 6. Software Stack

| Layer | Technology |
|-------|-----------|
| Language | Python 3.11 |
| DAG engine | Custom (`networkx` for graph) |
| Task execution | `concurrent.futures.ThreadPoolExecutor` + `asyncio` |
| Scheduling | APScheduler 3.x |
| File watching | `watchdog` 3.x |
| Webhook | Flask 3.x (micro-server, optional) |
| LLM inference | AirLLM + HuggingFace Transformers |
| Secret vault | `cryptography` (Fernet) |
| Config / schema | Pydantic v2 + YAML |
| Caching | `diskcache` |
| Dashboard | Streamlit |
| CLI | `click` / `argparse` |
| Tests | `pytest` + `pytest-mock` |
| CI/CD | GitHub Actions |
| Docs | MkDocs + Material theme |

---

## 7. Milestones & Timeline

```
Week  1-4  : Phase 1 — Core Engine (DAG, tasks, runner)
Week  5-8  : Phase 2 — Triggers & Scheduler
Week  9-12 : Phase 3 — LLM Tasks & VED-MODELS Integration
Week 13-16 : Phase 4 — Secrets Vault & Dashboard
Week 17-20 : Phase 5 — Polish & Release v1.0.0
```

### Key Review Gates

| Gate | Criteria |
|------|----------|
| G1 (end Phase 1) | `claw run workflow.yaml` executes a 3-task DAG correctly |
| G2 (end Phase 2) | Drop a CSV → pipeline auto-starts within 2 seconds |
| G3 (end Phase 3) | End-to-end: new data → PDF report with LLM explanations, zero manual steps |
| G4 (end Phase 4) | Vault stores/retrieves secrets; dashboard shows live run history |
| G5 (end Phase 5) | `pip install bharatclaw` works; all CI checks green; v1.0.0 tagged |

---

## 8. Contributing

1. **Fork** this repository on BharatHub.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Follow the coding style in `CONTRIBUTING.md`.
4. Open a Pull Request — all PRs require 1 reviewer approval.
5. Ensure all CI checks pass before requesting a merge.

Community discussions happen in the **Issues** tab. Tag your issue with one of:
`core`, `triggers`, `llm`, `vault`, `dashboard`, `docs`, or `question`.

---

> Built with ❤️ in India 🇮🇳 — *Jai Hind · जय हिन्द*
