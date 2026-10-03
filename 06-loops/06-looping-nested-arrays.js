// Problem 1: Loop through a nested array of numbers
let numbers = [
    [1, 2],
    [3, 4]
];

for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers[i].length; j++){
        console.log(numbers[i][j])
    }
}

// Problem 2: Loop through a nested array of names
let groups = [
    ["Budi", "Andi"],
    ["Siti", "Dina"],
    ["Rudi", "Ani"]
];
for (let i = 0; i < groups.length; i++){
    for (let j = 0; j < groups[i].length; j++){
        console.log(groups[i][j])
    }
}

// Problem 3: Loop through a nested array and transform each value
let moreNumbers = [
    [2, 4],
    [6, 8],
    [10, 12]
];
for (let i = 0; i < moreNumbers.length; i++){
    for (let j = 0; j < moreNumbers[i].length; j++){
        console.log(moreNumbers[i][j]*2)
    }
}