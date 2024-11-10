let main = document.getElementById("main")
let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let example = document.getElementById("example")


onscroll = function(){
    let value = scrollY
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    boat.style.left = value * 4 + "px";
    boat.style.top = value + "px";
    river.style.top = value + "px";
    mountains3.style.top = value + "px";
    mountains4.style.top = value * 0.5 + "px";
    if (scrollY >= 10){
        example.style.fontSize = value + "px";
        if (scrollY >= 60){
            example.style.fontSize = 67 + "px"
        }if (scrollY >= 500){
            example.style.display = "none"
        }else{
            example.style.display = "block"
        }
    }else{
        example.style.fontSize = "25px"
    }
    if (scrollY >= 115){
        main.style.background = "linear-gradient(#3e8892, #f4abff)";
    }else{
        main.style.background = "linear-gradient(#4a0039, #220027";
    };
};