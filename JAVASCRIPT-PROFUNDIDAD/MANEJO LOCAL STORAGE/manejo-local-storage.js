"use strict"

//HTML web Storage, guardar información durante la navegación, siendo ésta persistente en las distintas páginas

//Comprobación Local Storage
if (typeof Storage){
    console.log("Local Storage Disponible");
}else{
    console.log("Local Storage no Disponible");
}

//Guardar Datos en Local Storage
localStorage.setItem("titulo", "Curso de javascript");


//Recuperar Elemento
var elemento = localStorage.getItem("titulo");
document.querySelector(".parrafo").innerHTML = elemento;
console.log(elemento);

//Guardar Objeto en Local Storage
//En local storage solo se graban en string
var peliculas = {nombre:"Rambo",pais:"Estados Unidos", year: 2019};
localStorage.setItem("peliculas",JSON.stringify(peliculas));

//Recuperar Objeto
//Se recupera como string es necesario parsear
var recuperacion = JSON.parse(localStorage.getItem("peliculas"));
document.querySelector(".parrafo").innerHTML = recuperacion.nombre;
console.log(recuperacion);

//Limpiar Local Storage
localStorage.removeItem("peliculas");
localStorage.clear();