/*
   JavaScript 7th Edition
   Chapter 3
   Project 03-02

   Application to display a slide gallery
   Author: Jesse Shults
   Date:   10/27/25

   Filename: project03-02.js
*/

// Captions for the 14 images
let captions = [
  "International Space Station fourth expansion (2009)",
  "Assembling the International Space Station (1998)",
  "The Atlantis docks with the ISS (2001)",
  "The Atlantis approaches the ISS (2000)",
  "The Atlantis approaches the ISS (2000)",
  "International Space Station over Earth (2002)",
  "The International Space Station first expansion (2002)",
  "Hurricane Ivan from the ISS (2008)",
  "The Soyuz spacecraft approaches the ISS (2005)",
  "The International Space Station from above (2006)",
  "Maneuvering in space with the Canadarm2",
  "The International Space Station second expansion (2006)",
  "The International Space Station third expansion (2007)",
  
];

// Start with an empty string for gallery HTML
let htmlCode = "";

// Generate HTML for each image and caption
for (let i = 0; i < captions.length; i++) {
  htmlCode += "<figure>";
  htmlCode += `<img src='slide${i + 1}.jpg' alt=''>`;
  htmlCode += `<figcaption>${captions[i]}</figcaption>`;
  htmlCode += "</figure>";
}

// Output the gallery into the page
document.getElementById("gallery").innerHTML = htmlCode;
