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

const distance_btn = document.querySelector("#distance_start"); 
// Detect clicks on the button
if (distance_btn) {
  distance_btn.onclick = function () {
    btn_audio_check.play();
    window.open("/myopia/distance_test/index.html", "_self");
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
var myopiaPts = getCookie("Myopia Points");
var hyperopiaPts = getCookie("Hyperopia Points");


document.getElementById("myopiaToInsert").textContent = myopiaPts;
document.getElementById("hyperopiaToInsert").textContent = hyperopiaPts;



// DISPLAYING THE PARAGRAPH RESULTS

if (myopiaPts == "0" && hyperopiaPts == "0") 
  document.getElementById("Conclusion").textContent = "You don’t seem to suffer from any form of Myopia or Hyperopia !";
else if (myopiaPts == "1" && hyperopiaPts == "1")
  document.getElementById("Conclusion").textContent = "You seem to be suffering from slight Myopia & Hyperopia. You don’t have to worry a lot about it, as these two diseases are quite common. Take care of your eyes though, don’t stare too long at screens for example! And if you think it is necessary or suffer too much, do not hesitate to consult an eye care professional on that subject.";
else if (myopiaPts == "1" && hyperopiaPts == "0")
  document.getElementById("Conclusion").textContent = "You seem to be suffering from slight Myopia. You don’t have to worry a lot about it, as this disease is quite common. Take care of your eyes though, don’t stare too long at screens for example! And if you think it is necessary or suffer too much, do not hesitate to consult an eye care professional on that subject.";
else if (myopiaPts == "0" && hyperopiaPts == "1")
  document.getElementById("Conclusion").textContent = "You seem to be suffering from slight Hyperopia. You don’t have to worry a lot about it, as this disease is quite common. Take care of your eyes though, don’t stare too long at screens for example! And if you think it is necessary or suffer too much, do not hesitate to consult an eye care professional on that subject.";
else if (myopiaPts == "2" && hyperopiaPts == "2")
  document.getElementById("Conclusion").textContent = "You seem to be suffering from heavy Myopia & Hyperopia. We advise you to quickly consult an eye care professional to treat this problem. Don’t worry however, these two diseases are quite common, so professionals will know exactly how to handle this!";
else if (myopiaPts == "2" && (hyperopiaPts == "0" || hyperopiaPts == "1"))
    document.getElementById("Conclusion").textContent = "You seem to be suffering from heavy Myopia. We advise you to quickly consult an eye care professional to treat this problem. Don’t worry however, this disease is quite common, so professionals will know exactly how to handle this!";
else if (hyperopiaPts == "2" && (myopiaPts == "0" || myopiaPts == "2"))
  document.getElementById("Conclusion").textContent = "You seem to be suffering from heavy Hyperopia. We advise you to quickly consult an eye care professional to treat this problem. Don’t worry however, this disease is quite common, so professionals will know exactly how to handle this!";
  


