"use strict";

/* 
   Author: Jesse Shults
   Date:   11/15/2025
   File:   project06-01.js
*/

// references to page elements
let submitButton = document.getElementById("submitButton");
let pwd          = document.getElementById("pwd");
let pwd2         = document.getElementById("pwd2");

// run this code whenever the Save/Submit button is clicked
submitButton.addEventListener("click", function () {
  
  // clear any previous custom message
  pwd.setCustomValidity("");

  // 1) password does NOT match the pattern in the HTML (too short / no letter / no number)
  if (pwd.validity.patternMismatch) {
    pwd.setCustomValidity(
      "Your password must be at least 8 characters with at least one letter and one number"
    );

  // 2) passwords don’t match
  } else if (pwd.value !== pwd2.value) {
    pwd.setCustomValidity("Your passwords must match");

  // 3) all good
  } else {
    pwd.setCustomValidity("");
  }
});
