/*
   JavaScript 7th Edition
   Chapter 2
   Hands-on Project 2-2

   Author: Jesse Shults
   Date: 10/25/25
   Filename: project02-02.js
*/

function verifyForm() {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;

   if (name && email && phone) {
      window.alert("Thank you!");
   } else {
      window.alert("Please fill in all fields");
   }
}

document.getElementById("submit").addEventListener("click", verifyForm);
