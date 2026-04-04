/* ============================================
   EFFECTS — Premium micro-interactions
   • Card spotlight: radial light tracks cursor
   • Magnetic buttons: gravity pull toward cursor
   • Custom cursor: dot + ring with smooth trailing
   • Scroll progress bar
   ============================================ */

const Effects = {

  init() {
    this.initScrollProgress();
  },

  /* ─────────────────────────────────────────
     Scroll progress bar
     ───────────────────────────────────────── */
  initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }
};

/* Small delay so render-projects.js card insertion completes first */
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => Effects.init(), 60);
});
