// get the canvas 
let canvas = document.getElementById("myCanvas");

// draw 2d
let context = canvas.getContext("2d");

// just variable to used latter
let xd = 1;

// create array of object
let points = [{
        x: 0,
        y: 50,
        width: 50,
        height: 50,
        color: 'red'
    },
    {
        x: 50,
        y: 50,
        width: 50,
        height: 50,
        color: 'blue'
    },
    {
        x: 100,
        y: 50,
        width: 50,
        height: 50,
        color: 'orange'
    }
];

// function to draw canvas

let draw = function() {

    // call clear function
    // context.clearReact(0, 0, canvas.width, canvas.height);

    // call foreach function
    points.forEach(function(point) {
        // set the color
        context.fillStyle = point.color;
        // Fill with Rectangle(draw Rectangle)
        context.fillRect(point.x, point.y, point.width, point.height, point.color);

        // increment point.x by 1
        point.x += xd;
    });
};

let animate = function() {
    // call draw function
    draw();

    // Recursive call after every 10 mili second
    window.setTimeout(animate, 10);
};

// call animate function
animate();