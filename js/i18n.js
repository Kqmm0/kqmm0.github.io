/* ============================================
   BILINGUAL TRANSLATION SYSTEM (RU / EN)
   Usage: add data-i18n="key" to any element.
   Language persists via localStorage.
   ============================================ */

const translations = {
  ru: {
    /* --- Navigation --- */
    'nav.projects':  'Проекты',
    'nav.about':     'Обо мне',
    'nav.contact':   'Контакт',
    'nav.cta':       'Написать в Telegram',

    /* --- Hero --- */
    'hero.badge':         'Веб-разработчик · Frontend',
    'hero.title':         'Создаю сайты,<br>которые <em>работают</em><br>на ваш бизнес',
    'hero.sub':           'Лендинги, многостраничные сайты и бизнес-страницы для ресторанов, кафе и компаний.',
    'hero.cta.projects':  'Смотреть проекты',
    'hero.cta.tg':        'Написать в Telegram',
    'hero.scroll':        'Листайте вниз',

    /* --- About --- */
    'about.label': 'Обо мне',
    'about.title': 'Начинающий разработчик\nс серьёзным подходом',
    'about.p1':    'Изучаю веб-разработку самостоятельно: HTML, CSS и JavaScript. Строю сайты с нуля — без фреймворков, без лишнего кода.',
    'about.p2':    'Специализируюсь на тёмном минималистичном дизайне для реального бизнеса. Каждый проект — это готовый продукт, а не учебное задание.',
    'about.stat.stack':    'Стек',
    'about.stat.stack.v':  'HTML · CSS · JS',
    'about.stat.style':    'Стиль',
    'about.stat.style.v':  'Dark Minimal',
    'about.stat.focus':    'Фокус',
    'about.stat.focus.v':  'Бизнес-сайты',
    'about.stat.status':   'Статус',
    'about.stat.status.v': 'Открыт к работе',

    /* --- Featured projects --- */
    'featured.label': 'Портфолио',
    'featured.title': 'Избранные проекты',
    'featured.sub':   'Реальные кейсы — от лендингов до многостраничных сайтов.',
    'featured.all':   'Все проекты →',

    /* --- Services --- */
    'services.label': 'Услуги',
    'services.title': 'Что я создаю',

    'service.landing.title': 'Лендинг-страницы',
    'service.landing.desc':  'Продающие одностраничники с сильным дизайном и CTA.',
    'service.business.title':'Бизнес-сайты',
    'service.business.desc': 'Профессиональные сайты для компаний и брендов.',
    'service.restaurant.title': 'Сайты для ресторанов',
    'service.restaurant.desc':  'Меню, атмосфера и бронирование — всё в одном.',
    'service.multipage.title': 'Многостраничные сайты',
    'service.multipage.desc':  'Полноценный сайт с навигацией и несколькими разделами.',
    'service.responsive.title':'Адаптивные сайты',
    'service.responsive.desc': 'Идеально на любом устройстве — от телефона до TV.',

    /* --- Contact --- */
    'contact.label': 'Контакт',
    'contact.title': 'Готов к новым\nпроектам',
    'contact.sub':   'Напишите мне в Telegram — отвечу быстро, обсудим ваш проект.',
    'contact.tg':    'Написать в Telegram',
    'contact.gh':    'GitHub',

    /* --- Footer --- */
    'footer.tagline': 'Современные сайты для реального бизнеса',
    'footer.copy':    '© 2026 · Сделано с ♥',

    /* --- Buttons (project cards) --- */
    'btn.live':    'Live →',
    'btn.github':  'GitHub',
    'btn.details': 'Подробнее',
    'btn.back':    '← Все проекты',
    'btn.contact': 'Написать в Telegram',

    /* --- Projects page --- */
    'projects.label': 'Портфолио',
    'projects.title': 'Все проекты',
    'projects.sub':   'Реальный кейс — сайт для ресторана на HTML, CSS и JavaScript.',

    /* --- Project page --- */
    'project.goal':     'Задача',
    'project.features': 'Что реализовано',
    'project.stack':    'Технологии',
    'project.links':    'Ссылки',
    'project.cta.title':'Нужен похожий сайт?',
    'project.cta.sub':  'Напишите — обсудим ваш проект.',
  },

  en: {
    /* --- Navigation --- */
    'nav.projects':  'Projects',
    'nav.about':     'About',
    'nav.contact':   'Contact',
    'nav.cta':       'Message on Telegram',

    /* --- Hero --- */
    'hero.badge':         'Web Developer · Frontend',
    'hero.title':         'I build websites<br>that truly <em>work</em><br>for your business',
    'hero.sub':           'Landing pages, multi-page sites and business websites for restaurants, cafes and companies.',
    'hero.cta.projects':  'View Projects',
    'hero.cta.tg':        'Message on Telegram',
    'hero.scroll':        'Scroll down',

    /* --- About --- */
    'about.label': 'About me',
    'about.title': 'Junior developer\nwith a serious approach',
    'about.p1':    'Self-taught web developer working with HTML, CSS and JavaScript. I build sites from scratch — no frameworks, no bloat.',
    'about.p2':    'Specializing in dark minimal design for real business. Every project is a finished product, not a homework assignment.',
    'about.stat.stack':    'Stack',
    'about.stat.stack.v':  'HTML · CSS · JS',
    'about.stat.style':    'Style',
    'about.stat.style.v':  'Dark Minimal',
    'about.stat.focus':    'Focus',
    'about.stat.focus.v':  'Business websites',
    'about.stat.status':   'Status',
    'about.stat.status.v': 'Open to work',

    /* --- Featured projects --- */
    'featured.label': 'Portfolio',
    'featured.title': 'Featured Projects',
    'featured.sub':   'Real cases — from landing pages to full multi-page websites.',
    'featured.all':   'All projects →',

    /* --- Services --- */
    'services.label': 'Services',
    'services.title': 'What I build',

    'service.landing.title': 'Landing Pages',
    'service.landing.desc':  'High-converting single-page sites with strong design and CTAs.',
    'service.business.title':'Business Websites',
    'service.business.desc': 'Professional websites for companies and brands.',
    'service.restaurant.title': 'Restaurant Websites',
    'service.restaurant.desc':  'Menu, atmosphere and booking — all in one place.',
    'service.multipage.title': 'Multi-page Websites',
    'service.multipage.desc':  'Full websites with navigation and multiple sections.',
    'service.responsive.title':'Responsive Websites',
    'service.responsive.desc': 'Perfect on any device — from phone to TV.',

    /* --- Contact --- */
    'contact.label': 'Contact',
    'contact.title': 'Ready for new<br>projects',
    'contact.sub':   'Message me on Telegram — I reply fast, let\'s discuss your project.',
    'contact.tg':    'Message on Telegram',
    'contact.gh':    'GitHub',

    /* --- Footer --- */
    'footer.tagline': 'Modern websites for real business',
    'footer.copy':    '© 2026 · Made with ♥',

    /* --- Buttons (project cards) --- */
    'btn.live':    'Live →',
    'btn.github':  'GitHub',
    'btn.details': 'Details',
    'btn.back':    '← All Projects',
    'btn.contact': 'Message on Telegram',

    /* --- Projects page --- */
    'projects.label': 'Portfolio',
    'projects.title': 'All Projects',
    'projects.sub':   'A real case — restaurant website built with HTML, CSS and JavaScript.',

    /* --- Project page --- */
    'project.goal':     'Goal',
    'project.features': 'What was implemented',
    'project.stack':    'Tech stack',
    'project.links':    'Links',
    'project.cta.title':'Need a similar site?',
    'project.cta.sub':  'Let\'s talk — message me.',
  }
};

/* ============================================
   I18N ENGINE
   ============================================ */

const i18n = {
  current: 'ru',

  init() {
    const saved = localStorage.getItem('lang');
    const browser = navigator.language.startsWith('en') ? 'en' : 'ru';
    this.current = saved || browser;
    this.apply();
    this.updateSwitcher();
  },

  apply(lang) {
    if (lang) this.current = lang;
    const t = translations[this.current];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!t[key]) return;
      // Preserve line breaks using innerHTML
      /* Values may contain HTML tags (em, br) — set directly as innerHTML.
         \n sequences are also converted for plain-text values. */
      el.innerHTML = t[key].replace(/\n/g, '<br>');
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (t[key]) el.placeholder = t[key];
    });

    document.documentElement.lang = this.current;
    localStorage.setItem('lang', this.current);
    this.updateSwitcher();
  },

  toggle() {
    this.apply(this.current === 'ru' ? 'en' : 'ru');
  },

  updateSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  },

  t(key) {
    return translations[this.current]?.[key] || key;
  }
};

/* Wire up language buttons */
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => i18n.apply(btn.dataset.lang));
  });
});
