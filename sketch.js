var dt = 0.05;
var scl = 2;

function setup()
{
    createCanvas(700, 700);
    frameRate(40);
}

function draw()
{
    background(51);
    textSize(32);
    fill(255);
    text('Oberstdorf HS137', 200, 100);
    drawHill();
    updateJumper();
    drawJumper();
    if (landed)
    {
        stroke(200, 200, 100);
        fill(200, 200, 100);
        // translate(300, 0);
        // rotate(Math.PI / 6);
        // ellipse(landingPosition.x, landingPosition.y, 4, 8);
        ellipse(landingPosition.x, landingPosition.y, 4);
    }
}

function keyPressed()
{
    if (keyCode === UP_ARROW)
    {
        takeOff();
    } else if (keyCode === DOWN_ARROW)
    {

    } else if (keyCode === RIGHT_ARROW)
    {

    } else if (keyCode === LEFT_ARROW)
    {

    }
}
