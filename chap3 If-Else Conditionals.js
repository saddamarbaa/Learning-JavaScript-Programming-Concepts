// JavaScript Conditional Statements (Control Flows)

// The if Statement

/*
Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}
*/

let now = new Date();
let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
if (dayOfWeek === 5) {
    console.log("Have a nice weekend!");
}

const name = "Sadam";
if (name === "Sadam") {
    console.log("hi " + name);
}