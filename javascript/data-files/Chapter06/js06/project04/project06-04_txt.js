"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a vehicle picker

      Author: Jesse Shults
      Date:   11/15/2025

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim  = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions  = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions  = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes  = makeOptions.length;
let models = modelOptions.length;
let trims  = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// ------------ helper functions ------------ //

/**
 * Show all options in a given <select>
 */
function showAll(selectList) {
   let options = selectList.options;
   for (let i = 0; i < options.length; i++) {
      options[i].style.display = "block";
   }
   // reset to first option
   selectList.selectedIndex = 0;
}

/**
 * Filter a <select> to only show options with a given class name
 * Keeps the first option (e.g., "Select Model" / "Select Trim")
 */
function filterSelect(selectList, category) {
   let options = selectList.options;

   // always reset the selection to the first option
   selectList.selectedIndex = 0;

   for (let i = 0; i < options.length; i++) {
      if (i === 0) {
         // keep the "Select ..." placeholder visible
         options[i].style.display = "block";
      } else if (options[i].className === category) {
         options[i].style.display = "block";
      } else {
         options[i].style.display = "none";
      }
   }
}


// ------------ event handlers ------------ //

// When Make changes, filter the Model list
make.onchange = function () {
   let makeIndex    = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;

   if (makeIndex === 0) {
      showAll(model);
      showAll(trim);  // reset trim too
   } else {
      filterSelect(model, makeCategory);
      showAll(trim);  // reset trim when make changes
   }
};

// When Model changes, filter the Trim list
model.onchange = function () {
   let modelIndex    = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;

   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }
};


// When the Select button is clicked, build the vehicle description
selectVehicle.onclick = function () {
   let makeIndex  = make.selectedIndex;
   let modelIndex = model.selectedIndex;
   let trimIndex  = trim.selectedIndex;

   if (makeIndex === 0 || modelIndex === 0 || trimIndex === 0) {
      vehicle.textContent = "Please choose a make, model, and trim.";
   } else {
      let makeText  = make.options[makeIndex].text;
      let modelText = model.options[modelIndex].text;
      let trimText  = trim.options[trimIndex].text;

      vehicle.textContent = makeText + " " + modelText + " — " + trimText;
   }
};

