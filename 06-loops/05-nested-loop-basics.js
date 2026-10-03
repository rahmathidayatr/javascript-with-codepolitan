// Problem 1: Print coordinate pairs with a nested loop
for (let i = 1; i <= 2; i++){
    for (let j = 1; j <= 2; j++){
        console.log(i,j)
    }
}

// Problem 2: Print a pattern with a nested loop
for (let i = 1; i <= 2; i++){
    for (let j = 1; j <= 2; j++){
        console.log("*")
    }
}

// Problem 3: Loop through a nested array of names
let groups = [
    ["Budi", "Andi"],
    ["Siti", "Dina"]
];
for (let i = 0; i < groups.length; i++){
    for (let j = 0; j < groups[i].length; j++){
        console.log(groups[i][j])
    }
}