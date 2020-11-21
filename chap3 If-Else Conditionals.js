// JavaScript Conditional Statements(Control Flows)

// The if Statement

// Syntax
/*
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

// Syntax
/*
if (condition) {
  //  block of code to be executed if the condition is true
} 
else {
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

// Syntax of Nested if else statement:
/*
if(condition) {
    // Nested if else inside the body of "if"
    if(condition2) {
       //Statements inside the body of nested "if"
    }
    else {
       // Statements inside the body of nested "else"
    }
}
else {
    // Statements inside the body of "else"
}
*/

Number1 = 10;
Number2 = 12;
if (Number1 != Number2) {
    console.log(Number1 + " is not equal to " + Number2);
    // Nested if else
    // Will only be executed if statement above (Number1 != Number2) it is true 
    if (Number1 > Number2) {
        console.log(Number1 + " is greater than " + Number2);
    } else {
        console.log(Number1 + " is less than " + Number2);
    }
} else {
    console.log(Number1 + " is equal to " + Number2);
}

// The else if Statement

// Syntax of else..if statement:
/*
if (condition1) 
{
   // These statements would execute if the condition1 is true
}
else if(condition2) 
{
   // These statements would execute if the condition2 is true
}
else if (condition3) 
{
   // These statements would execute if the condition3 is true
}
.
.
else 
{
   // These statements would execute if all the conditions return false.
}
*/

// update value of variable number1 and number2
Number1 = 23;
Number2 = 123;
if (Number1 === Number2) {
    console.log(Number1 + " is equal to " + Number2);
} else if (Number1 > Number2) {
    console.log(Number1 + " is greater than " + Number2);
} else {
    console.log(Number2 + " is greater than " + Number1);
}

// student grade example
// printing the students' grades based on their marks
/*
Marks Grade

90 — — -100 A+

80 — — -89 A

70 — — -79 B

60 — — -69 C

50 — — -59 D

00 — — -49 F 
*/

let marks = 40;
if (marks < 0) { // Handle corner cases
    console.log("Invalid Marks\ngrade should be positive number");
} else if (marks > 100) {
    console.log("Invalid Marks\ngrade should be number between zero to 100")
} else if (marks >= 90 && marks <= 100) {
    console.log("Your Grade is A+ ");
} else if (marks >= 80 && marks < 90) {
    console.log("Your Grade is A ");
} else if (marks >= 70 && marks < 80) {
    console.log("Your Grade is B ");
} else if (marks >= 60 && marks < 70) {
    console.log("Your Grade is C ");
} else if (marks >= 50 && marks < 60) {
    console.log("Your Grade is D ");
} else {
    // in else case the grade is between 0 and 40
    console.log("Your Grade is F with that been said You Failed in this exam.")
}

// The Ternary Operator

// Syntax
// result = binaryCondition ? valueReturnedIfTrue : valueReturnedIfFalse;

let firstNumber = 10,
    secondNumber = 15,
    result;
// Looking at the maximum example
//if firstNumber > secondNumber, it returns firstNumber , if not it returns secondNumber
result = (firstNumber > secondNumber) ? firstNumber : secondNumber;
console.log("the smallest number is : " + result);

age = 19; // upade age 
let userType = age < 18 ? 'Child' : 'Adult';
console.log(userType); // print: Adult