//funcionalidad introducida en ES6
//Permite utilizar funciones asincronas que se puede volver sincronas
//Basado en la funcionalidad de promesas

//Con esto automáticamente se devolverá una promesa

//El async es equivalente a Promise.resolve();
//El throw es equivalente a Promise.reject();


async function doo() {
    //return "Hola desde async function";
    throw new Error("Error de ejecucion")
}
doo()
    .then((data) => console.log(data))
    .catch((error) => console.log(error.toString()));


//Funcionalidad de await, es necesario que esté siempre dentro de una función asincrona
var count = 0;
function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Operacion exitosa No. ${++count}`), 1000);
    });
}

async function response() {
    var resultado = [];

    //sincrona
    const x = await request();
    const y = await request();

    //asincrona
    const a = request();
    const b = request();

    const arrayAll = await Promise.all([a, b]);

    //asincrona
    const c = request();
    const d = request();
    const arrayRace = await Promise.race([c, d]);


    resultado.push(x, y, arrayAll, arrayRace);
    return resultado;
}

/*response()
    .then(data => console.log(data))
    .catch(data => console.log(data))*/

//Se puede omitir el then ya que el await espera por la resolución
response().catch(imprimeError);
function imprimeError(data) {
    console.error(data);
}

/*OTROS EJEMPLOS CON PROMESAS Y REESCRIBIENDO EN ASYNC AWAIT*/

//EJEMPLO 1
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response === 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('no-such-user.json')
    .catch(alert);

//corto

async function loadJson(url) {
    let response = await fetch(url);

    if (response === 200) {
        let json = await response.json();
        return json;
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert);


//EJEMPLO 2
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.request}`);
        this.name = "HttpError";
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        });
}

function demoGithubUser() {
    let name = prompt("Enter your name?", "bryanSolares");
    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            alert(`Full name ${user.fullname}.`);
            return user;
        })
        .catch(error => {
            if (error instanceof HttpError && error.response.status === 404) {
                alert("No such user, please reenter.");
                return demoGithubUser();
            } else {
                throw error;
            }
        });
}

demoGithubUser();

//corto

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url){
    let response = await fetch("");
    if (response.status === 200) {
        return response.json();
    }else{
        throw new HttpError(response);
    }
}

async function demoGithubUser(){
    let user;
    while(true){
        let name = prompt("Write your username","bryanSolares");
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch (error) {
            if( error instanceof HttpError && error.response === 404){
                alert("Usuario no encontrado")
            }else{
                throw error;
            }
        }
    }

    alert(`Nombre completo ${user.name}`)
    return user;
}

demoGithubUser();

//EJEMPLO 3

async function esperar(){
    await new Promise(resolve => setTimeout(resolve,1000));
    return 10;
}

function funcion(){

}

//solución
async function esperar(){
    await new Promise(resolve => setTimeout(resolve,1000));
    return 10;
}

function funcion(){
    esperar.then(resultado => alert(resultado));
}

funcion();