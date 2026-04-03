/* ============================================
   DYNAMIC PROJECT RENDERER
   Reads PROJECTS array from data/projects-data.js.
   Featured → editorial work-grid layout
   All → card grid layout
   ============================================ */

/**
 * Build an editorial work-grid HTML for featured projects
 */
function buildWorkGrid(project, lang = 'ru') {
  const title = lang === 'en' ? project.enTitle : project.ruTitle;
  const desc  = lang === 'en' ? project.enDesc  : project.ruDesc;
  const category = CATEGORY_LABELS[project.category]?.[lang] || project.category;

  const btnLive    = 'Live demo ↗';
  const btnGH      = 'GitHub ↗';
  const btnDetails = lang === 'en' ? 'Details ↗' : 'Подробнее ↗';

  const stackTags = project.stack
    .map(s => `<span>${s}</span>`)
    .join('');

  const liveLink = project.live && project.live !== '#'
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">${btnLive}</a>`
    : '';

  const ghLink = project.github && project.github !== '#'
    ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">${btnGH}</a>`
    : '';

  const detailsLink = project.detailsUrl && project.detailsUrl !== '#'
    ? `<a href="${project.detailsUrl}">${btnDetails}</a>`
    : '';

  const hasImage = project.image;
  const imageContent = hasImage
    ? `<img src="${project.image}" alt="${title}" loading="lazy"
        onerror="this.parentElement.classList.add('img-error'); this.style.display='none';">`
    : '';

  const placeholderBg = project.placeholderClass || 'placeholder-img--default';

  return `
    <div class="work-grid reveal">
      <div class="work-info">
        <span class="ui-text">${category}</span>
        <h2>${title}</h2>
        <div class="work-tags">${stackTags}</div>
        <p class="work-desc">${desc}</p>
        <div class="work-links">
          ${liveLink}
          ${ghLink}
          ${detailsLink}
        </div>
      </div>
      <div class="work-visual ${hasImage ? '' : placeholderBg}">
        ${imageContent}
        ${!hasImage ? `<div class="placeholder-img ${placeholderBg}"><span>${project.placeholderEmoji || ''}</span></div>` : ''}
      </div>
    </div>
  `;
}

/**
 * Build a standard project card HTML string (for projects.html grid)
 */
function buildCard(project, lang = 'ru') {
  const title = lang === 'en' ? project.enTitle : project.ruTitle;
  const desc  = lang === 'en' ? project.enDesc  : project.ruDesc;
  const category = CATEGORY_LABELS[project.category]?.[lang] || project.category;

  const btnLive    = 'Live demo';
  const btnGH      = 'GitHub';
  const btnDetails = lang === 'en' ? 'Details' : 'Подробнее';

  const hasImage = project.image;
  const thumbContent = hasImage
    ? `<img src="${project.image}" alt="${title}" loading="lazy" onerror="this.parentElement.classList.add('img-error'); this.style.display='none';">`
    : '';

  const placeholderFallback = `
    <div class="placeholder-img ${project.placeholderClass || 'placeholder-img--default'}" aria-hidden="true">
      <span>${project.placeholderEmoji || ''}</span>
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
 * Render projects into a container
 */
function renderProjects(container, projects, lang = 'ru', featuredOnly = false) {
  if (!container) return;

  const list = featuredOnly
    ? projects.filter(p => p.featured)
    : projects;

  if (featuredOnly) {
    // Editorial work-grid layout for featured
    container.innerHTML = list.map(p => buildWorkGrid(p, lang)).join('');
  } else {
    // Standard card grid for all projects
    container.innerHTML = list.map(p => buildCard(p, lang)).join('');
  }

  // Re-trigger reveal observer
  if (typeof utils !== 'undefined') {
    utils.initReveal();
  }
}

/**
 * Re-renders on language change via MutationObserver
 */
function rerenderOnLangChange() {
  const grids = document.querySelectorAll('[data-projects-grid]');
  if (!grids.length) return;

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
