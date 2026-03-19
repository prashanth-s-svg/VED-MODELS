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

// ═══════════════════════════════════════════════
// MARKET RESEARCH AGENT
// ═══════════════════════════════════════════════

const RESEARCH_AGENTS = [
  { id: 'market',     icon: '🔍', name: 'MarketScout',   task: 'Scanning global & India market size data…'  },
  { id: 'competitor', icon: '🏆', name: 'CompetitorMap',  task: 'Mapping competitor landscape & gaps…'       },
  { id: 'audience',   icon: '🎯', name: 'AudienceAI',    task: 'Profiling target customers & ICP…'          },
  { id: 'india',      icon: '🇮🇳', name: 'IndiaInsight',  task: 'Analysing India opportunity & schemes…'     },
  { id: 'money',      icon: '💰', name: 'MoneyMind',     task: 'Modelling revenue paths & funding…'         },
  { id: 'stack',      icon: '🛠️', name: 'StackAdvisor',  task: 'Selecting optimal open-source tech stack…'  },
];

const MARKET_DATA = {
  edtech: {
    label: 'EdTech', emoji: '📚',
    market: { india: '₹7,000 Cr (2024) → ₹16,000 Cr (2028)', global: '$400B by 2028', cagr: '19.9%' },
    problem: 'Quality education remains inaccessible to 250M+ students in Tier-2/3 India due to language, cost, and infrastructure barriers.',
    competitors: [
      { name: "BYJU'S",        pos: 'Market leader, K-12 focus',              weakness: 'Heavy sales, poor retention, debt-laden' },
      { name: 'Unacademy',     pos: 'Live classes, IIT-JEE & UPSC',           weakness: 'Burning cash, instructor dependency'     },
      { name: 'Physics Wallah',pos: 'Affordable, Tier-2 stronghold',          weakness: 'Limited personalisation'                 },
      { name: 'Coursera/Udemy',pos: 'Global, professional skills',            weakness: 'Not localised for India'                 },
    ],
    gap: 'AI-personalised, vernacular (Hindi/Tamil/Telugu) micro-learning for skill-based jobs at sub-₹200/month.',
    audience: { primary: 'Students 14-25 in Tier-2/3 cities', secondary: 'Working professionals 22-35 seeking upskilling', size: '350M addressable learners', arpu: '₹800–₹2,500/year' },
    india: { scheme: 'NEP 2020, DIKSHA platform, PM eVIDYA, Skill India', stat: '600M internet users; 54% of population under 25', upi: 'UPI collect for ₹1/day micro-subscriptions', regulation: 'No specific EdTech licence; follow DPDP Act for student data' },
    revenue: [
      { model: 'Freemium Subscription', desc: 'Free tier + ₹199/month premium', margin: '70% gross margin' },
      { model: 'B2B (Schools)',          desc: '₹50–₹150/student/month institutional', margin: 'Predictable ARR, low CAC' },
      { model: 'Income Share Agreement', desc: '15% of first-year salary on job placement', margin: 'High ticket, aligns incentives' },
      { model: 'Corporate Training',     desc: '₹5,000–₹50,000/employee/year', margin: 'High ACV, long contracts' },
    ],
    stack: { frontend: 'Next.js + React Native', backend: 'FastAPI (Python)', db: 'PostgreSQL + Redis', ai: 'IndicBERT for vernacular NLP, LlamaIndex RAG', infra: 'AWS Mumbai + CloudFront', video: 'Cloudflare Stream' },
    risks: ['Regulatory changes post NEP 2020', 'Content piracy on Telegram', 'High B2C CAC ₹3,000–₹8,000', "BYJU'S distress creating sector stigma"],
    actionPlan: { d30: 'Validate with 50 students in 1 city; build MVP with 5 micro-courses in Hindi', d60: 'Launch beta in 3 cities; integrate UPI; sign 1 school pilot', d90: '500 paying users; apply to Nasscom EdTech cohort; target ₹1L MRR' },
    funding: 'Seed ₹50L–₹2Cr — Antler India, Surge, YC. Series A once ₹5Cr ARR. India EdTech attracted $2B+ in 2021-24.',
  },
  fintech: {
    label: 'FinTech', emoji: '💳',
    market: { india: '₹2.1T (2024) → ₹7.1T (2030)', global: '$698B by 2030', cagr: '23%' },
    problem: '190M Indians are unbanked or under-banked. MSME credit gap is $530B. Insurance penetration is only 4%.',
    competitors: [
      { name: 'Razorpay',     pos: 'Payments infra, $7.5B valuation',  weakness: 'Enterprise-focused, not SMB-friendly' },
      { name: 'PhonePe',      pos: '48% UPI share, super-app pivot',   weakness: 'Regulatory scrutiny, thin margins'    },
      { name: 'Groww',        pos: 'Retail investing, 80M+ users',     weakness: 'Dependent on bull market sentiment'   },
      { name: 'Slice/OneCard',pos: 'Credit cards for millennials',     weakness: 'RBI regulation on PPI cards'         },
    ],
    gap: 'MSME embedded finance (BNPL + working capital), insurance for gig workers, wealth management for Tier-2.',
    audience: { primary: 'MSME owners 25-50, gig workers, new-to-credit youth 18-28', secondary: 'Rural farmers needing agri-credit', size: '63M MSMEs + 15M gig workers', arpu: '₹2,000–₹12,000/year' },
    india: { scheme: 'Account Aggregator (AA) framework, OCEN for lending, IndiaStack', stat: '9.4B UPI transactions/month (Jan 2025)', upi: 'RuPay + UPI built-in across ecosystem', regulation: 'RBI NBFC/PA licence required for lending/payments — allow 6-18 months' },
    revenue: [
      { model: 'Transaction Fee',      desc: '0.5–2% MDR on payment processing',         margin: 'Scales with GMV'       },
      { model: 'Interest Spread',      desc: '15-24% NBFC lending, cost-of-funds 10%',   margin: '6-14% Net Interest Margin' },
      { model: 'Insurance Commission', desc: '15-30% commission as PoSP agent',          margin: 'Zero capital, pure commission' },
      { model: 'SaaS (B2B Infra)',     desc: '₹999–₹9,999/month for banking API stack',  margin: '80%+ gross margin' },
    ],
    stack: { frontend: 'React Native (iOS + Android)', backend: 'Node.js (Fastify) + Go microservices', db: 'CockroachDB + MongoDB', ai: 'ML credit scoring (XGBoost + LightGBM)', infra: 'AWS Mumbai (data residency)', security: 'PCI-DSS L1, ISO 27001' },
    risks: ['RBI regulatory changes', 'UPI zero-MDR policy', 'Fraud & KYC costs', 'High cost of capital'],
    actionPlan: { d30: 'File NBFC/PA licence OR partner with existing NBFC. Build AA integration. Design credit model.', d60: 'Pilot 200 MSMEs in 1 city. Process ₹10L transactions. Sign 1 NBFC co-lending partner.', d90: '1,000 active users; ₹1Cr disbursed; NPA < 3%; Series A pitch deck ready.' },
    funding: 'Pre-seed ₹1–5Cr — BharatPe investors, Beenext, Accion. India FinTech raised $8B in 2023.',
  },
  agritech: {
    label: 'AgriTech', emoji: '🌾',
    market: { india: '₹70,000 Cr (2025) → ₹2.8L Cr (2030)', global: '$22B by 2027', cagr: '25%' },
    problem: '58% of India works in agriculture but contributes only 17% to GDP. Farmers earn ₹10,000/month average with no price visibility or modern inputs.',
    competitors: [
      { name: 'AgriBazaar', pos: 'B2B agri marketplace, 20 states',   weakness: 'Low farmer tech literacy'          },
      { name: 'Ninjacart',  pos: 'F&V supply chain, $200M+ funding',  weakness: 'High perishable losses'            },
      { name: 'DeHaat',     pos: 'End-to-end farm advisory + inputs',  weakness: 'High opex, human-heavy'           },
      { name: 'Fasal',      pos: 'IoT + AI crop advisory',            weakness: 'Device affordability barrier'     },
    ],
    gap: 'AI-powered crop advisory in local languages via WhatsApp + direct FPO-to-consumer marketplace bypassing 7 middlemen.',
    audience: { primary: 'Small & marginal farmers (< 2 hectares) aged 25-60', secondary: 'FPOs (10,000+ registered), agri input dealers', size: '140M farming households', arpu: '₹600–₹3,000/year' },
    india: { scheme: 'PM-KISAN, e-NAM, PMFBY crop insurance, Agri Infrastructure Fund ₹1L Cr', stat: '140M farming households; 650M rural internet users by 2025', upi: 'DBT direct payment via Aadhaar-linked accounts', regulation: 'APMC reforms in 18 states; FPO promotion policy' },
    revenue: [
      { model: 'SaaS Advisory',          desc: '₹200/month WhatsApp AI advisory per farmer', margin: 'Near-zero marginal cost'     },
      { model: 'Marketplace Commission', desc: '3-5% on FPO-to-buyer transactions',           margin: 'Scales with GMV'            },
      { model: 'Input Distribution',     desc: '10-15% margin on seeds/fertilisers',          margin: 'Working capital intensive'  },
      { model: 'Data Monetisation (B2B)',desc: 'Crop data sold to insurers, banks, traders',  margin: 'Pure margin, no COGS'       },
    ],
    stack: { frontend: 'React Native (low-bandwidth) + WhatsApp Business API', backend: 'FastAPI + Celery', db: 'PostgreSQL + TimescaleDB (IoT)', ai: 'Computer vision for crop disease (PyTorch), IndicBERT for Kisan advice', infra: 'AWS + edge nodes for rural connectivity', iot: 'ESP32 weather sensors + GPS trackers' },
    risks: ['Monsoon dependency', 'Slow tech adoption by older farmers', 'APMC regulation variability state-by-state', 'High CAC in rural markets'],
    actionPlan: { d30: 'Partner with 2 FPOs. Launch WhatsApp chatbot in Hindi for 1 crop. Collect 500 farmer profiles.', d60: '5,000 farmers onboarded; first marketplace transaction; IoT pilot on 10 farms.', d90: '₹50L GMV; 2 B2B data contracts signed; apply to iSPIRT AgriTech cohort.' },
    funding: 'Seed ₹1–3Cr — Omnivore, Accel India, Sequoia Surge. India AgriTech raised $1.2B in 2023.',
  },
  healthtech: {
    label: 'HealthTech', emoji: '🏥',
    market: { india: '₹1.8T (2024) → ₹5.4T (2030)', global: '$659B by 2030', cagr: '18%' },
    problem: "Doctor-to-patient ratio is 1:1,456 vs WHO's 1:1,000. 70% of doctors are in urban areas. Health insurance covers only 36% of population.",
    competitors: [
      { name: 'Practo',           pos: 'Appointment booking + e-consult, 20M users', weakness: 'Monetisation struggles, doctor churn' },
      { name: 'PharmEasy / 1mg',  pos: 'Medicine delivery + labs',                   weakness: 'Margin pressure from offline pharma'  },
      { name: 'Mfine / DocsApp',  pos: 'Telemedicine pioneer',                       weakness: 'Post-COVID usage drop'               },
      { name: 'HealthifyMe',      pos: 'AI nutrition + fitness, 30M users',          weakness: 'Premium conversion low'              },
    ],
    gap: 'AI-first chronic disease management (diabetes, hypertension) for 150M patients + mental health platform for Gen-Z.',
    audience: { primary: 'Chronic disease patients 35-65, their caregivers', secondary: 'Gen-Z (18-25) with mental health needs', size: '150M chronic + 200M Gen-Z', arpu: '₹3,000–₹18,000/year' },
    india: { scheme: 'Ayushman Bharat PM-JAY (500M covered), ABDM digital health IDs, NHP', stat: '77M diabetics (world 2nd largest); ₹1.03T mental health burden', upi: 'Cashless claims via UPI + ABDM Health Locker', regulation: 'Telemedicine Guidelines 2020; DPDP Act for health data; ABDM sandbox for integration' },
    revenue: [
      { model: 'Subscription (B2C)',  desc: '₹499–₹1,999/month chronic care plan', margin: '75% gross margin'                 },
      { model: 'Insurance TPA',       desc: '₹200-500 per consult from insurers',  margin: 'High volume, predictable'         },
      { model: 'Pharma Partnerships', desc: 'Patient adherence with pharma brands', margin: '₹50-200 per enrolled patient'    },
      { model: 'B2B (Corporates)',    desc: '₹2,000-₹8,000/employee/year wellness', margin: 'Long contract cycles, low churn' },
    ],
    stack: { frontend: 'React Native + WebRTC telemedicine', backend: 'FastAPI + Go', db: 'PostgreSQL + HL7 FHIR-compliant data', ai: 'LLM for symptom triage assist; computer vision for dermatology', infra: 'AWS Mumbai (health data residency)', security: 'HIPAA-equivalent, DPDP Act, end-to-end encryption' },
    risks: ['Health data privacy (DPDP Act)', 'Doctor quality control at scale', 'Insurance TPA payment delays', 'Low willingness to pay for digital health'],
    actionPlan: { d30: 'ABDM sandbox integration. Recruit 10 doctors for pilot. Build async consult MVP.', d60: '500 patients onboarded; first chronic care subscription; 1 corporate wellness pilot.', d90: '₹5L MRR; NABH tele-health certification; Series A deck with 3-month cohort data.' },
    funding: 'Pre-seed/Seed ₹2–10Cr — Chiratae Ventures, Stellaris, Prime VP. HealthTech raised $2.3B in India 2022-24.',
  },
  aiml: {
    label: 'AI / ML SaaS', emoji: '🤖',
    market: { india: '$6B (2024) → $28B (2030)', global: '$1.8T by 2030', cagr: '36%' },
    problem: 'Indian enterprises spend $15B on IT annually but 87% lack in-house AI/ML capability. Building and maintaining LLM apps costs $500K–$2M/year for mid-sized companies.',
    competitors: [
      { name: 'OpenAI API',        pos: 'GPT-4/o series, dominant mindshare',    weakness: 'Expensive, US data residency, no Indic'  },
      { name: 'Sarvam AI',         pos: "India's first Indic LLM (Sarvam-1 SLM)", weakness: 'Early stage, limited enterprise sales'    },
      { name: 'Krutrim (Ola)',      pos: 'India-trained LLM, cloud infra',        weakness: 'Consumer focus, limited B2B APIs'         },
      { name: 'AWS Bedrock / Azure',pos: 'Enterprise ML infra, global scale',     weakness: 'Generic, no India-specific models'        },
    ],
    gap: 'Vertical AI SaaS — domain-specific LLM agents for BFSI, healthcare, legal, HR with India data residency and Indic language support.',
    audience: { primary: 'CTO/CDO at ₹500M–₹5B revenue Indian companies (BFSI, healthcare, manufacturing)', secondary: 'Mid-market 50-500 employee companies wanting AI', size: '5,000+ enterprise targets + 100,000 SMBs', arpu: '$15,000–$200,000 ACV (enterprise)' },
    india: { scheme: 'IndiaAI Mission ₹10,000 Cr, MeitY AI Centre of Excellence, Digital India', stat: 'India has 420K AI/ML professionals — 3rd largest pool globally', upi: 'Invoice + UPI AutoPay for SMB API billing', regulation: 'DPDP Act 2023 — data localisation for sensitive categories; India data residency advantage' },
    revenue: [
      { model: 'API Pricing',         desc: '₹0.5–₹5 per 1K tokens',               margin: '60-80% gross margin at scale'     },
      { model: 'Per-Seat SaaS',       desc: '$50–$500/user/month AI assistant',     margin: 'NRR > 120% if sticky'             },
      { model: 'Outcome-Based',       desc: '% of cost savings or revenue from AI', margin: 'High value, requires measurement' },
      { model: 'Professional Services',desc: 'Custom fine-tuning + deployment',     margin: 'One-time, cash-flow positive'     },
    ],
    stack: { frontend: 'Next.js + shadcn/ui', backend: 'FastAPI + Ray Serve', db: 'PostgreSQL + Qdrant vector DB', ai: 'LangChain + Llama 3 / Sarvam-1 fine-tuned, LoRA fine-tuning', infra: 'Jio Cloud / AWS Mumbai, NVIDIA A100 spot instances', mlops: 'MLflow + Prometheus + Grafana + LangFuse' },
    risks: ['OpenAI price drops commoditising the market', 'Fast model obsolescence (6-month cycles)', 'Enterprise sales cycles 6-18 months', 'EU AI Act spillover regulation'],
    actionPlan: { d30: 'Pick 1 vertical (e.g. BFSI compliance). Fine-tune Mistral on domain data. Build demo API. Sign 3 design partners.', d60: 'Production API with 99.9% SLA. 10 paying pilots at ₹50K–₹2L/month. Apply for IndiaAI Mission grant.', d90: '₹30L ARR; 3 enterprise pilots converting; product-market fit survey score > 40%.' },
    funding: 'Pre-seed $500K–$2M — Lightspeed India, Peak XV Surge, Blume, 3one4. India AI SaaS saw 8x investment growth 2023-24.',
  },
  ecommerce: {
    label: 'E-Commerce / D2C', emoji: '🛒',
    market: { india: '$70B (2024) → $325B (2030)', global: '$8.1T by 2026', cagr: '27%' },
    problem: 'Indian D2C brands spend 30-40% revenue on customer acquisition. 70% of orders come from 6 metro cities. Returns cost ₹180/order on average.',
    competitors: [
      { name: 'Meesho',           pos: 'Social commerce, 140M+ users, Tier-3', weakness: 'Ultra-low AOV, high return rate'           },
      { name: 'Nykaa / Mamaearth',pos: 'D2C beauty brand, IPO-listed',         weakness: 'High CAC, brand saturation'               },
      { name: 'Amazon / Flipkart',pos: 'Marketplace dominance',                weakness: 'High fees 20-35%, no brand control'       },
      { name: 'ONDC',             pos: 'Gov-backed open protocol for D2C',     weakness: 'Fragmented buyer-seller experience'       },
    ],
    gap: 'AI-powered hyper-personalisation for Bharat shoppers in vernacular with WhatsApp-first commerce and ONDC integration.',
    audience: { primary: 'Vernacular shoppers 20-40 in Tier-2/3 cities', secondary: 'D2C brands wanting to reduce Amazon dependency', size: '350M online shoppers; 40M D2C brand buyers', arpu: '₹4,000–₹24,000/year GMV' },
    india: { scheme: 'ONDC open protocol, PM Gati Shakti for logistics, e-RUPI for digital vouchers', stat: '70M first-time online shoppers added per year; 4G penetration 95% by 2025', upi: 'UPI AutoPay for subscriptions; Bharat QR for offline commerce', regulation: 'FDI rules for e-commerce; BIS certification for electronics/toys/apparel' },
    revenue: [
      { model: 'Product Margin (D2C)',   desc: '50-70% gross margin on own-label',    margin: 'High if brand-led'             },
      { model: 'Commission (Marketplace)',desc: '5-15% GMV from seller ecosystem',    margin: 'Zero inventory risk'           },
      { model: 'SaaS for D2C Brands',    desc: '₹2,999–₹29,999/month AI tools',     margin: '85% gross margin'              },
      { model: 'Logistics Revenue',      desc: '₹40-80/shipment on 3PL aggregation', margin: 'Low margin but high volume'    },
    ],
    stack: { frontend: 'Next.js + Shopify headless', backend: 'Node.js (NestJS)', db: 'PostgreSQL + Elasticsearch', ai: 'Recommendation engine — collaborative filtering + LLM', infra: 'AWS Mumbai + CloudFront CDN', logistics: 'Shiprocket / Delhivery API integration' },
    risks: ['Amazon retaliation strategies', 'High return rates (15-30%)', 'Cash-on-delivery abuse', 'Global recession affecting discretionary spending'],
    actionPlan: { d30: 'Launch MVP D2C store with 1 product category. Integrate UPI + COD. Reach first 100 orders.', d60: 'ONDC seller onboarding. WhatsApp catalog integration. Reach ₹10L GMV.', d90: '₹50L GMV; 2,000 repeat customers; NPS > 50; ₹20L MRR from SaaS tools for sellers.' },
    funding: 'Pre-seed ₹50L–₹3Cr — 100X.VC, ah! Ventures, IAN. D2C brands attracting $1B+ from Fireside, WaterBridge, Sequoia.',
  },
  logitech: {
    label: 'LogiTech / Supply Chain', emoji: '🚛',
    market: { india: '₹14L Cr (2024) → ₹22L Cr (2030)', global: '$19.3T by 2028', cagr: '13%' },
    problem: "India's logistics cost is 14% of GDP vs 8% global average. 30% of perishables are wasted. Truckers drive empty 40% of time (backhaul problem costs ₹50,000 Cr/year).",
    competitors: [
      { name: 'Shiprocket', pos: 'D2C courier aggregation, $100M+',  weakness: 'B2C focus, thin margins'               },
      { name: 'Porter',     pos: 'Intra-city logistics, EV push',    weakness: 'Limited intercity capability'          },
      { name: 'Delhivery',  pos: 'Listed, national network',         weakness: 'Enterprise-first, not SMB-friendly'    },
      { name: 'Rivigo',     pos: 'Relay trucking innovation',        weakness: 'Burned through capital, strategy shift' },
    ],
    gap: 'AI-powered truck load matching (Uber for trucks) + predictive ETA for cold-chain with IoT sensors.',
    audience: { primary: 'Fleet owners (5-50 trucks), MSME shippers', secondary: 'FMCG/pharma companies needing cold chain', size: '9.5M truckers; 6.3M SMB shippers', arpu: '₹24,000–₹1,20,000/year per fleet' },
    india: { scheme: 'PM Gati Shakti, Sagarmala Port scheme, ONDC logistics layer, FASTag mandate', stat: 'India will be world\'s 3rd largest logistics market by 2030', upi: 'FASTag + UPI Lite for toll and fuel payments integration', regulation: 'E-way bill GST compliance required for all interstate freight' },
    revenue: [
      { model: 'Take Rate (Marketplace)', desc: '8-12% commission on freight value matched', margin: 'Asset-light, scales with volume' },
      { model: 'SaaS (TMS/WMS)',          desc: '₹5,000–₹50,000/month transport mgmt',      margin: '80%+ gross margin'              },
      { model: 'Cargo Insurance',         desc: '10-15% commission as PoSP partner',         margin: 'Zero capital deployed'          },
      { model: 'Fleet Financing',         desc: 'Vehicle loan + fuel cards via NBFC',         margin: 'Interest spread 4-8%'          },
    ],
    stack: { frontend: 'React Native (trucker app) + React (shipper dashboard)', backend: 'Go (high-concurrency) + Node.js', db: 'PostgreSQL + Redis (real-time tracking)', ai: 'Route optimisation (Google OR-Tools + ML), demand forecasting (Prophet)', infra: 'AWS Mumbai + IoT Core for GPS', iot: 'GPS trackers + temperature sensors (cold chain)' },
    risks: ['Asset-heavy if owning fleet', 'Diesel price volatility', 'Trucker mobile literacy barrier', 'E-way bill compliance complexity'],
    actionPlan: { d30: 'Sign 20 fleet owners in 1 route corridor. Build load-posting app. Complete first 10 matches.', d60: '200 trips matched; ₹50L freight value; IoT pilot on 5 trucks; sign 1 FMCG shipper.', d90: '₹5Cr GMV; 3 enterprise shippers; break-even on 1 route corridor.' },
    funding: 'Seed ₹2–8Cr — Blume Ventures, WaterBridge, Stellaris. India logistics raised $3.1B in 2022-24.',
  },
  saas: {
    label: 'B2B SaaS', emoji: '💼',
    market: { india: '$26B (2026) → $50B (2030)', global: '$908B by 2030', cagr: '18.7%' },
    problem: '63M Indian SMBs run operations on WhatsApp + Excel. Only 12% use any dedicated SaaS. Salesforce costs $165/user/month — unaffordable for Indian SMBs.',
    competitors: [
      { name: 'Zoho',          pos: '$1B ARR, full-suite, India-first',      weakness: 'Complex UI, weak AI features'           },
      { name: 'Freshworks',    pos: 'NASDAQ-listed, CRM + ITSM',             weakness: 'Mid-market focus, SMB churn'            },
      { name: 'Chargebee',     pos: 'Billing & subscription SaaS',           weakness: 'Narrow use-case'                       },
      { name: 'Salesforce/HubSpot', pos: 'Global brand, feature-rich',       weakness: '10-50x India price vs willingness-to-pay' },
    ],
    gap: 'Vertical SaaS for underserved Indian SMB segments (jewellers, clinics, kiranas, manufacturers) at ₹999/month with WhatsApp-native workflow.',
    audience: { primary: 'SMB owners ₹50L–₹50Cr revenue, 1-50 employees', secondary: 'Mid-market companies needing India-specific compliance', size: '63M SMBs; 5M in target verticals', arpu: '₹12,000–₹1,20,000/year' },
    india: { scheme: 'MSME digital tools subsidy under Udyam, GeM procurement, Startup India tax exemption', stat: 'India SaaS to cross $50B ARR by 2030 — 2nd only to US globally', upi: 'UPI AutoPay for SaaS billing — near-zero churn vs credit card', regulation: 'GST API integration required; DPDP Act data handling compliance' },
    revenue: [
      { model: 'Monthly Subscription', desc: '₹999–₹4,999/month tiered',        margin: '75-85% gross margin'           },
      { model: 'Usage-Based',          desc: 'Per invoice/transaction pricing',  margin: 'Aligns cost with growth'       },
      { model: 'Marketplace Add-ons',  desc: '30% cut on third-party integrations', margin: 'Flywheel, low COGS'         },
      { model: 'Data & Analytics',     desc: 'Benchmark reports from SMB data',  margin: 'Pure margin, no incremental COGS' },
    ],
    stack: { frontend: 'React + Tailwind CSS', backend: 'Node.js (NestJS) + Go', db: 'PostgreSQL + Redis', ai: 'GPT-4 / Llama fine-tuned for SMB workflows, LangChain agents', infra: 'AWS Mumbai', billing: 'Razorpay subscriptions + UPI AutoPay' },
    risks: ['SMB high churn (monthly CAC vs LTV)', 'WhatsApp Business API rate limits', 'GST/tax API complexity', 'Zoho price competition at bottom'],
    actionPlan: { d30: 'Pick 1 vertical (jewellers/clinics). Talk to 50 SMBs. Build MVP in 6 weeks.', d60: 'Launch paid pilot at ₹999/month. Onboard 50 paying customers. NPS > 40.', d90: '300 paying customers; ₹3L MRR; 3 expansion features from user feedback; raise ₹1Cr seed.' },
    funding: 'Pre-seed ₹25L–₹1Cr — 100X.VC, Powerhouse Ventures. B2B SaaS India raised $5B+ in 2023.',
  },
};

const MARKET_DATA_GENERIC = {
  label: 'Tech Startup', emoji: '🚀',
  market: { india: "India's startup ecosystem (3rd largest globally) valued at $450B+", global: 'Global VC investment: $285B (2023)', cagr: '15-35% depending on vertical' },
  problem: 'Identify the specific pain point your startup solves. The best startups address a problem experienced by millions that has no good solution, or where existing solutions are too expensive or inaccessible.',
  competitors: [
    { name: 'Legacy incumbents',   pos: 'Existing market share, brand trust',    weakness: 'Slow to innovate, expensive, poor UX'      },
    { name: 'US SaaS players',     pos: 'Feature-rich, global brand',            weakness: 'Not localised for India, 10x price mismatch' },
    { name: 'Indian startups',     pos: 'India-native, VC-backed, cost-aware',   weakness: 'Often under-funded or too niche'            },
  ],
  gap: 'Conduct 50 customer discovery interviews to identify your gap. Look for moments prospects say "I just use Excel/WhatsApp for this."',
  audience: { primary: 'Define your ICP by industry, company size, role, and pain', secondary: 'Secondary expansion segment after product-market fit', size: 'India: 1.4B population, 750M internet users, 63M SMBs', arpu: 'Depends on B2B vs B2C and willingness-to-pay research' },
  india: { scheme: 'Startup India, Atal Innovation Mission, MeitY grants, Nasscom cohorts, iSPIRT', stat: '1.4B people, 3rd largest startup ecosystem, 100+ unicorns, 12M+ developers', upi: 'Leverage UPI + Aadhaar + GSTN — India DPI is world-class and free to use', regulation: 'Register on Startup India portal for tax exemptions and easier compliance' },
  revenue: [
    { model: 'SaaS Subscription',  desc: 'Recurring monthly/annual fees — most fundable model', margin: '70-85% gross margin' },
    { model: 'Transaction/Commission', desc: 'Take rate on GMV — scales with usage',            margin: 'Varies 2-30%'        },
    { model: 'Freemium',           desc: 'Free tier to acquire → paid premium',                 margin: 'Requires 2-5% conversion' },
    { model: 'Services + Software',desc: 'Implementation services to land enterprise',          margin: 'Lower margin, faster revenue' },
  ],
  stack: { frontend: 'Next.js (web) + React Native (mobile)', backend: 'FastAPI (Python) or Node.js', db: 'PostgreSQL + Redis', ai: 'LangChain + Ollama/OpenAI for AI features', infra: 'AWS Mumbai (data residency)', payments: 'Razorpay (India) + Stripe (global)' },
  risks: ['Product-market fit risk — build something nobody wants', 'Premature scaling before PMF', 'Regulatory compliance (sector-specific)', 'Talent acquisition cost in Indian tech market'],
  actionPlan: { d30: 'Do 50 customer interviews. Define ICP. Build prototype. Identify #1 assumption to test.', d60: 'Build MVP (not polished). Get 10 users to pay. Measure NPS. Iterate daily.', d90: '100 paying customers or clear path to them. ₹1L MRR target. Raise ₹25L–₹1Cr seed.' },
  funding: 'Pre-seed: 100X.VC, Antler India, Venture Catalysts. Seed: Blume, Stellaris, 3one4. Series A: Accel, Sequoia Surge, Peak XV.',
};

function detectSector(text) {
  const t = text.toLowerCase();
  if (/edtech|education|learning|school|college|tutor|course|upskill|coaching|teach/.test(t)) return 'edtech';
  if (/fintech|finance|payment|bank|lending|loan|insurance|neobank|credit|wallet|bnpl|nbfc/.test(t)) return 'fintech';
  if (/agritech|agri|farm|kisan|crop|harvest|vegetable|cattle|dairy/.test(t)) return 'agritech';
  if (/health|medic|doctor|hospital|telemedicine|pharma|mental|wellness|clinic|care/.test(t)) return 'healthtech';
  if (/logi|transport|trucking|supply chain|delivery|shipping|warehouse|cold chain|freight/.test(t)) return 'logitech';
  if (/ecommerce|e-commerce|d2c|shop|retail|marketplace|fashion|beauty|product|skincare/.test(t)) return 'ecommerce';
  if (/saas|b2b|software|crm|erp|hrm|billing|subscription|smb|enterprise|workflow/.test(t)) return 'saas';
  if (/\bai\b|llm|machine learning|nlp|generative|chatbot|artificial|language model|rag|vector/.test(t)) return 'aiml';
  return null;
}

function renderResearchAgent() {
  // pane is rendered statically; nothing to do on first open
}

function prefillResearch(btn) {
  const input = document.getElementById('resIdeaInput');
  if (input) input.value = btn.textContent;
  input.focus();
}

function runMarketResearch() {
  const idea    = (document.getElementById('resIdeaInput')  || {}).value || '';
  const selSec  = (document.getElementById('resSector')     || {}).value || 'auto';
  const selMkt  = (document.getElementById('resMarket')     || {}).value || 'india';

  if (!idea.trim()) {
    const inp = document.getElementById('resIdeaInput');
    if (inp) { inp.focus(); inp.style.borderColor = 'var(--saffron)'; setTimeout(() => inp.style.borderColor = '', 1500); }
    return;
  }

  const sectorKey = selSec === 'auto' ? (detectSector(idea) || 'generic') : selSec;
  const data      = MARKET_DATA[sectorKey] || MARKET_DATA_GENERIC;

  // Disable button
  const btn = document.getElementById('resRunBtn');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Researching…'; }

  // Show progress panel, clear previous report
  const progress = document.getElementById('resProgress');
  const report   = document.getElementById('resReport');
  if (progress) progress.style.display = 'block';
  if (report) report.innerHTML = '';

  // Render all agents as pending
  const agentList = document.getElementById('resAgentList');
  if (agentList) {
    agentList.innerHTML = RESEARCH_AGENTS.map(a => `
      <div class="res-agent-item" id="resAgent-${a.id}">
        <span class="res-agent-icon">${a.icon}</span>
        <div class="res-agent-info">
          <span class="res-agent-name">${a.name}</span>
          <span class="res-agent-task" id="resTask-${a.id}">${a.task}</span>
        </div>
        <span class="res-agent-status pending" id="resStat-${a.id}">⏳</span>
      </div>
    `).join('');
  }

  // Stagger agent completions — one agent every 400ms starting at 500ms
  const AGENT_COMPLETION_DELAYS = RESEARCH_AGENTS.map((_, i) => 500 + i * 400);
  RESEARCH_AGENTS.forEach((agent, i) => {
    setTimeout(() => {
      const statEl = document.getElementById('resStat-' + agent.id);
      const taskEl = document.getElementById('resTask-' + agent.id);
      const rowEl  = document.getElementById('resAgent-' + agent.id);
      if (statEl) { statEl.textContent = '⟳'; statEl.className = 'res-agent-status running'; }
      setTimeout(() => {
        if (statEl) { statEl.textContent = '✅'; statEl.className = 'res-agent-status done'; }
        if (taskEl) taskEl.textContent = 'Complete';
        if (rowEl)  rowEl.classList.add('done');
      }, 280);
    }, AGENT_COMPLETION_DELAYS[i]);
  });

  // Show full report after all agents finish — derive final delay from last agent + buffer
  const reportDelay = AGENT_COMPLETION_DELAYS[AGENT_COMPLETION_DELAYS.length - 1] + 400;
  const researchStartTime = Date.now();
  setTimeout(() => {
    if (progress) progress.style.display = 'none';
    const elapsedSec = ((Date.now() - researchStartTime) / 1000).toFixed(1);
    renderResearchReport(idea, data, selMkt, elapsedSec);
    if (btn) { btn.disabled = false; btn.textContent = '🔄 Run Again'; }
  }, reportDelay);
}

function renderResearchReport(idea, d, market, elapsedSec) {
  const container = document.getElementById('resReport');
  if (!container) return;

  const mktLabel = { india: '🇮🇳 India-First', global: '🌍 Global', both: '🌐 India + Global' }[market] || '🇮🇳 India-First';
  const now      = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  const compHTML = d.competitors.map(c => `
    <div class="res-comp-card">
      <div class="res-comp-name">${c.name}</div>
      <div class="res-comp-pos">✅ ${c.pos}</div>
      <div class="res-comp-weak">⚠️ ${c.weakness}</div>
    </div>
  `).join('');

  const revHTML = d.revenue.map(r => `
    <div class="res-rev-item">
      <div class="res-rev-model">${r.model}</div>
      <div class="res-rev-desc">${r.desc}</div>
      <span class="res-rev-margin">${r.margin}</span>
    </div>
  `).join('');

  const stackItems = Object.entries(d.stack).map(([k, v]) =>
    `<div class="res-stack-item"><span class="res-stack-key">${k}</span><span class="res-stack-val">${v}</span></div>`
  ).join('');

  const risksHTML = d.risks.map(r => `<li>⚠️ ${r}</li>`).join('');

  container.innerHTML = `
    <div class="res-report-card">

      <!-- Report Header -->
      <div class="res-report-header">
        <div class="res-report-title">
          <span class="res-report-sector">${d.emoji} ${d.label}</span>
          <span class="res-report-mkt-badge">${mktLabel}</span>
        </div>
        <div class="res-report-meta">Market Research Report · ${now} · ${RESEARCH_AGENTS.length} agents · ${elapsedSec}s</div>
        <div class="res-idea-display">
          <span class="res-idea-label">Your Idea</span>
          <span class="res-idea-text">${escapeHtml(idea)}</span>
        </div>
      </div>

      <!-- 1. Market Overview -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">🔍</span><span>Market Overview</span><span class="res-section-agent">MarketScout</span></div>
        <div class="res-market-stats">
          <div class="res-market-stat"><div class="res-stat-val">${d.market.india}</div><div class="res-stat-lbl">India Market</div></div>
          <div class="res-market-stat"><div class="res-stat-val">${d.market.global}</div><div class="res-stat-lbl">Global Market</div></div>
          <div class="res-market-stat accent"><div class="res-stat-val">${d.market.cagr} CAGR</div><div class="res-stat-lbl">Growth Rate</div></div>
        </div>
        <div class="res-problem-box">
          <span class="res-pb-label">Core Problem</span>
          <p>${d.problem}</p>
        </div>
        <div class="res-gap-box">
          <span class="res-pb-label">Market Gap / Opportunity</span>
          <p>🎯 ${d.gap}</p>
        </div>
      </div>

      <!-- 2. Competitors -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">🏆</span><span>Competitor Landscape</span><span class="res-section-agent">CompetitorMap</span></div>
        <div class="res-comp-grid">${compHTML}</div>
      </div>

      <!-- 3. Target Audience -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">🎯</span><span>Target Audience</span><span class="res-section-agent">AudienceAI</span></div>
        <div class="res-audience-grid">
          <div class="res-aud-item"><span class="res-aud-label">Primary ICP</span><span>${d.audience.primary}</span></div>
          <div class="res-aud-item"><span class="res-aud-label">Secondary</span><span>${d.audience.secondary}</span></div>
          <div class="res-aud-item"><span class="res-aud-label">Market Size</span><span>${d.audience.size}</span></div>
          <div class="res-aud-item"><span class="res-aud-label">ARPU</span><span>${d.audience.arpu}</span></div>
        </div>
      </div>

      <!-- 4. India Opportunity -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">🇮🇳</span><span>India Opportunity</span><span class="res-section-agent">IndiaInsight</span></div>
        <div class="res-india-grid">
          <div class="res-india-item"><span class="res-india-key">Govt Schemes</span><span>${d.india.scheme}</span></div>
          <div class="res-india-item"><span class="res-india-key">Key Stat</span><span>${d.india.stat}</span></div>
          <div class="res-india-item"><span class="res-india-key">IndiaStack / UPI</span><span>${d.india.upi}</span></div>
          <div class="res-india-item"><span class="res-india-key">Regulation</span><span>${d.india.regulation}</span></div>
        </div>
      </div>

      <!-- 5. Revenue Models -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">💰</span><span>Revenue Models</span><span class="res-section-agent">MoneyMind</span></div>
        <div class="res-rev-list">${revHTML}</div>
        <div class="res-funding-box">
          <span class="res-pb-label">Funding Landscape</span>
          <p>💼 ${d.funding}</p>
        </div>
      </div>

      <!-- 6. Tech Stack -->
      <div class="res-section">
        <div class="res-section-header"><span class="res-section-icon">🛠️</span><span>Recommended Tech Stack</span><span class="res-section-agent">StackAdvisor</span></div>
        <div class="res-stack-grid">${stackItems}</div>
        <div class="res-risks-box">
          <span class="res-pb-label">Key Risks to Watch</span>
          <ul class="res-risks-list">${risksHTML}</ul>
        </div>
      </div>

      <!-- 7. 90-Day Action Plan -->
      <div class="res-section res-action-section">
        <div class="res-section-header"><span class="res-section-icon">🚀</span><span>90-Day Action Plan</span></div>
        <div class="res-action-grid">
          <div class="res-action-col">
            <div class="res-action-title">🗓️ Day 1–30</div>
            <p>${d.actionPlan.d30}</p>
          </div>
          <div class="res-action-col">
            <div class="res-action-title">🗓️ Day 31–60</div>
            <p>${d.actionPlan.d60}</p>
          </div>
          <div class="res-action-col">
            <div class="res-action-title">🗓️ Day 61–90</div>
            <p>${d.actionPlan.d90}</p>
          </div>
        </div>
      </div>

    </div>
  `;

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
  if (tabId === 'research') renderResearchAgent();
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
