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
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration);

// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = 0; i < allTiles.length; i++) {
      let randomIndex = Math.floor(allTiles.length * Math.random());
      board.insertBefore(board.children[randomIndex], board.children[i]);
   }
}

// Function that sets up the game play
function playConcentration() {
   for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].onclick = function () {
         if (tilesFlipped < 2 && this.lastElementChild.className === "back") {
            this.appendChild(this.firstElementChild);
            tilesFlipped++;

            if (tilesFlipped === 1) {
               firstFlipped = this;
            } else if (tilesFlipped === 2) {
               secondFlipped = this;

               if (
                  firstFlipped.firstElementChild.src ===
                  secondFlipped.firstElementChild.src
               ) {
                  tilesFlipped = 0; // keep both tiles flipped
               } else {
                  timeID = window.setTimeout(flipBack, 1000); // 1 second
               }
            }
         }
      };
   }

   function flipBack() {
      if (
         firstFlipped.firstElementChild.src !==
         secondFlipped.firstElementChild.src
      ) {
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }
      tilesFlipped = 0;
   }
}

