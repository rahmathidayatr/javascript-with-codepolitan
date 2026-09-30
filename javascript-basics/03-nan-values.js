// Problem 1: NaN result from multiplying a string and a number
let multiplicationResult = "Rahmat" * 5
console.log(multiplicationResult)

// Problem 2: Check the data type of a NaN result
let stringTimesNumber = "Hello" * 10
console.log(typeof(stringTimesNumber))

// Problem 3: Validate a number with Number.isNaN()
let validMultiplication = 10 * 5
let invalidMultiplication = "Javascript" * 5
console.log(Number.isNaN(validMultiplication))
console.log(Number.isNaN(invalidMultiplication))