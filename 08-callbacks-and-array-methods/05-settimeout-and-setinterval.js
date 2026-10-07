// Problem 1: Delay a message with setTimeout()
setTimeout(() => {
    console.log("Hello JavaScript!")
}, 2000);

// Problem 2: Repeat an action with setInterval() and stop it with clearInterval()
let count = 0
const interval = setInterval(() => {
    count++

    console.log("Learning JavaScript")

    if (count === 5){
        clearInterval(interval)
    }
}, 1000);

// Problem 3: Count up with setInterval() and stop at a target value
let total = 0
const interval2 = setInterval(() => {
    total++
    console.log(total)
    if (total === 5){
        clearInterval(interval2)
    }
}, 1000);