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

const rg_btn = document.querySelector("#rg_start"); 
// Detect clicks on the button
if (rg_btn) {
  rg_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/red_green_test/index.html", "_self");
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
//var myopia_left = getCookie("myopia_left");
//var myopia_right = getCookie("myopia_right");




// DISPLAYING THE PARAGRAPH RESULTS

if(getCookie("isMyopiaRight")=="true"){
  document.getElementById("MyopiaResults").textContent = "Your right eye suffer from myopia";
}else if(getCookie("isMyopiaLeft")=="true"){
  document.getElementById("MyopiaResults").textContent = "Your left eye suffer from myopia";
}else if(getCookie("isMyopia")=="false"){
  document.getElementById("MyopiaResults").textContent = "You're not suffering from myopia";
}















/*
if(getCookie("isMyopia")=="true"){
  document.getElementById("result-title").textContent = "we advise you to consult an ophthalmologist";
  if(getCookie("isMyopiaBoth")=="true"){
    document.getElementById("MyopiaResults").textContent = "You seem to have myopia";
    if (getCookie("isMyopiaRight")=="true" && getCookie("isMyopiaLeft")=="true") {
      document.getElementById("MyopiaResults").textContent += " on both of your eyes.";
    } else if (getCookie("isMyopiaRight")=="true") {
    document.getElementById("MyopiaResults").textContent += " on your right eye.";
  } else if (getCookie("isMyopiaLeft")=="true") {
    document.getElementById("MyopiaResults").textContent += " on your left eye.";
  }
  } else {
    if (getCookie("isMyopiaRight")=="true") {
      document.getElementById("MyopiaResults").textContent = "You seem to have myopia on your right eye.";
    } else if (getCookie("isMyopiaLeft")=="true") {
      document.getElementById("MyopiaResults").textContent = "You seem to have myopia on your left eye.";
    }
  }
} else {
  document.getElementById("result-title").textContent = "Negative";
}


*/
