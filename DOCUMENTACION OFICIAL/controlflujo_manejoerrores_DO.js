"use strict"

/*
while
if - ifelse - else
switch 
try - catch - finally = DOMException - DOMError - throw
*/

function UserException(aviso) {
    this.aviso = aviso;
    this.nombre = "UserException";
}

UserException.prototype.toString = () => {
    return this.nombre + ': "' + this.aviso + '"';
};

throw new UserException("Value to High");


function getMonthName(month) {
    month = month - 1;

    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (months[month] != null) {
        return months[month];
    } else {
        throw "InvalidMonthNo";
    }
}


try {
    monthName = getMonthName(myMonth);
} catch (e) {
    monthName = "unknow";
    logMyErrors(e);
}


openMyFile(elemento);
try {
    writeMyFile(theData);
} catch (e) {
    handleErrro(e);
} finally {
    closeMyFile();
}



function f() {
    try {
        console.log(0);
        throw "bogus";
    } catch (e) {
        console.log(1);
        return true; // Esta sentencia de retorno es suspendida
        // hasta que el bloque finally esté completo
        console.log(2); // no alcanzable
    } finally {
        console.log(3);
        return false; // sobreescribe la sentencia de retorno anterior
        console.log(4); // no alcanzable
    }
    // "return false" es ejecutada ahora
    console.log(5); // no alcanzable
}
f(); // console 0, 1, 3; retorna false



function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
        throw (new Error('The message'));
    } else {
        doSomethingToGetAJavascriptError();
    }
}

try {
    doSomethingErrorProne();
}
catch (e) {
    console.log(e.name); // muestra 'Error'
    console.log(e.message); // muestra 'The message' o un error de JavaScript)
}