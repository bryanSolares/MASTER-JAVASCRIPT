"use strict"

var tiempo = setInterval(()=>{
    console.log("Set interval Ejecutado ");
},2000);

setTimeout(()=>{
    console.log("setTimeOut Ejecutado");
},4000);

var detener = document.getElementById("detener");

detener.addEventListener("click",()=>{
    console.log("Inteval Detenido");
    clearInterval(tiempo);
});