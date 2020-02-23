"use strict"

//Evento para ejecutar javascript colocando llamada del documento en head
window.addEventListener("load", () => {

    //EVENTOS DEL RATÓN CLICK
    var boton = document.querySelector("#boton");
    var boton_dos = document.querySelector("#boton-dos");


    function cambiarColorBoton() {
        if (boton.style.background == "red") {
            boton.style.background = "green";
        } else {
            boton.style.background = "red";
        }
        return true;
    }

    function cambiarColorBoton2() {
        if (boton_dos.style.background == "green") {
            boton_dos.style.background = "red";
        } else {
            boton_dos.style.background = "green";
        }
        return true;
    }


    boton.addEventListener("click", function () {
        cambiarColorBoton();
        this.style.background = "yellow";
        this.style.border = "2px solid black dashed";
    });

    boton_dos.addEventListener("dblclick", function () {
        cambiarColorBoton2();
    });

    //EVENTOS DEL RATÓN OVER
    boton.addEventListener("mouseover", function () {
        boton.style.background = "blue";
    });

    boton.addEventListener("mouseout", function () {
        boton.style.background = "black";
        boton.style.color = "white";
    });

    var input = document.querySelector("#campo_nombre");

    input.addEventListener("focus", function () {
        console.log("Foco en input : Evento focus");
    });

    input.addEventListener("blur", function () {
        console.log("Foco fuera input : Evento blur");
    });

    input.addEventListener("keydown", function (evento) {
        console.log("Pulsando Tecla : Evento KeyDown " + String.fromCharCode(evento.keyCode));
    });

    input.addEventListener("keypress", function (evento) {
        console.log("Presionada Tecla : Evento KeyPress " + String.fromCharCode(evento.keyCode));
    });

    input.addEventListener("keyup", function (evento) {
        console.log("Soltada Tecla : Evento KeyUp " + String.fromCharCode(evento.keyCode));
    });

});

