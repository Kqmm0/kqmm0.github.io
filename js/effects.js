/* ============================================
   EFFECTS — Premium micro-interactions
   • Card spotlight: radial light tracks cursor
   • Magnetic buttons: gravity pull toward cursor
   • Custom cursor: dot + ring with smooth trailing
   • Scroll progress bar
   ============================================ */

const Effects = {

  init() {
    this.initCardSpotlight();
    this.initMagneticButtons();
    this.initCustomCursor();
    this.initScrollProgress();
    this.initCardMouseGlow();
  },

  /* ─────────────────────────────────────────
     Card spotlight — injects glow div into cards
     ───────────────────────────────────────── */
  initCardSpotlight() {
    const cards = document.querySelectorAll('.projects-grid--showcase .card');
    cards.forEach(card => {
      const spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      card.appendChild(spotlight);

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        spotlight.style.setProperty('--sx', x + '%');
        spotlight.style.setProperty('--sy', y + '%');
      });
    });
  },

  /* ─────────────────────────────────────────
     Card mouse glow — CSS custom property driven
     ───────────────────────────────────────── */
  initCardMouseGlow() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
      });
    });
  },

  /* ─────────────────────────────────────────
     Magnetic buttons — desktop only
     ───────────────────────────────────────── */
  initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const btns = document.querySelectorAll('.btn--primary.btn--lg, .btn--tg.btn--lg');
    btns.forEach(btn => {
      btn.classList.add('btn--magnetic');

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  },

  /* ─────────────────────────────────────────
     Custom cursor — smooth trailing dot + ring
     Desktop only via CSS media query
     ───────────────────────────────────────── */
  initCustomCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;

    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animate() {
      // Dot follows closely
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;

      // Ring follows with delay (lerp)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

      requestAnimationFrame(animate);
    }
    animate();

    // Expand ring on hovering interactive elements
    const interactives = 'a, button, .btn, .card, .service-row, .nav__link, .lang-btn';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactives)) {
        ring.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactives)) {
        ring.classList.remove('hover');
      }
    });

    // Hide default cursor on body
    document.body.style.cursor = 'none';
    document.querySelectorAll('a, button, .btn').forEach(el => {
      el.style.cursor = 'none';
    });
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
