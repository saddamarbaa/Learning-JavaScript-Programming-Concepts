// JavaScript Objects

let user = new Object(); // "object constructor" syntax
let users = {}; // "object literal" syntax

// Creating Objects

const data = { // an object
    name: "Saddam Arbaa", // by key "name" store value "Saddam Arbaa"
    age: 30, // by key "age" store value 30
    organization: { // an object
        name: "Khartoum University",
        city: "Khartoum",
        coutry: "Sudan",
    },
    love: "Music"
};

// Using the JavaScript Keyword new


console.log(data.name); // print : Saddam Arbaa
console.log(data.age); // print :30
console.log(data.love); // print : Music
// print : { name: 'Khartoum University', city: 'Khartoum', coutry: 'Sudan' }
console.log(data.organization);
console.log(data.organization.name); // print :Khartoum University
console.log(data.organization.coutry); // print : Sudan
console.log(data.organization.city); // print : Khartoum

let person = {
    name: "Ali",
    age: 32,
    gender: "Male",
    displayName: function() {
        console.log(this.name);
    }
};

// Accessing Object's Properties

let book = {
    "name": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "year": 2000
};

// Dot notation
console.log(book.author); // Prints: J. K. Rowling

// Bracket notation
console.log(book["year"]); // Prints: 2000
console.log(book['name']); // Prints: Harry Potter and the Goblet of Fire