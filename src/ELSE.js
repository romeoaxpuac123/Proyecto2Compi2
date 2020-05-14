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
var ELSE = /** @class */ (function (_super) {
    __extends(ELSE, _super);
    function ELSE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ELSE.prototype.ELSE = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    ELSE.prototype.Ejecutar = function (entorno) {
        console.log("ENTROOOOOOO AL ELSE-->");
        //var Cad3dExpresion = this.Hijos[0].CadenaDe3D;
        //var TipoExpresion = this.Hijos[0].TipoDato;
        entorno.direccionIF += "##inf_ELSE\n";
        var nuevo = new Nodo("ELSE");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return ELSE;
}(NodoAbstracto));
