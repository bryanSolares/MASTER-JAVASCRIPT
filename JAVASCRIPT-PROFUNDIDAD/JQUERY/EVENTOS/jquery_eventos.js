"use strict"
$(document).ready(() => {

    //Eventos de Ratón
    var caja = $("#caja");

    /*
    caja.mouseover(function () {
        $(this).css("background", "red");
    });

    caja.mouseout(function () {
        $(this).css("background", "yellow");
    });
*/
    caja.hover(function () {
        $(this).css("background", "red");
    }, function () {
        $(this).css("background", "yellow");
    });

    //Eventos de click
    caja.click(function () {
        $(this).css("background", "blue").css("color","white");
    });

    caja.dblclick(function () {
        $(this).css("background", "pink").css("color","black");
    });

    //Eventos focus blur
    var nombre = $("#nombre");
    var datos = $("#datos");
    var sigueme = $("#sigueme");
    
    nombre.focus(function(){
        $(this).css("border","2px solid red");
    });

    nombre.blur(function(){
        $(this).css("border","2px dashed black");
        datos.text($(this).val()).show();
    });

    //Mousedown - Mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color","black");
    });

    //mousemove
    $(document).mousemove(function(){
        //$("body").css("cursor","none");
        console.log("X:",event.clientX,"Y:",event.clientY);
        sigueme.css("left",event.clientX).css("top",event.clientY);
    });
    

});