//Nuevo tipo de dato en Js
//Tipo de dato primitivo -> sirve para crear identificadores que son unicos

var id = Symbol(1);
var id2 = Symbol(2);
console.log(id);
console.log(id2)
console.log(id === id2)

//Casos de uso -> evitar sobreescribir la propiedad de un objeto

//sobreescribe
var obj = {
    id: 123
};
obj.id = true;

//no sobreescribe
var obj2 = {
    [id]:123
}
obj2.id= true;
obj2["Symbol(1)"] = 2323;

console.log(obj2)

//sobreescribiendo
obj2[id] = "hola";
console.log(obj2)


//El identificador vivirá solo dentro del scope de la función
function creaObjeto(){
    let obj = {};
    var id = Symbol("identificador");
    obj[id] = 0;

    return {
        setId(valor){
            obj[id] = valor;
        },
        getId(){
            return obj[id];
        },
        get(){
            return obj;
        }
    }
}

var x = creaObjeto();
var objeto = x.get();
console.log(objeto);

x.setId(23);
console.log(objeto);

var t = x.getId();
console.log(t);