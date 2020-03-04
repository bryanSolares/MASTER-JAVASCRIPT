$(document).ready(() => {


    const datos = $("#datos");
    const formulario = $("#formulario");

    //Load
    //datos.load("https://reqres.in/api/users?page=2");

    //GET
    $.get("https://reqres.in/api/users", { page: 2 }, function (resp) {
        resp.data.forEach(elemento => {
            datos.append("<p>" + elemento.first_name + " " + elemento.last_name + "</p>");
        });
    });



    formulario.submit(function (evento) {

        evento.preventDefault();

        var usuario = {
            nombre: $("input[name='nombre']").val(),
            web: $("input[name='web']").val()
        }

        //POST
        /*$.post($(this).attr("action"), usuario, function (response) {
            console.log("Inserción correcta");
            console.log(response);
        }).done(function () {
            alert("Usuario añadido correctamente");
        });*/

        //AJAX
        $.ajax({
            type: "POST",
            url: "https://reqres.in/api/users",
            data: usuario,
            dataType: "json",
            contentTypes: "application/json",
            beforeSend: function () {
                console.log("Enviando Usuario");
            },
            success: function (response) {
                console.log(response);
            },
            error: function () {
                console.log("ha ocurrido un error")
            },
            timeOut: 2000
        });

        return false;
    });




});