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
  
  //Individual specification
};

