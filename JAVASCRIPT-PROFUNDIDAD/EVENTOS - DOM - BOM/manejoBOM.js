"use strict"

//Browser Object Model
function mensaje(){
    console.log(window.innerWidth);
    console.log(window.innerHeight)
    console.log(screen.width)
    console.log(screen.height)
    console.log(window.location.pathname)
}

mensaje();


function irA(url){
    window.location.href = url ;
}

function irA2(url){
    window.open(url,"","width=400,height=300");
}
