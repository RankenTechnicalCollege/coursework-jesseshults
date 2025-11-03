"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Hands-on Project 4-5

      Application to convert degrees ↔ radians
      Author: [Your Name]
      Date: 2025-11-03

      Filename: project04-05.js
*/

// Get references to input fields
let aValue = document.getElementById("aValue"); // degrees input
let rValue = document.getElementById("rValue"); // radians input

// Convert degrees to radians
aValue.addEventListener("change", () => {
   let degrees = parseFloat(aValue.value);
   console.log("Degrees = " + degrees);

   let radians = degrees * (Math.PI / 180);
   console.log("Radians = " + radians);

   rValue.value = radians.toFixed(4);
});

// Convert radians to degrees
rValue.addEventListener("change", () => {
   let radians = parseFloat(rValue.value);
   console.log("Radians = " + radians);

   let degrees = radians * (180 / Math.PI);
   console.log("Degrees = " + degrees);

   aValue.value = degrees.toFixed(0);
});
