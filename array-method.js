// find and findIndex

var arr = [ {a:1}, {a:2}];

let a = arr.find(function match(value){
    return value && value.a > 1;
})

let b = arr.find(function match(value){
    return value && value.a > 10 
})

// let c = findIndex(function match(value){
//     return value && value.a > 10
// })

// let d = findIndex(function match(value){
//     return value && value.a > 1
// })

console.log(a)
console.log(b)
// console.log(c)
// console.log(d)

// indexOf 

let arr2 = [1,2,4,6,3,NaN,7,2];

console.log(arr2.indexOf(NaN)) // -1 becuase NaN is not equal to it self
console.log(arr2.indexOf(9)) //-1
console.log(arr2.indexOf(6)) //3
console.log(~arr2.indexOf(1)) // -1
console.log(~arr2.indexOf(2)) // -2
console.log(~arr2.indexOf(4)) // -3
console.log(~arr2.indexOf(3)) // -5
console.log(~arr2.indexOf(7)) // -7


// include

let arr3 = [1,2,3,7,4,8,NaN,"meekail",[],{}]

console.log(arr3.includes(1)); //true
console.log(arr3.includes(2)); //true
console.log(arr3.includes(3)); //true
console.log(arr3.includes(7)); //true
console.log(arr3.includes(4)); //true
console.log(arr3.includes(8)); //true
console.log(arr3.includes(NaN)); //true
console.log(arr3.includes("meekail")); //true
console.log(arr3.includes([])); //false
console.log(arr3.includes({})); //false
console.log(arr3.includes("Meekail")); //false
