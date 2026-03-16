// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const header = document.querySelector('header');

menuBtn.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// Close nav when a link is clicked
document.querySelectorAll('#main-nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    header.classList.remove('nav-open');
  });
});

// Close nav when clicking outside
document.addEventListener('click', function (e) {
  if (header.classList.contains('nav-open') &&
      !header.contains(e.target)) {
    header.classList.remove('nav-open');
  }
});

// Close nav on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    header.classList.remove('nav-open');
  }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#main-nav a');

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY + 80;
  sections.forEach(function (section) {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Simple form submission feedback
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = this.querySelector('button');
  btn.textContent = 'Sent!';
  btn.style.background = '#2ecc71';
  setTimeout(function () {
    btn.textContent = 'Submit';
    btn.style.background = '';
  }, 3000);
});
