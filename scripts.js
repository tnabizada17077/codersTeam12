/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;  //creates variable of starting position 
var angle; //creates variable of direction of drawing moves

function radian(degree) { //conversion of degrees to radians by multiplying it to pi/180
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle); //previous function of conversion is now saved as variable a in function moveforward
    x = x + distance * Math.cos(a); //calculates new x coordinate, horiz
    y = y + distance * Math.sin(a); // calculates new y coordinate, vertical movement
    context.lineTo(x, y);    //new line is drawn at new position
}

function turnRight(degree) {
    angle = angle - degree; //substracts given degree from current angle
    if (angle < 0) angle = angle + 360; // to make sure that it stays within 0 to 360 and does not go less than 0. a full circle
}

function turnLeft(degree) {
    angle = angle + degree; // add the given degree to current angle
    if (angle > 360) angle = angle - 360; // to make sure that angle do not go beyond 360, again a full circle
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) { //loop where pen moves forward by starting from varibale counter starting at 3 pixels 
        //and increasing by 3 in each iterration
        moveForward(counter, context);
        context.stroke(); //after each movement, draws the line from previous to new position
        turnRight(89); //after each movement rotatees by 89 making it spiral
    }
}