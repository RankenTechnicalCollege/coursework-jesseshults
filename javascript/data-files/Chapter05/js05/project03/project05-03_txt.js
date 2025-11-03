"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Hands‑on Project 5‑3

      Application to generate a Table of Contents for a document of any length
      Author: Jesse Shults
      Date: 11/03/25

      Filename: project05‑03.js
*/

// Get references
let sourceDoc    = document.getElementById("source_doc");
let toc          = document.getElementById("toc");
let headingCount = 1;
const heading    = "H2";

// Loop through all children of sourceDoc
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {
   if (n.nodeName === heading) {
      // Create anchor and set name
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;
      n.insertBefore(anchor, n.firstChild);

      // Create list item and link
      let listItem = document.createElement("li");
      let link     = document.createElement("a");
      link.textContent = n.textContent;
      link.href        = "#doclink" + headingCount;
      listItem.appendChild(link);
      toc.appendChild(listItem);

      headingCount++;
   }
}

