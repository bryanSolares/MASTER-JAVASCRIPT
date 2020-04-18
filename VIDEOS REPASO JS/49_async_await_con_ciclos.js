//nonprotec

function operacion(valor, multiplo) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(valor * multiplo); }, 1000);
    });
}

async function ejemplo(){
    for (let i = 0; i < 10; i++) {
        //No recomendable ya que se resuelve cuentas veces se ejecute el ciclo
        //operacion(i,2).then((resultado)=>console.log(resultado));

        //Recomentables
        let resultado = await operacion(i,2);
        console.log("resultado:",resultado);      
    }
}

ejemplo();

//La funcion interna se toma el tiempo necesario más lo que está afuera será inmediato
//terminado será primero que resultado
async function ejemplo2(){
    [1,3234,3424,53.6,663,2576].map(async (i)=>{
        const resultado = await operacion(i,2);
        console.log(resultado);
    });

    console.log("terminamos");
}

//Resuelto
async function ejemplo2(){
    const promesas = [1,3234,3424,53.6,663,2576].map((i)=>{
        return operacion(i,2);
    });

    const resultados = await Promise.all(promesas);
    console.log(resultados)
    console.log("terminamos 2");
}

ejemplo2();