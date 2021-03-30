//event listener for button click
var button = document.querySelector("button");
button.addEventListener('click', fibonacciGenerator, false);

//generates the fibonacci sequence up to the length of the user input
function fibonacciGenerator() {
  //prompts user for number input  
    var n = (function() {
      var x = prompt("How long do you want the sequence to be?", "Enter a number...");
      if (x == 0 || x > 99) {
        alert("Please select a number between 1 - 99");
      } else {
      return x;
      }
    }());
    //converts user input to number
    n = Number(n);
    var fibonacciSequence = [];
    var i = 0;

    while (i < n) {
      var lastDigit = fibonacciSequence[fibonacciSequence.length - 1];
      var secondLastDigit = fibonacciSequence[fibonacciSequence.length - 2];
          if (fibonacciSequence.length === 0) {
            fibonacciSequence.push(0);
            i++;
          } else if (fibonacciSequence.length <= 1) {
            fibonacciSequence.push(1);
            i++;
          } else {
            fibonacciSequence.push(lastDigit + secondLastDigit);
            i++;
          } 
        }
        //retrieves the array, converts to string then renders to the screen
        var outputString = fibonacciSequence.slice(0, lastDigit);
        outputString = fibonacciSequence.toString();
        document.querySelector("section.sequence-output").innerHTML = outputString;
}