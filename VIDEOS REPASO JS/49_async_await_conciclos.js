//noprotect 

function op(valor, multiplicador) {
    return new Promise(resolve()=>{
        setTimeout(() => {
            resolve(valor * multiplicador);
        }, 1000);
    });
}