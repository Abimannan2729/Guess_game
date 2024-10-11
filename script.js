let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
 console.log (randomNumber);
function checkGuess() {
  const inputElement = document.getElementById("guess");
  const feedbackElement = document.getElementById("feedback");
  const guess = Number(inputElement.value); // Convert input to a number
  attempts--;

  if (guess === randomNumber) {
    feedbackElement.innerText = `Congratulations! ${randomNumber} is correct!`;
    feedbackElement.style.color = "green";
    attempts = 0; // End the game
       document.getElementById("but").disabled= true;
  } else if (guess < randomNumber) {
    feedbackElement.innerText = `Too low! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  } else {
    feedbackElement.innerText = `Too high! Try again. ${attempts} attempts remaining.`;
    feedbackElement.style.color = "red";
  }
if(guess!==randomNumber){
  if (attempts === 0) {
    feedbackElement.innerText = `Game over. ${randomNumber} is correct.`;
    feedbackElement.style.color = "red";
   document.getElementById("but").disabled= true;
   document.getElementById("but").style.color="gray";
  }
}
  inputElement.value = ""; // Clear input after guess
}
