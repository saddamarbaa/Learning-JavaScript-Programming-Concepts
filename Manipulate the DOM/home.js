// for testing
// alert("yes")

console.log("hello world");
// for testing
console.log("hello there");
// alert("Yeoo");
console.log("hello this Saddam");


let container = document.getElementById("container");
// container.innerHTML = "new text";

// return 3
let len = container.children.length;
console.log(len);


// access container.children[1]  
container.children[0].innerHTML = "firsr child";

// access container.children[1] 
container.children[1].innerHTML = "second child";

const puppy = container.children[1];

//  addEventListener
document.addEventListener('click', function() {
    container.children[0].innerHTML = '123';
});


document.addEventListener("click", function() {
    container.children[1].innerHTML = "Hello World";
});