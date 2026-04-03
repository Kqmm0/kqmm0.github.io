/* ============================================
   PAGE TRANSITIONS — cinematic fade reveal
   Creates a full-screen overlay that:
     • fades OUT on page load (reveal)
     • fades IN on navigation (leave)
   then redirects once the fade is complete.
   ============================================ */

const PageTransitions = {
  overlay: null,

  init() {
    // Create and append the overlay div
    this.overlay = document.createElement('div');
    this.overlay.className = 'page-overlay';
    document.body.appendChild(this.overlay);

    // Animate in — two rAF frames ensure the browser paints
    // the opaque overlay before starting the fade-out
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.overlay.classList.add('is-visible');
      });
    });

    this.bindLinks();
  },

  leave(href) {
    // Fade to opaque, then navigate
    this.overlay.classList.remove('is-visible');
    setTimeout(() => {
      window.location.href = href;
    }, 480);
  },

  bindLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');

      // Skip: hash anchors, absolute URLs, mailto/tel, new-tab links
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        link.target === '_blank'
      ) return;

      e.preventDefault();
      this.leave(href);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => PageTransitions.init());
