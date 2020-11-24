// Javscript Fundamentals
// Functions in JavaScript 

/* JavaScript Function Syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
  Seps
  1. create  function 
  2. invokes (calls)
*/

// create
function sayHello() {
    console.log("Hello Dear Nice To Meet You");
};

// call
sayHello();

// create
function greeting(name) {
    // string concatenation
    let final = "Hello " + name;
    console.log(final);
};

name = "Saddam Arbaa"

// call greeting function and pass argument(name)
greeting(name);

// How do arguments work in function
// function to add two numbers and return the result
function sumNumbers(num1, num2) {
    return num2 + num2;
};

// call function and pass 2 numbers
let result = sumNumbers(12, 12);
console.log(result);

// The function returns the product of p1 and p2
function myFunction(p1, p2) {
    return p1 * p2;
};

// call myFunction
// document.getElementById("demo").innerHTML = myFunction(4, 3);

// Function is called, return value will end up in x
let product = myFunction(4, 3)
console.log(product);

// function to Convert Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
};

// function invokes (calls)
temperature = toCelsius(77);
console.log("The temperature is " + temperature + " Celsius");

/*
The function takes one parameter, called number
and return the square of it */

const square = function(number) { return number * number };

// call square(x gets the value 16)
var x = square(4)
console.log(x);

// factorial of number n

const fact = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };

// call 
console.log(fact(5)) // return 120

// Recursive function to compute factorial of number n
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
};

// declare variables
let a, b, c, d, e;

// a gets the value 1
a = factorial(1);
console.log(a);

// b gets the value 2
b = factorial(2);
console.log(b);

// c gets the value 6
c = factorial(3);
console.log(c);

// d gets the value 24
d = factorial(4);
console.log(d);

// e gets the value 120
e = factorial(5);
console.log(e);


// function function fun1 Return  func2
// function Return function

const fun1 = function() {
    const fun2 = function() {
        return 10;
    };
    return fun2;
};

// call func1
const test = fun1();

//  call test which contain func2
const final = test();

// result 10
console.log();

// function Return function
const fun5 = function(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};

/*  r now contain function blow
return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
*/
const r = fun5(4);

/* r2 now contain function blow
return function(c) {
            return a + b + c;
        };
*/
const r2 = r(5);

// r3 now contain 10
const r3 = r2(1);

// finall result is 10
console.log(r3);


// passing function as argument to anthor function 

const fun6 = function() {
    return 1;
};

const fun7 = function(fun) {
    return fun();
};

// function call function
const testResult = fun7(fun6);
// result will be one
console.log(testResult);

// recursive function to print numbers from N to 1
const recsvieFun = function(number) {
    // base case
    if (number <= 0) {
        return;
    }
    console.log(number);
    // recursive case
    recsvieFun(number - 1);
};

// invoke the function
recsvieFun(15);


// recursive function to return sum of numbers from N to 1
const sumNum = function(num) {
    // base case
    if (num <= 0) {
        return num;
    }
    // recursive case
    return num + sumNum(num - 1);
};

// invoke the function
const sumfact = sumNum(5);
// Result will be 15 in this case
console.log(sumfact);

// variable Scoping
const globalNumber = 10;
// the main function
const mainFunction = function(firstNumber) {
    // return function
    return function(secondNumber) {
        // return function
        return function(thridNumber) {
            // return the flowing
            return firstNumber + secondNumber + thridNumber + globalNumber;
        };
    };
};

// invoke the function
const firstNumber = 20;
// call mainFunction with 10
const firstCall = mainFunction(firstNumber);
// call firstCall() with 10
const secondCall = firstCall(10);
// call firstCall() with 10
const thridCall = secondCall(10);
// final Result will be 50
console.log(thridCall);


// Function Scope

const x1 = 1

const myFunction1 = function() {
    const x1 = 2
    console.log(x1) // 2
};
myFunction1()
console.log(x1) // 1

// Block Scope 

/*
const x2 = 1 
{
    const x2 = 2
    console.log(x2) // 2
}
console.log(x2) // 1

*/

// function to draw n starts and n is positive number

const drawStars = function(n) {
    let stars = ''
    for (let i = 0; i < n; i++) {
        stars = stars + " *";
    }
    // return the stars
    return stars;
}

// call printStars() function with 5
const stars = drawStars(5);
console.log(stars); // print: * * * * *

// same above function recursive implementation

const recursiveDrawStars = function(n) {
    // base case
    if (n <= 0) {
        return " ";
    }
    // recursive case
    return '*' + drawStars(n - 1);
}
console.log(recursiveDrawStars(5)); // print: * * * * *

// helper function to draw square n stars

const squareHelper = function(n, starCount) {
    // base case
    if (n === 0) {
        return " ";
    }
    //  draw one row n stars * * * * *
    console.log(recursiveDrawStars(starCount));
    // then recursive call
    squareHelper(n - 1, starCount);
}

/* function to draw square n stars
 * * * *
 * * * *
 * * * *
 * * * *
 */

const drawSquareStars = function(n) {
    // call helper function for help
    return squareHelper(n, n);
};

/*
 * * *
 * * *
 * * *
 */
console.log(drawSquareStars(3));


/*
 * * * *
 * * * *
 * * * *
 * * * *
 */
console.log(drawSquareStars(4));


/*
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */
console.log(drawSquareStars(5));

// Recursive function to find all the number(from 1 to N) that are divisible by N

const evenlyDivisible = function(num) {

    // create empty array to store the numbers latter
    let divisibleNumber = [];

    // helper function to help evenlyDivisible() function  in Receive manner

    const evenlyDivisibleHelper = function(num, div) {
        // base case
        if (div > num) {
            return; // we are done
        }
        // if the number is divisible by N added to divisible Number array
        if (num % div === 0) {
            divisibleNumber[divisibleNumber.length] = div;
        }
        // Receive case
        evenlyDivisibleHelper(num, div + 1);
    };

    // call the helper function
    evenlyDivisibleHelper(num, 1);

    // return the  divisible Number array
    return divisibleNumber;
}

// call the function
console.log(evenlyDivisible(24));

// Recursive function to return sum of number from 1 to N 
// assuming N is positive number

const sum = function name(num) {
    // base case
    if (num === 0) { return 0 }
    // Receive case
    return num + sum(num - 1);
};

// call the function
console.log(sum(5)); // print : 15
console.log(sum(4)); // print : 10
console.log(sum(3)); // print : 6