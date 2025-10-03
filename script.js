// ajustarFondo.js

// 1️⃣ Ajuste de altura del body para móviles
function ajustarAlturaBody() {
  const vh = window.innerHeight; // altura visible real del viewport
  document.body.style.minHeight = `${vh}px`;
}

// Ejecutar al cargar, cambiar tamaño o rotar pantalla
window.addEventListener('load', ajustarAlturaBody);
window.addEventListener('resize', ajustarAlturaBody);
window.addEventListener('orientationchange', ajustarAlturaBody);

// 2️⃣ Resaltar link activo en el nav
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(link => {
    if (
      location.pathname.endsWith(link.getAttribute('href')) ||
      (location.pathname.endsWith('/') && link.getAttribute('href') === 'index.html')
    ) {
      link.classList.add('active');
    }
  });
});