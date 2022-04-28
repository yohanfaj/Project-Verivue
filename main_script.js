var btn_audio_check = new Audio('https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726');
btn_audio_check.volume = 0.5;

// STARTING BUTTONS

const myopia_start_btn = document.querySelector("#myopia_start"); // Get the button from the page
// Detect clicks on the button
if (myopia_start_btn) {
  myopia_start_btn.onclick = function () {
    btn_audio_check.play();
    window.open("myopia/index.html", "_self");
  };
}

const amd_start_btn = document.querySelector("#amd_start"); // Get the button from the page
// Detect clicks on the button
if (amd_start_btn) {
  amd_start_btn.onclick = function () {
    btn_audio_check.play();
    window.open("amd/index.html", "_self");
  };
}

const astig_start_btn = document.querySelector("#astig_start"); // Get the button from the page
// Detect clicks on the button
if (astig_start_btn) {
  astig_start_btn.onclick = function () {
    btn_audio_check.play();
    window.open("astigmatism/index.html", "_self");
  };
}

const dalton_start_btn = document.querySelector("#dalton_start"); // Get the button from the page
// Detect clicks on the button
if (dalton_start_btn) {
  dalton_start_btn.onclick = function () {
    btn_audio_check.play();
    window.open("daltonism/index.html", "_self");
  };
}