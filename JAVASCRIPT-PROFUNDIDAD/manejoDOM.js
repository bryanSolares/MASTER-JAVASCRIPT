"use strict"

//Busqueda por id a nivel del documento html

//recuperar todo contenido más etiquetas con sus características
var caja = document.getElementById("caja");
var caja1 = document.getElementsByClassName("caja"); //devuelve array
console.log(caja + "por ID");
console.log(caja1 + "por CLASS");

//modificación de elemento
caja.innerHTML = "Texto introducido desde Js";

// añadir/modificaciones de estilos
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";

//agregar clase
caja.className = "clase-agregada";

console.log(caja);

//recuperar solo valores dentro de etiquetas
var caja = document.getElementById("caja").innerHTML;
console.log(caja);


//SELECCIONA ELEMENTO CON MÁS FLEXIBILIDAD
var parrafo1 = document.querySelector("#parrafo");
var parrafo2 = document.querySelector(".parrafo");
console.log(parrafo1);
console.log(parrafo2);

//BUSCAR TODAS LAS ETIQUETAS QUE COINCIDAN DE ACUERDO A UN BUSQUEDA - devuelve un array
var parrafos = document.getElementsByTagName("p");
parrafos[1].innerHTML = "Modificación de parrafo";
console.log(parrafos);
console.log(parrafos[1].textContent);


//CREAR NUEVOS ELEMENTOS DENTRO DEL DOM
//append: añadir después de
//preppend: añadir antes de

var contenedor = document.querySelector("#contenedor");
var etiquetaNueva = document.createElement("p");
var valorEtiquetaNueva = document.createTextNode("Soy un nuevo parrafo creado desde JS");
etiquetaNueva.append(valorEtiquetaNueva);
contenedor.appendChild(etiquetaNueva);
