$(document).ready(()=>{
    
    var elemento = $(".elemento");
    var lista = $(".selected-list");
    var area = $("#area");
    var elemento_movible = $("#elemento-movible");

    //elemento movible
    elemento.draggable(); 
    
    //elemento redimensionable
    elemento.resizable();

    //Elementos seleccionables
    //lista.selectable();

    //Ordenar elementos
    lista.sortable({
        update: function(evento){
            console.log(evento);
        }
    });

    //Drop - Droppable
    elemento_movible.draggable();
    area.droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

});