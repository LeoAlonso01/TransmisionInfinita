// Animaciones al scroll
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  const headings = document.querySelectorAll('h1, h2, h3, .subtitle, .tagline, blockquote');
  const episodes = document.querySelectorAll('.episode');

  // Función para verificar visibilidad
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observar secciones
  sections.forEach(section => {
    observer.observe(section);
  });

  // Observar episodios
  episodes.forEach(episode => {
    observer.observe(episode);
  });

  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});