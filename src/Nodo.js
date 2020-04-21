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
var Nodo = /** @class */ (function (_super) {
    __extends(Nodo, _super);
    function Nodo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nodo.prototype.Nodo = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
    };
    Nodo.prototype.Ejecutar = function (entorno) {
        console.log("EJECUTANDO NODO");
        var Nodo1 = new Nodo(this.Nombre);
        console.log("El Nombre:" + Nodo1.Nombre);
        return Nodo1;
    };
    return Nodo;
}(NodoAbstracto));
