/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Jesse Shults
      Date:   10/25/25

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
   return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
   return degree * 1.8 + 32;
}

document.getElementById("cValue").onchange = function () {
   let cDegree = parseFloat(document.getElementById("cValue").value);
   if (!isNaN(cDegree)) {
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree).toFixed(0);
   }
};

document.getElementById("fValue").onchange = function () {
   let fDegree = parseFloat(document.getElementById("fValue").value);
   if (!isNaN(fDegree)) {
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree).toFixed(0);
   }
};
