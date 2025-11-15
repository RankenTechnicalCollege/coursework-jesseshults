"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-05

      Project to compare the distribution of word lengths between two authors
      Author: Jesse Shults
      Date: 11/15/2025

      Filename: project07-05.js
*/

// -------------------------------
// Fix #1 — Wrong file input property
// this.file[0] ❌   →   this.files[0] ✅
// -------------------------------

// Load Author 1 file
document.getElementById("button1").onchange = function () {
   let file = this.files[0];
   let doc = document.getElementById("document1");
   let count = document.getElementById("count1");
   generateWordFreq(file, doc, count);
};

// Load Author 2 file
document.getElementById("button2").onchange = function () {
   let file = this.files[0];
   let doc = document.getElementById("document2");
   let count = document.getElementById("count2");
   generateWordFreq(file, doc, count);
};


// -------------------------------------------------------------
// Function: process uploaded file and calculate word frequencies
// -------------------------------------------------------------
function generateWordFreq(inputFile, outputDoc, outputCount) {

   // -------------------------------
   // Fix #2 — Wrong object constructor
   // Reader() ❌ → FileReader() ✅
   // -------------------------------
   let fr = new FileReader();

   fr.readAsText(inputFile);

   fr.onload = function () {

      // Display the document text
      outputDoc.innerHTML = fr.result;

      // -------------------------------
      // Fix #3 — Use textContent, NOT innerHTML
      // innerHTML includes HTML tags and corrupts word length counts
      // -------------------------------
      let sourceText = outputDoc.textContent;

      // -------------------------------
      // Fix #4 — Regex literal error
      // "/[^a-zA-Z\s]/g" (string) ❌  →  /[^a-zA-Z\s]/g (regex) ✅
      // -------------------------------
      let alphaRegx = /[^a-zA-Z\s]/g;
      sourceText = sourceText.replace(alphaRegx, "");

      // -------------------------------
      // Fix #5 — Regex split error
      // "\s+" (string) ❌ → /\s+/ (regex) ✅
      // -------------------------------
      let words = sourceText.split(/\s+/);

      // Initialize frequency array
      let freqs = Array(16).fill(0);

      // -------------------------------
      // Fix #6 — For-loop off-by-one
      // i <= words.length ❌ → i < words.length ✅
      // -------------------------------
      for (let i = 0; i < words.length; i++) {

         let len = words[i].length;

         if (len >= 15) {
            freqs[15]++;
         } else if (len > 0) {
            freqs[len]++;
         }
      }

      let totalWords = words.length;

      // Display results
      let outputPara = outputCount.getElementsByTagName("p");

      // -------------------------------
      // Fix #7 — WRONG percent logic
      // totalWords / freqs[i] ❌
      // correct: freqs[i] / totalWords ❗
      // -------------------------------
      for (let i = 1; i <= 15; i++) {
         let percent = ((freqs[i] / totalWords) * 100).toFixed(1) + "%";
         outputPara[i - 1].textContent = percent;
      }
   };
}


