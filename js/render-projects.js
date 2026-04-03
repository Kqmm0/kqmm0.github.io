/* ============================================
   DYNAMIC PROJECT CARD RENDERER
   Reads PROJECTS array from data/projects-data.js
   and renders cards into .projects-grid containers.
   ============================================ */

/**
 * Build a single project card HTML string
 */
function buildCard(project, lang = 'ru') {
  const title = lang === 'en' ? project.enTitle : project.ruTitle;
  const desc  = lang === 'en' ? project.enDesc  : project.ruDesc;
  const category = CATEGORY_LABELS[project.category]?.[lang] || project.category;

  const btnLive    = 'Live demo';
  const btnGH      = lang === 'en' ? 'GitHub' : 'GitHub';
  const btnDetails = lang === 'en' ? 'Details' : 'Подробнее';

  const hasImage = project.image;
  const thumbContent = hasImage
    ? `<img src="${project.image}" alt="${title}" loading="lazy" onerror="this.parentElement.classList.add('img-error'); this.style.display='none';">`
    : '';

  const placeholderFallback = `
    <div class="placeholder-img ${project.placeholderClass || 'placeholder-img--default'}" aria-hidden="true">
      <span>${project.placeholderEmoji || '🌐'}</span>
    </div>`;

  const stackTags = project.stack
    .map(s => `<span class="tag">${s}</span>`)
    .join('');

  const liveBtn = project.live && project.live !== '#'
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">${btnLive}</a>`
    : `<span class="btn btn--ghost btn--sm" style="opacity:0.35;cursor:default">Live soon</span>`;

  const ghBtn = project.github && project.github !== '#'
    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--ghost btn--sm">${btnGH}</a>`
    : '';

  const detailsBtn = project.detailsUrl && project.detailsUrl !== '#'
    ? `<a href="${project.detailsUrl}" class="btn btn--ghost btn--sm">${btnDetails}</a>`
    : '';

  return `
    <article class="card reveal">
      <div class="card__thumb ${hasImage ? '' : 'card__thumb--placeholder'}">
        ${hasImage ? thumbContent : ''}
        ${placeholderFallback}
      </div>
      <div class="card__body">
        <span class="card__category">${category}</span>
        <h3 class="card__title">${title}</h3>
        <p class="card__desc">${desc}</p>
        <div class="card__stack">${stackTags}</div>
      </div>
      <div class="card__footer">
        ${liveBtn}
        ${ghBtn}
        ${detailsBtn}
      </div>
    </article>
  `;
}

/**
 * Render cards into a container
 * @param {HTMLElement} container - target element
 * @param {Array} projects - array of project objects
 * @param {string} lang - 'ru' | 'en'
 * @param {boolean} featuredOnly - only render featured projects
 */
function renderProjects(container, projects, lang = 'ru', featuredOnly = false) {
  if (!container) return;

  const list = featuredOnly
    ? projects.filter(p => p.featured)
    : projects;

  container.innerHTML = list.map(p => buildCard(p, lang)).join('');

  // Re-trigger reveal observer for newly added elements
  if (typeof utils !== 'undefined') {
    utils.initReveal();
  }
}

/**
 * Handles language change — re-renders all grids
 */
function rerenderOnLangChange() {
  const grids = document.querySelectorAll('[data-projects-grid]');
  if (!grids.length) return;

  // Listen for language changes by observing lang attribute on <html>
  const observer = new MutationObserver(() => {
    const lang = document.documentElement.lang || 'ru';
    grids.forEach(grid => {
      const featuredOnly = grid.dataset.projectsGrid === 'featured';
      renderProjects(grid, PROJECTS, lang, featuredOnly);
    });
  });

  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
}

/* Init on DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ru';

  /* Featured grid (home page) */
  const featuredGrid = document.querySelector('[data-projects-grid="featured"]');
  if (featuredGrid) {
    renderProjects(featuredGrid, PROJECTS, lang, true);
  }

  /* Full grid (projects page) */
  const allGrid = document.querySelector('[data-projects-grid="all"]');
  if (allGrid) {
    renderProjects(allGrid, PROJECTS, lang, false);
  }

  rerenderOnLangChange();
});
