// named argument in JavaScript

function fn({name="defaultName",age="defaultAge"}){
    console.log(`Hello ${name} ! you are ${age} year old`)
    // console.log("hello "+name +" ! are you "+age+" year old ?")
}
// named argument se hum kisi bhi argument ki value ko kisi bhi jagaha defined kar sakte hai isme back to back value dena jaruri nhi hota 


fn({age:18,name:"meekail"})