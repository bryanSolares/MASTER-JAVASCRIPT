$(document).ready(() => {

    const boton_mostrar = $("#boton_mostrar");
    const boton_ocultar = $("#boton_ocultar");
    const boton_togle = $("#togle");
    const boton_animame = $("#animame");
    const caja = $("#caja");

    caja.hide();
    boton_mostrar.show();
    boton_ocultar.hide();

    boton_mostrar.click(function () {
        $(this).hide();
        //caja.show("normal");//fast
        //caja.fadeIn("normal");
        //caja.fadeTo("slow",1);
        caja.slideDown("slow");
        boton_ocultar.show();
    });

    boton_ocultar.click(function () {
        $(this).hide();
        //caja.hide("normal"); //fast
        //caja.fadeOut("normal");
        //caja.fadeTo("slow",0.1);
        caja.slideUp("slow",function(){
            console.log("ocultado");
        });
        boton_mostrar.show();
    });

    //muestra o oculta
    boton_togle.click(function () {
        //caja.toggle("fast");
        //caja.toggle("fast");
        //caja.fadeToggle("fast");
        caja.slideToggle("slow");
    });


    boton_animame.click(function () {
        caja.animate({
            marginLeft: "500px",
            fontSize: "40px",
            height: "100px"
        }, "slow");
        
        caja.animate({
            borderRadius: "900px",
            marginTop: "100px"
        },"slow");
    
        caja.animate({
            borderRadius: "0px",
            marginLeft: "0px"
        },"slow");

        caja.animate({
            marginTop: "0px"
        },"slow");


    });

});