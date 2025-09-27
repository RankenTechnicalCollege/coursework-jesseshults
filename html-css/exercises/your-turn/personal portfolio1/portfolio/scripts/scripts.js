// Fluffy's Grooming - Hamburger Menu Script
// Author: Jesse Shults
// Date: 09/27/2025

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active'); // Optional: for future animation
    });
  }
});

