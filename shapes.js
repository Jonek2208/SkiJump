//oberstdorf hs137

var inrun = [];

inrun.push({
    x: 40,
    y: 300
});
inrun.push({
    x: 103,
    y: 344
});
inrun.push({
    x: 116,
    y: 353
});
inrun.push({
    x: 130,
    y: 360
});
inrun.push({
    x: 140,
    y: 365
});
inrun.push({
    x: 154,
    y: 371
});
inrun.push({
    x: 169,
    y: 376
});
inrun.push({
    x: 191,
    y: 381
});
inrun.push({
    x: 204,
    y: 384
});

var outrun = [];

outrun.push({
    x: 204,
    y: 391
});
outrun.push({
    x: 224,
    y: 394
});
outrun.push({
    x: 244,
    y: 400
});
outrun.push({
    x: 265,
    y: 408
});
outrun.push({
    x: 285,
    y: 417
});
outrun.push({
    x: 306,
    y: 429
});
outrun.push({
    x: 325,
    y: 441
});
outrun.push({
    x: 346,
    y: 455
});
outrun.push({
    x: 365,
    y: 469
});
outrun.push({
    x: 379,
    y: 479
});
outrun.push({
    x: 393,
    y: 490
});
outrun.push({
    x: 411,
    y: 503
});
outrun.push({
    x: 440,
    y: 523
});
outrun.push({
    x: 452,
    y: 530
});
outrun.push({
    x: 466,
    y: 536
});
outrun.push({
    x: 486,
    y: 544
});
outrun.push({
    x: 505,
    y: 549
});
outrun.push({
    x: 525,
    y: 552
});
outrun.push({
    x: 547,
    y: 554
});
outrun.push({
    x: 630,
    y: 554
});
//outrun.push({
//    x: 680,
//    y: 510
//});
var pref = [];

function distance(a, b)
{
    return Math.sqrt((b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y));
}

function calculatePref()
{
    pref[0] = 0;

    for (var i = 1; i < outrun.length; i++)
    {
        pref[i] = pref[i - 1] + distance(outrun[i], outrun[i - 1]) / scl;
    }
}

function getNormal(p1, p2)
{
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

function distanceConvert(meters)
{
    console.log(meters);
    meters *= 2;
    console.log(meters);
    meters = Math.round(meters);
    return meters / 2;
}

function dotProduct(v1, v2)
{
    return v1.x * v2.x + v1.y * v2.y;
}

calculatePref();

function drawHill()
{
    for (var i = 0; i < inrun.length - 1; i++)
    {
        stroke(255);
        line(inrun[i].x, inrun[i].y, inrun[i + 1].x, inrun[i + 1].y);
    }

    for (var i = 0; i < inrun.length; i++)
    {
        stroke(100, 200, 100);
        fill(100, 200, 100);
        ellipse(inrun[i].x, inrun[i].y, 2);
    }

    for (var i = 0; i < outrun.length - 1; i++)
    {
        stroke(255);
        line(outrun[i].x, outrun[i].y, outrun[i + 1].x, outrun[i + 1].y);
    }

    for (var i = 0; i < outrun.length; i++)
    {
        stroke(255, 0, 100);
        fill(255, 0, 100);
        ellipse(outrun[i].x, outrun[i].y, 2);
    }
}
