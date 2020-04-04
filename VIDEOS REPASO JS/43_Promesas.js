//Integrado en ES6
//Con anterioridad se usaban otras librerias
//Antes de promesas se usaban los callbacks
//Promesa es un objeto que mantine el estado de la operacion asincrona
//Estados de las promesas: pendiente, resuelto, rechazado


//antes
/* function getHTTP(url, callback) {
    var data = {
        mensaje: `Hola como estas ${url}`
    };
    setTimeout(() => {
        callback(data);
    }, 1000);
}
 */


//Multiples llamada anidadas
/* getHTTP('www.google.com', (data) => {
    getHTTP('www.yahoo.com', (data) => {
        getHTTP('www.facebook.com', (data) => {
            console.log(data);
        });
        console.log(data);
    });
    console.log(data);
}); */

//Ahora
function getHTTP(url) {
    var data = {
        mensaje: `Hola como estas ${url}`,
        url
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}

var promesa = getHTTP('google')
    .then((data) => {
        console.log(data);
        return getHTTP('youtube');
    })
    .then((data) => {
        console.log(data);
        return getHTTP('yahoo');
    })
    .then((data) => {
        console.log(data);
        return getHTTP('facebok');
    })
    .then((data) => {
        console.log(data);
        return getHTTP('messager');
    })
    .then((data) => {
        console.log(data);
        return getHTTP('messager');
    })
    .catch((data) => {
        console.log(data);
    })
    .finally(() => {
        console.log('finally')
    });

    console.log(promesa)