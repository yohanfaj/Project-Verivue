//Cookies management
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

//BEGINNING OF SCRIPT

//Three variables for each form
var send_check = "";
var form = false;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
var textBox = document.getElementById("text_box");
btn_audio_check.volume = 0.5;
var amdImgNumber = 0;
//Declaration of disease
var RedGreenDeficiencies = false;
var RedDeficiencies = false;
var GreenDeficiencies = false;

//End of declaration

// Hidding the modal on Escape or Enter

window.addEventListener("keydown", function (e) {
  if (
    document.getElementById("rightHandModal").style.display != "none" &&
    (e.key == "Escape" || e.key == "Enter")
  ) {
    document.getElementById("rightHandModal").style.display = "none";
  } else if (e.key == "Escape") {
    document.getElementById("rightHandModal").style.display = "block";
  }
});

var noNumber = document.getElementById("noNumber");
noNumber.onclick = function () {
  //This will run on click of no colour
  checkAnswer("noColor");
};
var send = document.getElementById("send");

//We listen for the entire
const input = document.querySelector("input");
input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
      send_check = textBox.value;
  if (send_check == "") {
    textBox.style.borderColor = "red";
    alert("Please click 'I don't see any colours' if you don't see anything");
    return;
  }
  textBox.style.borderColor = "black";
  checkAnswer(send_check);
  }
});

send.onclick = function () {
  //This will run on click of no colour
  send_check = textBox.value;
  if (send_check == "") {
    textBox.style.borderColor = "red";
    alert("Please click 'I don't see any colours' if you don't see anything");
    return;
  }
  textBox.style.borderColor = "black";
  checkAnswer(send_check);
};

function checkAnswer(userIn) {
  if (amdImgNumber == 0) {
    if (userIn != "74") {
      RedGreenDeficiencies = true;
    }
  } else if (amdImgNumber == 1) {
    if (userIn != "6") {
      RedGreenDeficiencies = true;
    }
  } else if (amdImgNumber == 2) {
    if (userIn == "4") {
      RedDeficiencies = true;
    } else if (userIn == "2") {
      GreenDeficiencies = true;
    } else if (userIn != "42") {
      RedGreenDeficiencies = true;
    }
  } else if (amdImgNumber == 3) {
  }
  //This bit of code should run in ALL cases
  textBox.value = "";
  btn_audio_check.play();
  amdImgNumber++;
  changeImage();
}

function changeImage() {
  if (amdImgNumber == 1) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/thumbnails%2F6%20rouge-vert.avif?1653065868431";
  } else if (amdImgNumber == 2) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/thumbnails%2F42%20-%20def%20rouge%20-%20def%20vert.avif?1653065971073";
  } else if (amdImgNumber == 3) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/thumbnails%2FNormal.avif?1653066283732";
  } else {
    //Here we close the test
    var isAnyPositive = false;
    if (RedGreenDeficiencies == true) {
      setCookie("hasRGdef", "true", 1);
      isAnyPositive = true;
    } else {
      setCookie("hasRGdef", "false", 1);
    }
    if (RedDeficiencies == true) {
      isAnyPositive = true;
      setCookie("hasRdef", "true", 1);
      isAnyPositive = true;
    } else {
      setCookie("hasRdef", "false", 1);
    }
    if (GreenDeficiencies == true) {
      setCookie("hasGdef", "true", 1);
      isAnyPositive = true;
    } else {
      setCookie("hasGdef", "false", 1);
    }
    //I return the binary cookie
    if (isAnyPositive) setCookie("hasDaltonism", "true", 1);
    else setCookie("hasDaltonism", "false", 1);
    //Now I decided where I redirect
    if (getCookie("doAllTests") == "true") {
      window.open("/result/index.html", "_self");
    } else {
      window.open("/daltonism/result/index.html", "_self");
    }
  }
}
