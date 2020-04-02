//Keyword this

//global object
//this = window

/*
console.log(window);
console.log(this);*/

this.name == 'Global Object';
console.log(this.name);

function print() {
    console.log(this.name);
}

var obj = {
    name: 'Obj',
    print: print
}

obj.print();

//Apesar de hacer una copia de otro objeto el this sera dentro del contexto de la funcion
var obj2 = {
    name: 'Obj2',
    print: obj.print
};

obj2.print();

//El funcionamiento es diferente con Arrow Function -> el contexto es el global
var primerObjeto = {
    name: 'primero',
    print: () => {
        console.log(this.name);
    }
}

var segundoObjeto = {
    name: 'primero',
    print: primerObjeto.print
}

segundoObjeto.print();


function Persona(name) {
    this.name = name;
    return function () {
        console.log(this.name);
    }
}

function Persona2(name) {
    this.name = name;
    return () => {
        console.log(this.name);
    }
}

var log = new Persona('Bryan Solares');
log();

var log2 = new Persona2('Solares Perez')
log2();