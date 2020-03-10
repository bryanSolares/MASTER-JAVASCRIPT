var bicicleta = {
    color: "rojo",
    modelo: "BMX",
    frenos: "disco",
    velocidadMx: "60 kms/hr",
    cambiarColor: (nuevoColor) => {
        this.color = nuevoColor;
    }
};

bicicleta.cambiarColor("azul");
