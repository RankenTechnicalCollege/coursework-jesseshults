"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Jesse Shults
      Date:   11/15/2025

      Filename: project07-03.js
*/

// References to page elements
let currentTime   = document.getElementById("currentTime");
let daysLeftBox   = document.getElementById("days");
let hrsLeftBox    = document.getElementById("hours");
let minsLeftBox   = document.getElementById("minutes");
let secsLeftBox   = document.getElementById("seconds");

// Helper function to format numbers as two digits (e.g., 7 -> "07")
function formatTwoDigits(num) {
   return num.toString().padStart(2, "0");
}

// Main function to update the clock and countdown
function countdown() {
   // Current date and time
   let now = new Date();
   currentTime.textContent = now.toLocaleString();

   // Target: January 1 of the next year
   let currentYear = now.getFullYear();
   let newYear = new Date(currentYear + 1, 0, 1);  // Jan 1, next year

   // Time difference in milliseconds
   let diff = newYear - now;

   // Convert difference to total seconds
   let totalSeconds = Math.floor(diff / 1000);

   // Calculate days, hours, minutes, seconds
   let daysLeft = Math.floor(totalSeconds / (24 * 60 * 60));
   totalSeconds %= (24 * 60 * 60);

   let hoursLeft = Math.floor(totalSeconds / (60 * 60));
   totalSeconds %= (60 * 60);

   let minutesLeft = Math.floor(totalSeconds / 60);
   let secondsLeft = totalSeconds % 60;

   // Display values
   daysLeftBox.textContent = daysLeft;
   hrsLeftBox.textContent  = formatTwoDigits(hoursLeft);
   minsLeftBox.textContent = formatTwoDigits(minutesLeft);
   secsLeftBox.textContent = formatTwoDigits(secondsLeft);
}

// Run immediately once, then every second
countdown();
setInterval(countdown, 1000);
