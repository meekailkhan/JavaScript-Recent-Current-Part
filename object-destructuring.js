// object destructuring

function data(){
    return {b:2,c:3,d:4,e:5}
}

var obj = data();
var first = obj.a;
var second = obj.b;
var third = obj.c;
var fourth = obj.d;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

var {
    a:one = 10,
    b:two,
    c:three,
    ...four
} = data();

console.log(one)
console.log(two)
console.log(three)
console.log(four)
