//arrow function, classes y thenables

const timeout = () => new Promise((resolve) => setTimeout(resolve, 100));

const fn = async () => {
    await timeout();
    console.log("Mensaje desde async");
    return "Mensaje de regreso desde async";
};

fn().then(data => console.log(data)).catch(data => console.log('Error al resolver'));

const funcion = async () => "Hola";
funcion().then(data => console.log(data)).catch(data => console.log(data));
class Ejemplo {
    constructor() {
    }

    async metodo() {
        await timeout();
        return 'Hello desde metodo'
    }
}

var x = new Ejemplo();
x.metodo().then(data => console.log(data)).catch(data => console.log(data));
(new Ejemplo()).metodo().then(data => console.log(data)).catch(data => console.log(data));

class Thenable{
    then(resolve, reject){
        setTimeout(resolve("Thenable"),1000);
    }
}

async function ejemplo(){
    const x = await (new Thenable());
    console.log(x);
    console.log("Desde funcion ejemplo")
}

ejemplo();
