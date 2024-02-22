function data(){
    return [1,2,3,4,5,6];
};

// agar data function ke 1 index per undefined ho to default value show hogi


var arr = data();

var one = arr[0];
var two = arr[1] !== undefined&&null ? arr[1] : 10;
var three = arr[2];
var rest = arr.splice(3,3)

console.log(one); //1
console.log(two); //2
console.log(three);//3
console.log(rest);//[4,5,6]

var [
    first,
    second = 10,
    third,
    ...spread
] = data()

console.log(first); //1
console.log(second);//2
console.log(third); //3
console.log(spread) //[4,5,6]

var o = [];

o[3] = arr[0];
o[10] = arr[1];
o[42] = arr[2];
o[100] = arr.splice(3,3);

console.log(o)

var fn;

[
    o[3],
    o[10],
    o[42], 
    ...o[100]
] = fn = data()

console.log(o)