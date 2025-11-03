"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-05

      Project to create a Concentration game with flipping tiles
      Author: Jesse Shults
      Date: 2025-11-03

      Filename: project05-05.js
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped = null;
let secondFlipped = null;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration);

// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = allTiles.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      board.insertBefore(allTiles[randomIndex], allTiles[i]);
   }
}

// Function that sets up the game play
function playConcentration() {
   for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].onclick = function () {
         // Prevent flipping more than two tiles
         if (tilesFlipped === 2) return;

         // Only flip if the tile is face down (back is on top)
         if (this.lastElementChild.className === "back") {
            // Flip the tile
            this.appendChild(this.firstElementChild);
            tilesFlipped++;

            if (tilesFlipped === 1) {
               firstFlipped = this;
            } else if (tilesFlipped === 2) {
               secondFlipped = this;

               // Check if tiles match
               let img1 = firstFlipped.querySelector(".front").src;
               let img2 = secondFlipped.querySelector(".front").src;

               if (img1 !== img2) {
                  // Mismatch - flip back after 1 second
                  timeID = window.setTimeout(flipBack, 1000);
               } else {
                  // Match - reset count
                  tilesFlipped = 0;
               }
            }
         }
      };
   }

   // Function to flip mismatched tiles back
   function flipBack() {
      if (firstFlipped && secondFlipped) {
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      firstFlipped = null;
      secondFlipped = null;
      tilesFlipped = 0;
   }
}

