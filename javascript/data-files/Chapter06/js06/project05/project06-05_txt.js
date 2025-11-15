"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: Jesse Shults
      Date:   11/15/2025

      Filename: project06-05.js
*/

// Run after the page has fully loaded
window.addEventListener("load", function () {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session to attend
   document.getElementById("regSubmit").addEventListener("click", sessionTest);
   
   // Recalculate the shopping cart when any field loses focus or changes
   document.getElementById("fnBox").addEventListener("blur", calcCart);
   document.getElementById("lnBox").addEventListener("blur", calcCart);
   document.getElementById("groupBox").addEventListener("blur", calcCart);
   document.getElementById("mailBox").addEventListener("blur", calcCart);
   document.getElementById("phoneBox").addEventListener("blur", calcCart);
   document.getElementById("sessionBox").addEventListener("change", calcCart);
   document.getElementById("banquetBox").addEventListener("blur", calcCart);
   document.getElementById("mediaCB").addEventListener("click", calcCart);
});


// Function to verify that a session was selected by the user
function sessionTest() {
   let confSession = document.getElementById("sessionBox");

   // If nothing is selected, set a custom validity message
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   } else {
      confSession.setCustomValidity("");
   }
}


// Function to calculate the shopping cart total
function calcCart() {

   // Calculate the banquet cost for all guests 
   let guestCount = document.forms.register.elements.banquetGuests.value || 0;
   let guestCost  = guestCount * 55;
   document.getElementById("regBanquet").textContent = guestCount;
   
   // Determine the cost of the selected session
   let sessionCost   = 0;    // Initial cost of the session
   let sessionChoice = "";   // Initial chosen session

   // Index of the chosen session (FIX: use selectedIndex, not index)
   let selectedSession = document.getElementById("sessionBox").selectedIndex;
   
   // Retrieve the name and cost of the selected session  
   if (selectedSession !== -1) {
      let sessionSelect = document.getElementById("sessionBox");
      sessionChoice = sessionSelect.options[selectedSession].text;
      sessionCost   = sessionSelect.options[selectedSession].value;
   }
   
   // Determine the cost of the media pack
   let mediaCost   = 0;      // Initial media cost
   let mediaChoice = "";     // Initial media choice
   
   // FIX: check the correct checkbox element and its checked property
   if (document.forms.register.elements.mediaPack.checked) {
      mediaChoice = "yes";
      mediaCost   = 115;
   }
   
   // Calculate total cost of the conference
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = guestCost*1 + sessionCost*1 + mediaCost*1;
   
   // Display the field values and calculated values in the Shopping Cart table
   let form = document.forms.register;

   document.getElementById("regName").textContent =
      form.elements.firstName.value + " " + form.elements.lastName.value;

   document.getElementById("regGroup").textContent  = form.elements.group.value;
   document.getElementById("regEmail").textContent  = form.elements.email.value;
   document.getElementById("regPhone").textContent  = form.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regPack").textContent    = mediaChoice;

   // FIX: correct options object for toLocaleString
   document.getElementById("regTotal").textContent =
      totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
