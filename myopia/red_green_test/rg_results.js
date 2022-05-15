// BUTTONS

var btn_audio_check = new Audio('https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726');
btn_audio_check.volume = 0.5;

const details_btn = document.querySelector("#details"); 
// Detect clicks on the button
if (details_btn) {
  details_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/details.html", "_self");
  };
}

const distance_btn = document.querySelector("#distance_start"); 
// Detect clicks on the button
if (distance_btn) {
  distance_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/distance_test/index.html", "_self");
  };
}

const home_btn = document.querySelector("#back_home"); 
// Detect clicks on the button
if (home_btn) {
  home_btn.onclick = function () {
    btn_audio_check.play();
    window.open("https://verivue.glitch.me/", "_self");
  };
}


// GETTING RESULTS
var myopiaPts;
var hyperopiaPts;

if(document.cookie.split("; ").find(row => row.startsWith("Myopia Points: ") != undefined))
   myopiaPts = document.cookie.split("; ").find(row => row.startsWith("Myopia Points: ")).split(": ")[1];
else
  myopiaPts = 0;

if (typeof document.cookie.split("; ").find(row => row.startsWith("Hyperopia Points: ") === undefined))
  hyperopiaPts = 0;
else
  hyperopiaPts = document.cookie.split("; ").find(row => row.startsWith("Hyperopia Points: ")).split(": ")[1];


document.getElementById("Myopia_results").replace("x", myopiaPts);
document.getElementById("Hyperopia_results").replace("x", hyperopiaPts);

