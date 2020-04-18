//Una fuente de datos que está constantemente generando eventos

const container = document.getElementById("container");

function delay(n) {
    return new Promise((resolve) => {
        setTimeout(resolve, n);
    });
}

function randomImage() {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        const url = `https://picsum.photos/200/300?random=${Math.random()}`
        img.onload = () => resolve(img);
        img.onerror = () => reject;
        img.src = url;
    });
}

function* generadorInfinito() {
    while (true) {
        yield delay(1000)
            .then(() => {
                return randomImage();
            });
    }
}

async function consumidor(limite) {
    let count = 0;
    for await (let img of generadorInfinito()) {
        container.appendChild(img);
        count++;
        if(count >= limite) break;
    }
}

consumidor(5)

// delay(200)
//     .then(() => {
//         return randomImage();
//     })
//     .then(img => container.appendChild(img));