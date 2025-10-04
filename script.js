document.addEventListener('DOMContentLoaded', () => {
  // ✅ Marcar la pestaña activa según la URL
  const links = document.querySelectorAll('nav a');
  links.forEach(l => { 
    if (
      location.pathname.endsWith(l.getAttribute('href')) || 
      (location.pathname.endsWith('/') && l.getAttribute('href') === 'index.html')
    ) {
      l.classList.add('active'); 
    }
  });

  // ✅ Ajustar la posición del nav debajo del header dinámicamente
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  if (header && nav) {
    const headerHeight = header.offsetHeight;
    nav.style.top = headerHeight + 'px';
  }
});