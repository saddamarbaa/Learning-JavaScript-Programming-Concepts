// JavaScript Objects

// Creating Objects
// Using the JavaScript Keyword new

let student = new Object(); // "object constructor" syntax
student.firstName = "Jhon";
student.lastName = "Doe";
student.age = 34;
student.gba = 3.5;
student.age = 35; // JavaScript Objects are Mutable
console.log("age is now " + student.age); // print :35

let user = {}; // "object literal" syntax

const data = { // an object
    name: "Saddam Arbaa", // by key "name" store value "Saddam Arbaa"
    age: 30, // by key "age" store value 30
    organization: { // an object
        name: "Khartoum University",
        city: "Khartoum",
        coutry: "Sudan",
    },
    love: "Music",
    getName: function() {
        // The this Keyword
        return this.name;
    }
};

console.log(data.name); // print : Saddam Arbaa
console.log(data.age); // print :30
console.log(data.love); // print : Music
// print : { name: 'Khartoum University', city: 'Khartoum', coutry: 'Sudan' }
console.log(data.organization);
console.log(data.organization.name); // print :Khartoum University
console.log(data.organization.coutry); // print : Sudan
console.log(data.organization.city); // print : Khartoum
console.log(data.getName()); // print : Saddam Arbaa

let book = {
    "name": "Harry Potter and the Goblet of Fire",
    "author": "J. K. Rowling",
    "year": 2000
};

// Accessing Object's Properties
// Dot notation
console.log(book.author); // Prints: J. K. Rowling

// Bracket notation
console.log(book["year"]); // Prints: 2000
console.log(book['name']); // Prints: Harry Potter and the Goblet of Fire

// Looping Through Object's Properties

for (stn in student) {
    console.log(stn);
}

const Math = {
    pow: function(base, exponent) {
        if (exponent === 0) {
            return 1;
        }
        return base * Math.pow(base, exponent - 1);
    },
    circleArea: function(r) {
        return 3.1415926 * Math.pow(r, 2);
    }
};

console.log(Math.pow(2, 3)); // print: 8