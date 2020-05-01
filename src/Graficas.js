var Graficas = /** @class */ (function () {
    function Graficas() {
        // Le doy un valor
        this.cadena = 'digraph D {\n';
        this.numero = 0;
    }
    Graficas.prototype.anadir = function (cadena2) {
        this.cadena = this.cadena + cadena2;
    };
    Graficas.prototype.ResultCadena = function () {
        return this.cadena;
    };
    Graficas.prototype.Renovar = function () {
        this.cadena = 'digraph D {\n';
    };
    return Graficas;
}());
