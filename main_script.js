// STARTING BUTTONS

const myopia_start_btn = document.querySelector("#myopia_start"); // Get the button from the page
// Detect clicks on the button
if (myopia_start_btn) {
  myopia_start_btn.onclick = function () {
    window.open("myopia.html", "_self");
  };
}

const amd_start_btn = document.querySelector("#amd_start"); // Get the button from the page
// Detect clicks on the button
if (amd_start_btn) {
  amd_start_btn.onclick = function () {
    window.open("amd/index.html", "_self");
  };
}

const astig_start_btn = document.querySelector("#astig_start"); // Get the button from the page
// Detect clicks on the button
if (astig_start_btn) {
  astig_start_btn.onclick = function () {
    window.open("astigmatism.html", "_self");
  };
}

const dalton_start_btn = document.querySelector("#dalton_start"); // Get the button from the page
// Detect clicks on the button
if (dalton_start_btn) {
  dalton_start_btn.onclick = function () {
    window.open("daltonism.html", "_self");
  };
}