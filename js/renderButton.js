// This module is for the re-render button functionality

var buttonContainer = document.getElementById('renderButton');
var buttonEl = document.createElement('button');
buttonEl.innerText = "Re-render Chart";
buttonEl.id = "buttonStyle";
// attach button to parent element
buttonContainer.appendChild(buttonEl);

// Event Handler
buttonEl.addEventListener("click", reChart);

// button for resetting data

var resetButtonRef = document.getElementById('clearButton');
var resetButtonEl = document.createElement('button');
resetButtonEl.innerText = "Reset All Data";
resetButtonEl.id = "buttonStyle";

resetButtonRef.appendChild(resetButtonEl);

resetButtonEl.addEventListener('click', clearData); 