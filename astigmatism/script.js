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

var step = 0;
var isAstigmate = false;
var button_enable = true;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
btn_audio_check.volume = 0.5;

window.addEventListener("load", load);

function load() {
  document.getElementById("rightHandModal").style.display = "block";
}

// Hidding the modal on Escape or Enter

window.addEventListener("keydown", function(e){
  if (document.getElementById("rightHandModal").style.display != "none" && (e.key == "Escape" || e.key == "Enter")) {
      document.getElementById("rightHandModal").style.display = "none";
  } else if (e.key == "Escape") {
      document.getElementById("rightHandModal").style.display = "block";
  }
});

const negative_answer_btn = document.querySelector("#no_answer");
if (negative_answer_btn) {
  negative_answer_btn.onclick = function () {
    btn_audio_check.play();
    disableButtons();
    step++
    if (step == 1) {
      setCookie("isAstigmateLeft","false",1)
      document.getElementById("modal-header").textContent = "Cover your left eye"
      document.getElementById("pModal").innerHTML = `Place yourself at a comfortable distance from the screen. <br>
            If you have glasses for distance vision or glasses with progressive lenses, keep them on.<br>
            Without pressing on the eyelid, cover your left eye with your hand.`
      document.getElementsByClassName("modal-header")[0].style.backgroundColor =
        "#0e664c";
      document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#3f8c75";
      document.getElementById("imgExplain").style = "transform: scaleX(-1);"
      document.getElementById("rightHandModal").style.display = "block";
    } else if (step == 2) {
      setCookie("isAstigmateRight","false",1)
      document.getElementById("modal-header").textContent = "Uncover both of your eyes"
      document.getElementById("pModal").innerHTML = `Place yourself at a comfortable distance from the screen. <br>
            If you have glasses for distance vision or glasses with progressive lenses, keep them on.<br>
            Uncover both of your eyes.`
      document.getElementsByClassName("modal-header")[0].style.backgroundColor =
        "#ff9933";
      document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#ff9933";
      document.getElementById("imgExplain").src = "https://c.tenor.com/_7UvW84LwaAAAAAC/blinking-eyes-huh.gif";
      document.getElementById("imgExplain").style = "";
      document.getElementById("rightHandModal").style.display = "block";
    } else if (step == 3) {
      setCookie("isAstigmateBoth","false",1)
      results();
    }
  };
}

const positive_answer_btn = document.querySelector("#yes_answer");
if (positive_answer_btn) {
  positive_answer_btn.onclick = function () {
    btn_audio_check.play();
    isAstigmate = true;
    disableButtons();
    step++;
    if (step == 1) {
      setCookie("isAstigmateLeft","true",1)
      document.getElementById("modal-header").textContent = "Cover your left eye"
      document.getElementById("pModal").innerHTML = `Place yourself at a comfortable distance from the screen. <br>
            If you have glasses for distance vision or glasses with progressive lenses, keep them on.<br>
            Without pressing on the eyelid, cover your left eye with your hand.`
      document.getElementsByClassName("modal-header")[0].style.backgroundColor =
        "#0e664c";
      document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#3f8c75";
      document.getElementById("imgExplain").style = "transform: scaleX(-1);"
      document.getElementById("rightHandModal").style.display = "block";
    } else if (step == 2) {
      setCookie("isAstigmateRight","true",1)
      document.getElementById("modal-header").textContent = "Uncover both of your eyes"
      document.getElementById("pModal").innerHTML = `Place yourself at a comfortable distance from the screen. <br>
            If you have glasses for distance vision or glasses with progressive lenses, keep them on.<br>
            Uncover both of your eyes.`
      document.getElementsByClassName("modal-header")[0].style.backgroundColor =
        "#ff9933";
      document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#ff9933";
      document.getElementById("imgExplain").src = "https://c.tenor.com/_7UvW84LwaAAAAAC/blinking-eyes-huh.gif";
      document.getElementById("imgExplain").style = ""
      document.getElementById("rightHandModal").style.display = "block";
    } else if (step == 3) {
      setCookie("isAstigmateBoth","true",1)
      results();
    }
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

function results() {
    //Here we close the test
    if (isAstigmate == true) {
      setCookie("isAstigmate","true",1);
    } else {
      setCookie("isAstigmate","false",1);
    }
    //Now I decided where I redirect
    if(getCookie("doAllTests")=="true"){
      window.open("/daltonism", "_self");
    } else {
      window.open("result/", "_self");
    }
}
