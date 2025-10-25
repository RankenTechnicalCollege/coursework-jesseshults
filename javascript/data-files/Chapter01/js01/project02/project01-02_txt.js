/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-2

    Author: Jesse Shults
    Date: 10/25/25  

    Filename: project01-02.js
*/

// Define variables for service name and service speed
let service1Name = "Basic";
let service2Name = "Express";
let service3Name = "Extreme";
let service4Name = "Ultimate";

let service1Speed = "50 Mbps";
let service2Speed = "100 Mbps";
let service3Speed = "500 Mbps";
let service4Speed = "1 Gig";

// Output values into the HTML table
document.getElementById("service1").textContent = service1Name;
document.getElementById("speed1").textContent = service1Speed;

document.getElementById("service2").textContent = service2Name;
document.getElementById("speed2").textContent = service2Speed;

document.getElementById("service3").textContent = service3Name;
document.getElementById("speed3").textContent = service3Speed;

document.getElementById("service4").textContent = service4Name;
document.getElementById("speed4").textContent = service4Speed;
