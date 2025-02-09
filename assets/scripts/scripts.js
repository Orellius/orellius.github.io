// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const navCategories = document.getElementById('nav-categories');

hamburger.addEventListener('click', () => {
  navCategories.classList.toggle('active');
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-categories a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navCategories.classList.remove('active'); // Close menu after clicking a link
  });
});

// Section-by-section scrolling
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (isScrolling) return;
  isScrolling = true;

  const sections = document.querySelectorAll('.container');
  let currentSection = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      currentSection = index;
    }
  });

  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
  } else if (e.deltaY < 0 && currentSection > 0) {
    sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
  }

  setTimeout(() => {
    isScrolling = false;
  }, 800);
});

// Hide scroll-down indicator after scrolling
window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-down-indicator');
  if (window.scrollY > 100) {
    scrollIndicator.style.opacity = '0';
  } else {
    scrollIndicator.style.opacity = '1';
  }
});