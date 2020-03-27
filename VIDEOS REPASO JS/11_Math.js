//Potenciación
var base = 2;
var exponente = 2;
var resultadoPotencia = Math.pow(base,exponente);
console.log(resultadoPotencia,'Potenciacion 1')
console.log(base**exponente,'Potenciacion 2')

//Valor absoluto
var a = -2;
console.log(Math.abs(a),'absoluto');

//Minimos y maximos
var a = 3
var b = 5
console.log(Math.min(a,b), 'minimo')
console.log(Math.max(a,b), 'maximo')

//Raiz cuadrada
console.log(Math.sqrt(4),'Raiz cuadrada')

//Redondedo
var a = 4.55
console.log(Math.floor(a),'Redondedo hacia abajo')
console.log(Math.ceil(a),'Redondeo hacia arriba')
console.log(Math.round(a),'Redondeo segun critero matematico')

//Constantes
console.log(Math.PI,'PI')
function circleArea(radio){
    var resultado = Math.PI * Math.pow(radio,2);
    return resultado;
}
console.log(circleArea(4),'Area de un circulo')