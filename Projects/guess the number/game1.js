let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

while (true) {
  let guess = parseInt(prompt("Write a number betweeen 1 to 100")); 
  if (guess === randomNum) {
    attempts++;
    alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
    break;
  } else if (guess > randomNum) {
    attempts++;
    alert("Too high, Try Again!");
  } else {
    attempts++;
    alert("Too Low, Try Again!");
  }
}
