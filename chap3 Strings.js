// JavaScript Strings
// Strings (Common Methods)

// Create a string variable
let greet = 'Hello'; // using single quotes
let address = '123 Batam Indonesia'; // using single quotes
let greeting = "Hello World"; // using double quotes
let firstName = "Sa'dd'am"; // single quote inside double quotes
let secondName = 'Sadd"a"m'; // double quotes inside single quotes
let love = 'I\'love javscript.'; // escaping single quote with backslash
console.log(love);

let fruit = "banana"
let moreFruit = "banana\napple"; // new line
console.log(moreFruit);

// String Length

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length; // get length
console.log(sln);
console.log(txt.length); // return 26
console.log(fruit.length); // return 26

// JavaScript Escape Sequences

// \n is replaced by the newline character
let strName = "my name is \n Saddam Arbaa.";
console.log(strName);

// \r is replaced by the carriage-return character
let str1 = "C:\Users\Downloads";
let str2 = "C:\\Users\\Downloads";
console.log(str1); // Prints C:UsersDownloads
console.log(str2); // Prints C:\Users\Downloads

// Finding a String in a String

fruit = "banana";
let call = "please call My name call"
console.log(fruit.indexOf('b')); // return 0
console.log(fruit.indexOf('m')); // return -1
console.log(fruit.indexOf('n')); // return 2
console.log(call.lastIndexOf("call")); // return 20
console.log(call.indexOf("call")); // return 7



/*
console.log(fruit.slice(2, 6)); // return nana
console.log(fruit.slice(0, 3)); // return ban

console.log(fruit.replace("bana", "saddam")); // return saddamna

console.log(fruit.toLowerCase()); // return banana
console.log(fruit.toUpperCase()); // return BANANA

console.log(fruit.charAt(2)); // return n
console.log(fruit.charAt(0)); // return b
console.log(fruit[2]); // return n
console.log(fruit[0]); // return b

let names = "Ali,Adam,Jhon";
// split by character(defult one)
console.log(fruit.split('')); // return [ 'b', 'a', 'n', 'a', 'n', 'a' ]
// split by a comma
console.log(names.split(',')); // return [ 'Ali', 'Adam', 'Jhon' ]
*/