//bindings con call apply y bind

this.lugar = 'global object';

function print(saludo, para){
    console.log(this.lugar);
    console.log(`${saludo} a ${para} desde ${this.lugar}`)
}

var obj = {
    lugar: 'obj'
};

print();
print.call();
print.call(obj, 'Hola', 'Bryan');

//Apply
//los argumentos son trasladados desde un array
print.apply(obj,['Hola','Solares'])

var array = [32163,21628,321,921,921,921,921,9,7,5,35]
console.log(Math.max.apply(null,array));

//bind
var objeto = {
    name:'Bryan',
    print: function(){
        console.log(this.name);
    }
}
objeto.print()

var data ={
    print:objeto.print
}
//errro por el contexto de this
data.print();

var data2 ={
    print:objeto.print.bind(objeto)
}

var printt = data2.print()
console.log(printt === objeto.print)
