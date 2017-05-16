var position = {
    x: 50,
    y: 300
};
var landingPosition;
var velocity = {
    x: 0,
    y: 10
};
var gravity = 10;
var inrunSegment = 0;
var jumperSegment = 0;
var landed = false;
var jumped = false;
var aerodynamic = 0;
var dragCoefficient = 0;


function det(a, b, c) {
    return (b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x);
}

function drawJumper() {
    stroke(200);
    fill(50, 100, 255);
    ellipse(position.x, position.y, 5);
    document.getElementById("segment").innerHTML = jumperSegment;
    if (!landed) {
        document.getElementById("distance").innerHTML = pref[jumperSegment];
    }
    else {
        //        document.getElementById("distance").innerHTML = pref[jumperSegment] + distance(outrun[jumperSegment], landingPosition);
        //        console.log(distance(outrun[jumperSegment], position));
    }
    //    console.log(velocity);
    //    console.log(det(outrun[jumperSegment], position, outrun[jumperSegment+1]));
}
/*

JUMPER STATES:

1. Start gate

2. Inrun

3. Take-off

4. Flight

5. Langing

6. Outrun



*/
function updateJumper() {
    console.log(velocity);
    velocity.y += gravity * dt;
    //lift and frag force
    var speed = distance({x: 0, y: 0}, velocity);
    var lift = {x: velocity.y * speed * aerodynamic, y: -velocity.x * speed * aerodynamic};
    var drag = {x: -velocity.x * speed * dragCoefficient, y: -velocity.y * speed * dragCoefficient};
    
    velocity.x += lift.x + drag.x;
    velocity.y += lift.y + drag.y;

    position.x += velocity.x * dt;
    position.y += velocity.y * dt;
    if (position.x < inrun[inrun.length - 1].x) {
        if (position.x >= inrun[inrunSegment + 1].x) {
            inrunSegment++;
        }
        if (det(inrun[inrunSegment], position, inrun[inrunSegment + 1]) <= 0) {
            var impulse = getNormal(inrun[inrunSegment], inrun[inrunSegment + 1]);
            var temp = dotProduct(impulse, velocity);
            var pom = {
                x: position.x - inrun[inrunSegment].x,
                y: position.y - inrun[inrunSegment].y
            };
            //            console.log(pom);
            var penetration = dotProduct(impulse, pom);
            //            console.log(penetration);
            //            console.log(impulse);
            velocity.x -= impulse.x * (temp + penetration * 10);
            velocity.y -= impulse.y * (temp + penetration * 10);
        }
    }
    else {
        if (position.x >= outrun[jumperSegment + 1].x) {
            jumperSegment++;
        }
        if (det(outrun[jumperSegment], position, outrun[jumperSegment + 1]) <= 0) {
            var impulse = getNormal(outrun[jumperSegment], outrun[jumperSegment + 1]);
            var temp = dotProduct(impulse, velocity);
            var pom = {
                x: position.x - outrun[jumperSegment].x,
                y: position.y - outrun[jumperSegment].y
            };
            var penetration = dotProduct(impulse, pom);
            velocity.x -= impulse.x * (temp + penetration * 2);
            velocity.y -= impulse.y * (temp + penetration * 2);
            if (landed === false) {
                document.getElementById("distance").innerHTML = pref[jumperSegment] + distance(outrun[jumperSegment], position) / scl;
                landed = true;
            }
        }
    }
}

function takeOff() {
    if (!jumped) {
        if (position.x <= inrun[inrun.length - 1].x) {
            velocity.y -= 5;
        }
        else {
            velocity.y -= 0;
        }
        aerodynamic = 0.00024;
        dragCoefficient = 0.00022;
        jumped = true;
    }
}


