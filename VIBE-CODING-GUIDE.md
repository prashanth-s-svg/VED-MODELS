# CLAW — Vibe Coding Guide 🎵
## Build Without Any Coding Experience

> **You don't need to know how to code.**
> Vibe coding means you *describe* what you want in plain English and an AI
> assistant writes the code for you.  You just copy, paste, run — and keep
> chatting with the AI until it works perfectly.
>
> This guide takes you from **absolute zero** to a working CLAW pipeline
> using nothing but free AI tools and copy-paste prompts.

---

## Table of Contents

1. [What Is Vibe Coding?](#1-what-is-vibe-coding)
2. [Pick Your AI Coding Tool (Free)](#2-pick-your-ai-coding-tool-free)
3. [Set Up in 5 Minutes — No Install Needed (Replit)](#3-set-up-in-5-minutes--no-install-needed-replit)
4. [Your First Prompt — Hello CLAW](#4-your-first-prompt--hello-claw)
5. [Prompt: Build the Task Class](#5-prompt-build-the-task-class)
6. [Prompt: Build the DAG Engine](#6-prompt-build-the-dag-engine)
7. [Prompt: Build the Pipeline Runner](#7-prompt-build-the-pipeline-runner)
8. [Prompt: Build the CLI](#8-prompt-build-the-cli)
9. [Prompt: Add a File Watcher (Hands-Free Trigger)](#9-prompt-add-a-file-watcher-hands-free-trigger)
10. [Prompt: Add an LLM Explain Step](#10-prompt-add-an-llm-explain-step)
11. [Prompt: Build the VED-MODELS Pipeline](#11-prompt-build-the-ved-models-pipeline)
12. [When Something Breaks — Ask the AI](#12-when-something-breaks--ask-the-ai)
13. [Vibe Coding Tips & Tricks](#13-vibe-coding-tips--tricks)
14. [Glossary (Plain English)](#14-glossary-plain-english)

---

## 1. What Is Vibe Coding?

Vibe coding is a style of building software where **you describe what you
want** and an AI assistant (like ChatGPT or Cursor) writes the actual code.

```
You type:  "Make a Python function that reads a CSV file and prints
            the first 5 rows"

AI writes: import pandas as pd
           def preview(path):
               df = pd.read_csv(path)
               print(df.head())
```

You never need to memorise syntax, understand algorithms, or take a
programming course.  Your job is just to:

1. **Describe** what you want clearly.
2. **Copy** the code the AI gives you.
3. **Paste** it into a file or online editor.
4. **Run** it and see if it works.
5. If it doesn't work → **paste the error back to the AI** and say
   *"fix this error"*.  Repeat until it works.

That's the entire vibe coding loop. ♻️

---

## 2. Pick Your AI Coding Tool (Free)

You only need **one** of these.  All have a free plan:

| Tool | Why use it | Link |
|------|-----------|------|
| **ChatGPT** (GPT-4o) | Best for explaining + writing code from scratch | chat.openai.com |
| **Cursor** | AI code editor — feels like coding yourself, no terminal needed | cursor.sh |
| **GitHub Copilot** | Works inside VS Code, autocompletes as you type | github.com/features/copilot |
| **Replit** | Run code in the browser — zero installation required | replit.com |
| **Google Gemini** | Free, great for long prompts and explanations | gemini.google.com |

### Recommended beginner path

```
Week 1: Use ChatGPT to generate code → paste into Replit to run it
Week 2: Move to Cursor — it edits files for you automatically
Week 3: Add GitHub Copilot to VS Code for day-to-day work
```

---

## 3. Set Up in 5 Minutes — No Install Needed (Replit)

Replit runs Python in your browser.  Nothing to install.

1. Go to **replit.com** → click **Sign Up** (free with Google account).
2. Click **+ Create Repl**.
3. Choose **Python** as the language.
4. Name it `bharatclaw`.
5. Click **Create Repl**.

You now have a working Python environment in your browser. ✅

> **Prefer local setup?** If you want to run code on your own computer,
> follow the environment setup in the
> [Build From Scratch Guide](./CLAW-BUILD-FROM-SCRATCH.md) — but you
> still use the prompts below to generate the code!

---

## 4. Your First Prompt — Hello CLAW

Open ChatGPT (or your chosen AI).  Type exactly:

---
**Prompt to copy:**
```
I am building a Python project called CLAW (Continuous Local Automated 
Workflows). It is a hands-free automation framework that runs AI/ML 
pipelines without any manual steps.

Create a Python file called hello_claw.py that:
1. Prints "CLAW is ready 🤖"
2. Prints today's date and time
3. Prints "Pipeline starting in 3... 2... 1..."

Make it simple — no extra libraries needed, just the Python standard library.
```
---

Paste the code into Replit's `main.py` file, then click the green **Run**
button.  You should see:

```
CLAW is ready 🤖
2026-03-21 09:15:02
Pipeline starting in 3... 2... 1...
```

🎉 **You just ran your first piece of CLAW code without writing a single line yourself!**

---

## 5. Prompt: Build the Task Class

A **Task** is one step in a pipeline (e.g., "clean data" or "train model").

---
**Prompt to copy:**
```
I am building a Python automation framework called CLAW.

Create a file called task.py that defines a Task class with:
- A name (string)
- A function to run (callable)
- A status that starts as "pending" and changes to "running", "success",
  or "failed"
- A retries count (default 0) — if the task fails, retry that many times
  before giving up
- An on_failure callback (optional) — a function called if the task fails
  after all retries
- A run() method that:
    - Sets status to "running"
    - Calls the function
    - Sets status to "success" on success
    - On exception: retries if retries > 0, else sets status to "failed"
      and calls on_failure if provided
    - Prints a clear message at every step so I can see what is happening

Use only the Python standard library (no extra pip installs needed).
Add docstrings and comments explaining every part in plain English.
```
---

When the AI gives you the code, create a new file `task.py` in Replit and
paste it in.  Then ask the AI:

```
Now write a short test script test_task.py that:
1. Creates a Task that just prints "Hello from task!"
2. Creates a Task that raises an Exception and has retries=2
3. Runs both and prints the status after each run
```

Run `test_task.py` and confirm it works before moving on.

---

## 6. Prompt: Build the DAG Engine

A **DAG** (Directed Acyclic Graph) is just a fancy name for a list of tasks
where each task can say "I need task X to finish before I start".

---
**Prompt to copy:**
```
I am building CLAW, a Python automation framework.

I already have a Task class in task.py (it has name, func, depends_on list,
and a run() method).

Now create a file called dag.py with a DAG class that:
- Stores a dictionary of tasks (name → Task object)
- Has an add(task) method to add tasks
- Has a topological_order() method that returns the tasks in the correct
  execution order (tasks that others depend on come first)
- Raises a clear error if there is a dependency cycle
- Raises a clear error if a task depends on a name that does not exist

Use only the Python standard library. Add plain-English comments throughout.

Then write 3 lines that show how to use it:
  dag = DAG("my-pipeline")
  dag.add(task_a)
  dag.add(task_b)   # task_b depends on task_a
  order = dag.topological_order()
```
---

Paste `dag.py` into Replit and run the example lines in the Replit Shell tab
to confirm the order is correct.

---

## 7. Prompt: Build the Pipeline Runner

The runner takes the DAG and actually runs all the tasks in the right order,
running independent tasks at the same time (in parallel).

---
**Prompt to copy:**
```
I am building CLAW, a Python automation framework.

I have:
- task.py  — Task class with name, func, depends_on, run()
- dag.py   — DAG class with add(task) and topological_order()

Create runner.py with a PipelineRunner class that:
- Takes a DAG and a max_workers number (default 4)
- Runs tasks in topological order
- Tasks with no dependencies between them run at the same time
  (use concurrent.futures.ThreadPoolExecutor)
- If any task fails, print a clear error and stop the pipeline
- Returns a dictionary of {task_name: result} when done
- Prints a clear progress message before and after each task

Use only the Python standard library (concurrent.futures is built-in).
Add plain-English comments for every part.
```
---

---

## 8. Prompt: Build the CLI

The CLI (Command Line Interface) lets you type `claw run mypipeline.yaml`
in a terminal to start a pipeline.

---
**Prompt to copy:**
```
I am building CLAW, a Python automation framework.

I have task.py, dag.py, and runner.py already working.

Now create cli.py that:
1. Reads a workflow YAML file path from the command line argument
   (e.g.  python cli.py run workflows/my_pipeline.yaml)
2. Loads the YAML file (use PyYAML — pip install pyyaml)
3. Creates Task objects from the YAML (each task has a "type: shell",
   a "command" string, and a "depends_on" list)
4. Builds a DAG and runs it with PipelineRunner
5. Prints "✅ Pipeline finished!" on success or "❌ Pipeline failed!" on error

Also create an example YAML file workflows/hello_pipeline.yaml with 3 tasks:
- greet: prints "Hello from CLAW!"
- count: prints numbers 1 to 5
- done: prints "All done!" (depends on greet and count)

All tasks should be shell commands using the echo command.
Add clear comments explaining every part.
```
---

Run it:
```
python cli.py run workflows/hello_pipeline.yaml
```

You should see CLAW execute 3 tasks in order. 🎉

---

## 9. Prompt: Add a File Watcher (Hands-Free Trigger)

This is the magic feature: drop a file into a folder → pipeline starts
automatically. No button press. Truly hands-free.

---
**Prompt to copy:**
```
I am building CLAW, a Python automation framework that runs pipelines 
hands-free.

Add a file watcher feature in watch_trigger.py that:
1. Watches a folder (e.g. "data/") for new files matching a pattern
   (e.g. "*.csv")
2. When a new matching file appears, automatically runs a workflow YAML
   file using the existing cli.py logic
3. Keeps watching forever until the user presses Ctrl+C
4. Prints a clear message when it detects a new file and when the pipeline
   starts

Use the watchdog library (pip install watchdog).
Add a usage example at the bottom showing how to call it:
    python watch_trigger.py data/ workflows/hello_pipeline.yaml --pattern *.csv

Add plain-English comments for every part.
```
---

Test it:
```bash
# Terminal 1
python watch_trigger.py data/ workflows/hello_pipeline.yaml

# Terminal 2 — drop a file
mkdir data
echo "test" > data/students.csv
```

Watch terminal 1 fire the pipeline automatically! 🚀

---

## 10. Prompt: Add an LLM Explain Step

Make CLAW intelligent: after training a model, have a local AI summarise
the results in plain English — with zero API costs.

---
**Prompt to copy:**
```
I am building CLAW, a Python automation framework.

Add a feature in llm_step.py that:
1. Loads a small language model from HuggingFace locally
   (use model "microsoft/phi-2" — it is free and runs on CPU)
2. Takes a prompt string as input
3. Returns the AI's response as a string
4. Has a simple run_llm(prompt) function I can call from a pipeline task

Then show me how to add this as a task in a YAML workflow:
  explain:
    type: python
    call: llm_step.run_llm
    args: ["Summarise: student pass rate improved by 12% after new curriculum"]
    depends_on: [evaluate]

Use the transformers library (pip install transformers torch).
Add plain-English comments for every part.
Make it print progress so I can see it is working (model loading can be slow).
```
---

> ⚠️ **Note on speed:** The first run downloads the model (~1.7 GB) and
> takes 5–10 minutes. After that it is cached locally and runs in seconds.
> This is normal — you are running a real AI model for free on your own
> computer!

---

## 11. Prompt: Build the VED-MODELS Pipeline

Now wire everything together into the full student-performance prediction
pipeline that is the heart of this project.

---
**Prompt to copy:**
```
I am building CLAW for the VED-MODELS project — a machine learning pipeline 
that predicts whether students will pass or fail based on study hours.

I already have:
- task.py, dag.py, runner.py, cli.py (CLAW pipeline engine)
- ved_numpy.py (existing file that trains a logistic regression model 
  in PyTorch — it reads X (study hours) and y (pass/fail labels) and
  trains for 1000 epochs)

Create a complete workflow file workflows/ved_models_pipeline.yaml with
these tasks in order:

1. ingest   — shell: echo "Loading student data from data/ folder"
2. clean    — shell: echo "Validating and cleaning student records"
3. train    — shell: python ved_numpy.py
4. evaluate — shell: echo "Model trained. Checking accuracy..."
5. report   — shell: echo "Results saved to output/report.txt"

Each task should depend on the previous one (ingest → clean → train →
evaluate → report).

Also create a run_ved_pipeline.py helper script that:
- Runs this pipeline with PipelineRunner
- Prints a banner at the start: "🎓 VED-MODELS Pipeline Starting..."
- Prints the result of each task
- Prints "🏁 VED-MODELS Pipeline Complete!" at the end

Add plain-English comments for every line.
```
---

Run it:
```
python run_ved_pipeline.py
```

You should see the full end-to-end student prediction pipeline run! 🎓

---

## 12. When Something Breaks — Ask the AI

You **will** get errors.  That is normal — even experienced developers get
errors every day.  Here is your copy-paste error-fixing loop:

### Template: Fix an error

```
I am getting this error when I run [filename]:

[PASTE THE FULL ERROR MESSAGE HERE]

Here is my current code:

[PASTE THE FULL FILE CONTENT HERE]

Please fix the error and explain in one sentence what caused it.
```

### Template: "I don't understand what this code does"

```
Explain this Python code to me like I am 12 years old. 
Use a real-world analogy. Avoid technical jargon.

[PASTE THE CODE HERE]
```

### Template: "I want to change how this works"

```
I have this Python code:

[PASTE THE CODE]

I want to change it so that [DESCRIBE WHAT YOU WANT IN PLAIN ENGLISH].

Show me the updated code with the changes highlighted.
```

### Template: "Make this code simpler"

```
This code works but it feels complicated. 
Simplify it — I am a beginner, shorter and more readable is better.

[PASTE THE CODE]
```

---

## 13. Vibe Coding Tips & Tricks

### ✅ Be specific in your prompts

| Vague (bad) | Specific (good) |
|-------------|-----------------|
| "Make a function" | "Make a Python function called `clean_data` that takes a CSV file path, removes rows with missing values, and returns a pandas DataFrame" |
| "Fix this" | "Fix this Python error: `FileNotFoundError: [Errno 2] No such file or directory: 'data.csv'`. My file is in the `data/` subfolder." |
| "Add features" | "Add error handling so that if the CSV file does not exist, print a friendly message and exit gracefully instead of crashing" |

### ✅ Always ask for comments

Add this to every prompt:
> "Add a plain-English comment above every function and every important line
>  of code explaining what it does."

### ✅ Ask for a test first

```
Before writing the code, write a simple test I can run to verify the 
code is working. Use only print statements — no test framework needed.
```

### ✅ Use the "explain like I'm 5" trick

If the AI writes code you don't understand:
```
Explain what this line does in plain English:
[PASTE SINGLE LINE]
Give me a real-world analogy, like comparing it to cooking or driving.
```

### ✅ Build one piece at a time

Don't try to build everything in one prompt.  Do it step by step — just
like this guide.  Smaller prompts → better code.

### ✅ Save every working version

Before making a big change, tell the AI:
```
I have this working version. Save it as a comment block at the top of the
file so I can restore it if the new version breaks.
```

### ✅ Replit "Fix" button

If you are using Replit and the code crashes, Replit shows a
**"Fix with AI"** button directly on the error.  Click it — it
automatically sends the error to an AI and patches the code.

---

## 14. Glossary (Plain English)

| Term | What it really means |
|------|---------------------|
| **Python** | A plain-English-like programming language. Reading it feels almost like reading instructions. |
| **Function** | A reusable recipe. You name it, then call it whenever you need it. |
| **Class** | A blueprint. Like a form template — you fill it in to make real objects. |
| **Library / Package** | Pre-written code someone else made that you can use for free. `pip install <name>` adds one. |
| **pip** | Python's app store. Type `pip install X` to add library X. |
| **Terminal / Shell** | The black window where you type commands. Like a text chat with your computer. |
| **YAML** | A simple text format for config files. Uses dashes and indentation — like a bullet-point list. |
| **DAG** | Directed Acyclic Graph — a task list where each task can say "run me after X". |
| **Pipeline** | A sequence of automated steps, like an assembly line. |
| **CSV** | A spreadsheet saved as plain text. Each row is a line, columns separated by commas. |
| **Model** | A trained AI that makes predictions. Like a very experienced advisor distilled into maths. |
| **Epoch** | One full pass through all training data. More epochs = more learning (up to a point). |
| **LLM** | Large Language Model — an AI that reads and writes human text (like GPT-4). |
| **HuggingFace** | A free website/library where thousands of AI models are shared. |
| **Fernet** | An encryption method. Like a padlock where you need the right key to open it. |
| **Hands-free** | The pipeline runs by itself without you clicking anything. |
| **Vibe coding** | Describing what you want in plain English so an AI writes the code for you. |
| **Replit** | A website where you can write and run Python code without installing anything. |
| **Cursor** | An AI code editor — you describe changes and the AI edits the files for you. |

---

## You Are Ready 🚀

Here is your complete beginner journey in one picture:

```
Day 1  → Hello CLAW   (prompt #4)  ✅ your first running code
Day 2  → Task class   (prompt #5)  ✅ understand building blocks
Day 3  → DAG + Runner (prompts #6-7) ✅ tasks in the right order
Day 4  → CLI          (prompt #8)  ✅ run from terminal
Day 5  → File watcher (prompt #9)  ✅ hands-free trigger
Day 6  → LLM step     (prompt #10) ✅ real AI in your pipeline
Day 7  → VED pipeline (prompt #11) ✅ full end-to-end ML pipeline
```

You built a professional-grade automation framework **without ever taking
a coding course**, just by chatting with AI.  That is vibe coding. 🎵

---

### Keep Going

| What next | Guide to read |
|-----------|--------------|
| Want to understand the code you built | [Build From Scratch Guide](./CLAW-BUILD-FROM-SCRATCH.md) |
| See the full project roadmap | [CLAW Roadmap](./CLAW-ROADMAP.md) |
| Run a pre-trained model offline | [Offline Models Guide](./OFFLINE-MODELS-GUIDE.md) |
| Use AirLLM for huge models on small RAM | [AirLLM Guide](./AIRLLM-GUIDE.md) |

---

> Built with ❤️ in India 🇮🇳 — *Jai Hind · जय हिन्द*
>
> *No coding experience needed. Just vibes and curiosity.* 🎵
