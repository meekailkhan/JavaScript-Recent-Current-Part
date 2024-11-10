// tagged tamplate exercise

function tagFn(strings,...values){
     var ret = "";
     for(let i = 0;i<strings.length;i++) {
        if(i > 0){
            ret += values[i-1].toUpperCase();
        }
        ret += strings[i]
     }
     return ret
     
}

var name= "meekail",
    twitter = "getify",
    topic="JS Recent Parts"


console.log(tagFn`Hello ${name} (@${twitter}), welcome to ${topic}!`=== "Hello MEEKAIL (@GETIFY), welcome to JS RECENT PARTS!");