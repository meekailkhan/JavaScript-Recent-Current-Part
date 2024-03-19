// generator in javascript 

function* numbersGen(){
    let i = 0;
    let arr = [];

    while(true){
        yield i++;
        arr.push(i)
        return arr
    }

    
}

let num = numbersGen();

// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());
// console.log(num.next());

console.log(num)
