document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
});
