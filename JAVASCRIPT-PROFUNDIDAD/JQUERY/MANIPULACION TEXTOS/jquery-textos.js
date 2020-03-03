"use strict"
$(document).ready(() => {

    //console.log($("a").length);

    var campo_agregar = $("#campo_agregar");
    var boton_agregar = $("#boton_agregar");
    var lista = $("#lista");

    reloadLink();
    boton_agregar.removeAttr("disabled");

    boton_agregar.click(function () {
        //lista.append("<li><a href='" + campo_agregar.val() + "'></a></li>");
        //lista.before("<li><a href='" + campo_agregar.val() + "'></a></li>");
        //lista.after("<li><a href='" + campo_agregar.val() + "'></a></li>");
        lista.prepend("<li><a href='" + campo_agregar.val() + "'></a></li>");
        campo_agregar.val("");
        reloadLink();
    });


    function reloadLink() {
        $("a").each(function () {
            let enlace = $(this).attr("href");
            $(this).attr("target","_black");
            $(this)
            $(this).text(enlace);
        });
    }



});