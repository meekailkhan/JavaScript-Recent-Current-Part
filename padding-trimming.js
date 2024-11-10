// string padding and trimming

var pad = "Hello"

console.log("padding at the start")//padStart 
console.log(pad.padStart(10))
console.log(pad.padStart(10,"*"))
console.log(pad.padStart(10,"ab"))
console.log(pad.padStart(10,1234567))

console.log("padding at the end")// padEnd 
console.log(pad.padEnd(10))
console.log(pad.padEnd(10,"*"))
console.log(pad.padEnd(10,"ab"))
console.log(pad.padEnd(10,1234567))


// trimming

var trimming = "        Hello    \t\t"
console.log(trimming.trim()) //all white space remove from both side
console.log(trimming.trimEnd()) //all white space remove frome rigth side
console.log(trimming.trimStart())// all white space remove from left side






