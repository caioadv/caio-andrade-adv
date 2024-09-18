document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const targetTitle = targetSection.querySelector('.section-title');

      window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: 'smooth'
      });

      targetTitle.classList.add('highlight');

      setTimeout(() => {
          targetTitle.classList.remove('highlight');
      }, 2000);
  });
});
