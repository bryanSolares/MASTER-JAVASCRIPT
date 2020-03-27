var listaTareas = document.getElementById("lista-tareas");
var buttonAgregar = document.getElementById('button-agregar');
var inputTarea = document.getElementById('input-tarea');
var lista = [];
var contador = 0;
listaTareas.innerHTML = '';

function template(tarea) {
    return `
    <li class="list-group-item">
        <span data-id="${tarea.id}" class="ion-ios-trash"></span>
        ${tarea.title}
    </li>
    `
}


buttonAgregar.addEventListener('click', () => {
    agregarTarea(inputTarea.value)
    render()
});

listaTareas.addEventListener('click', (evento) => {
    var elemento = evento.target;
    var id = elemento.dataset.id;
    removerTarea(id)
    render();
})

function agregarTarea(tarea) {
    lista.push({
        id: contador,
        title: tarea
    });
    contador++;
}

function removerTarea(id) {

    var index = lista.findIndex((tarea) => {
        return tarea.id == id;
    })

    lista.splice(index, 1);
}

function render() {
    var output = lista.map(template).join('');
    listaTareas.innerHTML = output;
}

render();