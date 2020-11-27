// get the canvas 
let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");

let xd = 1;

// create array of object
let points = [{
        x: 0,
        y: 50,
        width: 50,
        height: 50,
        color: "red"
    },
    {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        color: "blue"
    },
    {
        x: 100,
        y: 50,
        width: 50,
        height: 50,
        color: "orange"
    }
];

// color
context.fillStyle = "red";

// Fill with Rectangle(draw Rectangle)
context.fillRect(10, 10, 50, 50);