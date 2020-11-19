// Strings (Common Methods)

let fruit = "banana"
let moreFruit = "banana\napple"; // new line
console.log(moreFruit);

// furit.length
console.log(fruit.length); // get length

console.log(fruit.indexOf('b')); // return 0
console.log(fruit.indexOf('m')); // return -1
console.log(fruit.indexOf('n')); // return 2

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