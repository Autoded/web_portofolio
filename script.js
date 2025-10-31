// Theme toggle (persist using localStorage)
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme) html.setAttribute('data-bs-theme', savedTheme);
const themeToggle = document.getElementById('themeToggle');
function toggleTheme() {
  const next = html.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', next);
  localStorage.setItem('theme', next);
}
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar shrink
const nav = document.getElementById('mainNav');
function onScroll() { if (window.scrollY > 12) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
document.addEventListener('scroll', onScroll); onScroll();

// Reveal animations
const targets = document.querySelectorAll('.reveal-up');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
targets.forEach(el => io.observe(el));

// Back to top
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contact form validation + Toast
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
    else {
      e.preventDefault();
      const toastEl = document.getElementById('toast');
      const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2200 });
      toast.show();
      form.reset();
    }
    form.classList.add('was-validated');
  });
}

// Project modal dynamic content
const modal = document.getElementById('projectModal');
if (modal) {
  modal.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget;
    if (!trigger) return;
    modal.querySelector('#projectModalLabel').textContent = trigger.getAttribute('data-title') || 'Project';
    modal.querySelector('#projectModalImg').src = trigger.getAttribute('data-img');
    modal.querySelector('#projectModalDesc').textContent = trigger.getAttribute('data-desc') || '';
  });
}
