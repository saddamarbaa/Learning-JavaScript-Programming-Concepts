// Javscript Fundamentals
// Functions in JavaScript

/* JavaScript Function Syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
  Seps
  1. create 
  2. call 
*/

// create
function sayHello() {
    console.log("Hello Dear Nice To Meet You");
}

// call
sayHello();

// create
function greeting(name) {
    // string concatenation
    let final = "Hello " + name;
    console.log(final);
}

name = "Saddam Arbaa"

// call greeting function and pass argument(name)
greeting(name);

// How do arguments work in function
// function to add two numbers and return the result
function sumNumbers(num1, num2) {
    return num2 + num2;
}

// call function and pass 2 numbers
let result = sumNumbers(12, 12);
console.log(result);

// The function returns the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
}

// call myFunction
// document.getElementById("demo").innerHTML = myFunction(4, 3);

// Function is called, return value will end up in x
let product = myFunction(4, 3)
console.log(product);

// function to Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

//
temperature = toCelsius(77);
console.log("The temperature is " + temperature + " Celsius");