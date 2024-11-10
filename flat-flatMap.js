let arr = [1,2,3,4];

let a = arr.map(function fn(value){
    return [value * 2, String(value * 2)]
})

let b = arr.map(function fn(value){
    return [value * 2, String(value * 2)]
}).flat()

let c = arr.flatMap(function fn(value){
    return [value * 2, String(value * 2)]
})



console.log(a);
console.log(b);
console.log(c)