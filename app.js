/* BharatHub — Made in India GitHub-like Platform
   app.js — All interactive behaviour
*/

'use strict';

// ═══════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════

const REPOS = [
  {
    id: 'VED-MODELS',
    owner: 'prashanth_dev',
    name: 'VED-MODELS',
    desc: 'Neural network models for student performance prediction using PyTorch & NumPy. Trained on Indian education datasets.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 482,
    forks: 97,
    updated: '2 hours ago',
    tags: ['machine-learning', 'pytorch', 'education'],
    files: ['README.md', 'ved_numpy.py', 'requirements.txt', 'data/', 'models/']
  },
  {
    id: 'indiastack-sdk',
    owner: 'digital_bharat',
    name: 'indiastack-sdk',
    desc: 'Unified SDK for Aadhaar, UPI, DigiLocker and other IndiaStack APIs. Supports Python, Node.js and Go.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 1243,
    forks: 318,
    updated: '5 hours ago',
    tags: ['indiastack', 'fintech', 'open-api'],
    files: ['README.md', 'src/', 'docs/', 'tests/', 'setup.py']
  },
  {
    id: 'namaste-react',
    owner: 'mumbai_coder',
    name: 'namaste-react',
    desc: 'A curated React component library with Indian design patterns, Hindi locale support, and RTL for Urdu scripts.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 3871,
    forks: 642,
    updated: '1 day ago',
    tags: ['react', 'ui-library', 'i18n', 'bharati-scripts'],
    files: ['README.md', 'packages/', 'stories/', 'scripts/', 'CONTRIBUTING.md']
  },
  {
    id: 'rupee-pay',
    owner: 'fintech_india',
    name: 'rupee-pay',
    desc: 'Open-source UPI payment gateway integration library. Supports NPCI, PhonePe, GPay and Paytm flows.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 2105,
    forks: 430,
    updated: '3 days ago',
    tags: ['upi', 'payments', 'fintech'],
    files: ['README.md', 'lib/', 'examples/', 'test/', 'package.json']
  },
  {
    id: 'kisan-ai',
    owner: 'agro_tech',
    name: 'kisan-ai',
    desc: 'AI-powered crop disease detection and yield prediction. Multi-lingual support (Hindi, Marathi, Punjabi, Tamil).',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 1680,
    forks: 287,
    updated: '1 week ago',
    tags: ['agriculture', 'computer-vision', 'ai', 'bharat'],
    files: ['README.md', 'models/', 'data/', 'app.py', 'requirements.txt']
  },
  {
    id: 'bharat-cloud',
    owner: 'cloud_india',
    name: 'bharat-cloud',
    desc: 'Infrastructure-as-code templates for deploying on Indian cloud providers (Jio Cloud, BSNL, NIC). Terraform modules.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 920,
    forks: 156,
    updated: '2 weeks ago',
    tags: ['cloud', 'terraform', 'devops', 'digital-india'],
    files: ['README.md', 'modules/', 'examples/', 'CHANGELOG.md', 'main.tf']
  },
];

const TRENDING = [
  {
    rank: 1,
    name: 'namaste-react',
    owner: 'mumbai_coder',
    desc: 'React component library with Indian design language and full Indic script support.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 3871,
    starsToday: 284,
    forks: 642,
  },
  {
    rank: 2,
    name: 'rupee-pay',
    owner: 'fintech_india',
    desc: 'Open-source UPI & NPCI payment integrations for Indian developers.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 2105,
    starsToday: 201,
    forks: 430,
  },
  {
    rank: 3,
    name: 'kisan-ai',
    owner: 'agro_tech',
    desc: 'Crop disease detection AI trained on 50,000+ Indian farm images.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 1680,
    starsToday: 156,
    forks: 287,
  },
  {
    rank: 4,
    name: 'indiastack-sdk',
    owner: 'digital_bharat',
    desc: 'One SDK to access Aadhaar, UPI, DigiLocker — the entire IndiaStack.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 1243,
    starsToday: 98,
    forks: 318,
  },
  {
    rank: 5,
    name: 'bharat-cloud',
    owner: 'cloud_india',
    desc: 'Terraform modules for India-first cloud deployments.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 920,
    starsToday: 74,
    forks: 156,
  },
  {
    rank: 6,
    name: 'VED-MODELS',
    owner: 'prashanth_dev',
    desc: 'PyTorch models for predicting student outcomes — built on Indian education data.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 482,
    starsToday: 41,
    forks: 97,
  },
];

const BHARATAI_RESPONSES = {
  perplexity: {
    title: 'Building an Indian Perplexity Clone',
    body: `Here's how to build <strong>BharatSearch</strong> — an Indian AI search agent:\n\n<ol>
<li><strong>Query Understanding</strong> — Use a fast embedding model (e.g. <code>sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2</code>) to encode the user's question in Hindi or English.</li>
<li><strong>Web Retrieval</strong> — Use <code>SerpAPI</code> or <code>Brave Search API</code> to fetch top 5 results, then chunk the content.</li>
<li><strong>RAG Pipeline</strong> — Store chunks in <code>ChromaDB</code>. Retrieve top-k similar chunks with cosine similarity.</li>
<li><strong>Answer Synthesis</strong> — Pass retrieved context + question to an LLM (<code>Ollama + Mistral</code> or <code>AI4Bharat IndicBART</code>) to generate a cited answer.</li>
<li><strong>UI</strong> — Next.js frontend with streaming responses via Server-Sent Events.</li>
</ol>
🛠️ Full stack: <code>FastAPI + LangChain + ChromaDB + Ollama + Next.js</code>`,
  },
  rag: {
    title: 'What is RAG & How Does It Work?',
    body: `<strong>RAG (Retrieval-Augmented Generation)</strong> combines a search engine with an LLM:\n\n<ul>
<li>📥 <strong>Ingest</strong> — Load your documents (PDFs, web pages, databases) and split into chunks.</li>
<li>🔢 <strong>Embed</strong> — Convert each chunk into a vector using an embedding model.</li>
<li>🗄️ <strong>Store</strong> — Save vectors in a vector database (<code>ChromaDB</code>, <code>Qdrant</code>, <code>pgvector</code>).</li>
<li>🔍 <strong>Retrieve</strong> — At query time, embed the question and find the most similar chunks.</li>
<li>🤖 <strong>Generate</strong> — Send the retrieved chunks as context to an LLM to produce a grounded answer.</li>
</ul>
For Indian use-cases use <strong>MuRIL</strong> or <strong>IndicBERT</strong> embeddings to handle Hindi, Tamil, Telugu, and 20+ other Indic scripts natively.`,
  },
  hindi: {
    title: 'Adding Hindi & Indic Language Support',
    body: `To make your AI agent understand and respond in <strong>Hindi, Tamil, Telugu, Bengali</strong> and 20 other Indian languages:\n\n<ul>
<li>🗣️ <strong>Embedding model</strong>: Use <code>ai4bharat/indic-bert</code> or <code>l3cube-pune/hindi-sentence-bert</code> — both multilingual and Indic-trained.</li>
<li>✍️ <strong>LLM</strong>: <code>Sarvam AI's Sarvam-1</code> (India's first homegrown SLM), or <code>Llama-3 fine-tuned on Hindi</code> corpora.</li>
<li>🔤 <strong>Transliteration</strong>: <code>indic-transliteration</code> library handles Roman ↔ Devanagari ↔ other scripts.</li>
<li>📚 <strong>Corpora</strong>: AI4Bharat's <code>IndicCorp</code> (8.5B tokens across 12 languages) for fine-tuning.</li>
<li>🌐 <strong>UI</strong>: Use <code>react-i18next</code> + <code>unicode-range</code> font loading for rendering Indic scripts properly.</li>
</ul>`,
  },
  llm: {
    title: 'Best Indian & Open-Source LLM Models',
    body: `Top models to power your Indian AI agent:\n\n<ul>
<li>🇮🇳 <strong>Sarvam-1</strong> — India's first 2B SLM, trained on 4T tokens including Indian languages. <em>Best for production.</em></li>
<li>🇮🇳 <strong>AI4Bharat IndicBART</strong> — Multilingual seq2seq for 11 Indian languages. Great for summarisation & translation.</li>
<li>🇮🇳 <strong>MuRIL (Google)</strong> — Multilingual Representations for Indian Languages — best for NLU tasks.</li>
<li>🌍 <strong>Mistral 7B / 8x7B</strong> — Top open-weight LLM, runs locally via Ollama. Strong reasoning in English.</li>
<li>🌍 <strong>LLaMA 3.1 (Meta)</strong> — Strong baseline; community fine-tunes available for Hindi.</li>
<li>🌍 <strong>Gemma 2 (Google)</strong> — Compact, fast, open; good Indic language capability.</li>
</ul>
👉 Start with <code>Ollama + Mistral</code> locally, then swap to <code>Sarvam-1</code> for Indian language production.`,
  },
  indiaGPT: {
    title: 'Building IndiaGPT — Where to Start',
    body: `A concrete 5-step roadmap to launch your own <strong>IndiaGPT</strong>:\n\n<ol>
<li>🧱 <strong>Week 1 — Foundation</strong>: Set up <code>Ollama</code> + <code>LangChain</code> + <code>FastAPI</code>. Get a basic Q&amp;A agent running in English.</li>
<li>🌐 <strong>Week 2 — Indic Support</strong>: Swap embeddings to <code>IndicBERT</code>. Add <code>indic-transliteration</code>. Test with Hindi queries.</li>
<li>🔍 <strong>Week 3 — RAG</strong>: Build a knowledge base with Indian datasets (news, govt docs, Wikipedia in Hindi). Ingest into <code>ChromaDB</code>.</li>
<li>🖥️ <strong>Week 4 — UI</strong>: Next.js + streaming SSE. Streaming word-by-word response like Perplexity. Add citations.</li>
<li>🚀 <strong>Week 5 — Deploy</strong>: <code>Docker + Kubernetes on Jio Cloud / AWS Mumbai</code>. Add Razorpay for monetisation. Open-source on BharatHub!</li>
</ol>`,
  },
  startup: {
    title: 'Building an AI Startup in India',
    body: `India's AI startup ecosystem is exploding 🚀. Here's how to position yourself:\n\n<ul>
<li>💡 <strong>Pick a vertical</strong>: EdTech AI (Hindi tutors), AgriTech AI (crop advice in local languages), HealthTech AI (ayurveda + modern medicine), LegalTech AI (Indian law Q&amp;A).</li>
<li>💰 <strong>Funding</strong>: iSPIRT, Nasscom Deep Tech Club, Meity Startup Hub offer grants. Sequoia Surge and Peak XV fund Indian AI startups.</li>
<li>🏛️ <strong>Use India Stack</strong>: Aadhaar eKYC, UPI payments, ONDC for distribution — massive moat vs global players.</li>
<li>🤝 <strong>Talent</strong>: IIT/NIT graduates, IISc researchers, and the massive Indian open-source community.</li>
<li>📊 <strong>Market</strong>: 1.4B users, 750M internet users, 22 official languages — an LLM that speaks all of them is a billion-dollar opportunity.</li>
</ul>`,
  },
  default: {
    title: 'BharatAI — Your Indian Dev Assistant',
    body: `I can help you build an AI agent like Perplexity or Claude, but <em>Made in India</em>. Try asking me:\n\n<ul>
<li>🔍 <em>"How do I build a Perplexity clone?"</em></li>
<li>🧠 <em>"What is RAG and how does it work?"</em></li>
<li>🗣️ <em>"How to add Hindi language support?"</em></li>
<li>🤖 <em>"Best Indian LLM models?"</em></li>
<li>🚀 <em>"IndiaGPT — where to start?"</em></li>
<li>💼 <em>"Building an AI startup in India?"</em></li>
</ul>`,
  },
};

const AGENT_ARCH = [
  { icon: '💬', step: '1', title: 'User Query', desc: 'Hindi / English input via chat UI or voice (Web Speech API).' },
  { icon: '🧠', step: '2', title: 'Intent & Embed', desc: 'IndicBERT / MuRIL encodes query into a multilingual embedding vector.' },
  { icon: '🔍', step: '3', title: 'Retrieval (RAG)', desc: 'ChromaDB / Qdrant fetches top-k relevant document chunks.' },
  { icon: '📰', step: '4', title: 'Web Grounding', desc: 'Optional: live search (Brave API) for fresh news & facts.' },
  { icon: '🤖', step: '5', title: 'LLM Generation', desc: 'Sarvam-1 / Mistral synthesises a grounded answer with citations.' },
  { icon: '📱', step: '6', title: 'Streaming UI', desc: 'Next.js streams the response token-by-token — just like Perplexity.' },
];

const AGENT_TOOLS = [
  // LLM
  { name: 'ollama', owner: 'ollama', cat: 'LLM', catIcon: '🤖',
    desc: 'Run Mistral, Llama 3, Gemma 2 locally — zero API cost.', lang: 'Go', langColor: '#00ADD8',
    stars: 95000, forks: 7700, license: 'MIT', url: 'https://github.com/ollama/ollama',
    why: 'The fastest way to run an open LLM on your laptop or server for free.' },
  { name: 'llama.cpp', owner: 'ggerganov', cat: 'LLM', catIcon: '🤖',
    desc: 'Run LLMs on CPU — quantised models fit in 4 GB RAM.', lang: 'C++', langColor: '#f34b7d',
    stars: 71000, forks: 10300, license: 'MIT', url: 'https://github.com/ggerganov/llama.cpp',
    why: 'Ship an AI agent on a Rs 8k cloud VM — no GPU required.' },
  // Indian Language
  { name: 'indic-bert', owner: 'ai4bharat', cat: 'Indic AI', catIcon: '🇮🇳',
    desc: 'ALBERT-based model trained on 12 Indian languages — best Indic NLU.', lang: 'Python', langColor: '#3572A5',
    stars: 1800, forks: 310, license: 'MIT', url: 'https://github.com/ai4bharat/indic-bert',
    why: 'Understand Hindi, Tamil, Telugu, Bengali and 9 more — natively.' },
  { name: 'indicnlp-library', owner: 'anoopkunchukuttan', cat: 'Indic AI', catIcon: '🇮🇳',
    desc: 'NLP tools for Indian languages — tokenisation, transliteration, normalisation.', lang: 'Python', langColor: '#3572A5',
    stars: 1500, forks: 380, license: 'MIT', url: 'https://github.com/anoopkunchukuttan/indic_nlp_library',
    why: 'The foundational NLP toolkit for any Indian language AI application.' },
  { name: 'indic-trans', owner: 'AI4Bharat', cat: 'Indic AI', catIcon: '🇮🇳',
    desc: 'State-of-the-art translation between 22 Indian languages and English.', lang: 'Python', langColor: '#3572A5',
    stars: 940, forks: 180, license: 'MIT', url: 'https://github.com/AI4Bharat/IndicTrans2',
    why: 'Give your AI agent a superpower: fluent translation across all 22 Indian languages.' },
  // RAG & Orchestration
  { name: 'langchain', owner: 'langchain-ai', cat: 'RAG', catIcon: '🔗',
    desc: 'LLM orchestration framework — chains, agents, RAG, tools.', lang: 'Python', langColor: '#3572A5',
    stars: 95000, forks: 15600, license: 'MIT', url: 'https://github.com/langchain-ai/langchain',
    why: 'Wire your LLM + retriever + tools into one coherent agent pipeline.' },
  { name: 'llama_index', owner: 'run-llama', cat: 'RAG', catIcon: '🔗',
    desc: 'Data framework for LLM applications — ingest, index, query any data.', lang: 'Python', langColor: '#3572A5',
    stars: 38000, forks: 5400, license: 'MIT', url: 'https://github.com/run-llama/llama_index',
    why: 'Best for building knowledge bases from PDFs, websites, and databases.' },
  // Vector DB
  { name: 'chroma', owner: 'chroma-core', cat: 'Vector DB', catIcon: '🗄️',
    desc: 'The AI-native open-source embedding database — in-process or server mode.', lang: 'Python', langColor: '#3572A5',
    stars: 16000, forks: 1400, license: 'Apache-2.0', url: 'https://github.com/chroma-core/chroma',
    why: 'Zero-infra vector store — get RAG running locally in 5 minutes.' },
  { name: 'qdrant', owner: 'qdrant', cat: 'Vector DB', catIcon: '🗄️',
    desc: 'Production-grade vector search engine — Rust-powered, cloud-native.', lang: 'Rust', langColor: '#dea584',
    stars: 21000, forks: 1500, license: 'Apache-2.0', url: 'https://github.com/qdrant/qdrant',
    why: 'Battle-tested vector DB for production — handles billions of embeddings.' },
  // Web / API
  { name: 'fastapi', owner: 'tiangolo', cat: 'API', catIcon: '⚙️',
    desc: 'High-performance Python API framework with auto OpenAPI docs.', lang: 'Python', langColor: '#3572A5',
    stars: 79000, forks: 6700, license: 'MIT', url: 'https://github.com/tiangolo/fastapi',
    why: 'Build your agent API endpoint in 30 lines — streaming support built-in.' },
  { name: 'next.js', owner: 'vercel', cat: 'API', catIcon: '⚙️',
    desc: 'React framework for the AI chat UI — SSE streaming, API routes.', lang: 'JavaScript', langColor: '#f1e05a',
    stars: 128000, forks: 27400, license: 'MIT', url: 'https://github.com/vercel/next.js',
    why: 'Vercel\'s Next.js is the standard for streaming AI UIs (used by Perplexity).' },
  // Monitoring
  { name: 'langfuse', owner: 'langfuse', cat: 'Observability', catIcon: '📊',
    desc: 'Open-source LLM observability — trace, evals, prompt management.', lang: 'TypeScript', langColor: '#3178c6',
    stars: 8000, forks: 680, license: 'MIT', url: 'https://github.com/langfuse/langfuse',
    why: 'Debug and improve your agent — see every LLM call, latency and cost.' },
];

const AGENT_CATEGORIES = ['All', 'LLM', 'Indic AI', 'RAG', 'Vector DB', 'API', 'Observability'];
let activeAgentCat = 'All';

const STARTUP_TOOLS = [
  // ── Frontend ──
  {
    name: 'next.js',
    owner: 'vercel',
    category: 'Frontend',
    catIcon: '🎨',
    desc: 'The React framework for production — SSR, SSG, API routes, and full-stack in one.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 128000,
    forks: 27400,
    license: 'MIT',
    url: 'https://github.com/vercel/next.js',
    why: 'Zero-config full-stack React — ship fast with great SEO out of the box.',
  },
  {
    name: 'shadcn-ui',
    owner: 'shadcn-ui',
    category: 'Frontend',
    catIcon: '🎨',
    desc: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 74000,
    forks: 4600,
    license: 'MIT',
    url: 'https://github.com/shadcn-ui/ui',
    why: 'Copy-paste component library — no install lock-in, fully customisable.',
  },
  {
    name: 'tailwindcss',
    owner: 'tailwindlabs',
    category: 'Frontend',
    catIcon: '🎨',
    desc: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    lang: 'CSS',
    langColor: '#563d7c',
    stars: 83000,
    forks: 4200,
    license: 'MIT',
    url: 'https://github.com/tailwindlabs/tailwindcss',
    why: 'Design directly in markup — fastest path from wireframe to polished UI.',
  },
  // ── Backend ──
  {
    name: 'fastapi',
    owner: 'tiangolo',
    category: 'Backend',
    catIcon: '⚙️',
    desc: 'FastAPI framework — high performance, easy to learn, fast to code, ready for production.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 79000,
    forks: 6700,
    license: 'MIT',
    url: 'https://github.com/tiangolo/fastapi',
    why: 'Auto-generates OpenAPI docs; great for building MVP APIs in hours.',
  },
  {
    name: 'express',
    owner: 'expressjs',
    category: 'Backend',
    catIcon: '⚙️',
    desc: 'Fast, unopinionated, minimalist web framework for Node.js.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 65000,
    forks: 15600,
    license: 'MIT',
    url: 'https://github.com/expressjs/express',
    why: 'The most battle-tested Node.js framework — huge ecosystem, minimal boilerplate.',
  },
  {
    name: 'supabase',
    owner: 'supabase',
    category: 'Backend',
    catIcon: '⚙️',
    desc: 'The open-source Firebase alternative: Postgres, Auth, Storage, Realtime, Edge Functions.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 73000,
    forks: 7000,
    license: 'Apache-2.0',
    url: 'https://github.com/supabase/supabase',
    why: 'Full backend-as-a-service in minutes — Postgres + Auth + Storage self-hostable.',
  },
  // ── Auth & Identity ──
  {
    name: 'next-auth',
    owner: 'nextauthjs',
    category: 'Auth',
    catIcon: '🔐',
    desc: 'Authentication for Next.js — supports OAuth, email, credentials, and JWT.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 24000,
    forks: 3400,
    license: 'ISC',
    url: 'https://github.com/nextauthjs/next-auth',
    why: 'Drop-in auth for Next.js — Google, GitHub, email login in under an hour.',
  },
  {
    name: 'keycloak',
    owner: 'keycloak',
    category: 'Auth',
    catIcon: '🔐',
    desc: 'Open Source Identity and Access Management for modern applications and services.',
    lang: 'Java',
    langColor: '#b07219',
    stars: 24000,
    forks: 6600,
    license: 'Apache-2.0',
    url: 'https://github.com/keycloak/keycloak',
    why: 'Enterprise-grade SSO, MFA, and RBAC — self-hostable on your own infra.',
  },
  // ── Payments ──
  {
    name: 'stripe-node',
    owner: 'stripe',
    category: 'Payments',
    catIcon: '💳',
    desc: 'Official Stripe Node.js library — accept payments, subscriptions, and marketplace splits.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 9200,
    forks: 1200,
    license: 'MIT',
    url: 'https://github.com/stripe/stripe-node',
    why: 'The gold standard for payments SDK — subscriptions, webhooks, 3DS all included.',
  },
  {
    name: 'razorpay-node',
    owner: 'razorpay',
    category: 'Payments',
    catIcon: '💳',
    desc: 'Official Razorpay SDK for Node.js — UPI, cards, netbanking, wallets, and EMI.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 570,
    forks: 270,
    license: 'MIT',
    url: 'https://github.com/razorpay/razorpay-node',
    why: 'India-first payment gateway with UPI support — lowest friction for Indian users.',
  },
  // ── DevOps / Infrastructure ──
  {
    name: 'docker',
    owner: 'moby',
    category: 'DevOps',
    catIcon: '🐳',
    desc: 'Moby — the open-source project behind Docker for packaging apps in containers.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 69000,
    forks: 18700,
    license: 'Apache-2.0',
    url: 'https://github.com/moby/moby',
    why: 'Containerise everything — consistent environments from laptop to production.',
  },
  {
    name: 'traefik',
    owner: 'traefik',
    category: 'DevOps',
    catIcon: '🐳',
    desc: 'The Cloud Native Application Proxy — automatic TLS, load balancing, and service discovery.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 51000,
    forks: 5100,
    license: 'MIT',
    url: 'https://github.com/traefik/traefik',
    why: 'Spin up HTTPS + routing for all your microservices with near-zero config.',
  },
  {
    name: 'terraform',
    owner: 'hashicorp',
    category: 'DevOps',
    catIcon: '🐳',
    desc: 'Infrastructure as code — provision and manage cloud resources declaratively.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 43000,
    forks: 9600,
    license: 'BUSL-1.1',
    url: 'https://github.com/hashicorp/terraform',
    why: 'Manage your entire cloud infra in version-controlled code — repeatable and safe.',
  },
  // ── AI / ML ──
  {
    name: 'langchain',
    owner: 'langchain-ai',
    category: 'AI / ML',
    catIcon: '🤖',
    desc: 'Build context-aware, reasoning applications using LLMs with LangChain.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 95000,
    forks: 15600,
    license: 'MIT',
    url: 'https://github.com/langchain-ai/langchain',
    why: 'Fastest way to build LLM-powered features — RAG, agents, chains, tools.',
  },
  {
    name: 'ollama',
    owner: 'ollama',
    category: 'AI / ML',
    catIcon: '🤖',
    desc: 'Get up and running with large language models locally on your machine.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 95000,
    forks: 7700,
    license: 'MIT',
    url: 'https://github.com/ollama/ollama',
    why: 'Run LLMs on your own hardware — no API cost, full data privacy for your startup.',
  },
  // ── Analytics & Monitoring ──
  {
    name: 'posthog',
    owner: 'PostHog',
    category: 'Analytics',
    catIcon: '📊',
    desc: 'Open-source product analytics, session recording, feature flags, and A/B testing.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 23000,
    forks: 1400,
    license: 'MIT',
    url: 'https://github.com/PostHog/posthog',
    why: 'All-in-one product analytics self-hostable — funnels, retention, and feature flags.',
  },
  {
    name: 'grafana',
    owner: 'grafana',
    category: 'Analytics',
    catIcon: '📊',
    desc: 'Open-source observability and data visualization platform.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 65000,
    forks: 12100,
    license: 'AGPL-3.0',
    url: 'https://github.com/grafana/grafana',
    why: 'Beautiful dashboards for metrics, logs, and traces — essential for production.',
  },
  // ── CMS & Content ──
  {
    name: 'payload',
    owner: 'payloadcms',
    category: 'CMS',
    catIcon: '📝',
    desc: 'The most powerful TypeScript-native headless CMS. Code-first, self-hostable.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 29000,
    forks: 1900,
    license: 'MIT',
    url: 'https://github.com/payloadcms/payload',
    why: 'Full CMS + API in your codebase — no vendor lock-in, type-safe from day one.',
  },
  // ── Communication ──
  {
    name: 'cal.com',
    owner: 'calcom',
    category: 'Communication',
    catIcon: '📅',
    desc: 'Scheduling infrastructure for everyone — the open-source Calendly alternative.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 33000,
    forks: 8100,
    license: 'AGPL-3.0',
    url: 'https://github.com/calcom/cal.com',
    why: 'Self-host your booking system — perfect for SaaS demos, sales calls, and support.',
  },
  {
    name: 'mattermost',
    owner: 'mattermost',
    category: 'Communication',
    catIcon: '📅',
    desc: 'Mattermost is a secure, open source platform for developer collaboration.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 30000,
    forks: 7200,
    license: 'AGPL-3.0',
    url: 'https://github.com/mattermost/mattermost',
    why: 'Self-hosted team chat — keep company comms private and GDPR-compliant.',
  },
];

const STARTUP_CATEGORIES = ['All', 'Frontend', 'Backend', 'Auth', 'Payments', 'DevOps', 'AI / ML', 'Analytics', 'CMS', 'Communication'];

let activeStartupCat = 'All';

const POPULAR_OSS = [
  {
    name: 'freeCodeCamp',
    owner: 'freeCodeCamp',
    desc: 'freeCodeCamp.org\'s open-source codebase and curriculum. Learn to code for free.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 408000,
    forks: 38600,
    license: 'BSD-3-Clause',
    url: 'https://github.com/freeCodeCamp/freeCodeCamp',
  },
  {
    name: 'linux',
    owner: 'torvalds',
    desc: 'Linux kernel source tree.',
    lang: 'C',
    langColor: '#555555',
    stars: 184000,
    forks: 55800,
    license: 'GPL-2.0',
    url: 'https://github.com/torvalds/linux',
  },
  {
    name: 'react',
    owner: 'facebook',
    desc: 'The library for web and native user interfaces.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 229000,
    forks: 47000,
    license: 'MIT',
    url: 'https://github.com/facebook/react',
  },
  {
    name: 'tensorflow',
    owner: 'tensorflow',
    desc: 'An open-source machine learning framework for everyone.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 187000,
    forks: 74600,
    license: 'Apache-2.0',
    url: 'https://github.com/tensorflow/tensorflow',
  },
  {
    name: 'vue',
    owner: 'vuejs',
    desc: 'This is the repo for Vue 2. For Vue 3, go to https://github.com/vuejs/core',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 208000,
    forks: 33700,
    license: 'MIT',
    url: 'https://github.com/vuejs/vue',
  },
  {
    name: 'bootstrap',
    owner: 'twbs',
    desc: 'The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 171000,
    forks: 79200,
    license: 'MIT',
    url: 'https://github.com/twbs/bootstrap',
  },
  {
    name: 'vscode',
    owner: 'microsoft',
    desc: 'Visual Studio Code — open-source code editor by Microsoft.',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 165000,
    forks: 29700,
    license: 'MIT',
    url: 'https://github.com/microsoft/vscode',
  },
  {
    name: 'flutter',
    owner: 'flutter',
    desc: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond.',
    lang: 'Dart',
    langColor: '#00B4AB',
    stars: 166000,
    forks: 27600,
    license: 'BSD-3-Clause',
    url: 'https://github.com/flutter/flutter',
  },
  {
    name: 'kubernetes',
    owner: 'kubernetes',
    desc: 'Production-Grade Container Scheduling and Management.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 112000,
    forks: 40300,
    license: 'Apache-2.0',
    url: 'https://github.com/kubernetes/kubernetes',
  },
  {
    name: 'pytorch',
    owner: 'pytorch',
    desc: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 84000,
    forks: 22700,
    license: 'BSD-3-Clause',
    url: 'https://github.com/pytorch/pytorch',
  },
  {
    name: 'electron',
    owner: 'electron',
    desc: 'Build cross-platform desktop apps with JavaScript, HTML, and CSS.',
    lang: 'C++',
    langColor: '#f34b7d',
    stars: 115000,
    forks: 15400,
    license: 'MIT',
    url: 'https://github.com/electron/electron',
  },
  {
    name: 'rust',
    owner: 'rust-lang',
    desc: 'Empowering everyone to build reliable and efficient software.',
    lang: 'Rust',
    langColor: '#dea584',
    stars: 99000,
    forks: 12700,
    license: 'MIT/Apache-2.0',
    url: 'https://github.com/rust-lang/rust',
  },
  {
    name: 'django',
    owner: 'django',
    desc: 'The Web framework for perfectionists with deadlines.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 81000,
    forks: 31900,
    license: 'BSD-3-Clause',
    url: 'https://github.com/django/django',
  },
  {
    name: 'next.js',
    owner: 'vercel',
    desc: 'The React Framework — build fullstack apps with the best developer experience.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 128000,
    forks: 27400,
    license: 'MIT',
    url: 'https://github.com/vercel/next.js',
  },
  {
    name: 'git',
    owner: 'git',
    desc: 'Git Source Code Mirror — the fast, scalable, distributed revision control system.',
    lang: 'C',
    langColor: '#555555',
    stars: 53000,
    forks: 26200,
    license: 'GPL-2.0',
    url: 'https://github.com/git/git',
  },
  {
    name: 'llama.cpp',
    owner: 'ggerganov',
    desc: 'LLM inference in C/C++ — run large language models locally on your machine.',
    lang: 'C++',
    langColor: '#f34b7d',
    stars: 71000,
    forks: 10300,
    license: 'MIT',
    url: 'https://github.com/ggerganov/llama.cpp',
  },
  {
    name: 'go',
    owner: 'golang',
    desc: 'The Go programming language.',
    lang: 'Go',
    langColor: '#00ADD8',
    stars: 125000,
    forks: 17800,
    license: 'BSD-3-Clause',
    url: 'https://github.com/golang/go',
  },
  {
    name: 'ansible',
    owner: 'ansible',
    desc: 'Ansible is a radically simple IT automation platform.',
    lang: 'Python',
    langColor: '#3572A5',
    stars: 63000,
    forks: 24100,
    license: 'GPL-3.0',
    url: 'https://github.com/ansible/ansible',
  },
];

let popularSortKey = 'stars';

const STATES = [
  'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Delhi',
  'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Punjab',
  'Kerala', 'Odisha', 'Assam', 'Bihar', 'Jharkhand',
];

// ═══════════════════════════════════════════════
// STAR / FORK COUNTS (local state)
// ═══════════════════════════════════════════════

const starCounts  = {};
const forkCounts  = {};
const starredByMe = {};

REPOS.forEach(r => {
  starCounts[r.id]  = r.stars;
  forkCounts[r.id]  = r.forks;
  starredByMe[r.id] = false;
});

// ═══════════════════════════════════════════════
// RENDER HELPERS
// ═══════════════════════════════════════════════

function langDot(color) {
  return `<span class="lang-dot" style="background:${color}"></span>`;
}

function fmtNum(n) {
  return n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n);
}

function renderRepoCards() {
  const container = document.getElementById('repoCards');
  if (!container) return;

  container.innerHTML = REPOS.map(r => `
    <div class="repo-card" id="card-${r.id}" data-name="${r.name.toLowerCase()} ${r.desc.toLowerCase()} ${r.tags.join(' ')}" onclick="openRepo('${r.id}')">
      <div class="repo-card-header">
        <div class="repo-card-name">
          📦 ${r.owner} / <strong>${r.name}</strong>
        </div>
        <div class="repo-card-meta">
          <span title="Stars">⭐ <span id="stars-${r.id}">${fmtNum(starCounts[r.id])}</span></span>
          <span title="Forks">🍴 ${fmtNum(forkCounts[r.id])}</span>
          <button class="btn-star${starredByMe[r.id] ? ' starred' : ''}"
            onclick="toggleStar(event, '${r.id}')">
            ${starredByMe[r.id] ? '★ Starred' : '☆ Star'}
          </button>
        </div>
      </div>
      <p class="repo-card-desc">${r.desc}</p>
      <div class="repo-card-footer">
        <div class="lang-badge">${langDot(r.langColor)} ${r.lang}</div>
        ${r.tags.map(t => `<span class="repo-tag">${t}</span>`).join('')}
        <span class="repo-updated">Updated ${r.updated}</span>
      </div>
    </div>
  `).join('');
}

function renderTrending() {
  const container = document.getElementById('trendingCards');
  if (!container) return;
  const langF = document.getElementById('langFilter') ? document.getElementById('langFilter').value : '';
  const data   = langF ? TRENDING.filter(r => r.lang === langF) : TRENDING;

  container.innerHTML = data.map(r => `
    <div class="trending-card" onclick="openRepo('${r.name}')">
      <div class="trending-rank">${r.rank}</div>
      <div class="trending-body">
        <div class="trending-title">📦 ${r.owner} / <strong>${r.name}</strong></div>
        <div class="trending-desc">${r.desc}</div>
        <div class="trending-meta">
          <span>${langDot(r.langColor)} ${r.lang}</span>
          <span>⭐ ${fmtNum(r.stars)}</span>
          <span>🍴 ${fmtNum(r.forks)}</span>
          <span class="trend-up">▲ ${r.starsToday} stars today</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPopular() {
  const container = document.getElementById('popularCards');
  if (!container) return;
  const langF = (document.getElementById('popularLangFilter') || {}).value || '';
  let data = langF ? POPULAR_OSS.filter(r => r.lang === langF) : POPULAR_OSS.slice();
  data.sort((a, b) => b[popularSortKey] - a[popularSortKey]);

  container.innerHTML = data.map((r, i) => `
    <div class="popular-card">
      <div class="popular-rank">${i + 1}</div>
      <div class="popular-body">
        <div class="popular-title">
          <a class="popular-link" href="${r.url}" target="_blank" rel="noopener noreferrer">
            📦 ${r.owner} / <strong>${r.name}</strong>
          </a>
          <span class="popular-license">${r.license}</span>
        </div>
        <div class="popular-desc">${r.desc}</div>
        <div class="popular-meta">
          <span>${langDot(r.langColor)} ${r.lang}</span>
          <span class="popular-stars${popularSortKey === 'stars' ? ' sort-active' : ''}">⭐ ${fmtNum(r.stars)}</span>
          <span class="popular-forks${popularSortKey === 'forks' ? ' sort-active' : ''}">🍴 ${fmtNum(r.forks)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function setPopularSort(key) {
  popularSortKey = key;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(key === 'stars' ? 'sortByStars' : 'sortByForks');
  if (btn) btn.classList.add('active');
  renderPopular();
}

function renderStartupCategoryBar() {
  const bar = document.getElementById('startupCatBar');
  if (!bar) return;
  bar.innerHTML = STARTUP_CATEGORIES.map(cat => `
    <button class="cat-chip${cat === activeStartupCat ? ' active' : ''}"
      onclick="setStartupCat('${cat}')">${cat}</button>
  `).join('');
}

function renderStartupCards() {
  const container = document.getElementById('startupCards');
  if (!container) return;
  const data = activeStartupCat === 'All'
    ? STARTUP_TOOLS
    : STARTUP_TOOLS.filter(t => t.category === activeStartupCat);

  // group by category when showing All
  if (activeStartupCat === 'All') {
    const grouped = {};
    data.forEach(t => {
      if (!grouped[t.category]) grouped[t.category] = [];
      grouped[t.category].push(t);
    });
    container.innerHTML = Object.entries(grouped).map(([cat, tools]) => `
      <div class="startup-group">
        <div class="startup-group-title">${tools[0].catIcon} ${cat}</div>
        ${tools.map(t => startupCardHTML(t)).join('')}
      </div>
    `).join('');
  } else {
    container.innerHTML = data.map(t => startupCardHTML(t)).join('');
  }
}

function startupCardHTML(t) {
  return `
    <div class="startup-card">
      <div class="startup-card-top">
        <div class="startup-card-name">
          <a class="popular-link" href="${t.url}" target="_blank" rel="noopener noreferrer">
            📦 ${t.owner} / <strong>${t.name}</strong>
          </a>
          <span class="startup-cat-badge">${t.catIcon} ${t.category}</span>
          <span class="popular-license">${t.license}</span>
        </div>
        <div class="startup-card-meta">
          <span>⭐ ${fmtNum(t.stars)}</span>
          <span>🍴 ${fmtNum(t.forks)}</span>
          <span>${langDot(t.langColor)} ${t.lang}</span>
        </div>
      </div>
      <p class="startup-card-desc">${t.desc}</p>
      <div class="startup-why">💡 <em>${t.why}</em></div>
    </div>
  `;
}

function setStartupCat(cat) {
  activeStartupCat = cat;
  renderStartupCategoryBar();
  renderStartupCards();
}

function renderStartups() {
  renderStartupCategoryBar();
  renderStartupCards();
}

// ═══════════════════════════════════════════════
// BHARATAI — Indian AI Agent Builder
// ═══════════════════════════════════════════════

function renderBharatAI() {
  renderAgentArch();
  renderAgentCategoryBar();
  renderAgentCards();
}

function renderAgentArch() {
  const el = document.getElementById('aiArchFlow');
  if (!el || el.children.length) return; // render once
  el.innerHTML = AGENT_ARCH.map((node, i) => `
    <div class="arch-node">
      <div class="arch-icon">${node.icon}</div>
      <div class="arch-step">${node.step}</div>
      <div class="arch-title">${node.title}</div>
      <div class="arch-desc">${node.desc}</div>
    </div>${i < AGENT_ARCH.length - 1 ? '<div class="arch-arrow">→</div>' : ''}
  `).join('');
}

function renderAgentCategoryBar() {
  const bar = document.getElementById('agentCatBar');
  if (!bar) return;
  bar.innerHTML = AGENT_CATEGORIES.map(cat => `
    <button class="cat-chip${cat === activeAgentCat ? ' active' : ''}"
      onclick="setAgentCat('${cat}')">${cat}</button>
  `).join('');
}

function renderAgentCards() {
  const container = document.getElementById('agentCards');
  if (!container) return;
  const data = activeAgentCat === 'All'
    ? AGENT_TOOLS
    : AGENT_TOOLS.filter(t => t.cat === activeAgentCat);

  if (activeAgentCat === 'All') {
    // group by category
    const grouped = {};
    data.forEach(t => { if (!grouped[t.cat]) grouped[t.cat] = []; grouped[t.cat].push(t); });
    container.innerHTML = Object.entries(grouped).map(([cat, tools]) => `
      <div class="startup-group">
        <div class="startup-group-title">${tools[0].catIcon} ${cat}</div>
        ${tools.map(agentCardHTML).join('')}
      </div>
    `).join('');
  } else {
    container.innerHTML = data.map(agentCardHTML).join('');
  }
}

function agentCardHTML(t) {
  return `
    <div class="startup-card">
      <div class="startup-card-top">
        <div class="startup-card-name">
          <a class="popular-link" href="${t.url}" target="_blank" rel="noopener noreferrer">
            📦 ${t.owner} / <strong>${t.name}</strong>
          </a>
          <span class="startup-cat-badge">${t.catIcon} ${t.cat}</span>
          <span class="popular-license">${t.license}</span>
        </div>
        <div class="startup-card-meta">
          <span>⭐ ${fmtNum(t.stars)}</span>
          <span>🍴 ${fmtNum(t.forks)}</span>
          <span>${langDot(t.langColor)} ${t.lang}</span>
        </div>
      </div>
      <p class="startup-card-desc">${t.desc}</p>
      <div class="startup-why">💡 <em>${t.why}</em></div>
    </div>
  `;
}

function setAgentCat(cat) {
  activeAgentCat = cat;
  renderAgentCategoryBar();
  renderAgentCards();
}

/* ── Chat logic ── */
function getBharatAIResponse(q) {
  const lower = q.toLowerCase();
  if (/perplexi|search|clone|web search/.test(lower))   return BHARATAI_RESPONSES.perplexity;
  if (/rag|retrieval|vector|embed|chunk/.test(lower))    return BHARATAI_RESPONSES.rag;
  if (/hindi|tamil|telugu|bengali|indic|language|bhasha/.test(lower)) return BHARATAI_RESPONSES.hindi;
  if (/llm|model|mistral|llama|gemma|sarvam|gpt/.test(lower))         return BHARATAI_RESPONSES.llm;
  if (/indiagpt|india gpt|india.*gpt|start|roadmap|week/.test(lower)) return BHARATAI_RESPONSES.indiaGPT;
  if (/startup|fund|investor|monetis|business/.test(lower))            return BHARATAI_RESPONSES.startup;
  return BHARATAI_RESPONSES.default;
}

function appendMessage(role, html) {
  const win = document.getElementById('aiChatWindow');
  if (!win) return;
  const div = document.createElement('div');
  div.className = `ai-msg ai-msg-${role}`;
  div.innerHTML = `
    <div class="ai-avatar">${role === 'bot' ? '🇮🇳' : '👤'}</div>
    <div class="ai-bubble">${html}</div>
  `;
  win.appendChild(div);
  win.scrollTop = win.scrollHeight;
}

function appendTypingIndicator() {
  const win = document.getElementById('aiChatWindow');
  if (!win) return;
  const div = document.createElement('div');
  div.className = 'ai-msg ai-msg-bot ai-typing-row';
  div.id = 'aiTyping';
  div.innerHTML = `
    <div class="ai-avatar">🇮🇳</div>
    <div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>
  `;
  win.appendChild(div);
  win.scrollTop = win.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('aiTyping');
  if (el) el.remove();
}

function sendBharatAI() {
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  input.value = '';

  appendMessage('user', escapeHtml(q));
  appendTypingIndicator();

  // simulate network latency
  setTimeout(() => {
    removeTypingIndicator();
    const resp = getBharatAIResponse(q);
    appendMessage('bot', `<strong>${resp.title}</strong><br><br>${resp.body}`);
    // hide suggestion chips after first use
    const sug = document.getElementById('aiSuggestions');
    if (sug) sug.style.display = 'none';
  }, 900 + Math.random() * 400);
}

function askSuggestion(btn) {
  const input = document.getElementById('aiChatInput');
  if (!input) return;
  input.value = btn.textContent;
  sendBharatAI();
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderStateChips() {
  const el = document.getElementById('stateChips');
  if (!el) return;
  el.innerHTML = STATES.map(s =>
    `<span class="state-chip" title="Developers from ${s}">🏙️ ${s}</span>`
  ).join('');
}

function renderContribGraph() {
  const el = document.getElementById('contribGraph');
  if (!el) return;
  const weeks = 36;
  const html = [];
  for (let w = 0; w < weeks; w++) {
    html.push('<div class="contrib-col">');
    for (let d = 0; d < 7; d++) {
      const r = Math.random();
      const level = r < 0.45 ? '' : r < 0.65 ? 'l1' : r < 0.80 ? 'l2' : r < 0.92 ? 'l3' : 'l4';
      html.push(`<div class="contrib-cell ${level}" title="Contributions"></div>`);
    }
    html.push('</div>');
  }
  el.innerHTML = html.join('');
}

// ═══════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════

function showTab(tabId, triggerEl) {
  // hide all panes
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.add('hidden'));
  // deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const pane = document.getElementById('pane-' + tabId);
  const tabBtn = document.getElementById('tab-' + tabId);
  if (pane) pane.classList.remove('hidden');
  if (tabBtn) tabBtn.classList.add('active');
  if (triggerEl && triggerEl.classList.contains('nav-link')) triggerEl.classList.add('active');

  // lazy render
  if (tabId === 'trending') renderTrending();
  if (tabId === 'popular')  renderPopular();
  if (tabId === 'startups') renderStartups();
  if (tabId === 'bharatai') renderBharatAI();
  if (tabId === 'profile')  renderContribGraph();
}

// ═══════════════════════════════════════════════
// STAR
// ═══════════════════════════════════════════════

function toggleStar(event, repoId) {
  event.stopPropagation();
  starredByMe[repoId] = !starredByMe[repoId];
  starCounts[repoId]  += starredByMe[repoId] ? 1 : -1;

  // update counter label
  const el = document.getElementById('stars-' + repoId);
  if (el) el.textContent = fmtNum(starCounts[repoId]);

  // re-render just that card's button using CSS classes
  const btn = document.querySelector(`#card-${repoId} .btn-star`);
  if (btn) {
    btn.textContent = starredByMe[repoId] ? '★ Starred' : '☆ Star';
    btn.classList.toggle('starred', starredByMe[repoId]);
  }
}

// ═══════════════════════════════════════════════
// MODAL — REPO DETAIL
// ═══════════════════════════════════════════════

function openRepo(repoId) {
  const repo = REPOS.find(r => r.id === repoId) || TRENDING.find(r => r.name === repoId);
  if (!repo) return;
  const name  = repo.name  || repo.id;
  const desc  = repo.desc  || '';
  const stars = repo.stars || 0;
  const forks = repo.forks || 0;
  const lang  = repo.lang  || 'Unknown';
  const files = repo.files || ['README.md', 'src/', 'tests/'];
  const tags  = repo.tags  || [];

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-repo-name">📦 ${repo.owner || ''} / ${name}</div>
    <p class="modal-desc">${desc}</p>
    <div class="modal-stats">
      <div class="modal-stat">⭐ <strong>${fmtNum(stars)}</strong> stars</div>
      <div class="modal-stat">🍴 <strong>${fmtNum(forks)}</strong> forks</div>
      <div class="modal-stat">${langDot(repo.langColor || '#ccc')} ${lang}</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;">
      ${tags.map(t => `<span class="repo-tag">${t}</span>`).join('')}
    </div>
    <div class="card-title" style="margin-bottom:8px;">📁 Repository Files</div>
    <ul class="modal-files">
      ${files.map(f => `<li>${f.endsWith('/') ? '📂' : '📄'} ${f}</li>`).join('')}
    </ul>
    <div style="margin-top:16px;display:flex;gap:10px;">
      <button class="btn-primary" onclick="closeModal()">⬇ Clone / Download</button>
      <button class="btn-secondary" onclick="closeModal()">🍴 Fork</button>
      <button class="btn-secondary" onclick="closeModal()">⭐ Star</button>
    </div>
  `;
  document.getElementById('repoModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('repoModal').classList.add('hidden');
}

// close modal on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('repoModal');
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }
});

// ═══════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════

function handleSearch() {
  const q = (document.getElementById('globalSearch').value || '').toLowerCase().trim();
  const grid = document.getElementById('repoCards');
  if (!grid) return;

  // switch to explore tab
  showTab('explore', null);

  if (!q) {
    grid.classList.remove('search-active');
    grid.querySelectorAll('.repo-card').forEach(c => c.classList.remove('no-match'));
    return;
  }

  grid.classList.add('search-active');
  grid.querySelectorAll('.repo-card').forEach(card => {
    const text = (card.dataset.name || '').toLowerCase();
    card.classList.toggle('no-match', !text.includes(q));
  });
}

// also trigger on Enter key
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('globalSearch');
  if (inp) {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch();
      if (e.key === 'Escape') {
        inp.value = '';
        handleSearch();
      }
    });
  }
});

// ═══════════════════════════════════════════════
// ANIMATED STATS COUNTER IN HERO
// ═══════════════════════════════════════════════

function animateCounter(id, target, suffix) {
  const el = document.getElementById(id);
  if (!el) return;
  const parsed = parseInt(target.replace(/,/g, ''), 10);
  let current  = Math.floor(parsed * 0.85);
  const step   = Math.ceil((parsed - current) / 30);
  const timer  = setInterval(() => {
    current += step;
    if (current >= parsed) { current = parsed; clearInterval(timer); }
    el.textContent = current.toLocaleString('en-IN') + (suffix || '');
  }, 40);
}

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  renderRepoCards();
  renderStateChips();

  // animate hero counters
  animateCounter('statRepos', '124856');
  animateCounter('statDevs',  '482193');
  animateCounter('statPRs',   '3209441');
});
