"use strict"
var listaUsuarios = document.querySelector("#usuarios");
var Janet = document.querySelector("#janet");

console.log(decodeURIComponent("https://reqres.in/api/users"));

//debugger;
obtenerJson("https://reqres.in/api/users")
    .then(data =>
        data.json())
    .then(users => {

        mostrarLista(users.data, listaUsuarios);
        return obtenerJson("https://reqres.in/api/users/2");

    }).then(data =>
        data.json())
    .then(user => {

        imprimirUno(user.data, Janet);
        return getInfo();

    }).then(data => {
        console.log(data);
    }).catch(error =>{
        alert("Error en las peticiones " + error);
    });



function obtenerJson(direccionURL) {
    return fetch(direccionURL);
}

function mostrarLista(usuarios, elemento) {
    usuarios.map((user) => {
        adherirAElemento(user, elemento)
        document.querySelector(".loading").style.display = "none";
    });
}

function imprimirUno(dato, elemento) {
    adherirAElemento(dato, elemento)
    document.querySelector("#janet .loading").style.display = "none";
}

function adherirAElemento(usuario, elemento) {
    let nombre = document.createElement("h2");
    let avatar = document.createElement("img");

    nombre.innerHTML = usuario.first_name + " " + usuario.last_name + " EMAIL: " + usuario.email;
    avatar.src = usuario.avatar;
    avatar.width = "100";

    elemento.appendChild(nombre);
    elemento.appendChild(avatar);
}

//Creación de promesas
function getInfo() {
    var profesor = {
        nombres: "Bryan Josue",
        apellidos: "Solares Perez",
        url: "www.cualquiercosa.com"
    };

    return new Promise((resolve, reject) => {
        var profesorString = JSON.stringify(profesor);

        if (typeof profesorString != "string") {
            return reject("Error");
        } else {
            setTimeout(() => {
                return resolve(profesorString);
            }, 3000);

        }
    });
}