"use strict"

/*
pending: Estado inicial, no terminada exitosamente o rechazada.
fulfilled: operación exitosa.
rejected: operación fallida.
settled: la Promesa ha sido exitosa o fallida, pero no está pendiente.
*/

function imgLoad(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function () {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(Error('Image didn\'t load successfully; error code:'
                    + request.statusText));
            }
        };
        request.onerror = function () {
            reject(Error('There was a network error.'));
        };
        request.send();
    });
}