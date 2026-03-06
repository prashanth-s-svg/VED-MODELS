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

const STATES = [
  'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Telangana', 'Delhi',
  'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Punjab',
  'Kerala', 'Odisha', 'Assam', 'Bihar', 'Jharkhand',
];

// ═══════════════════════════════════════════════
// ROADMAP DATA
// ═══════════════════════════════════════════════

const ROADMAP = [
  {
    phase: 'Phase 1',
    name: 'Sangam',
    subtitle: 'MVP — The Confluence',
    period: 'Q1 – Q2 2026',
    status: 'current',
    statusLabel: '🚀 In Progress',
    color: '#FF9933',
    description: 'Sangam (संगम) means confluence — where rivers meet. This MVP lays the foundation by bringing Indian developers together on a single, India-first platform.',
    milestones: [
      { done: true,  text: 'User registration & profiles with Indian state tagging' },
      { done: true,  text: 'Repository hosting — create, clone, browse code' },
      { done: true,  text: 'Issues tracker & pull request workflow' },
      { done: true,  text: 'Stars, forks, and activity feed' },
      { done: false, text: 'Indic script support (Devanagari, Tamil, Telugu) in READMEs' },
      { done: false, text: 'UPI-based developer sponsorship (one-click ₹ support)' },
      { done: false, text: 'IndiaStack SDK integration (Aadhaar-verified contributor badges)' },
      { done: false, text: 'Basic search across repositories, users, and topics' },
    ],
    newFeatures: [
      { icon: '🆔', title: 'DigiLocker-Linked Dev Passport', desc: 'Verify degrees & certifications directly from DigiLocker — the world\'s first government-verified developer profile.' },
      { icon: '💬', title: 'Voice PR Reviews in Hindi & Tamil', desc: 'Submit pull request comments as voice notes in any Indian language; auto-transcribed with AI.' },
    ],
  },
  {
    phase: 'Phase 2',
    name: 'Bharati',
    subtitle: 'The Voice of India',
    period: 'Q3 2026',
    status: 'planned',
    statusLabel: '📅 Planned',
    color: '#138808',
    description: 'Bharati (भारती) symbolises the power of language and knowledge. This phase focuses on making BharatHub truly multilingual and adding developer productivity tools.',
    milestones: [
      { done: false, text: 'CI/CD pipeline — BharatHub Actions (YAML-based workflows)' },
      { done: false, text: 'Multi-language UI in 10 Indian languages' },
      { done: false, text: 'AI-powered code review suggestions (trained on Indian codebases)' },
      { done: false, text: 'Organisation accounts for companies, colleges & government PSUs' },
      { done: false, text: 'Project boards (Kanban) for team-based planning' },
      { done: false, text: 'Mobile app — Android & iOS' },
    ],
    newFeatures: [
      { icon: '🤖', title: 'Swadeshi Copilot', desc: 'An AI coding assistant fine-tuned on IIT research papers, Indian open-source codebases, and NPTEL course material — trained specifically on Indian educational and research content.' },
      { icon: '📖', title: 'Code-to-Hindi Docgen', desc: 'Auto-generate function documentation in the developer\'s preferred Indian language directly from source code.' },
    ],
  },
  {
    phase: 'Phase 3',
    name: 'Shakti',
    subtitle: 'Power & Scale',
    period: 'Q4 2026',
    status: 'planned',
    statusLabel: '📅 Planned',
    color: '#7b9ef0',
    description: 'Shakti (शक्ति) means power. This phase supercharges BharatHub with enterprise-grade capabilities and an open ecosystem for Indian developers to monetise their work.',
    milestones: [
      { done: false, text: 'BharatHub Packages — host npm, PyPI, Go, Maven packages' },
      { done: false, text: 'Marketplace for GitHub Actions-compatible extensions' },
      { done: false, text: 'Advanced security scanning & CERT-In compliance reports' },
      { done: false, text: 'Government & education tier — free hosting for open-source institutions' },
      { done: false, text: 'API marketplace built on IndiaStack & ONDC' },
      { done: false, text: 'Paid tiers & developer subscription model in ₹' },
    ],
    newFeatures: [
      { icon: '⚖️', title: 'IT Act & DPDP Compliance Scanner', desc: 'First-in-world automated scanner that checks your codebase against India\'s Digital Personal Data Protection Act (DPDP 2023) and IT Act rules.' },
      { icon: '🌾', title: 'Jugaad Mode — Rapid Rural Templates', desc: 'One-click project scaffolds for offline-first, low-bandwidth apps targeting Bharat\'s 600,000 villages — a category no platform has addressed.' },
    ],
  },
  {
    phase: 'Phase 4',
    name: 'Vishwa',
    subtitle: 'India to the World',
    period: 'Q1 – Q2 2027',
    status: 'future',
    statusLabel: '🔭 Future',
    color: '#e07800',
    description: 'Vishwa (विश्व) means the universe. In this phase, BharatHub goes global — carrying Indian open-source values, languages, and innovation to developers worldwide.',
    milestones: [
      { done: false, text: 'Global CDN with data residency in India (MeitY compliant)' },
      { done: false, text: 'Open-Source India Program — fund 1,000 Indian OSS projects' },
      { done: false, text: 'BharatHub for Education — integration with SWAYAM / NPTEL' },
      { done: false, text: 'Diaspora developer network — NRI & global Indian dev community' },
      { done: false, text: 'Federation with international forges (Gitea, Forgejo)' },
      { done: false, text: 'Annual BharatHub Summit — flagship open-source conference' },
    ],
    newFeatures: [
      { icon: '🔗', title: 'Blockchain Code Provenance on Bharat Chain', desc: 'Timestamp every commit on the government-backed NIC blockchain — immutable proof of Indian IP authorship with government-backed blockchain integration for code provenance.' },
      { icon: '🏆', title: 'Bharat OSS Score', desc: 'A nationally-recognised open-source contribution index, recognised by MeitY, that can appear on resumes, college transcripts, and government job applications.' },
    ],
  },
  {
    phase: 'Phase 5',
    name: 'Naveen',
    subtitle: 'Innovation Lab — Features Never Built Before',
    period: 'Q3 2027 & Beyond',
    status: 'innovation',
    statusLabel: '💡 Innovation Lab',
    color: '#c084fc',
    description: 'Naveen (नवीन) means new & novel. This phase is a dedicated sandbox for features the world has never seen in any code platform — born entirely from the needs, culture, and scale of India.',
    milestones: [
      { done: false, text: '🗣️ Swar IDE — voice-driven coding in Indian languages; write functions by speaking in Hindi, Tamil or Bengali' },
      { done: false, text: '📱 SMS-based Git — push, pull and review code over plain SMS for 2G feature-phone developers in rural Bharat' },
      { done: false, text: '🎓 Guru-Shishya Mode — structured 1-on-1 mentorship graph linking senior Indian engineers to college students via BharatHub repos' },
      { done: false, text: '🏛️ Gram Sabha Board — township-level open-source governance boards for Panchayat digital projects, integrated with MyGov' },
      { done: false, text: '🌐 Project Bhasha Bridge — real-time AI co-translation so a dev writing docs in Tamil can instantly share with a Hindi-speaking reviewer' },
      { done: false, text: '🧩 Micro-Bounty UPI Rail — split a ₹500 bug bounty across 10 contributors in 10 seconds via UPI autopay, the world\'s smallest dev bounty unit' },
      { done: false, text: '📡 Offline Mesh Sync — BharatHub repos sync peer-to-peer over Bluetooth/Wi-Fi Direct, enabling code collaboration without internet' },
      { done: false, text: '🤝 Cooperative Licensing (Sahakari) — a new OSS license model where downstream commercial users automatically pay upstream Indian contributors via smart contracts' },
    ],
    newFeatures: [],
  },
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

function renderRoadmap() {
  const container = document.getElementById('roadmapPhases');
  if (!container) return;
  container.innerHTML = ROADMAP.map(p => {
    const doneCnt = p.milestones.filter(m => m.done).length;
    const pct     = Math.round(doneCnt / p.milestones.length * 100);
    const newFeatHTML = p.newFeatures && p.newFeatures.length ? `
      <div class="roadmap-new-features">
        <div class="roadmap-new-label">✨ New Features — Never Built Before</div>
        <div class="roadmap-new-grid">
          ${p.newFeatures.map(f => `
            <div class="roadmap-new-card">
              <span class="roadmap-new-icon">${f.icon}</span>
              <div>
                <div class="roadmap-new-title">${f.title}</div>
                <div class="roadmap-new-desc">${f.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>` : '';

    return `
    <div class="roadmap-phase roadmap-${p.status}">
      <div class="roadmap-phase-header">
        <div class="roadmap-phase-left">
          <div class="roadmap-phase-badge" style="background:${p.color}22;border-color:${p.color}55;color:${p.color}">${p.phase}</div>
          <div>
            <div class="roadmap-phase-name">${p.name} <span class="roadmap-phase-sub">— ${p.subtitle}</span></div>
            <div class="roadmap-phase-period">⏱ ${p.period}</div>
          </div>
        </div>
        <span class="roadmap-status-label roadmap-status-${p.status}">${p.statusLabel}</span>
      </div>
      <p class="roadmap-desc">${p.description}</p>
      <ul class="roadmap-milestones">
        ${p.milestones.map(m => `
          <li class="roadmap-milestone${m.done ? ' done' : ''}">
            <span class="roadmap-check">${m.done ? '✅' : '⬜'}</span>
            <span>${m.text}</span>
          </li>
        `).join('')}
      </ul>
      <div class="roadmap-progress-bar">
        <div class="roadmap-progress-fill" style="width:${pct}%;background:${p.color}"></div>
      </div>
      <div class="roadmap-progress-label">${doneCnt} / ${p.milestones.length} milestones complete</div>
      ${newFeatHTML}
    </div>`;
  }).join('');
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
  if (tabId === 'profile')  renderContribGraph();
  if (tabId === 'roadmap')  renderRoadmap();
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
