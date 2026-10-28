const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reducedMotion) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open navigation'); }
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
window.matchMedia('(min-width: 701px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(filter => { filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button)); });
  document.querySelectorAll('.project').forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    if (!project.hidden) project.classList.add('visible');
  });
}));
const projectNotes = {
 forma:{title:'Forma — a calmer way to plan',description:'A student project concept for a focused task planner. A simple space to collect tasks, organize a busy week, and make progress without the clutter.',challenge:'Explore task creation, editing, completion, and browser storage. Practice building reusable components and designing clear empty states.',skills:['React','CSS','Local storage'],learning:'State management, accessible forms, and making small interactions feel thoughtful.'},
 offscript:{title:'Offscript — stories worth a scroll',description:'A full-stack blog concept that gives personal writing a considered home. Built around readable typography and a simple publishing experience.',challenge:'Explore article listings, individual posts, categories, and a content editor. Connect a frontend to a backend API.',skills:['React','Node.js','REST API'],learning:'Routing, API design, data validation, and connecting the two sides of an application.'},
 weatherly:{title:'Weatherly — a look outside',description:'A weather app concept that turns a forecast into something useful and easy to read, whether you’re planning a walk or your morning commute.',challenge:'Explore city search, weather API integration, loading indicators, and useful error messages for unavailable locations.',skills:['JavaScript','Weather API','Responsive CSS'],learning:'Asynchronous JavaScript, handling network errors, and transforming API data into an interface.'},
 palette:{title:'Palette — play with possibilities',description:'A weekend experiment concept for exploring color combinations. An approachable playground for finding the right colors for a next project.',challenge:'Explore random palette generation, locking favorite colors, and copying accessible color values.',skills:['JavaScript','CSS','Color theory'],learning:'DOM manipulation, clipboard interactions, and using constraints to encourage creativity.'}
};
document.querySelectorAll('[data-project]').forEach(button => {
  button.setAttribute('aria-label', `View project: ${projectNotes[button.dataset.project].title}`);
  button.querySelector('.project-art').setAttribute('aria-hidden', 'true');
});
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projectNotes[button.dataset.project]; content.replaceChildren();
  const heading = document.createElement('h2'); heading.id = 'dialog-title'; heading.textContent = project.title; content.append(heading);
  const paragraph = text => { const p = document.createElement('p'); p.textContent = text; content.append(p); };
  paragraph(project.description);
  const skills = document.createElement('div'); skills.className = 'skill-tags';
  project.skills.forEach(skill => { const span = document.createElement('span'); span.textContent = skill; skills.append(span); }); content.append(skills);
  ['The idea', 'What to learn'].forEach((title, index) => { const h = document.createElement('h3'); h.textContent = title; content.append(h); paragraph(index === 0 ? project.challenge : project.learning); });
  const note = document.createElement('p'); note.className = 'case-note'; note.textContent = 'This is a sample project brief for this portfolio template. Replace it with your own work, screenshots, repository, and live demo when ready.'; content.append(note);
  dialog.showModal();
}));
document.querySelectorAll('.dialog-close, .dialog-done').forEach(button => button.addEventListener('click', () => dialog.close()));
dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
