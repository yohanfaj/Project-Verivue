// Buttons variables
var button_enable = true;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
btn_audio_check.volume = 0.5;
var testSteps = 0;

// Diseases variables
var myopiaPts = 0;
var hyperopiaPts = 0;


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



// SCRIPT

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

const red_answer_btn = document.querySelector("#red_answer");
if (red_answer_btn) {
  red_answer_btn.onclick = function () {
    testSteps++;
    myopiaPts++;
    btn_audio_check.play();
    nextTestStep();
    disableButtons();
  };
}

const green_answer_btn = document.querySelector("#green_answer");
if (green_answer_btn) {
  green_answer_btn.onclick = function () {
    btn_audio_check.play();
    testSteps++;
    hyperopiaPts++;
    nextTestStep();
    disableButtons();
  };
}

const black_answer_btn = document.querySelector("#black_answer");
if (black_answer_btn) {
  black_answer_btn.onclick = function () {
    btn_audio_check.play();
    testSteps++;
    nextTestStep();
    disableButtons();
  };
}


function disableButtons() {
  red_answer_btn.disabled = true;
  green_answer_btn.disabled = true;
  black_answer_btn.disabled = true;
  setTimeout(reEnableButtons, 2000);
}

function reEnableButtons() {
  red_answer_btn.disabled = false;
  green_answer_btn.disabled = false;
  black_answer_btn.disabled = false;
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




function nextTestStep() {
  if (testSteps == 1) {
    //We reprompt a modified version of the modal.
    red_answer_btn.disabled = true;
    green_answer_btn.disabled = true;
    black_answer_btn.disabled = true;
    document.getElementById("rightHandModal").style.display = "block";
    document.getElementById("modal-header").textContent = "Cover your LEFT eye";
    document.getElementsByClassName("modal-header")[0].style.backgroundColor =
      "#0e664c";
    document.getElementById("pModal").textContent =
      "Please cover your LEFT eye with your palm to continue. You must keep this position during all of the upcoming tests.";
    document.getElementsByClassName("modal-footer")[0].style.backgroundColor =
      "#3f8c75";
    setTimeout(reEnableButtons, 2000);
  }

  if (testSteps == 2) {
    // We close the test
    /*if (myopiaPts = 2) {
      document.cookie = "Myopia Points: " + myopiaPts + ";path=/";
    }
    else if (hyperopiaPts = 2) {
      document.cookie = "Hyperopia Points: " + hyperopiaPts + ";path=/";
    }
    else {
      document.cookie = "Myopia Points: " + myopiaPts +  " | Hyperopia Points: " + hyperopiaPts + ";path=/";
    }*/
    
    // We handle the set of the cookie's result in case of a null score
    if (myopiaPts === 0)
      setCookie("Myopia Points", "0", 1);
    else
      setCookie("Myopia Points", myopiaPts.toString(), 1);
    if (hyperopiaPts === 0)
      setCookie("Hyperopia Points", "0", 1);
    else
      setCookie("Hyperopia Points", hyperopiaPts.toString(), 1);
    
    if (myopiaPts >= 1)
      setCookie("hasMyopia", "true", 1);
    else
      setCookie("hasMyopia", "false", 1
               )
    if (hyperopiaPts >= 1)
      setCookie("hasHyperopia", "true", 1);
    else
      setCookie("hasHyperopa", "false", 1);
    
    //Now I decided where I redirect
    if(getCookie("doAllTests")=="true"){
      window.open("/results/index.html", "_self"); 
    } else {
      window.open("/myopia/red_green_test/rg_results.html", "_self");
    }
  }
}
