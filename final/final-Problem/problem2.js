function isDigit(char) {
    return char >= '0' && char <= '9';
  }
  function QuestionsMarks(str) {
    let foundPair = false;
    let countMarks = 0;
    let num1 = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (isDigit(str[i])) {
        if (num1 + parseInt(str[i]) === 10) {
          if (countMarks !== 3) {
            return "false";
          }
          foundPair = true;
        }
        num1 = parseInt(str[i]);
        countMarks = 0;
      } else if (str[i] === "?") {
        countMarks++;
      }
    }
  
    return foundPair ? "true" : "false";
  }
  

  console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); 
  console.log(QuestionsMarks("aa6?9"));
  
