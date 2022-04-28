var btn_audio_check = new Audio('https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726');
btn_audio_check.volume = 0.5;

const distance_btn = document.querySelector("#distance_start"); // Get the button from the page
// Detect clicks on the button
if (distance_btn) {
  distance_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/distance_test/index.html", "_self");
  };
}

const rg_btn = document.querySelector("#rg_start"); // Get the button from the page
// Detect clicks on the button
if (rg_btn) {
  rg_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/red_green_test/index.html", "_self");
  };
}

