//Arrow Functions with async await
//Constructor de una clase no puede se async

const timeout = () => new Promise((resolve)=>setTimeout(resolve,1000));

const fn = async () => {
    await timeout();
    console.log("mensaje desde async");
    return "Mensaje retornado desde async"
};
fn().then((data)=>console.log(data)).catch(data=>console.log(data));

class Ejemplo{
    constructor(){}

    async metodo(){
        return "Hello desde método";
    }
}

var x = new Ejemplo();
x.metodo().then(data=>console.log(data)).catch(data=>console.log(data));
new Ejemplo().metodo().then(data=>console.log(data)).catch(data =>console.log(data));

class Thenable{
    then(resolve,reject){
        setTimeout(()=>resolve("Thenable"),1000);
    }
}

async function ejemplo(){
    const x = await new Thenable();
    console.log(x);
    console.log("saludo");
}

ejemplo();