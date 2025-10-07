// Enable Bootstrap ScrollSpy
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;

  // Ensure target and offset are set for ScrollSpy
  bootstrap.ScrollSpy.getInstance(body) || new bootstrap.ScrollSpy(body, {
    target: '#main-navbar',
    offset: 80
  });
});

// Auto-close navbar on nav item click (for mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
