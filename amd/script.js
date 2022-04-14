var isAMD = false;
var amdImgNumber = 0;


const negative_answer_btn = document.querySelector("#no_answer"); 
// Detect clicks on the button
if (negative_answer_btn) {
  negative_answer_btn.onclick = function () {
    amdImgNumber++;
    isAMD = true;
  };
}


const positive_answer_btn = document.querySelector("#yes_answer");
console.log(positive_answer_btn)
if (positive_answer_btn) {
  positive_answer_btn.onclick = function() {
    window.alert("clicked");
    amdImgNumber++;
    document.getElementById("amsler_test").src="https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649917780188";
  }
}

function changeImage(){
  if (amdImgNumber == 1){
    document.getElementById("amsler_test").src="https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649917780188";
  }
}
