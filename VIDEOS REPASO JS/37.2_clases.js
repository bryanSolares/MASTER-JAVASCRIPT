/*function Elemento(type){
    this.type = type;
    this.creacion = create();
}

Elemento.prototype.create = function(){
    return document.createElement(this.type);
}

var input = new Elemento("input");
document.body.appendChild(input.create());

class Input extends Elemento{
    constructor(){
        super("input");
        //this.element.value = "Caja de texto";
    }
}

var input = new Input("input");
document.body.appendChild(input.create());
*/


class Arreglo extends Array{
    remove(index){
        this.splice(index,1);
    }
}

var arreglo = new Arreglo();
console.log(arreglo);
arreglo.push(1,2,3,4,5);
console.log(arreglo);
arreglo.remove(2)
console.log(arreglo);
