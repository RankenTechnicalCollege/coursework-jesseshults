"use strict";
/*
   JavaScript 7th Edition
   Chapter 6
   Hands-on Project 6-3

   Author: Jesse Shults
   Date:   11/15/2025

   Filename: project06-03.js
*/

// references to main elements
const useShip   = document.getElementById("useShip");
const form      = document.getElementById("billShip");
const errorBox  = document.getElementById("errorBox");

// list of field base names to sync
const fieldNames = [
  "firstname",
  "lastname",
  "address1",
  "address2",
  "city",
  "state",
  "country",
  "code"
];

/**
 * Copy shipping values to billing and enable/disable billing fields
 */
function syncBillingFields() {
  fieldNames.forEach(name => {
    const shipField = document.getElementById(name + "Ship");
    const billField = document.getElementById(name + "Bill");

    if (!shipField || !billField) return;

    if (useShip.checked) {
      // copy value and lock the billing field
      billField.value = shipField.value;
      billField.disabled = true;
    } else {
      // unlock and clear billing field so user can type separately
      billField.disabled = false;
      billField.value = "";
    }
  });
}

// when the checkbox is toggled
useShip.addEventListener("change", syncBillingFields);

// if checkbox is checked and user edits shipping fields,
// keep billing fields in sync live
fieldNames.forEach(name => {
  const shipField = document.getElementById(name + "Ship");
  const billField = document.getElementById(name + "Bill");

  if (!shipField || !billField) return;

  shipField.addEventListener("input", () => {
    if (useShip.checked) {
      billField.value = shipField.value;
    }
  });

  // also sync dropdowns (state) on change
  shipField.addEventListener("change", () => {
    if (useShip.checked) {
      billField.value = shipField.value;
    }
  });
});

// basic validation message using Constraint Validation API
form.addEventListener("submit", evt => {
  if (!form.checkValidity()) {
    evt.preventDefault();
    errorBox.textContent = "Please complete all required fields before continuing.";
  } else {
    errorBox.textContent = "";
  }
});

