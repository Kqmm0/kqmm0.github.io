/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Intersection Observer — reveal elements on scroll
 */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/**
 * Header scroll behavior — add glass bg on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const toggle = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle(); // run once on load
}

/**
 * Scroll-to-top button
 */
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Mobile nav toggle
 */
function initMobileNav() {
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!burger || !mobileNav) return;

  const toggle = () => {
    const isOpen = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  burger.addEventListener('click', toggle);

  // Close on link click
  mobileNav.querySelectorAll('.mobile-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Mark active nav link based on current path
 */
function initActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav__link, .mobile-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Home page
    if (href === '/' || href === '/index.html' || href === '../index.html') {
      link.classList.toggle('active', path === '/' || path.endsWith('/index.html') || path.endsWith('/ПОРТФОЛИО/'));
    } else if (href.includes('projects.html')) {
      link.classList.toggle('active', path.includes('projects'));
    }
  });
}

/**
 * Simple smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/**
 * Export for use in main.js
 */
const utils = { initReveal, initHeaderScroll, initScrollTop, initMobileNav, initActiveNav, initSmoothScroll };
