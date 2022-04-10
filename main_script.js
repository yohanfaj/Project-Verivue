/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");



// STARTING BUTTONS

const myopia_start_btn = document.querySelector("#myopia_start"); // Get the button from the page
// Detect clicks on the button
if (myopia_start_btn) {
  myopia_start_btn.onclick = function () {
    window.open("myopia.html");
  };
}

const amd_start_btn = document.querySelector("#amd_start"); // Get the button from the page
// Detect clicks on the button
if (amd_start_btn) {
  amd_start_btn.onclick = function () {
    window.open("amd.html");
  };
}

const astig_start_btn = document.querySelector("#astig_start"); // Get the button from the page
// Detect clicks on the button
if (astig_start_btn) {
  astig_start_btn.onclick = function () {
    window.open("astigmatism.html");
  };
}

const dalton_start_btn = document.querySelector("#dalton_start"); // Get the button from the page
// Detect clicks on the button
if (dalton_start_btn) {
  dalton_start_btn.onclick = function () {
    window.open("daltonism.html");
  };
}