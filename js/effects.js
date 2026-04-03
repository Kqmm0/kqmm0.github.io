/* ============================================
   EFFECTS — Premium micro-interactions
   • Card spotlight: radial light tracks cursor
   • Magnetic buttons: gravity pull toward cursor
   ============================================ */

const Effects = {

  init() {
    this.initCardSpotlight();
    this.initMagneticButtons();
  },

  /* ─────────────────────────────────────────
     Card spotlight
     Injects a .card-spotlight div into each
     featured project card. Mouse position is
     tracked and written as CSS custom properties
     --sx / --sy, which drive the radial gradient
     defined in animations.css.
     ───────────────────────────────────────── */
  initCardSpotlight() {
    const cards = document.querySelectorAll('.projects-grid--showcase .card');

    cards.forEach(card => {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      card.appendChild(spotlight);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width)  * 100;
        const y = ((e.clientY - rect.top)  / rect.height) * 100;
        spotlight.style.setProperty('--sx', x + '%');
        spotlight.style.setProperty('--sy', y + '%');
      });
    });
  },

  /* ─────────────────────────────────────────
     Magnetic buttons
     Applies a subtle translate toward the
     cursor when hovering large CTA buttons.
     Only active on pointer-precise (desktop)
     devices to avoid degrading touch UX.
     ───────────────────────────────────────── */
  initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const btns = document.querySelectorAll('.btn--primary.btn--lg, .btn--tg.btn--lg');

    btns.forEach(btn => {
      btn.classList.add('btn--magnetic');

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width  / 2) * 0.18;
        const y = (e.clientY - rect.top  - rect.height / 2) * 0.18;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }
};

/* Small delay so render-projects.js card insertion completes first */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => Effects.init(), 60);
});
