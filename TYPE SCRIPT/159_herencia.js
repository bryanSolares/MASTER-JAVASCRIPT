var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(ruedas, marca, velocidad) {
        this.ruedas = ruedas;
        this.marca = marca;
        this.velocidad = velocidad;
    }
    Vehiculo.prototype.toString = function () {
        return "Vehiculo de: " + this.ruedas + " ruedas, y de marca: " + this.marca;
    };
    Vehiculo.prototype.aumentarVelocidad = function () {
        //this.velocidad = (this.velocidad * 10);
        this.velocidad *= 10;
        console.log("Velocidad aumentada en 10: " + this.velocidad);
    };
    return Vehiculo;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyota.prototype.otraFuncionalidad = function () {
        return "Se añade otra funcionalidad a la nueva clase";
    };
    Toyota.prototype.aumentarVelocidad = function () {
        //this.velocidad = (this.velocidad * 2);
        this.velocidad *= 2;
        console.log("Velocidad aumentada en 2: " + this.velocidad);
        _super.prototype.aumentarVelocidad.call(this);
    };
    return Toyota;
}(Vehiculo));
//debugger;
var miAuto = new Toyota(4, "Hilux", 10);
miAuto.otraFuncionalidad();
miAuto.toString();
miAuto.aumentarVelocidad();
