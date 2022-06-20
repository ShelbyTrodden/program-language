// User Interface Logic
window.addEventListener("load", function() {
    let quiz = document.getElementById("quiz");
    
    let resetBtn = document.getElementById("reset");
  
    let form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      const qOneInput = document.getElementById(parseInt("#question1Input").value());
      const qTwoInput = document.getElementById(parseInt("#question2Input").value());
      const qThreeInput= document.getElementById(parseInt("#question3Input").value());
      const qFourInput = document.getElementById(parseInt("#question4Input").value());
      const qFiveInput = document.getElementById(parseInt("#question5Input").value());
      const qSixInput = document.getElementById(parseInt("#question5Input").value());

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
        
      event.preventDefault();

    });
    
    form.addEventListener("submit", function() {
        resetBtn.removeAttribute("style");
    }); 
  
    resetBtn.addEventListener("click", function() {
      document.getElementById("question1Input").value = null;
      document.getElementById("question2Input").value = null;
      document.getElementById("question3Input").value = null;
      document.getElementById("question4Input").value = null;
      document.getElementById("question5Input").value = null;
      document.getElementById("question6Input").value = null;
    });
  });