//setTimeout -> se ejecuta de acuerdo al tiempo especificado
//setInterval -> se ejecuta cada periodo de tiempo indicado

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");


var timerID = null;
/*var running = false;
start.addEventListener("click", () => {
    if (running) return;
    running = true;
    timerID = setTimeout(() => {
        console.log("Timer ejecutado")
        running = false;
    }, 1000);
    console.log("Click!!!!")
});

stop.addEventListener("click", () => {
    clearTimeout(timerID);
});*/


start.addEventListener("click", () => {
    if (timerID) return;
    timerID = setInterval(() => {
        console.log("Timer ejecutado")
    }, 1000);
    console.log("Click!!!!")
});

stop.addEventListener("click", () => {
    clearTimeout(timerID);
    timerID = null;
});