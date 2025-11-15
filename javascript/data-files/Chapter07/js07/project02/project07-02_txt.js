"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-02

      Poker Hand Dealer
      Author: Jesse Shults
      Date:   11/15/2025

      Filename: project07-02.js
*/

// ----- Build the deck -----
let suits = ["♠", "♥", "♦", "♣"];
let ranks = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let deck = [];

function buildDeck() {
   deck = [];
   for (let suit of suits) {
      for (let rank of ranks) {
         deck.push(rank + suit);
      }
   }
}

// ----- Shuffle the deck -----
function shuffleDeck() {
   for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
   }
}

// ----- Show cards left -----
function updateCardsLeft() {
   document.getElementById("cardsLeft").textContent = deck.length;
}

// ----- Deal 5 cards -----
function dealHand() {
   // Reset deck if fewer than 5 cards remain
   if (deck.length < 5) {
      buildDeck();
      shuffleDeck();
   }

   // Deal 5 cards
   for (let i = 1; i <= 5; i++) {
      let cardSpan = document.getElementById("card" + i);
      let card = deck.pop();  
      cardSpan.textContent = card;
   }

   updateCardsLeft();
}

// ----- Initialize -----
buildDeck();
shuffleDeck();
updateCardsLeft();

// Deal button
document.getElementById("deal").addEventListener("click", dealHand);


            
