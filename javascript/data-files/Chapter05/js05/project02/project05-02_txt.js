"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Jesse Shults
      Date: 2025-11-03

      Filename: project05-02.js
*/

// Declare references to page elements
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

// Add event listeners to each image
for (let i = 0; i < images.length; i++) {
   images[i].onclick = function () {
      // If image is in the bucket, move it to the list
      if (this.parentElement.id === "photo_bucket") {
         let newItem = document.createElement("li");
         photoList.appendChild(newItem);
         newItem.appendChild(this);
      } else {
         // If image is in the list, move it back to the bucket
         let oldItem = this.parentElement;
         photoBucket.appendChild(this);
         oldItem.parentElement.removeChild(oldItem);
      }
   };
}
