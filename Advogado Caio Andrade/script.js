window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header-wrapper');
    const logoWrapper = document.querySelector('.logo-wrapper');
    if (window.scrollY > 100) {
      header.classList.add('nav-shrink');
    } else {
      header.classList.remove('nav-shrink');
    }
  });