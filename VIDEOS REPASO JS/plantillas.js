var variable = 2

var user = {
    nombre : "bryan ",
    apellido: "solares"
}

var template = `
linea de html
linea de html
linea de html
linea de html + ${variable}
${user.nombre} linea html ${user.apellido}
`

console.log(template)