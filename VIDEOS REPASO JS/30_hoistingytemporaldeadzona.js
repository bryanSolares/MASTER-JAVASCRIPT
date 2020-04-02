
//Se recomienda usar las variables siempre en la cima de todo
//Por defecto javascript coloca las varibles y las funciones en la cima de tod
(function () {
    var x = 1;
    console.log(x);
    foo()
    function foo(){
        console.log('foo');
    }
}());


//Las constantes o varibles de tipo let a diferencia de otros tipos de variables no estan definidas antes de su declaracion.
//Es implicito el use strict
(function(){

    //funciona bien
    var z =10;
    console.log(z);

    //funciona mal
    funcion();
    let funcion = function(){
        console.log('usando let');
    }

    //funciona mal
    console.log(y);
    const y = 2;

    //funciona bien
    const x = 1;
    console.log(x)
}());