document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuPanel = document.getElementById('menu-panel');
  const menuIcon = document.querySelector('.menu-icon');
  const menuLinks = document.querySelectorAll('.menu-panel a');

  if (menuToggle && menuPanel) {
    menuToggle.addEventListener('click', () => {
      // Verifica se o menu está aberto
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      // Alterna os atributos de acessibilidade
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuPanel.setAttribute('aria-hidden', isExpanded);

      // Alterna a classe visual de exibição
      menuPanel.classList.toggle('active');

      // Alterna o ícone de + para x
      if (menuIcon) {
        menuIcon.textContent = isExpanded ? '+' : '×';
      }
    });

    // Fecha o menu automaticamente ao clicar em qualquer opção
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuPanel.setAttribute('aria-hidden', 'true');
        menuPanel.classList.remove('active');
        if (menuIcon) menuIcon.textContent = '+';
      });
    });
  }
});