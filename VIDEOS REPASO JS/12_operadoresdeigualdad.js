//Operadores de igualdad

// == : igualdad.
var a = 1;
var b = 1;
console.log(a==b);
var c = 2;
console.log(a==c)

var saludo ='hola'
var greeting = 'hola'
console.log(saludo==greeting)

//objetos son unicos
var obj = {name:'jose'};
var obj2 = {name: 'jose'}
var obj3 = obj2;
console.log(obj==obj2);
console.log(obj2==obj3)

//Operador de diferencia
//!= : diferente
console.log(obj!= obj2,'Operador de diferencia')
console.log(obj2!=obj3,'Operador de diferencia')

//conversion de tipos
var d = '1'
console.log(d==a,'Operador de igual con conversion de tipos')
console.log(d!=a,'Operador de igual con conversion de tipos')

//Operador de igualdad estricta
console.log(a===b,'Igualdad estricta')
console.log(a===d,'Igualdad estricta, no hace conversiones')

//Operador de diferencia estricta
console.log(a!==b,'Diferencia estricta')
console.log(a!==d,'Diferencia estricta')
