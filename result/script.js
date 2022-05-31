//Start up instructions:
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

//Global variables
var urlWarning = "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/cautionSignal.png?v=1653055786013";
var urlBad = "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/crossSymbol.png?v=1653055786014";
var arrOfCookies = ["hasMyopia","hasHyperopia","hasAMD","isAstigmate","hasDaltonism"];
var anyWrong = false;

window.onload = function() {
 for(var i=0; i<arrOfCookies.length;i++){
   console.log("Iteration "+i);
   if(getCookie(arrOfCookies[i])=="true"){
     console.log("Cookie "+arrOfCookies[i]+" is positive.");
     console.log("modififying: logo"+(i+1));
     document.getElementById("logo"+(i+1)).src = urlBad;
     anyWrong = true;
   }
 }
  //Now we update the main tag
  if(anyWrong){
    document.getElementById("imageResult").src = "https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/Wrong_large.png?v=1653055786154";
    document.getElementById("textualResult").innerHTML = "There might be an issue with your eye sight, please see a specialist.";
    document.getElementById("textualResult").style.color = "#c93e51";
  }
  
  
  //INDIVIDUAL SPECIFICATION
  
  //Astigmatism
if (getCookie("isAstigmate")=="true") {
  if (getCookie("isAstigmateBoth")=="true") {
    document.getElementById("AstigmatismResult").textContent = "You seem to have astigmatism";
    if (getCookie("isAstigmateRight")=="true" && getCookie("isAstigmateLeft")=="true") {
      document.getElementById("AstigmatismResult").textContent += " on both of your eyes.";
    } else if (getCookie("isAstigmateRight")=="true") {
      document.getElementById("AstigmatismResult").textContent += " on your right eye.";
    } else if (getCookie("isAstigmateLeft")=="true") {
      document.getElementById("AstigmatismResult").textContent += " on your left eye.";
    }
  } else {
    if (getCookie("isAstigmateRight")=="true") {
      document.getElementById("logo4").src = urlWarning;
      document.getElementById("AstigmatismResult").textContent = "You seem to have astigmatism on your right eye.";
    } else if (getCookie("isAstigmateLeft")=="true") {
      document.getElementById("logo4").src = urlWarning;
      document.getElementById("AstigmatismResult").textContent = "You seem to have astigmatism on your left eye.";
    }
  }
} else {
  document.getElementById("AstigmatismResult").textContent = "Negative";
}
  //AMD
  if(getCookie("hasAMD")=="true"){
    document.getElementById("AMDtestResult").textContent = "If you are over 50, please see an ophtamologist urgently.";
  }
  
  
  //Daltonism
  if (getCookie("hasRGdef")=="true") {
  document.getElementById("logo5").src = urlBad;
  document.getElementById("daltonismResults").textContent = "POSITIVE - You seem to suffer from a RED-GREEN deficiency.";
} else if (getCookie("hasRdef")=="true") {
  document.getElementById("logo5").src = urlBad;
  document.getElementById("daltonismResults").textContent = "POSITIVE -  You seem to suffer from a RED deficiency.";
} else if (getCookie("hasGdef")=="true") {
  document.getElementById("logo5").src = urlBad;
  document.getElementById("daltonismResults").textContent = "POSITIVE - You seem to suffer from a GREEN deficiency.";
} 
  
  
  
  //Hyperopia
  if(getCookie("Hyperopia Points") == "0"){
    document.getElementById("hyperopiaResults").textContent = "NO Hyperopia";
  }
  else if (getCookie("Hyperopia Points") == "1"){
    document.getElementById("logo2").src = urlWarning;
    document.getElementById("hyperopiaResults").textContent = "SLIGHT Hyperopia";
  }
  else if (getCookie("Hyperopia Points") == "2"){
    document.getElementById("logo2").src = urlBad;
    document.getElementById("hyperopiaResults").textContent = "HEAVY Hyperopia";
  }
  
  // Myopia
  
  if(getCookie("isMyopiaRight")=="true"){
    document.getElementById("logo4").src = urlWarning;
    document.getElementById("MyopiaResults").textContent = "Your right eye suffer from myopia";
  }else if(getCookie("isMyopiaLeft")=="true"){
    document.getElementById("logo4").src = urlWarning;
    document.getElementById("MyopiaResults").textContent = "Your left eye suffer from myopia";
  }else if(getCookie("isMyopia")=="false"){
    document.getElementById("MyopiaResults").textContent = "You're not suffering from myopia";
  }


  if(getCookie("isMyopia")=="true"){
    document.getElementById("result-title").textContent = "We advise you to consult an ophthalmologist"
      document.getElementById("MyopiaResults").textContent = "You seem to have myopia";
      if (getCookie("isMyopiaRight")=="true" && getCookie("isMyopiaLeft")=="true") {
        document.getElementById("logo2").src = urlBad;
        document.getElementById("MyopiaResults").textContent += " on both of your eyes.";
      } else if (getCookie("isMyopiaRight")=="true" && getCookie("isMyopiaLeft")=="false") {
        document.getElementById("logo4").src = urlWarning;
        document.getElementById("MyopiaResults").textContent += " on your right eye.";
    } else if (getCookie("isMyopiaLeft")=="true"&& getCookie("isMyopiaRight")=="false") {
      document.getElementById("logo4").src = urlWarning;
      document.getElementById("MyopiaResults").textContent += " on your left eye.";
    }
  } else {
    document.getElementById("result-title").textContent = "Negative";
  }  
  
  
  
};

