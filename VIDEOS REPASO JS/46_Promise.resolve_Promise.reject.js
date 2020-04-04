function request(url) {
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

request("http://www.mocky.io/v2/5e8838ed31000024303f4881")
    .then(data => console.log(JSON.parse(data)))
    .catch(data => console.log(JSON.parse(data)));

const input = document.getElementById("input");
const button = document.getElementById("button");
const results = document.getElementById("results");

button.addEventListener('click', () => {
    getTaskById(input.value)
        .then(renderTask)
        .catch(renderError);
});

var cache = {}
function getTaskById(id) {
    if (cache[id]) {
        return Promise.resolve(cache[id]);
    }

    if (isNaN(parseInt(id))) return Promise.reject("Error");

    var url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return request(url)
        .then(JSON.parse)
        .then((data) => {
            if (!cache[id]) {
                cache[id] = data;
            }
            return data;
        });
}

function renderTask(data) {
    results.innerHTML = `
        <div>${data}</div>
    `;
    console.log(data);
}


function renderError() {
    results.innerHTML = `
        <div>Error no se encuentran datos</div>
    `;
}