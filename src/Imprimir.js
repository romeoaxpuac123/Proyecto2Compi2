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
var Imprimir = /** @class */ (function (_super) {
    __extends(Imprimir, _super);
    function Imprimir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imprimir.prototype.Imprimir = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Imprimir.prototype.Ejecutar = function (entorno) {
        console.log("Entro a Imprimir");
        console.log("TOALT->" + entorno.numero);
        var respuesta = this.Hijos[0].Hijos[0].Nombre;
        document.getElementById("salida").innerHTML = respuesta;
        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    };
    return Imprimir;
}(NodoAbstracto));
