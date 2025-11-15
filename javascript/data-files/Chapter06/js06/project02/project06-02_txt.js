"use strict";
/*
   JavaScript 7th Edition
   Chapter 6
   Hands-on Project 6-2

   Author: Jesse Shults
   Date:   11/15/2025

   Filename: project06-02.js
*/

// run after page loads
window.addEventListener("load", function () {

   // get all the selection lists that have the class "optionLinks"
   let linkLists = document.querySelectorAll(".optionLinks");

   // add a change event listener to each one
   for (let i = 0; i < linkLists.length; i++) {
      linkLists[i].addEventListener("change", function (evt) {

         // the element that triggered the event (the <select>)
         let select = evt.target;

         // URL from the selected option
         let url = select.value;

         // ignore the placeholder "Select a website"
         if (url && url !== "#") {
            // navigate the browser to the selected URL
            window.location.href = url;
         }
      });
   }
});
