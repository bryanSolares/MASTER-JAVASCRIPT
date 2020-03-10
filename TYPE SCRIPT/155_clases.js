"use strict";
//Manejo de clases
exports.__esModule = true;
//modelo
var Camiseta = /** @class */ (function () {
    //Constructores
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //métodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
var camiseta1 = new Camiseta("Rojo", "manga larga", "ADA", "L", 12);
camiseta1.setColor("Amarillo");
console.log(camiseta1.getColor());
var camiseta2 = new Camiseta("Azul", "JUE--", "Maa", "asdf", 34);
camiseta2.setColor("Violeta");
console.log(camiseta2.getColor());
