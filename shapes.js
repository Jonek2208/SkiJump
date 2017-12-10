var inrun = [];

inrun.push({
    x: 40,
    y: 305
});
inrun.push({
    x: 60,
    y: 317
});
inrun.push({
    x: 80,
    y: 329
});
inrun.push({
    x: 100,
    y: 341
});
inrun.push({
    x: 120,
    y: 353
});
inrun.push({
    x: 140,
    y: 365
});
inrun.push({
    x: 160,
    y: 377
});
inrun.push({
    x: 180,
    y: 387
});
inrun.push({
    x: 200,
    y: 393
});
inrun.push({
    x: 220,
    y: 395
});

var outrun = [];

outrun.push({
    x: 220,
    y: 400
});
outrun.push({
    x: 240,
    y: 405
});
outrun.push({
    x: 260,
    y: 415
});
outrun.push({
    x: 280,
    y: 427
});
outrun.push({
    x: 300,
    y: 440
});
outrun.push({
    x: 320,
    y: 455
});
outrun.push({
    x: 340,
    y: 465
});
outrun.push({
    x: 360,
    y: 470
});
outrun.push({
    x: 380,
    y: 470
});
outrun.push({
    x: 400,
    y: 470
});
outrun.push({
    x: 420,
    y: 470
});
outrun.push({
    x: 440,
    y: 470
});
outrun.push({
    x: 460,
    y: 470
});

var pref = [];

function distance(a, b) {
    return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}

function calculatePref() {
    pref[0] = 0;

    for (var i = 1; i < outrun.length; i++) {
        pref[i] = pref[i - 1] + distance(outrun[i], outrun[i - 1]);
    }
}

function getNormal(p1, p2) {
    var vec = {
        x: p2.x - p1.x,
        y: p2.y - p1.y
    };

    var len = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
    var normal = {
        x: -vec.y / len,
        y: vec.x / len
    };

    return normal;
}

function dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
}

calculatePref();

function drawHill() {
    for (var i = 0; i < inrun.length - 1; i++) {
        stroke(255);
        line(inrun[i].x, inrun[i].y, inrun[i + 1].x, inrun[i + 1].y);
    }

    for (var i = 0; i < inrun.length; i++) {
        stroke(100, 200, 100);
        fill(100, 200, 100);
        ellipse(inrun[i].x, inrun[i].y, 2);
    }

    for (var i = 0; i < outrun.length - 1; i++) {
        stroke(255);
        line(outrun[i].x, outrun[i].y, outrun[i + 1].x, outrun[i + 1].y);
    }

    for (var i = 0; i < outrun.length; i++) {
        stroke(255, 0, 100);
        fill(255, 0, 100);
        ellipse(outrun[i].x, outrun[i].y, 2);
    }
}
