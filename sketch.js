var dt = 0.05;
var scl = 2;

function setup() {
    createCanvas(700, 700);
    frameRate(20);
}

function draw() {
    background(51);
    drawHill();
    updateJumper();
    drawJumper();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        takeOff();
    } else if (keyCode === DOWN_ARROW) {

    } else if (keyCode === RIGHT_ARROW) {

    } else if (keyCode === LEFT_ARROW) {

    }
}
