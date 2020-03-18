//formas de llamar una funcion
/*
1. Nombre
2. arguments.callee
3. Una variable en el ámbito en el que se refiere a la función
*/


//Normal
var x = 0
while( x < 10){
    console.log(x)
    x++;
}

//Con recursividad
function loop(x){
    //if(x >= 10)
    if(!(x<10))
        return
    console.log("x",x)
    loop(x+1);
}

loop(0)