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
        break;
        // not need break statement after default case I added only for readability
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
        break;
        // not need break statement after default case I added only for readability
}
console.log(size);

// displays the name of the month, based on the value of month, using the switch statement.
let monthInNumber = 2;
let monthInString = ""
switch (monthInNumber) {
    case 1:
        monthInString = "January";
        break;
    case 2:
        monthInString = "February";
        break;
    case 3:
        monthInString = "March";
        break;
    case 4:
        monthInString = "April";
        break;
    case 5:
        monthInString = "May";
        break;
    case 6:
        monthInString = "June";
        break;
    case 7:
        monthInString = "July";
        break;
    case 8:
        monthInString = "August";
        break;
    case 9:
        monthInString = "September";
        break;
    case 10:
        monthInString = "October";
        break;
    case 11:
        monthInString = "November";
        break;
    case 12:
        monthInString = "December";
        break;
    default:
        monthInString = "Invalid month";
        break;
}

break;

default:
break;
}