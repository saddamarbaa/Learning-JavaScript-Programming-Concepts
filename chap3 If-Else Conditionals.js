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
    /* This statement will only execute if the
     * above condition (dayOfWeek === 5) returns true
     */
    console.log("Have a nice weekend!");
}

const name = "Sadam";
if (name === "Sadam") {
    /* This statement will only execute if the
     * above condition (name === "Sadam") returns true
     */
    console.log("hi " + name);
}

// The else Statement

/*
Syntax
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/

if (name === "Sadam") {
    /* This statement will only execute if the
     * above condition (name === "Sadam") returns true
     */
    console.log("hi " + name + " You are most welcome");
} else {
    /* This statement will only execute if the
     * condition specified in the "if" returns false.
     */
    console.log("Sorry " + name + " You are not welcome here please go back");
}

let age = 23;
if (age >= 18) {
    /* This statement will only execute if the
     * above condition (age>=18) returns true
     */
    console.log("You are eligible for voting");
} else {
    /* This statement will only execute if the
     * condition specified in the "if" returns false.
     */
    console.log("You are not eligible for voting");
}

// Nested If..else statement

/*
Syntax of Nested if else statement:

if(condition) {
    //Nested if else inside the body of "if"
    if(condition2) {
       //Statements inside the body of nested "if"
    }
    else {
       //Statements inside the body of nested "else"
    }
}
else {
    //Statements inside the body of "else"
}
*/

Number1 = 10;
Number2 = 12;
if (Number1 != Number2) {
    console.log(Number1 + " is not equal to " + Number2);
    //Nested if else
    // Will only be executed if statement above (Number1 != Number2) it is true 
    if (Number1 > Number2) {
        console.log(Number1 + " is greater than " + Number2);
    } else {
        console.log(Number1 + " is less than " + Number2);
    }

} else {
    console.log(Number1 + " is equal to " + Number2);
}