// 1. Write a for loop:
//    Initialization: let i = 0
//    Conditional: i < 10
//    Final expression: i++
//    Log each value of i inside the for loop

// 2. Define a for loop that logs all the values from 1 to 100
//    Fill in each of the following:
//    Initialization:
//    Condiational:
//    Final expression:

// 3. What will the following code log?
//    Fill in each of the following:
//    Initialization:
//    Condiational:
//    Final expression:

for (let i = 0; i < 10; i += 2) {
  console.log(i); // What will the following code log?
}

// 4. What will the following code log?
//    Fill in each of the following:
//    Initialization:
//    Condiational:
//    Final expression:

for (let i = 2; i <= 10; i = i + 1) {
  if (i % 2 === 0) {
    console.log(i); // What will the following code log?
  }
}

// 5. Write a for loop that will log each element in the following array

let instructors = ["CJ", "Casey", "Kim", "Kyle"];

// 6. Write a for loop that will log each element in the following array

let numbers = [4, 8, 15, 16, 23, 42];

// 7. Write a for loop that will log each element in the following array

let animals = ["dog", "cat", "bird", "mouse"];

// 8. Write a for loop that will log each element in the following array

let books = ["JavaScript: The Good Parts", "Eloquent JS", "You Don't Know JS"];

// 9. Refactor the code below to use a for loop

let sum = 0;
let values = [4, 8, 2, 7, 3, 9];
let i = 0;
sum += values[i];
i++;
sum += values[i];
i++;
sum += values[i];
i++;
sum += values[i];
i++;
sum += values[i];
i++;
sum += values[i];
console.log(sum);

// 10. Refactor the code below to use a for loop

let sentence = "";
let words = ["Hello", "World", "Today"];
let j = 0;
sentence += words[j] + " ";
j++;
sentence += words[j] + " ";
j++;
sentence += words[j] + " ";
console.log(sentence);

// 11. Nested for loop practice

var arr = [["pizza", "tacos"], ["sushi", "ramen"], ["burrito", "nachos"]];

for (var i = 0; i < arr.length; i++) {
  // i = 0, then we loop below:
  for (var j = 0; j < arr[i].length; j++) {
    //here we loop through the array which is in the main array
    //in the first case, i = 0, j = 1, then we loop again, i = 0, j = 1
    // console.log('nested values: ', arr[i][j]);
    // console.log('nested value index for [i]: ', i)
    // console.log('nested value index for [j]: ', j)
    console.log(`nested index at i: ${i}, j: ${j}`, "\n");
    console.log(`nested value at [i][j]: ${arr[i][j]}`, "\n");
    //after we finish the stuff in the 'j' loop we go back to the 'i' loop
    //and here i = 1, then we go down again, i, remains at 1, and j = 0, then j = 1
    //....rinse and repeat,
  }
}

// Using nested a for loop, log each food item in the foodArray

// var foodArray = [['pizza','tacos'], ['sushi','ramen'], ['burrito','nachos']];

// for (var i = 0; i < foodArray.length; i++) {
//   // console.log(foodArray[i])
//   // console.log("index i:", i)
//   for (var j = 0; j < foodArray[i].length; j++) {
//     // console.log("index j:  ", j)
//     console.log(foodArray[i][j])
//   }
// }

// Using nested a for loop, log each brand and log each hero

var heroArray = [
  {
    brand: "Marvel",
    heroes: ["Iron Man", "Captain America"],
    numberOfMovies: 10
  },
  {
    brand: "DC",
    heroes: ["Superman", "Batman"],
    numberOfMovies: 20
  },
  {
    brand: "Manga",
    heroes: ["All Might", "Goku"],
    numberOfMovies: 300
  }
];
var totalMovies = 0;

for (let i = 0; i < heroArray.length; i++) {
  if (heroArray[i].brand === "Marvel" || heroArray[i].brand === "DC") {
    totalMovies += heroArray[i].numberOfMovies;
  }
  for (let j = 0; j < heroArray[i].heroes.length; j++) {
    console.log(heroArray[i].heroes[j])
  }
}

console.log(totalMovies);
