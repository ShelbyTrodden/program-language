// User Interface Logic
window.addEventListener("load", function() {
    let quiz = document.getElementById("quiz");
    let resetBtn = document.getElementById("reset");
    let form = document.querySelector("form");
    
  
    form.addEventListener("submit", function() {

      const qOneInput = document.getElementById(parseInt("question1").value());
      const qTwoInput = document.getElementById(parseInt("question2").value());
      const qThreeInput= document.getElementById(parseInt("question3").value());
      const qFourInput = document.getElementById(parseInt("question4").value());
      const qFiveInput = document.getElementById(parseInt("question5").value());
      const qSixInput = document.getElementById(parseInt("question6").value());

      let final = qOneInput+qTwoInput+qThreeInput+qFourInput+qFiveInput+qSixInput
        if (final <6){
          ("#resultNull").show();
        } else if (final <9){
          ("#resultA").show();
        } else if  (final <13 ){
          ("#resultB").show();
        } else {
          ("#resultC").show();  
        }
    });
    
    form.addEventListener("submit", function() {
        resetBtn.removeAttribute("style");
    }); 
  
    resetBtn.addEventListener("click", function() {
      document.getElementById("question1").value = null;
      document.getElementById("question2").value = null;
      document.getElementById("question3").value = null;
      document.getElementById("question4").value = null;
      document.getElementById("question5").value = null;
      document.getElementById("question6").value = null;
    });
  });