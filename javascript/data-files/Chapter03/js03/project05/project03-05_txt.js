/*    JavaScript 7th Edition
      Chapter 3
      Project 03-05

      Application to generate a horizontal bar chart
      Author: Jesse Shults
      Date:   10/27/25

      Filename: project03-05.js
*/

// ✅ FIXED — arrays must use [ ] not ( )
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

// ✅ FIXED — array closing bracket typo
let sales = [10281, 12255, 25718, 21403, 16142];

// Variable to calculate total sales
let totalSales = 0;

// ✅ FIXED — correct function name (case-sensitive)
sales.forEach(addToTotal);

// Loop through each phone model
for (let i = 0; i < phones.length; i++) {

   let barChart = "";   // variable to store HTML code for one row

   // ✅ FIXED — correct calculation of barPercent
   let barPercent = Math.round((sales[i] / totalSales) * 100);

   let cellTag = "";   // determines the class of td elements used for bar cells

   // ✅ FIXED — added missing colons in case statements and proper switch syntax
   switch (phones[i]) {
      case "Photon 6E": cellTag = "<td class='group1'></td>"; break;
      case "Photon 6X": cellTag = "<td class='group2'></td>"; break;
      case "Photon 7E": cellTag = "<td class='group3'></td>"; break;
      case "Photon 7X": cellTag = "<td class='group4'></td>"; break;
      case "Photon 8P": cellTag = "<td class='group5'></td>"; break;
   }

   // Add label with phone model and formatted number
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";

   // ✅ FIXED — start at 0 and stop at < barPercent
   for (let j = 0; j < barPercent; j++) {
      barChart += cellTag;
   }

   barChart += "</tr>";

   // ✅ FIXED — reference first tbody element and use [0] to access it
   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeend", barChart);
}

// Callback function to sum total sales
function addToTotal(value) {
   totalSales += value;
}

// Function to format numbers with thousands separator
function formatNumber(value) {
   return value.toLocaleString();
}
