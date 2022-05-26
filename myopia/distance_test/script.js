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

var isMyopia = false;
var button_enable = true;
var myopia_left;
var myopia_right;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
btn_audio_check.volume = 0.5;
var amdImgNumber = 0; // louis (à supp après)

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




// Modèle Louis ( à supprimer après )






// Les 8 boutons pour l'oeil gauche (close RIGHT eye)

const one_left_answer_btn = document.querySelector("#one_left");
if (one_left_answer_btn) {
  one_left_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_left= 0.1;
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const two_left_answer_btn = document.querySelector("#two_left");
if (two_left_answer_btn) {
  two_left_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_left= 0.2;
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const three_left_answer_btn = document.querySelector("#three_left");
if (three_left_answer_btn) {
  three_left_answer_btn.onclick = function () {
    myopia_left= 0.3;
    btn_audio_check.play();
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const four_left_answer_btn = document.querySelector("#four_left");
if (four_left_answer_btn) {
  four_left_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_left= 0.4;
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const five_left_answer_btn = document.querySelector("#five_left");
if (five_left_answer_btn) {
  five_left_answer_btn.onclick = function () {
    myopia_left= 0.6;
    btn_audio_check.play();
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const six_left_answer_btn = document.querySelector("#six_left");
if (six_left_answer_btn) {
  six_left_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_left= 0.8;
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const seven_left_answer_btn = document.querySelector("#seven_left");
if (seven_left_answer_btn) {
  seven_left_answer_btn.onclick = function () {
    myopia_left= 1.0;
    btn_audio_check.play();
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}
const eight_left_answer_btn = document.querySelector("#eight_left");
if (eight_left_answer_btn) {
  eight_left_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_left= 1.2;
    window.open("/myopia/distance_test/index2.html", "_self");
    disableButtons();
  };
}


// Les 8 boutons pour l'oeil droit (close LEFT eye)

const one_right_answer_btn = document.querySelector("#one_right");
if (one_right_answer_btn) {
  one_right_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_right= 0.1;
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const two_right_answer_btn = document.querySelector("#two_right");
if (two_right_answer_btn) {
  two_right_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_right= 0.2;
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const three_right_answer_btn = document.querySelector("#three_right");
if (three_right_answer_btn) {
  three_right_answer_btn.onclick = function () {
    myopia_right= 0.3;
    btn_audio_check.play();
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const four_right_answer_btn = document.querySelector("#four_right");
if (four_right_answer_btn) {
  four_right_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_right= 0.4;
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const five_right_answer_btn = document.querySelector("#five_right");
if (five_right_answer_btn) {
  five_right_answer_btn.onclick = function () {
    myopia_right= 0.6;
    btn_audio_check.play();
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const six_right_answer_btn = document.querySelector("#six_right");
if (six_right_answer_btn) {
  six_right_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_right= 0.8;
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const seven_right_answer_btn = document.querySelector("#seven_right");
if (seven_right_answer_btn) {
  seven_right_answer_btn.onclick = function () {
    myopia_right= 1.0;
    btn_audio_check.play();
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}
const eight_right_answer_btn = document.querySelector("#eight_right");
if (eight_right_answer_btn) {
  eight_right_answer_btn.onclick = function () {
    btn_audio_check.play();
    myopia_right= 1.2;
    window.open("/myopia/distance_test/results.html", "_self");
    disableButtons();
  };
}










function disableButtons() {
  
  
  one_left_answer_btn.disabled = true;
  two_left_answer_btn.disabled = true;
  three_left_answer_btn.disabled = true;
  four_left_answer_btn.disabled = true;
  five_left_answer_btn.disabled = true;
  six_left_answer_btn.disabled = true;
  seven_left_answer_btn.disabled = true;
  eight_left_answer_btn.disabled = true;
  
  one_right_answer_btn.disabled = true;
  two_right_answer_btn.disabled = true;
  three_right_answer_btn.disabled = true;
  four_right_answer_btn.disabled = true;
  five_right_answer_btn.disabled = true;
  six_right_answer_btn.disabled = true;
  seven_right_answer_btn.disabled = true;
  eight_right_answer_btn.disabled = true;
  
  setTimeout(reEnableButtons, 2000);
}

function reEnableButtons() {

  
  one_left_answer_btn.disabled = false;
  two_left_answer_btn.disabled = false;
  three_left_answer_btn.disabled = false;
  four_left_answer_btn.disabled = false;
  five_left_answer_btn.disabled = false;
  six_left_answer_btn.disabled = false;
  seven_left_answer_btn.disabled = false;
  eight_left_answer_btn.disabled = false;
  
  one_right_answer_btn.disabled = false;
  two_right_answer_btn.disabled = false;
  three_right_answer_btn.disabled = false;
  four_right_answer_btn.disabled = false;
  five_right_answer_btn.disabled = false;
  six_right_answer_btn.disabled = false;
  seven_right_answer_btn.disabled = false;
  eight_right_answer_btn.disabled = false;
  
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

// Hidding the modal on Escape or Enter

window.addEventListener("keypress", function(e){
  console.log(e)
  if (document.getElementById("rightHandModal").style.display != "none") {
    if (e.key == "Escape" || e.key == "Enter") {
      document.getElementById("rightHandModal").style.display = "none";
    }
  }
});


/* LOUIS
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
    if (isMyopia == true) {
      setCookie("hasMyopia","true",1);
    } else {
      setCookie("hasMyopia","false",1);
    }
    //Now I decided where I redirect
    if(getCookie("doAllTests")=="true"){
      window.open("/myopia/red_green_test/index.html", "_self");
    } else {
      window.open("/amd/amd_results.html", "_self");
    }
  }
}
*/



if (myopia_left === 0){
  setCookie("myopia_left", "0", 1);
}else{
  setCookie("myopia_left", myopia_left.toString(), 1)
}


if (myopia_right === 0){
  setCookie("myopia_right", "0", 1);
}else{
  setCookie("myopia_right", myopia_right.toString(), 1)
}




if(myopia_left < 1.0){
  setCookie("hasMyopiaLeftD", "true", 1);
}else{
  setCookie("hasMyopiaLeftD", "false", 1);
}

if(myopia_right < 1.0){
  setCookie("hasMyopiaRightD", "true", 1);
}else{
  setCookie("hasMyopiaRightD", "false", 1);
}




// Redirection
if(getCookie("doAllTests")=="true"){
  window.open("/red_green_test", "_self"); 
}else{
  window.open("/myopia/distance_test/results.html", "_self");
}

      
      
      
