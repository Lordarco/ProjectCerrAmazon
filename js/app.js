document.addEventListener('DOMContentLoaded', () => {
  
  // 1. LÓGICA DO MENU
  const menuToggle = document.querySelector('.menu-toggle');
  const menuPanel = document.getElementById('menu-panel');
  const menuIcon = document.querySelector('.menu-icon');
  const menuLinks = document.querySelectorAll('.menu-panel a');

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuPanel.setAttribute('aria-hidden', isExpanded);
      menuPanel.classList.toggle('active');

      if (menuIcon) {
        menuIcon.textContent = isExpanded ? '+' : '×';
      }
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuPanel.setAttribute('aria-hidden', 'true');
        menuPanel.classList.remove('active');
        if (menuIcon) menuIcon.textContent = '+';
      });
    });
  }

  // 2. LÓGICA DO CARROSSEL AUTOMÁTICO (BOLINHAS)
  const slides = document.querySelectorAll('.hero-media .slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = index;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const index = parseInt(e.target.getAttribute('data-index'));
      showSlide(index);
      resetTimer();
    });
  });

  function startTimer() {
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
  }

  if (slides.length > 0) {
    startTimer();
  }

});