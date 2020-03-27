/*var poema = `


Con el ruido del eclipse
la noche quitó su enagua,
la luna del gran silencio
nuestra azotea palpaba
y mientras cubría tu rostro
el lucero de su andanada
yo te tenía en mis brazos
en el balcón de la playa.

Sobre la arena embestían
los toros bravos del agua
y traernos el océano
sus doce olas de plata
por la pampa de mi pecho
tu mejilla quedó varada.

En el mundo de los sueños
tus dos ojitos nadaban,
la brisa cruzó la costa
como una lengua salada
y el frescor de sus caricias
ponía en tus dos pestañas
la veleta de los trigos
y una sonrisa en mi cara.

¡Que alegría!, ¡que dulzura!
emanaba su joven alma,
mi hijo pequeño dormía
y algo bonito soñaba,
que por eso en mis dos ojos
la ternura vino a la fragua,
que tres meses tienen sus muecas
que sus labios son escarlata
y por su piel de alabastro
mi corazón se derrama.

Yo seguía tarareando
de mi garganta una nana
destrenzando pensamientos
en poesías trenzadas
del amor que llevo dentro
versado en notas doradas
cuando una fugaz estrella
con el polvo de sus alas
vino tras mi sonsonete
al ver como te besaba.

Yo dejé de cantar entonces
todavía lejos del alba
y al morir todas las luces
de neón desordenadas
prendió en toda su grandeza
el fulgor de la vía láctea.

El abrazo de la concha
en mis oídos silbaba,
la luna hecha de papiro
sobre ti se desgranaba
y en ese mismo momento
enmudecieron las arpas
de todos mis pensamientos
abriendo paso a las hadas
de ese paisaje de amor
que inconsciente regalabas,
sumiéndome por completo
en la atmósfera de la playa,
sumergiendo mi universo
en los sueños de tu mirada,
sintiendo el placer de amarte
rodeado de la dulce nada.
`
var palabras = poema.split(' ')

var mapaPalabras = {}

while (palabras.length !== 0) {
    var palabra = palabras.pop()
    if (palabra in mapaPalabras) {
        mapaPalabras[palabra]++
    } else {
        mapaPalabras[palabra] = 1
    }
}

console.log(mapaPalabras)*/

var numeros = [1,10,20,30,40,50]
var objeto = [{nombre:"bryan"},{apellido:"Solares"}]

numeros.map((x)=>{
    console.log(x)
})

objeto.map((x)=>{
    console.log(x)
})