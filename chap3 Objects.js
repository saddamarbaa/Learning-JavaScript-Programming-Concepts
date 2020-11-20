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
    lov: "Music"
};


var person = {
    name: "Ali",
    age: 32,
    gender: "Male",
    displayName: function() {
        console.log(this.name);
    }
};

console.log(data.name); // print : Saddam Arbaa
console.log(data.age); // print :30
console.log(data.lov); // print : Music
// print : { name: 'Khartoum University', city: 'Khartoum', coutry: 'Sudan' }
console.log(data.organization);
console.log(data.organization.name); // print :Khartoum University
console.log(data.organization.coutry); // print : Sudan
console.log(data.organization.city); // print : Khartoum