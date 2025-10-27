/*
   JavaScript 7th Edition
   Chapter 3
   Project 03-04

   Application to write customer reviews
   Author: Jesse Shults
   Date:   10/27/25

   Filename: project03-04.js
*/

// Sample data
let reviewTitles = [
  "My Favorite Workout Game",
  "Poor Choreography",
  "Buggy with Poor Tech Support",
  "Nice Improvement"
];

let reviewers = [
  "WillHa85",
  "GoldFry26",
  "Mittens41",
  "TompkinS8"
];

let reviewDates = [
  "11/18/2024",
  "11/17/2024",
  "11/15/2024",
  "11/10/2024"
];

let reviewRatings = [4, 2, 1, 3];

let reviewSummaries = [
  "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
  "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography.",
  "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
  "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market."
];

let reviewTypes = ["P", "N", "", ""];

// ⭐ Function to generate star images based on rating
function starImages(rating) {
  let imageText = "";
  for (let i = 1; i <= rating; i++) {
    imageText += "<img src='star.png' alt='star'>";
  }
  return imageText;
}

// 🔁 Loop to generate each review’s HTML table
for (let i = 0; i < reviewers.length; i++) {
  let reviewCode = "";

  // Set table class based on review type
  if (reviewTypes[i] === "P") {
    reviewCode += "<table class='prime'>";
  } else if (reviewTypes[i] === "N") {
    reviewCode += "<table class='new'>";
  } else {
    reviewCode += "<table>";
  }

  // Add review contents
  reviewCode += `<caption>${reviewTitles[i]}</caption>`;
  reviewCode += `<tr><th>By</th><td>${reviewers[i]}</td></tr>`;
  reviewCode += `<tr><th>Review Date</th><td>${reviewDates[i]}</td></tr>`;
  reviewCode += `<tr><th>Rating</th><td>${starImages(reviewRatings[i])}</td></tr>`;
  reviewCode += `<tr><td colspan='2'>${reviewSummaries[i]}</td></tr>`;
  reviewCode += "</table>";

  // Insert into <article>
  document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeend", reviewCode);
}
