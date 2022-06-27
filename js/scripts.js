// User Interface Logic
window.addEventListener("load", function(event) {

  const form = document.getElementById("form"); 
  const resetBtn = document.getElementById("reset");

  const hidden1 = document.getElementById("resultA");
  hidden1.style.display = "none";
  const hidden2 = document.getElementById("resultB");
  hidden2.style.display = "none";
  const hidden3 = document.getElementById("resultC");
  hidden3.style.display = "none";   
  
form.addEventListener("submit", function(event){
  event.preventDefault();

  const qOneInput = parseInt(document.getElementById("question1").value);
  const qTwoInput = parseInt(document.getElementById("question2").value);
  const qThreeInput= parseInt(document.getElementById("question3").value);
  const qFourInput = parseInt(document.getElementById("question4").value);
  const qFiveInput = parseInt(document.getElementById("question5").value);
  const qSixInput = parseInt(document.getElementById("question6").value);

  const final = qOneInput + qTwoInput + qThreeInput + qFourInput + qFiveInput + qSixInput
    if (final < 6) {
      document.getElementById("resultNull");
    } else if (final < 9) {
      hidden1.removeAttribute("style");
    } else if  (final < 13 ) {
      hidden2.removeAttribute("style");
    } else {
      hidden3.removeAttribute("style");  
    }
  });
  
  resetBtn.addEventListener("click", function() {
    document.getElementById("form").reset();
    hidden1.style.display = "none";
    hidden2.style.display = "none";
    hidden3.style.display = "none";
  });
});