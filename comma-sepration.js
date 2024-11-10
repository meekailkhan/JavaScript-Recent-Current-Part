// comma sepration

var x = 10;
var y = 20;

{
    let realx = x;
    x = y;
    y = realx;
}

console.log(x) //20
console.log(y) //10

var a =10;
var b =20;

[a,b] = [b,a]

console.log(a) //20
console.log(b) //10
