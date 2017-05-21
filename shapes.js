//oberstdorf hs137

var inrun = [];
var outrun = [];
var myUrl = 'http://localhost:4000/';

function loadHill(_id)
{
    $.ajax({
        url: myUrl + 'jumpingHill/' + _id
    }).done(function (data)
    {
        console.log(data.inrun);
        console.log(data.outrun);
        for (var i = 0; i < data.inrun.length; i++)
        {
            inrun.push({ x: data.inrun.length.x, y: data.inrun.lenght.y });
        }

        for (var i = 0; i < data.outrun.length; i++)
        {
            outrun.push({ x: data.outrun.length.x, y: data.outrun.lenght.y });
        }
        
    }).fail(function (error)
    {
        console.log(error);
    });
}

loadHill(1);

for (var i = 0; i < inrun.length; i++)
{
    console.log(inrun[i]);
}

console.log(inrun.length);

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

function getLength(p1)
{
    return Math.sqrt(p1.x * p1.x + p1.y * p1.y);
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
