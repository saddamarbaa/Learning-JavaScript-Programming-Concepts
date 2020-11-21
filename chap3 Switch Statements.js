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
        console.log("Today is Monday");
        break;
    case 1:
        console.log("Today is Tuesday");
        break;
    case 2:
        console.log("Today is Wednesday");
        break;
    case 3:
        console.log("Today is Thursday");
        break;
    case 4:
        console.log("Today is Friday")
        break;
    case 5:
        console.log("Today is Saturday\nhappy weekend");
        break;
    case 6:
        console.log("Today is Sunday\n happy weekend");
        break;

    default:
        console.log("Invalid day");
        // not need break statement after default case I added only for readability
        break;
}

// switch statement to check size
let Number = 40;
let size;
switch (Number) {
    case 30:
        size = "Small";
        break;
    case 40:
        // match the value of this case
        size = "Medium";
        break;
    case 42:
        size = "Large";
        break;
    case 47:
        size = "Extra Large";
        break;
    default:
        size = "its Unknown size";
        // not need break statement after default case I added only for readability
        break;
}

console.log(size);

// displays the name of the month, based on the value of month, using the switch statement.
let monthInNumber = now.getMonth();
// console.log(monthInNumber); // for testing
let monthInString = ""
switch (monthInNumber) {
    case 0:
        monthInString = "January";
        break;
    case 1:
        monthInString = "February";
        break;
    case 2:
        monthInString = "March";
        break;
    case 3:
        monthInString = "April";
        break;
    case 4:
        monthInString = "May";
        break;
    case 5:
        monthInString = "June";
        break;
    case 6:
        monthInString = "July";
        break;
    case 7:
        monthInString = "August";
        break;
    case 8:
        monthInString = "September";
        break;
    case 9:
        monthInString = "October";
        break;
    case 10:
        monthInString = "November";
        break;
    case 11:
        monthInString = "December";
        break;
    default:
        monthInString = "Invalid month";
        // not need break statement after default case I added only for readability
        break;
}
console.log(monthInString);