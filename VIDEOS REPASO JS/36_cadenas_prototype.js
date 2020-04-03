//Prototype lookup
/*var Mamifero = {
    tipo: "desconocido",
    getTipo: function(){
        return this.tipo;
    }
};

var Humano = Object.create(Mamifero);
Humano.tipo = "Humano"

console.log(Humano.getTipo());

var Mutante = Object.create(Mamifero);
console.log(Mutante.getTipo())

var Animal = Object.create(Mamifero);
console.log(Animal.name);
console.log(Animal.toString)
*/


var a = {valor: "hola"};
var b = {proto: a};
var c = {proto: b};
var d = {proto: c};
var e = {proto: d};

function lookup(key, object){
    var next = object;
    while(!!next){
        if (key in next) {
            return next[key];
        }else{
            next = next.proto;
        }
    }
    return false;
}

//operación get
console.log(lookup("valor",e));