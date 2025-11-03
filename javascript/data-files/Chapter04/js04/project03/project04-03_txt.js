"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Jesse Shults
      Date: 11/03/25

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// References to elements in the web page
let wordCountBox = document.getElementById("charCount");
let warningBox = document.getElementById("warningBox");
let commentBox = document.getElementById("commentBox");

// Event listener for typing into the comment box
commentBox.addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Retrieve text from the comment box
   let commentText = commentBox.value;

   // Count the number of characters
   let charCount = countCharacters(commentText);

   // Try...Catch...Finally structure for limit enforcement
   try {
      if (charCount > MAX_REVIEW) {
         throw "You have exceeded the character count limit";
      }
      // Clear warning if under the limit
      warningBox.innerHTML = "";
   } catch (err) {
      // Display warning if character limit exceeded
      warningBox.innerHTML = err;
   } finally {
      // Always update the character counter display
      wordCountBox.innerHTML = charCount;
   }
}

// Function to count the number of characters in a text string
function countCharacters(textStr) {
   return textStr.length;
}









/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 