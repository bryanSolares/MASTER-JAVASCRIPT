var MiClaseImplementada = /** @class */ (function () {
    function MiClaseImplementada(color, precio) {
        this.color = color;
        this.precio = precio;
    }
    MiClaseImplementada.prototype.setColor = function (color) {
        this.color = color;
    };
    MiClaseImplementada.prototype.getColor = function () {
        return this.color;
    };
    return MiClaseImplementada;
}());
