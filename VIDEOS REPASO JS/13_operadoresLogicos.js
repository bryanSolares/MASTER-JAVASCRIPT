var verdadero = true
var falso = false

//negacion
console.log(verdadero)
console.log(!verdadero)
console.log(!!verdadero)

//and
console.log(verdadero && verdadero)
console.log(verdadero && falso && verdadero)
console.log(falso && falso)

//or
console.log(verdadero || verdadero);
console.log(verdadero || falso);
console.log(falso || verdadero || falso);
console.log(falso || falso)

var persona = {
    edad : 30,
    altura : 180,
    sexo : 'F'
}

console.log(persona.edad > 18 && persona.sexo === 'M' || persona.altura > 160)