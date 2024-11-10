let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");

const body = document.body

let id;

startBtn.addEventListener("click",function(){
    id = setInterval(function(){
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const value = `rgb(${red},${green},${blue})`
    
        body.style.backgroundColor = value
    
    },100)
})



    stopBtn.addEventListener("click",function(){
        clearInterval(id)
    })