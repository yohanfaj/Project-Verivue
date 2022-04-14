var isAMD = false;
var button_enable = true;
var btn_audio_check = new Audio('https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/check_button_audio.mp3?v=1649923001726');
btn_audio_check.volume = 0.5;
var amdImgNumber = 0;


const negative_answer_btn = document.querySelector("#no_answer"); 
if (negative_answer_btn) {
  negative_answer_btn.onclick = function () {
      amdImgNumber++;
      isAMD = true;
      btn_audio_check.play();
      changeImage();
      disableButtons();
  };
}


const positive_answer_btn = document.querySelector("#yes_answer");
console.log(positive_answer_btn)
if (positive_answer_btn) {
  positive_answer_btn.onclick = function() {
  btn_audio_check.play(); 
  amdImgNumber++;
  changeImage();
  disableButtons();
  }
}

function disableButtons(){
  negative_answer_btn.disabled = true;
  positive_answer_btn.disabled = true;
  document.getElementById("yes_answer").style.opacity = "0.5"; 
  document.getElementById("no_answer").style.opacity = "0.5";
  setTimeout(reEnableButtons, 5000);
}

function reEnableButtons(){
  negative_answer_btn.disabled = false;
  positive_answer_btn.disabled = false;
  document.getElementById("yes_answer").style.opacity = "1"; 
  document.getElementById("no_answer").style.opacity = "1";
  button_enable = true;
}

function changeImage(){
  if (amdImgNumber == 1){
    document.getElementById("amsler_test").src="https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_test2.jpg?v=1649921187636";
  } else if (amdImgNumber == 2){
    document.getElementById("amsler_test").src="https://cdn.glitch.global/c0e804fa-f500-46aa-88e7-c70999b4319c/amsler_high_contrast.png?v=1649921187927";
    document.body.style.backgroundColor = "#073742";
    document.getElementById("instructions").textContent = "Focus on the white dot in the center for 10 seconds, are the lines surrounding it straight?";
    document.getElementById("title").style.color = "white";
    document.getElementById("instructions").style.color = "white";
    document.getElementById("select_answer").style.color = "white";
  } else if (amdImgNumber == 3){
    
  }
}
