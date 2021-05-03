
//prvi zadatak

var a = 8;
var b = 7;

if (a > b) {
    console.log(a)
} else if (b > a) {
    console.log(b)
} else {
    console.log("they are ecqual")
}

//drugi zadatak

var c = 3;

if (c % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

//treci zadatak

var d = 15;

if (d % 3 === 0 && d % 15 === 0) {
    console.log(d)
}

//cetvrti zadatak

var m = 3;
var n = -7;
var o = 2;
var count = m * n * o;

if (count > 0) {
    console.log("The sign is +")
} else {
    console.log("The sign is -")
}

//peti zadatak

var i = 11;

var res = "";
if (typeof i === "number") {
    if (i % 2 === 0) {
        res = "divisible by 2"
    } else {
        res = "x"
    }
}

console.log(res);


//sesti zadatak


var x = -5;
var y = -2;
var q = -6;
var w = 0;
var l = -1;

var rezultats = "";

if (x > y) {
    rezultats = x
} else {
    rezultats = y
}

if (q > w) {
    rezultats = q
} else {
    rezultats = w
}

console.log(rezultats);

//sedmi zadatak


var j = 0;
var l = 61;
var k = 4;

if (j > l && j > k) {
    if (l > k) {
        console.log(j, l, k);
    } else {
        console.log(j, k, l);
    } else {

    }
}




