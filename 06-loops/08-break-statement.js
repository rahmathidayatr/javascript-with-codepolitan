// Problem 1: Stop a for loop early with break
for (let i = 1; i <= 10; i++){
    console.log(i)
    if (i === 5){
        break
    }
}

// Problem 2: Stop a while loop early with break
let i = 1;

while (i <= 10) {
    console.log(i);

    // use if + break here
    if (i === 7){
        break
    }

    i++;
}

// Problem 3: Stop looping through an array once a value is found
let fruits = ["Apple", "Mango", "Orange", "Banana", "Watermelon"];

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    if (fruits[i] === "Orange"){
        break
    }
}