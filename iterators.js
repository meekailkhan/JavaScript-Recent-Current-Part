var str = "Hello"
var arr = ["W","o","r","l","d"];

var it1 = str[Symbol.iterator]();
var it2 = arr[Symbol.iterator]();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
