// This module is for the re-render button functionality

var buttonContainer = document.getElementById('renderButton');
var buttonEl = document.createElement('button');
buttonEl.innerText = "Re-render Chart";
buttonEl.id = "buttonStyle";
// attach button to parent element
buttonContainer.appendChild(buttonEl);

// Event Handler
buttonEl.addEventListener("click", reChart);
