$(document).ready(function () {
    console.log("JQUERY cargado");

    //selector de ID
    var rojo = $("#rojo")
        .css("background", "red")
        .css("color", "white");
    console.log(rojo);

    var rojo = $("#amarillo")
        .css("background", "yellow")
        .css("color", "green");
    console.log(rojo);

    var rojo = $("#verde")
        .css("background", "green")
        .css("color", "yellow");
    console.log(rojo);

    //selectores de clase
    var miClase = $(".zebra");
    miClase.css("border", "5px dashed black");
    console.log(miClase);

    var sinBorde = $(".sin-borde");
    sinBorde.click(() => {
        $(this).addClass("clase-nueva");
    });



    //selectores de etiqueta
    var parrafos = $("p");
    parrafos.click(() => {
        //debugger;
        if (!$(this).hasClass("grande")) {
            $(this).addClass("grande");
        }else{
            $(this).removeClass("grande");
        }

    });

    //selectores de atributos
    $('[title="Google"]').css("background","#ccc");
    $("[title='Facebook']").css("background","blue").css("color","white");

    //Otros tipos
    //$("p,a").addClass("margen-superior");
    var busqueda = $("#caja").find(".resaltado");
    var busqueda2 = $("#caja .resaltado");
    var busqueda3 = $("#caja .resaltado").eq(0).parent().find("[title='Google']");
    console.log(busqueda);
    console.log(busqueda2);
    console.log(busqueda3)

});







jQuery(document).ready(function () {
    console.log("JQUERY cargado");
});


