// The JavaScript Switch Statement

// Syntax
/*
switch(expression) {
  case x:
    // code block
    // Statements executed when the result of expression matches x
    break;
  case y:
     // code block
    // Statements executed when the result of expression matches y
    break;
  default:
    // code block
    // Statements executed when none of the values match the value of the expression
} 
*/

let now = new Date();
let dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6
// console.log(dayOfWeek); // for testing
switch (dayOfWeek) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday")
        break;
    case 5:
        console.log("Saturday\nhappy weekend");
        break;
    case 6:
        console.log("Sunday\n happy weekend");
        break;

    default:
        console.log("Invalid day");
        break;
        // not need break statement after default case I added only for readability
}