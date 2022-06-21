// User Interface Logic
window.addEventListener("load", function() {

  let form = document.querySelector("form"); 
  let quiz = document.getElementById("quiz");
  let resetBtn = document.getElementById("reset");
   
    
  const qOneInput = parseInt(document.getElementById("question1").value);
  const qTwoInput = parseInt(document.getElementById("question2").value);
  const qThreeInput= parseInt(document.getElementById("question3").value);
  const qFourInput = parseInt(document.getElementById("question4").value);
  const qFiveInput = parseInt(document.getElementById("question5").value);
  const qSixInput = parseInt(document.getElementById("question6").value);
  
form.addEventListener("submit", function() {

  let final = qOneInput + qTwoInput + qThreeInput + qFourInput + qFiveInput + qSixInput
    if (final <6) {
      document.getElementById("resultNull").classList.toggle("visible");
    } else if (final <9){
      document.getElementById("resultA").classList.toggle("visible");
    } else if  (final <13 ){
      document.getElementById("resultB").classList.toggle("visible");
    } else {
      document.getElementById("resultC").classList.toggle("visible");  
    }
  });
  
resetBtn.addEventListener("click", function() {
      qOneInput.value = null;
      qTwoInput.value = null;
      qThreeInput.value = null;
      qFourInput.value = null;
      qFiveInput.value = null;
      qSixInput.value = null;
    });
  });