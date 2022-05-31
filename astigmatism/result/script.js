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
    window.open("https://en.wikipedia.org/wiki/Astigmatism", "_blank");
  };
}

const daltonism_btn = document.querySelector("#daltonism_start"); 
// Detect clicks on the button
if (daltonism_btn) {
  daltonism_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/daltonism/index.html", "_self");
  };
}

const home_btn = document.querySelector("#back_home"); 
// Detect clicks on the button
if (home_btn) {
  home_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/", "_self");
  };
}


// DISPLAYING THE PARAGRAPH RESULTS


if (getCookie("isAstigmate")=="true") {
  document.getElementById("Conclusion").textContent = "Positive, we advise you to consult an ophthalmologist";
  if (getCookie("isAstigmateBoth")=="true") {
    document.getElementById("Conclusion").textContent = "You seem to have astigmatism";
    if (getCookie("isAstigmateRight")=="true" && getCookie("isAstigmateLeft")=="true") {
      document.getElementById("Conclusion").textContent += " on both of your eyes.";
    } else if (getCookie("isAstigmateRight")=="true") {
    document.getElementById("Conclusion").textContent += " on your right eye.";
  } else if (getCookie("isAstigmateLeft")=="true") {
    document.getElementById("Conclusion").textContent += " on your left eye.";
  }
  } else {
    if (getCookie("isAstigmateRight")=="true") {
      document.getElementById("Conclusion").textContent = "You seem to have astigmatism on your right eye.";
    } else if (getCookie("isAstigmateLeft")=="true") {
      document.getElementById("Conclusion").textContent = "You seem to have astigmatism on your left eye.";
    }
  }
} else {
  document.getElementById("result-title").textContent = "Negative";
}