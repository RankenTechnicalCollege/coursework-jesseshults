"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Jesse Shults
      Date:   11/15/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {

   let pwdField = document.getElementById("pwd");
   let pwd = pwdField.value;
   let feedback = document.getElementById("feedback");

   // Clear old feedback
   feedback.textContent = "";
   feedback.style.color = "";

   // Password must be at least 8 characters
   if (pwd.length < 8) {
      e.preventDefault();          // Stop form submission
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
      pwdField.focus();
   } 
   else {
      feedback.textContent = "Password length OK.";
      feedback.style.color = "green";
   }

});
