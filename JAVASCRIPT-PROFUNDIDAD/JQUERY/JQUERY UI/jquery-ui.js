$(document).ready(() => {

    var elemento = $(".elemento");
    var lista = $(".selected-list");
    var area = $("#area");
    var elemento_movible = $("#elemento-movible");
    var boton_mostrar = $("#mostrar");
    var caja = $(".caja-efectos");

    //elemento movible
    elemento.draggable();

    //elemento redimensionable
    elemento.resizable();

    //Elementos seleccionables
    //lista.selectable();

    //Ordenar elementos
    lista.sortable({
        update: function (evento) {
            console.log(evento);
        }
    });

    //Drop - Droppable
    elemento_movible.draggable();
    area.droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area");
        }
    });

    //debugger;
    //efectos
    boton_mostrar.click(function () {
        //caja.fadeToggle();
        //caja.toggle("explode");
        //caja.toggle("drop");
        //caja.toggle("fold");
        caja.toggle("shake", {}, 5000);
    });

    //tooltip
    $(document).tooltip();

    //dialog    
    $("#lanzame").click(function () {
        $("#cuadro-dialogo").dialog();
    });

    $("#calendario").datepicker();

    $("#tabs").tabs();

});