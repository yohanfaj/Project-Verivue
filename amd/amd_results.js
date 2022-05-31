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
    window.open("https://en.wikipedia.org/wiki/Macular_degeneration", "_blank"); 
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

window.onload = function() {
  var amdRes = getCookie("hasAMD");

  if (amdRes == "true") {
    document.getElementById("Conclusion").textContent = "You are indeed affected by AMD.";
  }
  else if (amdRes == "false") {
    document.getElementById("Conclusion").textContent = "You are actually not affected by AMD.";
  }
};



  




