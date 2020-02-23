"user strict"

var formularioAgregar = document.querySelector("#form_peliculas");
var formularioBorrar = document.querySelector("#form_borrar_peliculas");
var borrarTodo = document.querySelector("#borrarTodo");
var ul = document.querySelector("#peliculas_lista");
var listaElementos;

formularioAgregar.addEventListener("submit", () => {
    let pelicula = document.querySelector("#add_pelicula").value;
    if (pelicula.length >= 1) {
        localStorage.setItem(pelicula, pelicula);
    }
});

formularioBorrar.addEventListener("submit", () => {
    let pelicula = document.querySelector("#borrar_pelicula").value;
    if (pelicula.length >= 1) {
        localStorage.removeItem(pelicula);
    }
});

borrarTodo.addEventListener("click",()=>{ 
    localStorage.clear();
    listaElementos = document.getElementsByClassName("lista-elemento");
    eliminarElementos();
});


for (let i in localStorage) {
    if (typeof localStorage[i] == "string") {
        let li = document.createElement("li");
        li.append(localStorage[i]);
        li.className = "lista-elemento";
        ul.append(li);
    }
}

function eliminarElementos(){
    console.log(listaElementos);
    console.log(listaElementos.length);
    for(let i = 0; i < listaElementos.length; i++){
        console.log(listaElementos[i]);
        //ul.removeChild(listaElementos[i]);
    }
}