//Cada que se crea un objeto de fn se creara la misma cantidad de parametros que tiene en su interior
//es muy ineficiente en comparacion de prototype

/*function fn (name){
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

var obj = new fn('Bryan');
console.log(obj)
console.log(obj.getName())

var obj2 = new fn('Bryan');
console.log(obj2)
console.log(obj2.getName())
*/

//Prototype
function fn(name, type) {
    this.name = name;
    this.type = type;
}
console.log(fn.prototype)

fn.prototype.getName = function () { return this.name };
fn.prototype.getType = function () { return this.type };


var obj1 = new fn('Bryan', 'Tipo 1');
console.log(obj1.getName(), '-', obj1.getType())

var obj2 = new fn('Bryan', 'Tipo 2');
console.log(obj2.getName(), '-', obj2.getType())

console.log(obj1 === obj2, 'Objetos diferentes')//objetos diferentes
console.log(obj1.getName === obj2.getName, 'Comparten la misma funcion')//comparten la misma funcion
console.log(obj1.__proto__)//objecto prototype que reesguarda las propiedades para poder compartirlas
console.log(obj1.__proto__ === obj2.__proto__)