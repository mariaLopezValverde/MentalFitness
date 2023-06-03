document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuPopup = document.querySelector('.menu-popup');
  
    menuIcon.addEventListener('click', function() {
      // Alterna la clase 'active' para mostrar o ocultar el menú flotante y cambiar la apariencia del menú hamburguesa
      menuPopup.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  });