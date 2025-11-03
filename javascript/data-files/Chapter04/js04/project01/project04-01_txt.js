"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Jesse Shults
      Date:   11/03/25

      Filename: project04-01.js
*/

// Global Constants (fixed logic errors: use dollar amounts, not cents)
const COST_PER_LB = 0.50;     // 50 cents per pound
const COST_PER_MILE = 0.75;   // 75 cents per mile
const SETUP_COST = 500;       // $500 setup fee

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");

// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box

   // ---- Check Estimated Weight ----
   try {
      if (!(wgtBox.value > 0)) {
         throw "!! Enter a positive weight";
      }
      totalCost += wgtBox.value * COST_PER_LB;
   } catch (err) {
      msgBox.innerHTML = err;
      document.getElementById("totalBox").innerHTML = "";
      return; // Stop calculation
   }

   // ---- Check Estimated Distance ----
   try {
      if (!(distBox.value > 0)) {
         throw "!! Enter a positive mileage";
      }
      totalCost += distBox.value * COST_PER_MILE;
   } catch (err) {
      msgBox.innerHTML = err;
      document.getElementById("totalBox").innerHTML = "";
      return; // Stop calculation
   }

   // ---- Optional Setup and Installation ----
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST;
   }

   // ---- Display Formatted Result ----
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}
