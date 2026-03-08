/* BharatHub — Sangam Roadmap Interactions
   roadmap.js
*/

'use strict';

// ═══════════════════════════════════════════════
// PHASE COLLAPSE / EXPAND
// ═══════════════════════════════════════════════

function togglePhase(phaseId) {
  const body = document.getElementById('body-' + phaseId);
  const btn  = document.querySelector('#' + phaseId + ' .rm-collapse-btn');
  if (!body) return;
  const isCollapsed = body.classList.contains('collapsed');
  body.classList.toggle('collapsed', !isCollapsed);
  if (btn) btn.classList.toggle('collapsed', !isCollapsed);
}

// ═══════════════════════════════════════════════
// FILTER
// ═══════════════════════════════════════════════

function filterPhases(filter, btnEl) {
  // update button active state
  document.querySelectorAll('.rm-filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const phases = document.querySelectorAll('.rm-phase-block');

  phases.forEach(phase => {
    // expand all phases when filtering so results are visible
    const body = phase.querySelector('[id^="body-"]');
    const btn  = phase.querySelector('.rm-collapse-btn');
    if (body) body.classList.remove('collapsed');
    if (btn)  btn.classList.remove('collapsed');

    const features = phase.querySelectorAll('.rm-feature');
    let visibleCount = 0;

    features.forEach(feat => {
      const tags = (feat.dataset.tags || '').split(' ');
      let show = false;

      if (filter === 'all') {
        show = true;
      } else if (filter === 'done') {
        show = tags.includes('done');
      } else if (filter === 'wip') {
        show = tags.includes('wip');
      } else if (filter === 'planned') {
        show = tags.includes('planned');
      } else if (filter === 'india') {
        show = tags.includes('india');
      }

      feat.classList.toggle('rm-hidden', !show);
      if (show) visibleCount++;
    });

    // hide the whole phase block if nothing is visible in it
    phase.classList.toggle('rm-phase-hidden', visibleCount === 0);
  });
}

// ═══════════════════════════════════════════════
// ANIMATE PROGRESS BAR ON LOAD
// ═══════════════════════════════════════════════

function animateProgressBar() {
  const fill = document.getElementById('rmProgressFill');
  if (!fill) return;
  // Start from 0 and animate to target
  fill.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fill.style.width = '67%';
    });
  });
}

// ═══════════════════════════════════════════════
// SCROLL-TRIGGERED PHASE ENTRANCE ANIMATION
// ═══════════════════════════════════════════════

function initScrollAnimations() {
  const phases = document.querySelectorAll('.rm-phase-block');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  phases.forEach(phase => {
    phase.style.opacity = '0';
    phase.style.transform = 'translateY(24px)';
    phase.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(phase);
  });
}

// ═══════════════════════════════════════════════
// KEYBOARD NAVIGATION
// ═══════════════════════════════════════════════

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    // reset to "all" filter
    filterPhases('all', document.querySelector('.rm-filter-btn[data-filter="all"]'));
  }
});

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  animateProgressBar();
  initScrollAnimations();
});
