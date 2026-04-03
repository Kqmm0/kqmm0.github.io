/* ============================================
   PROJECTS DATA
   To add a new project: copy the object below,
   fill in the fields and set featured: true
   to show it on the home page.
   ============================================ */

const PROJECTS = [
  {
    id: 'kianu',
    category: 'restaurant',
    ruTitle: 'Kianu — ресторан',
    enTitle: 'Kianu — Restaurant',
    ruDesc: 'Современный сайт для ресторана с онлайн-меню, галереей блюд и формой бронирования.',
    enDesc: 'Modern restaurant website with online menu, food gallery and reservation form.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github:     'https://github.com/Kqmm0/kianu-site',
    live:       'https://kqmm0.github.io/kianu-site/',
    detailsUrl: 'projects/kianu.html',
    featured: true,
    image: 'assets/images/kianu-preview.jpg',
    placeholderClass: 'placeholder-img--restaurant',
    placeholderEmoji: '🍽️',
  },
];

/* Category labels for RU/EN */
const CATEGORY_LABELS = {
  restaurant: { ru: 'Ресторан', en: 'Restaurant' },
  business:   { ru: 'Бизнес',   en: 'Business' },
  landing:    { ru: 'Лендинг',  en: 'Landing' },
  multipage:  { ru: 'Многостраничный', en: 'Multi-page' },
};
