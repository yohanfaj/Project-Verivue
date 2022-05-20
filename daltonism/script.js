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

//Three variables for each form
var send_check = '';
var form = false;
var btn_audio_check = new Audio(
  "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726"
);
var textBox = document.getElementById("text_box");
btn_audio_check.volume = 0.5;
var amdImgNumber = 0;
//Declaration of disease
var RedGreenDeficiencies = false;

//End of declaration

window.addEventListener("load", load);

function load() {
  //document.getElementById("rightHandModal").style.display = "block";
}

// Hidding the modal on Escape or Enter

window.addEventListener("keydown", function(e){
  if (document.getElementById("rightHandModal").style.display != "none" && (e.key == "Escape" || e.key == "Enter")) {
      document.getElementById("rightHandModal").style.display = "none";
  } else if (e.key == "Escape") {
      document.getElementById("rightHandModal").style.display = "block";
  }
});

var noNumber = document.getElementById('noNumber')
noNumber.onclick = function () {
  //This will run on click of no colour
  checkAnswer("noColor");
}

var send = document.getElementById('send')
send.onclick = function () {
  //This will run on click of no colour
  send_check = textBox.value; 
  if (send_check == '') {
    textBox.style.borderColor = "red";
    alert("Please click 'I don't see any colours' if you don't see anything");
  }
  textBox.style.borderColor = "black";
  checkAnswer(send_check);
}

function checkAnswer(userIn){
  if(amdImgNumber==0){
    if(userIn!="74"){
      RedGreenDeficiencies = true;
    }
  } else if (amdImgNumber==1) {
    if (userIn!="72"){
      //something
    }
  } else if (amdImgNumber==2) {
    if (userIn!="72") {
      //something
    }
  } else if (amdImgNumber==3) {
    if (userIn!="72") {
      //something
  }
  
  //This bit of code should run in ALL cases
  textBox.value = "";
  btn_audio_check.play();
  amdImgNumber++;
  changeImage();
}

/*const noNumber = document.querySelector("noNumber");
if (noNumber) {
  alert("coucou");
  noNumber.onclick = function () {
    amdImgNumber++;
    btn_audio_check.play();
    changeImage();
  };
}*/

/*const send_btn = document.querySelector("send");
if (send_btn) {
  send_btn.onclick = function () {
    btn_audio_check.play();
    amdImgNumber++;
    changeImage();
  };
}*/


function changeImage() {
  if (amdImgNumber == 1) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/42%20-%20def%20rouge%20-%20def%20vert.webp?1652991854184";
  } else if (amdImgNumber == 2) {
    document.getElementById("daltoTest").src = "";
  } else if (amdImgNumber == 3) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test1.jpg?v=1649921187569";
  } else if (amdImgNumber == 4) {
    document.getElementById("daltoTest").src =
      "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (amdImgNumber == 5) {
    document.getElementById("daltoTest").src =
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
