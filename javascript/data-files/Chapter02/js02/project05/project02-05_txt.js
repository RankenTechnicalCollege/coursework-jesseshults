/*    JavaScript 7th Edition
      Chapter 2
      Project 02-05

      Application to create an online calculator
      Author: Jesse Shults
      Date:   10/25/25

      Filename: project02-05.js
*/

// ✅ Fix: use `onclick`, not `click`
document.getElementById("button0").onclick = function() {
   runCalculator("0");
};

document.getElementById("button1").onclick = function() {
   runCalculator("1");
};

document.getElementById("button2").onclick = function() {
   runCalculator("2");
};

document.getElementById("button3").onclick = function() {
   runCalculator("3");
};

document.getElementById("button4").onclick = function() {
   runCalculator("4");
};

document.getElementById("button5").onclick = function() {
   runCalculator("5");
};

document.getElementById("button6").onclick = function() {
   runCalculator("6");
};

document.getElementById("button7").onclick = function() {
   runCalculator("7");
};

document.getElementById("button8").onclick = function() {
   runCalculator("8");
};

document.getElementById("button9").onclick = function() {
   runCalculator("9");
};

document.getElementById("buttonAdd").onclick = function() {
   runCalculator("+");
};

document.getElementById("buttonMinus").onclick = function() {
   runCalculator("-");
};

// ✅ Fix: typo in function name 'runcalculator' → 'runCalculator'
// ✅ Fix: missing () on function definition
document.getElementById("buttonMultiply").onclick = function() {
   runCalculator("*");
};

document.getElementById("buttonDivide").onclick = function() {
   runCalculator("/");
};

document.getElementById("buttonDecimal").onclick = function() {
   runCalculator(".");
};

document.getElementById("buttonEnter").onclick = function() {
   runCalculator("");  // empty string signals evaluate
};

// ✅ Fix: should pass function reference, not call it immediately
document.getElementById("buttonClear").onclick = clearCalculator;

// ✅ FIXED FUNCTION: runCalculator
function runCalculator(character) {
   let calcWindow = document.getElementById("calcWindow");
   let calcValue = calcWindow.value;

   if (character === "") {
      // Evaluate
      calcWindow.value += "\n= " + evalEq(calcValue) + "\n";
   } else {
      // Add character
      calcWindow.value += character;
   }
}

// ✅ FIXED FUNCTION: clearCalculator
function clearCalculator() {
   document.getElementById("calcWindow").value = "";
}

// ✅ FIXED FUNCTION: evalEq
function evalEq(textStr) {
   let lines = textStr.split(/\r?\n/);
   let lastLine = lines[lines.length - 1];
   let eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}
