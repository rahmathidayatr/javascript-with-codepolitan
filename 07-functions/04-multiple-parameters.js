// Problem 1: Use two parameters in a function
function greet(name, city){
    console.log(`Hello ${name} from ${city}`)
}
greet("Budi", "Jakarta")

// Problem 2: Use three parameters in a function
function introduce(name, age, job){
    console.log(`Hello, I'm ${name}`)
    console.log(`My age is ${age}`)
    console.log(`My job is ${job}`)
}
introduce("Andi", 20, "Programmer")

// Problem 3: Calculate a total from three parameters
function calculateTotal(price1, price2, price3){
    let sum = price1 + price2 + price3
    console.log(sum)
}
calculateTotal(10000,20000,30000)