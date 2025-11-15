"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Jesse Shults
      Date: 11/15/2025

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

// initial list display
generateCustomerList();


// -------------------------------
// FUNCTION: Update the OL list
// -------------------------------
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let li = document.createElement("li");
      li.textContent = customers[i];
      customerList.appendChild(li);
   }
}


// -------------------------------
// ADD CUSTOMER
// -------------------------------
addButton.onclick = function() {
   let name = customerName.value.trim();

   if (name === "") {
      status.textContent = "Please enter a customer name to add.";
      return;
   }

   customers.push(name);
   generateCustomerList();

   status.textContent = `"${name}" has been added to the queue.`;
   customerName.value = "";
};


// -------------------------------
// SEARCH CUSTOMER
// -------------------------------
searchButton.onclick = function() {
   let name = customerName.value.trim();

   if (name === "") {
      status.textContent = "Please enter a name to search.";
      return;
   }

   let index = customers.indexOf(name);

   if (index !== -1) {
      status.textContent = `"${name}" found at position ${index + 1}.`;
   } else {
      status.textContent = `"${name}" was NOT found in the queue.`;
   }
};


// -------------------------------
// REMOVE CUSTOMER BY NAME
// -------------------------------
removeButton.onclick = function() {
   let name = customerName.value.trim();

   if (name === "") {
      status.textContent = "Please enter a name to remove.";
      return;
   }

   let index = customers.indexOf(name);

   if (index !== -1) {
      customers.splice(index, 1);
      generateCustomerList();
      status.textContent = `"${name}" has been removed.`;
   } else {
      status.textContent = `"${name}" was not found and cannot be removed.`;
   }

   customerName.value = "";
};


// -------------------------------
// REMOVE TOP CUSTOMER
// -------------------------------
topButton.onclick = function() {
   if (customers.length === 0) {
      status.textContent = "The queue is already empty.";
      return;
   }

   let removed = customers.shift();
   generateCustomerList();

   status.textContent = `"${removed}" was removed from the top of the queue.`;
};
