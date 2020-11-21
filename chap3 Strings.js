// JavaScript Strings
// Strings(Common Methods)

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

// Searching for a Pattern Inside a String

let str4 = "Color red looks brighter than color blue.";
// Case sensitive search 
let pos1 = str4.search("color");
console.log(pos1); // 0utputs: 30

// Extracting a Substring from a String
// The slice() Method

let fruits = "Apple, Banana,and";
console.log(fruits.slice(7, 13)); // Banana
console.log(fruits.slice(0, 5)); // return Apple

// Extracting a Fixed Number of Characters from a String

console.log(fruits.substr(5, 13)); // Banana
console.log(fruits.substr(0, 5)); // return Apple

// Replacing the Contents of a String

console.log(str4.replace("color", "ok"));
console.log(fruit.replace("bana", "saddam")); // return saddamna

// Converting a String to Uppercase or Lowercase

console.log(fruit.toLowerCase()); // return banana
console.log(fruit.toUpperCase()); // return BANANA

// Accessing Individual Characters from a String

let str8 = "Hello World!";
console.log(str8.charAt()); // Prints: H
console.log(str8.charAt(0)); // Prints: H
console.log(str8.charAt(2)); // Prints: L
console.log(str8.charAt(str8.length - 1)); // Prints: !
console.log(str8.charAt(762)); // Prints nothing
console.log(str8[0]); // Prints: H
console.log(str8[2]); // Prints: return L

// Splitting a String into an Array

let names = "Ali,Adam,Jhon";
let fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
// split by character(defult one)
console.log(fruit.split('')); // return [ 'b', 'a', 'n', 'a', 'n', 'a' ]
// split by a comma
console.log(names.split(',')); // return [ 'Ali', 'Adam', 'Jhon' ]
let fruitsArr = fruitsStr.split(", ");
console.log(fruitsArr[0]); // Prints: Apple
console.log(fruitsArr[2]); // Prints: Mango
console.log(fruitsArr[fruitsArr.length - 1]); // Prints: Papaya

// Concatenating Two or More Strings

let firstNamee = "Saddam";
let lastName = "Arba";
let fullName = firstNamee + " " + lastName;
console.log(fullName); // Prints: Saddam Arba