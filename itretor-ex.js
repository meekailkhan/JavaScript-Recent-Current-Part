let arr = ["mango","banana","papaya","orange","apple"];

console.log(arr);

function arrIterator(array){
    let index = 0;
    
    return {
        next : function(){
            if(index<array.length){
                return {
                    value : array[index++],
                    done : false
                }
            }
            else{
                return {
                    value : undefined,
                    done : true
                }
            }
        }
    }
}

let fruit = arrIterator(arr);

console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)
console.log(fruit.next().value)


