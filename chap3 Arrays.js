// JavaScript Arrays

// Creating an Array
// Array: Declaration with Initialization
let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
let marks = [20, 30, 40, 50, 60];
let colors = ["Red", "Green", "Blue"];

// Accessing the Elements of an Array
console.log(marks); // print: [ 20, 30, 40, 50, 60 ]
console.log(colors); // print: [ 'Red', 'Green', 'Blue' ]
console.log(fruits); // print:[ 'Apple', 'Banana', 'Mango', 'Orange', 'Papaya' ]
console.log(colors[0]); // print: Red
console.log(colors[1]); // print: Green
console.log(colors[2]); // print: Blue

// Using the JavaScript Keyword new

let names = new Array("Sadam", "Adam", "Ali");
console.log(names); // print : [ 'Sadam', 'Adam', 'Ali' ]

// Changing an Array Element

names[0] = "Sali";
names[2] = "Hello";
console.log(names); // print : [ 'Sali', 'Adam', 'Hello' ]

// Getting the Length of an Array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.length); // Prints: 5
console.log(names.length); // Prints: 3
console.log(colors.length); // Prints: 3

// Looping Through Array Elements

// Iterates over array elements
for (let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]); // Print array element
}

// Iterates over array elements
for (let number in numbers) {
    console.log(numbers[number]); // Print array element
}

// Iterates over array elements
for (let color in colors) {
    console.log(colors[color]); // Print array element
}

// Iterates over array elements
for (let mark in marks) {
    console.log(marks[mark]); // Print array element
}

// Adding New Elements to an Array
marks.push(120); // add at the end 
console.log(marks);
marks.unshift(322); // add at begining
console.log(marks);

// Removing Elements from an Array

let last = marks.pop(); // remove the last one
let first = marks.shift(); // remove the last one
console.log(last); // print:120
console.log(first); // print:322

// Adding or Removing Elements at Any Position
console.log(numbers);
let removed = numbers.splice(0, 1); // Remove the first element
console.log(removed);
console.log(numbers);

// Creating a String from an Array

console.log(names.join("+")); // pirnt : Sali+Adam+Hello
console.log(names.join(" ")); // pirnt : Sali Adam Hello

// Extracting a Portion of an Array
fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
let subarr = fruits.slice(1, 4);
console.log(subarr); // Prints: [ 'Banana', 'Mango', 'Orange' ]
console.log(fruits.slice(2)); // Prints: [ 'Mango', 'Orange', 'Papaya' ]
console.log(fruits.slice(-2)); // Prints: [ 'Orange', 'Papaya' ]
console.log(fruits.slice(2, -1)); // Prints: [ 'Mango', 'Orange' ]

// Merging Two or More Arrays

let oddNumber = [1, 3, 5, 7, 9, 11];
let evenNumber = [2, 4, 6, 8, 10];
// Creating new array by combining oddNumber and evenNumber arrays
let fullNumbers = oddNumber.concat(evenNumber);
console.log(fullNumbers);

// JavaScript Array forEach() Method

let myList = [1, 2, 3, 4, 5, 6, 7];
myList.forEach(function(value, index) {
    console.log(value); // print : 1,2,3,4,5,6,7
});

let myMumbers = [65, 44, 12, 4];
myMumbers.forEach(function(number) {
    console.log(number);
});

// JavaScript Array map() Method

myOldList = [0, 1, 2, 3, 4, 5];
// myNewList now contain [ 0, 10, 20, 30, 40, 50 ]
myNewList = myOldList.map(function(value, index) {
    return value * 10;
});

myNewList.forEach(function(value, index) {
    console.log(value);
});
console.log(myNewList)

// Array Recrsition

myList = [1, 2, 3, 4, 5, 6];
// Recrsive function
let print = function(index, list) {
    // base case
    if (index === list.length) {
        return
    }
    console.log(list[index]);
    // Recrsive case
    print(index + 1, list);
};

// call function
print(0, myList);

// JavaScript Array filter() Method

let lettrs = ['a', 'b', 'c', 'd', 'h'];

let myFilterList = lettrs.filter(function(value, index) {
    return value === 'c' || value == 'h';
});

myFilterList.forEach(function(value, index) {
    console.log(value);
});