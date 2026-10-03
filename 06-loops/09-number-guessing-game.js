// Problem 1: Guess a number with a while loop
let secretNumber = 5
let guess = 0

while (guess !== secretNumber){
    guess = Number(prompt("Guess a number 1-10:"))
}
console.log("Correct!")

// Problem 2: Guess a number with hints for too high or too low
let secretNumber2 = 8;
let guess2 = 0

while (guess2 !== secretNumber2) {
    guess2 = Number(prompt("Guess a number 1-10:"))
    if (guess2 < secretNumber2) {
        console.log("Too low!")
    } else if (guess2 > secretNumber2) {
        console.log("Too high!")
    }
}
console.log("Correct!")

// Problem 3: Guess a number with hints and a final success message
let secretNumber3 = 7
let guess3 = 0

while (guess3 !== secretNumber3) {
    guess3 = Number(prompt("Guess a number:"));

    if (guess3 < secretNumber3) {
        console.log("Too low!")
    } else if (guess3 > secretNumber3) {
        console.log("Too high!")
    } else {
        console.log("Correct! You guessed it.")
    }
}