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
var BREAKXD = /** @class */ (function (_super) {
    __extends(BREAKXD, _super);
    function BREAKXD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BREAKXD.prototype.BREAKXD = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    BREAKXD.prototype.Ejecutar = function (entorno) {
        var nuevo = new Nodo("BREAKXD");
        //nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        nuevo.MiCadena = "break;";
        nuevo.CadenaDe3D = "break";
        return nuevo;
    };
    return BREAKXD;
}(NodoAbstracto));
