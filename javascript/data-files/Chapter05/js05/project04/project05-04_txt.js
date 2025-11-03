"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Jesse Shults
      Date: 2025-11-03

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// Loop through each phrase and add click event
for (let i = 0; i < phrases.length; i++) {
   phrases[i].onclick = function () {
      // Create <h1> element with phrase text
      let phrase = document.createElement("h1");
      phrase.textContent = this.textContent;

      // Create <p> element with footnote
      let footnote = document.createElement("p");
      footnote.textContent = footnotes[i];
      footnote.style.fontStyle = "italic";
      footnote.style.fontSize = "1.2em";

      // Create Close button
      let closeButton = document.createElement("input");
      closeButton.type = "button";
      closeButton.value = "Close Footnote";
      closeButton.style.display = "block";
      closeButton.style.margin = "10px auto";

      // Create popup window
      let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");

      // Style the popup body
      popup.document.body.style.backgroundColor = "ivory";
      popup.document.body.style.fontSize = "16px";
      popup.document.body.style.padding = "10px";

      // Append elements to the popup
      popup.document.body.appendChild(phrase);
      popup.document.body.appendChild(footnote);
      popup.document.body.appendChild(closeButton);

      // Close popup on button click
      closeButton.onclick = function () {
         popup.close();
      };
   };
}
