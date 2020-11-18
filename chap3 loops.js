// JavaScript For Loop

/*
for loop syntax:
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
*/

for (let i = 0; i <= 10; i++) {
    // Runs 10 times, with values of step 0 through 9.
    console.log(i);
}

// JavaScript While Loop statement

/*
Syntax
while (condition) {
  // code block to be executed
}
*/

let j = 0;
while (j < 10) {
    console.log("the number is " + j);
    j++;
}

// The Do/While Loop

/*
Syntax
do {
  // code block to be executed
}
while (condition);
*/

let k = 0;
do {
    console.log("the number is " + k);
    k++;
} while (k < 10);

// Infinite loops are bad!
/*
while (true) {
    console.log('Infinite loops are bad');
}
*/


/*
JavaScript Break and Continue
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.
*/
for (let x = 0; x < 15; x++) {
    if (x === 2) {
        console.log("time to Break");
        continue;
    }
    console.log(x);
}

// The Continue Statement
j = 10;
while (j > 0) {

    console.log(j);

    j--;
}