// ==========================================
// 1. LÓGICA DO MENU (Com Delegação de Eventos)
// ==========================================
document.addEventListener('click', (event) => {
  
  // A. Verifica se a pessoa clicou no botão de abrir/fechar o menu
  const menuToggle = event.target.closest('.menu-toggle');
  if (menuToggle) {
    const menuPanel = document.getElementById('menu-panel');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (menuPanel) {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuPanel.setAttribute('aria-hidden', isExpanded);
      menuPanel.classList.toggle('active');

      if (menuIcon) {
        menuIcon.textContent = isExpanded ? '+' : '×';
      }
    }
    return;
  }

  // B. Verifica se a pessoa clicou em um link do menu (para fechar o painel)
  const menuLink = event.target.closest('.menu-panel a');
  if (menuLink) {
    const toggleBtn = document.querySelector('.menu-toggle');
    const panel = document.getElementById('menu-panel');
    const icon = document.querySelector('.menu-icon');

    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    if (panel) {
      panel.setAttribute('aria-hidden', 'true');
      panel.classList.remove('active');
    }
    if (icon) icon.textContent = '+';
  }
});


// ==========================================
// 2. LÓGICA DO CARROSSEL (Sua lógica original intocada)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
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

    // Prevenção extra caso o carrossel demore a carregar
    if (slides[currentSlide] && dots[currentSlide]) {
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
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