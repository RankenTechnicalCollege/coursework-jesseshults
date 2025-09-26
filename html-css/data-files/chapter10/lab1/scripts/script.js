/*
  Jesse Shults
  script.js
  Date: 09/25/2025
*/

// Hamburger menu function
function hamburger() {
  const menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
