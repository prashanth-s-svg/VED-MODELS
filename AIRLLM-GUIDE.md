# Running Big Models with AirLLM 🚀

> **Question:** *"How to run big models in AirLLM? And is it free?"*
>
> **Short answer:** AirLLM lets you run **70 B+ models on a single GPU with as
> little as 4 GB of VRAM** by streaming one transformer layer at a time from
> disk — no multi-GPU rig required, no aggressive quantisation, no cloud API.
> **AirLLM itself is free and open-source (MIT).** Most supported models are
> also free; the only real costs are your hardware and electricity.
> → Jump to [Licensing & Cost](#15-licensing--cost--is-it-free) for the full breakdown.

---

## Table of Contents

1. [What is AirLLM?](#1-what-is-airllm)
2. [How it works — Layer-by-Layer Inference](#2-how-it-works--layer-by-layer-inference)
3. [Supported Models](#3-supported-models)
4. [Hardware Requirements](#4-hardware-requirements)
5. [Installation](#5-installation)
6. [Quick Start — 70B on 4 GB VRAM](#6-quick-start--70b-on-4-gb-vram)
7. [Step-by-Step Guide for Every Model Size](#7-step-by-step-guide-for-every-model-size)
   - 7.1 Running Llama 3 / 3.1 70B
   - 7.2 Running Mistral / Mixtral
   - 7.3 Running Qwen2.5 72B
   - 7.4 Running DeepSeek 67B
   - 7.5 Running 4-bit Compressed Models (even faster)
8. [Configuration Reference](#8-configuration-reference)
9. [Streaming Output](#9-streaming-output)
10. [Chat / Multi-turn Conversations](#10-chat--multi-turn-conversations)
11. [RAG Integration](#11-rag-integration)
12. [Performance Tips & Benchmarks](#12-performance-tips--benchmarks)
13. [Troubleshooting](#13-troubleshooting)
14. [VED-MODELS Integration Example](#14-ved-models-integration-example)
15. [Licensing & Cost — Is it Free?](#15-licensing--cost--is-it-free)

---

## 1. What is AirLLM?

[AirLLM](https://github.com/lyogavin/airllm) is a Python library that makes it
possible to run **massive language models on a single consumer GPU** (or even
CPU) by using **split computing** — only one transformer layer is kept in VRAM
at any point; the rest live on disk and are paged in as needed.

| Feature | AirLLM | llama.cpp (q4) | vLLM |
|---------|--------|----------------|------|
| Min VRAM for 70B | **4 GB** | ~6 GB | ~48 GB |
| Quantisation required | No (FP16/BF16 by default) | Yes (q4) | No |
| GPU needed | Optional (CPU works) | Optional | Required |
| Throughput | Low–Medium | Medium | High |
| HuggingFace-compatible | ✅ | Limited | ✅ |
| Streaming tokens | ✅ | ✅ | ✅ |
| Best use-case | Research, offline, low-VRAM | Interactive chat | Production API |

**When to choose AirLLM:**
- You want full-precision (BF16) quality without quantisation loss
- You only have a consumer GPU (4–8 GB VRAM) but need a 70B model
- You want to prototype with large models on a laptop or workstation
- You do not need high throughput — one or few requests at a time is fine

---

## 2. How it works — Layer-by-Layer Inference

A 70B parameter model has ~80 transformer layers. In a normal inference run all
layers are loaded into VRAM simultaneously (~140 GB in FP16). AirLLM changes
this:

```
Disk (model shards)
│
│  load layer 0  ──▶ VRAM  ──▶ forward pass  ──▶ output activation
│                     (evict layer 0)
│  load layer 1  ──▶ VRAM  ──▶ forward pass  ──▶ output activation
│  ...
│  load layer N  ──▶ VRAM  ──▶ forward pass  ──▶ final logits ──▶ token
```

- Only **one layer + activations** fit in VRAM at a time (~200 MB for a 70B)
- Disk → VRAM bandwidth is the bottleneck (not VRAM capacity)
- An SSD (NVMe preferred) dramatically speeds things up
- Each token generation takes ~5–30 s on a consumer GPU, depending on drive speed

---

## 3. Supported Models

AirLLM supports any HuggingFace model that uses a **decoder-only transformer
architecture** (GPT-style). Tested families:

| Model family | Example | Notes |
|---|---|---|
| **Llama 2 / 3 / 3.1 / 3.3** | `meta-llama/Llama-3.1-70B-Instruct` | Best tested |
| **Mistral / Mixtral** | `mistralai/Mixtral-8x7B-Instruct-v0.1` | MoE supported |
| **Qwen 2 / 2.5** | `Qwen/Qwen2.5-72B-Instruct` | Great for code |
| **DeepSeek** | `deepseek-ai/deepseek-llm-67b-chat` | Works well |
| **Falcon** | `tiiuae/falcon-40b-instruct` | Use `AirLLMLlama` |
| **Gemma 2** | `google/gemma-2-27b-it` | Newer API needed |
| **Phi-3 / Phi-4** | `microsoft/phi-4` | Fast even without AirLLM |

---

## 4. Hardware Requirements

| Setup | VRAM / RAM | Disk | Expected speed |
|-------|-----------|------|---------------|
| **Minimum (CPU only)** | 16 GB RAM | 200 GB HDD | ~5 min/token (70B) |
| **Low-end GPU** | 4 GB VRAM + 16 GB RAM | 200 GB SSD | ~30 s/token (70B) |
| **Mid-range GPU** | 8 GB VRAM + 32 GB RAM | 200 GB NVMe | ~10 s/token (70B) |
| **Good GPU** | 16 GB VRAM + 32 GB RAM | 200 GB NVMe | ~3 s/token (70B) |
| **High-end GPU** | 24 GB VRAM + 64 GB RAM | 200 GB NVMe | ~1–2 s/token (70B) |

> 💡 **Indian hardware tip:** An RTX 3060 (12 GB) + 32 GB DDR4 + 500 GB NVMe SSD
> is a great, affordable setup for running 70B models with AirLLM. PCIe Gen 4
> NVMe makes a noticeable difference.

---

## 5. Installation

```bash
# Python 3.9+, PyTorch ≥ 2.1 recommended
pip install airllm

# For GPU support (CUDA 11.8 or 12.x)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

# Optional but recommended
pip install transformers accelerate huggingface_hub bitsandbytes
```

Verify installation:

```python
import airllm
print(airllm.__version__)
```

---

## 6. Quick Start — 70B on 4 GB VRAM

This minimal example runs Llama 3.1 70B Instruct on a 4 GB GPU:

```python
from airllm import AirLLMLlama

# 1. Create model — first run downloads and splits shards to disk (~140 GB)
model = AirLLMLlama.from_pretrained(
    "meta-llama/Llama-3.1-70B-Instruct",
    # Optional: specify a local cache directory (default: ~/.cache/huggingface)
    # cache_dir="/data/models"
)

# 2. Load the tokenizer
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.1-70B-Instruct")

# 3. Prepare input
prompt = "Explain the concept of backpropagation in simple terms."
inputs = tokenizer(
    prompt,
    return_tensors="pt",
    return_attention_mask=False,
)

# 4. Generate
generation_output = model.generate(
    **inputs,
    max_new_tokens=200,
    use_cache=True,
    return_dict_in_generate=True,
)

# 5. Decode and print
output_text = tokenizer.decode(generation_output.sequences[0])
print(output_text)
```

**First run note:** AirLLM splits the HuggingFace model into per-layer shards
and saves them to disk. This takes 5–15 minutes for a 70B model but only
happens **once**. Subsequent runs load from the cached shards immediately.

---

## 7. Step-by-Step Guide for Every Model Size

### 7.1 Running Llama 3 / 3.1 70B

```python
from airllm import AirLLMLlama
from transformers import AutoTokenizer

MODEL_ID = "meta-llama/Llama-3.1-70B-Instruct"

model = AirLLMLlama.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

# Apply the official chat template
messages = [
    {"role": "system", "content": "You are a helpful AI assistant."},
    {"role": "user",   "content": "What is the capital of India?"},
]
prompt = tokenizer.apply_chat_template(
    messages, tokenize=False, add_generation_prompt=True
)

inputs = tokenizer(prompt, return_tensors="pt", return_attention_mask=False)

output = model.generate(
    **inputs,
    max_new_tokens=256,
    temperature=0.7,
    top_p=0.9,
    use_cache=True,
    return_dict_in_generate=True,
)

# Print only the newly generated tokens
new_tokens = output.sequences[0, inputs["input_ids"].shape[1]:]
print(tokenizer.decode(new_tokens, skip_special_tokens=True))
```

---

### 7.2 Running Mistral / Mixtral

Mixtral 8×7B is a Mixture-of-Experts model (~47 B total params, ~13 B active).
AirLLM handles it with the same API:

```python
from airllm import AirLLMMistral
from transformers import AutoTokenizer

MODEL_ID = "mistralai/Mixtral-8x7B-Instruct-v0.1"

model = AirLLMMistral.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

prompt = "[INST] Summarise the Indian Constitution in 5 bullet points. [/INST]"
inputs = tokenizer(prompt, return_tensors="pt", return_attention_mask=False)

output = model.generate(
    **inputs,
    max_new_tokens=512,
    use_cache=True,
    return_dict_in_generate=True,
)
print(tokenizer.decode(output.sequences[0], skip_special_tokens=True))
```

---

### 7.3 Running Qwen 2.5 72B (best for code)

```python
from airllm import AutoModel
from transformers import AutoTokenizer

MODEL_ID = "Qwen/Qwen2.5-72B-Instruct"

model = AutoModel.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

messages = [{"role": "user", "content": "Write a Python merge sort implementation."}]
text = tokenizer.apply_chat_template(
    messages, tokenize=False, add_generation_prompt=True
)
inputs = tokenizer(text, return_tensors="pt", return_attention_mask=False)

output = model.generate(
    **inputs,
    max_new_tokens=1024,
    temperature=0.1,
    use_cache=True,
    return_dict_in_generate=True,
)
new_tokens = output.sequences[0, inputs["input_ids"].shape[1]:]
print(tokenizer.decode(new_tokens, skip_special_tokens=True))
```

---

### 7.4 Running DeepSeek 67B

```python
from airllm import AutoModel
from transformers import AutoTokenizer

MODEL_ID = "deepseek-ai/deepseek-llm-67b-chat"

model = AutoModel.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

prompt = "User: How do I implement a neural network from scratch in NumPy?\nAssistant:"
inputs = tokenizer(prompt, return_tensors="pt", return_attention_mask=False)

output = model.generate(
    **inputs,
    max_new_tokens=512,
    use_cache=True,
    return_dict_in_generate=True,
)
print(tokenizer.decode(output.sequences[0], skip_special_tokens=True))
```

---

### 7.5 Running 4-bit Compressed Models (even faster)

Pass `compression="4bit"` to halve disk I/O and speed up token generation
significantly at a small quality cost:

```python
from airllm import AirLLMLlama
from transformers import AutoTokenizer

model = AirLLMLlama.from_pretrained(
    "meta-llama/Llama-3.1-70B-Instruct",
    compression="4bit",   # quantise each layer on-the-fly as it's loaded
)
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.1-70B-Instruct")

inputs = tokenizer(
    "Tell me about ISRO's achievements.",
    return_tensors="pt",
    return_attention_mask=False,
)
output = model.generate(
    **inputs,
    max_new_tokens=300,
    use_cache=True,
    return_dict_in_generate=True,
)
print(tokenizer.decode(output.sequences[0], skip_special_tokens=True))
```

| Mode | Disk per layer | Speed | Quality loss |
|------|---------------|-------|-------------|
| Default (BF16) | ~200 MB | Baseline | None |
| `compression="4bit"` | ~50 MB | **~4× faster** | Minimal |
| `compression="2bit"` | ~25 MB | ~8× faster | Moderate |

---

## 8. Configuration Reference

```python
model = AirLLMLlama.from_pretrained(
    model_name_or_path,        # HuggingFace model ID or local path
    cache_dir=None,            # Override cache directory (default: ~/.cache/huggingface)
    compression=None,          # None | "4bit" | "2bit"
    profiling_mode=False,      # Print per-layer timing stats
    delete_original=False,     # Delete original HF weights after splitting (saves disk)
    hf_token=None,             # HuggingFace access token (for gated models like Llama)
)
```

### Setting your HuggingFace token (for gated models like Llama 3)

```bash
# Method 1 — environment variable (recommended)
export HF_TOKEN="hf_your_token_here"

# Method 2 — huggingface-cli
huggingface-cli login

# Method 3 — in code
from huggingface_hub import login
login(token="hf_your_token_here")
```

Then request access at https://huggingface.co/meta-llama/Llama-3.1-70B-Instruct.

---

## 9. Streaming Output

AirLLM supports HuggingFace `TextIteratorStreamer` for token-by-token streaming:

```python
import threading
from airllm import AirLLMLlama
from transformers import AutoTokenizer, TextIteratorStreamer

MODEL_ID = "meta-llama/Llama-3.1-70B-Instruct"
model = AirLLMLlama.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

prompt = "Explain quantum computing in one paragraph."
inputs = tokenizer(prompt, return_tensors="pt", return_attention_mask=False)

streamer = TextIteratorStreamer(tokenizer, skip_special_tokens=True)

# Run generation in a background thread
thread = threading.Thread(
    target=model.generate,
    kwargs={
        **inputs,
        "max_new_tokens": 200,
        "streamer": streamer,
        "use_cache": True,
    },
)
thread.start()

# Print tokens as they arrive
for token in streamer:
    print(token, end="", flush=True)

thread.join()
print()  # newline at end
```

---

## 10. Chat / Multi-turn Conversations

Maintain a conversation history and feed the full context each turn:

```python
from airllm import AirLLMLlama
from transformers import AutoTokenizer

MODEL_ID = "meta-llama/Llama-3.1-70B-Instruct"
model = AirLLMLlama.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

conversation = [
    {"role": "system", "content": "You are a helpful AI assistant for Indian students."},
]

def chat(user_message: str) -> str:
    conversation.append({"role": "user", "content": user_message})

    prompt = tokenizer.apply_chat_template(
        conversation, tokenize=False, add_generation_prompt=True
    )
    inputs = tokenizer(prompt, return_tensors="pt", return_attention_mask=False)

    output = model.generate(
        **inputs,
        max_new_tokens=512,
        temperature=0.7,
        use_cache=True,
        return_dict_in_generate=True,
    )
    new_tokens = output.sequences[0, inputs["input_ids"].shape[1]:]
    reply = tokenizer.decode(new_tokens, skip_special_tokens=True)
    conversation.append({"role": "assistant", "content": reply})
    return reply

print(chat("What is the importance of mathematics in engineering?"))
print(chat("Give me 3 tips to study it effectively."))
```

> ⚠️ **Memory tip:** Each turn adds more tokens to the context. For very long
> conversations, trim old messages or use a sliding window to stay within the
> model's max context length (typically 4 K–128 K tokens).

---

## 11. RAG Integration

AirLLM works as a drop-in HuggingFace model in any RAG pipeline
(e.g., LangChain, LlamaIndex):

```python
from airllm import AirLLMLlama
from transformers import AutoTokenizer, pipeline
from langchain_community.llms import HuggingFacePipeline
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings

# 1. Set up AirLLM as a HuggingFace pipeline
MODEL_ID = "meta-llama/Llama-3.1-70B-Instruct"
airllm_model = AirLLMLlama.from_pretrained(MODEL_ID)
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

pipe = pipeline(
    "text-generation",
    model=airllm_model,
    tokenizer=tokenizer,
    max_new_tokens=512,
)
llm = HuggingFacePipeline(pipeline=pipe)

# 2. Create a vector store from your documents
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
texts = [
    "India became independent on 15 August 1947.",
    "The Indian Space Research Organisation (ISRO) was founded in 1969.",
    "India has the world's largest democracy with over 900 million voters.",
]
vectorstore = FAISS.from_texts(texts, embeddings)

# 3. Build and use the RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 2}),
)
result = qa_chain.invoke({"query": "When was ISRO founded?"})
print(result["result"])
```

---

## 12. Performance Tips & Benchmarks

### Tips to maximise speed

| Tip | Impact |
|-----|--------|
| Use NVMe SSD (PCIe Gen 4) instead of SATA SSD | **2–3×** faster |
| Use `compression="4bit"` | **~4×** faster, minimal quality loss |
| Increase `max_new_tokens` in one call (batch generation) | Better GPU utilisation |
| Pre-split the model (`model.save_split_model()`) on a fast machine | Save resplit time |
| Keep model shards on SSD, not HDD or USB | Night-and-day difference |
| Use a GPU even at 4 GB — CUDA is still much faster than CPU | **5–10×** faster |

### Benchmark: Llama 3.1 70B, 200 new tokens

| Hardware | Compression | Time / token | Total (200 tokens) |
|----------|------------|-------------|--------------------|
| RTX 3060 12 GB + NVMe | None (BF16) | ~8 s | ~27 min |
| RTX 3060 12 GB + NVMe | 4-bit | ~2 s | ~7 min |
| RTX 4090 24 GB + NVMe | None (BF16) | ~3 s | ~10 min |
| RTX 4090 24 GB + NVMe | 4-bit | ~0.8 s | ~3 min |
| CPU only (i7 + NVMe) | 4-bit | ~60 s | ~3.5 hours |

> AirLLM is **not** designed for interactive chat throughput — it is ideal for
> **batch tasks**: document summarisation, code review, data extraction, and
> research experimentation where latency is acceptable.

---

## 13. Troubleshooting

### `CUDA out of memory`

```python
# Reduce the number of layers loaded at once (default = 1, rarely needs change)
model = AirLLMLlama.from_pretrained(
    MODEL_ID,
    compression="4bit",  # reduces each layer's memory footprint
)
# Also ensure no other process is holding VRAM
import torch; torch.cuda.empty_cache()
```

### `OSError: model shards not found`

The model has not been split yet, or the `cache_dir` is wrong.
Re-create the model object pointing to the correct directory:

```python
model = AirLLMLlama.from_pretrained(MODEL_ID, cache_dir="/your/correct/path")
```

### `ValueError: Unrecognized model type`

Use `AutoModel` instead of a class-specific loader:

```python
from airllm import AutoModel
model = AutoModel.from_pretrained(MODEL_ID)
```

### Slow on first run

Expected — AirLLM splits the model into per-layer shard files. A 70B model takes
5–15 minutes to split on an SSD. Subsequent runs load the pre-split shards and
start in seconds.

### `HfHubHTTPError: 403 Forbidden` (Llama gated model)

Apply for access at https://huggingface.co/meta-llama and set your token:

```bash
export HF_TOKEN="hf_xxxxxxxxxxxxxxxxxxxx"
```

---

## 14. VED-MODELS Integration Example

This example shows how to use AirLLM with the VED-MODELS repository to generate
natural-language explanations of student performance predictions:

```python
"""
ved_airllm_explain.py
─────────────────────
Use AirLLM to generate natural-language explanations for VED-MODELS predictions.
Requires: pip install airllm transformers torch
"""

import numpy as np
from airllm import AutoModel
from transformers import AutoTokenizer

# ── 1. VED-MODELS numeric prediction (simplified) ──────────────────────────
def predict_performance(attendance, marks_avg, assignments_done):
    """
    Simplified version of the ved_numpy.py model.
    Returns a performance score 0–100.
    """
    score = 0.4 * attendance + 0.4 * marks_avg + 0.2 * assignments_done
    return float(np.clip(score, 0, 100))

# ── 2. Load AirLLM ──────────────────────────────────────────────────────────
MODEL_ID = "meta-llama/Llama-3.1-70B-Instruct"
model     = AutoModel.from_pretrained(MODEL_ID, compression="4bit")
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID)

# ── 3. Build an explanation prompt ─────────────────────────────────────────
def explain_prediction(student_name, attendance, marks, assignments):
    score = predict_performance(attendance, marks, assignments)

    prompt_messages = [
        {
            "role": "system",
            "content": (
                "You are an educational counsellor assistant. "
                "Given a student's performance data and predicted score, "
                "provide a concise, empathetic explanation and 2–3 actionable tips."
            ),
        },
        {
            "role": "user",
            "content": (
                f"Student: {student_name}\n"
                f"Attendance: {attendance}%\n"
                f"Average marks: {marks}/100\n"
                f"Assignments completed: {assignments}%\n"
                f"Predicted performance score: {score:.1f}/100\n\n"
                "Please explain this result and suggest improvements."
            ),
        },
    ]

    text = tokenizer.apply_chat_template(
        prompt_messages, tokenize=False, add_generation_prompt=True
    )
    inputs = tokenizer(text, return_tensors="pt", return_attention_mask=False)

    output = model.generate(
        **inputs,
        max_new_tokens=350,
        temperature=0.7,
        use_cache=True,
        return_dict_in_generate=True,
    )
    new_tokens = output.sequences[0, inputs["input_ids"].shape[1]:]
    return tokenizer.decode(new_tokens, skip_special_tokens=True)


# ── 4. Run ──────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    explanation = explain_prediction(
        student_name="Arjun Sharma",
        attendance=72,
        marks=65,
        assignments=80,
    )
    print(explanation)
```

---

## TL;DR — Cheat Sheet

```bash
# Install
pip install airllm transformers accelerate

# Set HF token (needed for Llama)
export HF_TOKEN="hf_xxxx"

# Minimal Python script — 70B on 4 GB GPU
python - <<'EOF'
from airllm import AutoModel
from transformers import AutoTokenizer

model = AutoModel.from_pretrained(
    "meta-llama/Llama-3.1-70B-Instruct",
    compression="4bit"  # faster + less disk I/O
)
tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-3.1-70B-Instruct")

inputs = tokenizer(
    "Hello! Explain AI in one sentence.",
    return_tensors="pt",
    return_attention_mask=False,
)
out = model.generate(
    **inputs,
    max_new_tokens=100,
    use_cache=True,
    return_dict_in_generate=True,
)
print(tokenizer.decode(out.sequences[0], skip_special_tokens=True))
EOF
```

| Model size | Min VRAM | Recommended compression |
|-----------|---------|------------------------|
| 7–13 B | 4 GB | None (fast enough) |
| 30–40 B | 4 GB | 4-bit |
| 65–72 B | 4 GB | 4-bit |
| 100–180 B | 4–8 GB | 4-bit |

---

## 15. Licensing & Cost — Is it Free?

### ✅ AirLLM library — 100% free

| Item | License | Cost |
|------|---------|------|
| **AirLLM Python library** | MIT | Free forever |
| **Source code** | MIT (GitHub) | Free |
| **Commercial use** | Allowed under MIT | Free |

AirLLM is published at https://github.com/lyogavin/airllm under the **MIT
License** — the most permissive open-source license. You can use it in personal
projects, research, or commercial products at no cost.

---

### 🔓 Model licenses — mostly free, a few need sign-up

Each model you download has its own license. Here is a summary for every model
family mentioned in this guide:

| Model | License | Free? | Commercial use | Notes |
|-------|---------|-------|----------------|-------|
| **Llama 3 / 3.1 / 3.3** | Meta Llama 3 Community License | ✅ Free | ✅ Allowed (< 700M MAU) | Must accept license on HuggingFace; no re-training to compete with Meta products |
| **Mistral 7B / Mistral Large** | Apache 2.0 | ✅ Free | ✅ Fully open | No restrictions |
| **Mixtral 8×7B** | Apache 2.0 | ✅ Free | ✅ Fully open | No restrictions |
| **Qwen 2.5 (all sizes)** | Apache 2.0 | ✅ Free | ✅ Fully open | No restrictions |
| **DeepSeek 67B / V2** | MIT | ✅ Free | ✅ Fully open | No restrictions |
| **Phi-4 (Microsoft)** | MIT | ✅ Free | ✅ Fully open | No restrictions |
| **Gemma 2 (Google)** | Gemma Terms of Use | ✅ Free | ✅ Allowed | Must accept Google's terms on HuggingFace |
| **Falcon 40B** | Falcon License | ✅ Free | ✅ Allowed | Attribution required |
| **Command R+ (Cohere)** | CC-BY-NC 4.0 | ✅ Free | ❌ Non-commercial only | Not for commercial products |

> **Quick rule of thumb:**
> - Apache 2.0 or MIT → fully free, including commercial use, no sign-up needed
> - Meta Llama / Google Gemma → free but you must click "Accept" on HuggingFace
>   and set an `HF_TOKEN` (takes ~2 minutes, one-time)
> - CC-BY-NC → free for personal/research only, not for products you sell

---

### 💳 HuggingFace — free tier is enough

| HuggingFace feature | Free tier | Paid (Pro / Enterprise) |
|--------------------|-----------|------------------------|
| Download models | ✅ Free | Faster download |
| Access gated models (Llama, Gemma) | ✅ Free (accept license) | Same |
| Inference API | ✅ Limited free quota | Pay-per-token |
| Storage / Spaces | ✅ Free | More storage / GPU |

You **do not need a paid HuggingFace account** to use AirLLM. A free account
(email sign-up) is required only to access gated models like Llama 3 — and that
takes under 2 minutes.

---

### 🔌 The only real costs: hardware & electricity

Because AirLLM runs **entirely on your own machine** with no cloud API calls,
the only recurring costs are:

| Cost | Typical amount | Notes |
|------|---------------|-------|
| **Electricity** | ₹2–8 per hour of inference | RTX 3060 ≈ 170W; at ₹8/kWh |
| **One-time disk storage** | ₹1,500–4,000 for a 500 GB NVMe SSD | Stores the model shards |
| **GPU (optional)** | Already owned, or ₹20,000–80,000 | Consumer card is sufficient |
| **Cloud API** | ₹0 | None — everything is local |
| **Per-token fee** | ₹0 | None — models run on your hardware |
| **Subscription** | ₹0 | AirLLM has no subscription model |

**Compared to commercial APIs:**

| Service | Cost for ~1M tokens |
|---------|-------------------|
| OpenAI GPT-4o | ~$15–30 (~₹1,250–2,500) |
| Anthropic Claude 3.5 Sonnet | ~$15–75 (~₹1,250–6,250) |
| Google Gemini 1.5 Pro | ~$7–21 (~₹580–1,750) |
| **AirLLM (your GPU)** | **₹0 per token + electricity** |

For a developer running 10 sessions/day, AirLLM pays for itself within weeks
compared to any commercial API.

---

### 📋 Summary

> **Yes — AirLLM is free.**
>
> - **AirLLM library:** MIT, free for any use
> - **Most models:** Apache 2.0 or MIT, free for any use
> - **Llama 3 / Gemma 2:** Free — just accept the license on HuggingFace once
> - **No API fees, no subscriptions, no per-token billing**
> - **Only cost:** your electricity while the GPU is running

---

> **See also:**
> - [`OFFLINE-MODELS-GUIDE.md`](./OFFLINE-MODELS-GUIDE.md) — which model to choose
> - [AirLLM GitHub](https://github.com/lyogavin/airllm) — official repo & changelog
> - [HuggingFace Model Hub](https://huggingface.co/models) — browse models

---

*Built with ❤️ in India 🇮🇳 — contributions welcome via BharatHub*
