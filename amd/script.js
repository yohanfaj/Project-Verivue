//Cookies management
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//BEGINNING OF SCRIPT

var isAMD = false;
var button_enable = true;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
btn_audio_check.volume = 0.5;
var amdImgNumber = 0;

window.addEventListener("load", load);

function load() {
  negative_answer_btn.disabled = true;
  positive_answer_btn.disabled = true;
  document.getElementById("rightHandModal").style.display = "block";
}

const negative_answer_btn = document.querySelector("#no_answer");
if (negative_answer_btn) {
  negative_answer_btn.onclick = function () {
    amdImgNumber++;
    isAMD = true;
    btn_audio_check.play();
    changeImage();
    disableButtons();
  };
}

const positive_answer_btn = document.querySelector("#yes_answer");
if (positive_answer_btn) {
  positive_answer_btn.onclick = function () {
    btn_audio_check.play();
    amdImgNumber++;
    changeImage();
    disableButtons();
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
  if (amdImgNumber == 1) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (amdImgNumber == 2) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_high_contrast.png?v=1649921187927";
    document.body.style.backgroundColor = "#073742";
    document.getElementById("instructions").textContent =
      "Focus on the white dot in the center for 5 seconds, are the lines surrounding it straight?";
    document.getElementById("title").style.color = "white";
    document.getElementById("instructions").style.color = "white";
    document.getElementById("select_answer").style.color = "white";
  } else if (amdImgNumber == 3) {
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
  } else if (amdImgNumber == 4) {
    document.getElementById("amsler_test").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (amdImgNumber == 5) {
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
    if (isAMD == true) {
      setCookie("hasAMD","true",1);
    } else {
      setCookie("hasAMD","false",1);
    }
    //Now I decided where I redirect
    if(getCookie("doAllTests")=="true"){
      window.open("/astigmatism", "_self");
    } else {
      window.open("result/", "_self");
    }
  }
}
