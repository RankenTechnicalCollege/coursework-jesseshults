"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jesse Shults
      Date: 2025-11-03

      Filename: project05-01.js
*/

// Constants
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements from the page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the clock display
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare interval ID and question list
let timeID;
let questionList = document.querySelectorAll("div#quiz input");

// Start quiz button handler
startQuiz.onclick = function () {
   overlay.className = "showquiz";
   timeLeft = quizTime;
   quizClock.value = timeLeft;
   timeID = setInterval(countdown, 1000);
};

// Countdown function
function countdown() {
   if (timeLeft === 0) {
      clearInterval(timeID);
      let totalCorrect = checkAnswers();

      if (totalCorrect === correctAnswers.length) {
         alert("Congratulations! You got 100% correct.");
      } else {
         let incorrect = correctAnswers.length - totalCorrect;
         alert(`You got ${incorrect} of ${correctAnswers.length} questions wrong.`);

         // Reset quiz UI
         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}

// Answer checking function
function checkAnswers() {
   let score = 0;

   for (let i = 0; i < correctAnswers.length; i++) {
      let userAnswer = questionList[i].value.trim();
      if (userAnswer === correctAnswers[i]) {
         questionList[i].style.backgroundColor = ""; // Clear color if correct
         score++;
      } else {
         questionList[i].style.backgroundColor = "rgb(255, 85, 85)"; // Red background for incorrect
      }
   }

   return score;
}





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

