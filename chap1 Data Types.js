// Data Types in JavaScript

// The Number Data Type
// integer(A number without decimals)
var num = 25;
console.log(num);

// floating-point number(A number with decimals)
const PI = 3.14;
var num1 = 80.5;
console.log(PI);
console.log(num1);

// exponential notation, same as 4.25e6 or 4250000
var num2 = 4.25e+6;
console.log(num2);

// exponential notation, same as 0.00000425
var num3 = 4.25e-6;
console.log(num3);

var x = 0.2 + 0.1;
console.log(x);

// The Boolean Data Type

let isCodingFun = true; // yes coding is fun
let isFishTasty = false; // no is not tasty
let isJavaScriptFun = true; // yes js is fun
console.log(isCodingFun); // Outputs  (true)
console.log(isJavaScriptFun); // Outputs  (true)
console.log(isFishTasty); // Outputs (false)

// Boolean Expression
let number1 = 10;
let number2 = 9;
// returns true, because 10 is higher than 9
console.log(number1 > number2);

// returns false, because 10 is not equal to 9
console.log(number1 === number2);

// The String Data Type
// Create a string variable
let greet = 'Hello'; // using single quotes
let address = '123 Batam Indonesia'; // using single quotes
let greeting = "Hello World"; // using double quotes
let firstName = "Sa'dd'am"; // single quote inside double quotes
let secondName = 'Sadd"a"m'; // double quotes inside single quotes
let love = 'I\'love javscript.'; // escaping single quote with backslash
console.log(love);

// The Undefined Data Type
let fullName; // Value is undefined, type is undefined
console.log(fullName);
let l; // Value is undefined, type is undefined
let y = 23;
console.log(l); // Output: undefined
console.log(y); // output: 23

// The Null Data Type
let test = null;
console.log(test); // Output: null
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person);
person = null; // Now value is null, but type is still an object
console.log(person); // Output: null

// Primitive Data 
// typeof "Hello" // Returns "string"
console.log(typeof "Hello");

// typeof 14 // Returns "number"
console.log(typeof 12);
// typeof 3.14 // Returns "number"
console.log(typeof 3.13);

// typeof true // Returns "boolean"
// typeof false // Returns "boolean"
console.log(typeof true);
console.log(typeof false);

//typeof z // Returns "undefined" (if z has no value)
console.log(typeof z);
console.log(typeof dear);

// The Object Data Type
let emptyObject = {};
let student = { "name": "Sadam", "surname": "Arba", "age": "30" };
console.log(student);
// typeof false // Returns "boolean"
console.log(typeof student);