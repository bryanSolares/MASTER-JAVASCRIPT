//XMLHttpRequest

//Antes
function request(url, exitoso, fallido) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
        if (xhr.status === 200) {
            exitoso(xhr.responseText);
        } else {
            fallido(xhr.responseText);
        }
    };
    xhr.send();
}

request("https://www.mocky.io/v2/5e8834283100000e003f4871", (data) => {
    console.log(JSON.parse(data), "con parse");
    console.log(JSON.stringify(data), "con stringify");
    console.log(JSON.parse(JSON.stringify(data)), "parseando stringify");
    console.log(data, "puro");
}, (data) => {
    console.log(data)
});

//Utilizando promersa
function request2(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.responseText);
            }
        };
        xhr.send();
    });
}

//https://www.mocky.io/v2/5e8834283100000e003f4871
request2("https://www.mocky.io/v2/5e8837be31000059003f487b")
.then((data)=>{
    console.log(JSON.parse(data));
}).catch((data=>{
    console.log("Catch",data);
}));