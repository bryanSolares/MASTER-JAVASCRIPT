//ES6

window.addEventListener("click", (event) => {
    let {
        cancelable,
        cancelBubble,
        CAPTURING_PHASE,
        clientX,
        clientY,
        composed
    } = event;

    //antes
    /*let result = {
        composed: composed,
        clientX: clientX,
        clientY, clientY,
    }*/

    let result = {
        composed,
        clientX,
        Y: clientY
    }

    console.log(result)
});