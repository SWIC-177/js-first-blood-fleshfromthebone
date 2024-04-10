
// simple declaration of function.
function divNumbers (num1, num2) {
    return num1 / num2;
  }
  console.log(divNumbers (12, 2))
  
  // 
  const multiplyNumbers =(val1, val2) => val1 * val2;
  console.log(multiplyNumbers(3,3))
  
  // Declaring a starting score and adding as it goes
  const startingScore = 5;
  let plusScore = startingScore
  
  
  function scorePrint(score) {
    return `Total Score: ${score}`;
  }
  
  function numberRun (score, func) {
    return func(score)
  }
  
  while (plusScore < 13) {
    console.log(numberRun(plusScore, scorePrint));
    plusScore += 3;
  }
  // This last bit was tricky, calling a function from within a while loop within a function, shows that you can chain functions together through nooks and crannies of code.