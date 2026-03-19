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
