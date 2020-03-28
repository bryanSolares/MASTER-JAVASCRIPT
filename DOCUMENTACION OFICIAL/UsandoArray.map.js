var listaSimple = ['a', 'b', 'c', 'd', 'e'];
listaSimple.map(impresion)


var listaConObjetos = [
    {clave: 1, valor: 10},
    {clave: 2, valor: 20},
    {clave: 3, valor: 30},
    {clave: 4, valor: 40}
]
listaConObjetos.map(impresion)

function impresion(elemento, indice) {
    //console.log(elemento, indice);
}



var nuevoOrden = listaConObjetos.map((obj) => {
    var nuevoObjeto = {}
    nuevoObjeto[obj.clave] = obj.valor;
    return nuevoObjeto;
});

console.log(nuevoOrden)