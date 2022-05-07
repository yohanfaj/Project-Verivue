var isMyopia = false;
var button_enable = true;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
btn_audio_check.volume = 0.5;
var MyopiaImgNumber = 0;

window.addEventListener("load", load);

function load() {
  negative_answer_btn.disabled = true;
  positive_answer_btn.disabled = true;
  document.getElementById("rightHandModal").style.display = "block";
}

const negative_answer_btn = document.querySelector("#no_answer"); // louis
if (negative_answer_btn) {
  negative_answer_btn.onclick = function () {
    MyopiaImgNumber++;
    isMyopia = true;
    btn_audio_check.play();
    changeImage();
    disableButtons();
  };
}

const positive_answer_btn = document.querySelector("#yes_answer"); // louis
if (positive_answer_btn) {
  positive_answer_btn.onclick = function () {
    btn_audio_check.play();
    MyopiaImgNumber++;
    changeImage();
    disableButtons();
  };
}

const distance_btn = document.querySelector("#go"); // Le bouton lestgo pour démarrer le distance test
// Detect clicks on the button
if (distance_btn) {
  distance_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/distance_test/go.html", "_self");
  };
}

function disableButtons() {
  negative_answer_btn.disabled = true;
  positive_answer_btn.disabled = true;
  setTimeout(reEnableButtons, 2000);
}

function reEnableButtons() {
  negative_answer_btn.disabled = false;
  positive_answer_btn.disabled = false;
  button_enable = true;
}

// Open the first modal on startup
document.getElementsByClassName("close")[0].onclick = function enableButton() {
  document.getElementById("rightHandModal").style.display = "none";
  setTimeout(reEnableButtons, 2000);
};

// Click outside the box
window.onclick = function (event) {
  if (event.target == document.getElementById("rightHandModal")) {
    document.getElementById("rightHandModal").style.display = "none";
    setTimeout(reEnableButtons, 2000);
  }
};

function changeImage() {
  if (MyopiaImgNumber == 1) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (MyopiaImgNumber == 2) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_high_contrast.png?v=1649921187927";
    document.body.style.backgroundColor = "#073742";
    document.getElementById("instructions").textContent =
      "Focus on the white dot in the center for 5 seconds, are the lines surrounding it straight?";
    document.getElementById("title").style.color = "white";
    document.getElementById("instructions").style.color = "white";
    document.getElementById("select_answer").style.color = "white";
  } else if (MyopiaImgNumber == 3) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test1.jpg?v=1649921187569";
    document.body.style.backgroundColor = "#1f8bb7";
    document.getElementById("title").style.color = "black";
    document.getElementById("instructions").style.color = "black";
    document.getElementById("select_answer").style.color = "black";
    //We reprompt a modified version of the modal.
    negative_answer_btn.disabled = true;
    positive_answer_btn.disabled = true;
    document.getElementById("rightHandModal").style.display = "block";
    document.getElementById("modal-header").textContent = "Cover your LEFT eye";
    document.getElementsByClassName("modal-header")[0].style.backgroundColor =
      "#0e664c";
    document.getElementById("pModal").textContent =
      "Please cover your LEFT eye with your palm to continue. You must keep this position during all of the upcoming tests.";
    document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#3f8c75";
  } else if (MyopiaImgNumber == 4) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (MyopiaImgNumber == 5) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_high_contrast.png?v=1649921187927";
    document.body.style.backgroundColor = "#073742";
    document.getElementById("instructions").textContent =
      "Focus on the white dot in the center for 5 seconds, are the lines surrounding it straight?";
    document.getElementById("title").style.color = "white";
    document.getElementById("instructions").style.color = "white";
    document.getElementById("select_answer").style.color = "white";
  } else {
    //Here we close the test
    if (isMyopia == true) {
      document.cookie = "hasMyopia=true; path=/";
    } else {
      document.cookie = "hasMyopia=false; path=/";
    }
  }
}
