const mongoose = require("mongoose");
const app = require("./app");

mongoose.Promise = global.Promise;

//Configuration
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/portafolio", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true
    })
    .then(response => {
        console.log("Conectado a la base de datos")
        app.listen(port, () => {
            console.log(`Server on port ${port}`)
        });
    })
    .catch(error => console.error(`Error de conexión ${error}`));