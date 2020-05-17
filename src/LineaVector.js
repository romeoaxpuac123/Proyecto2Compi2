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
var LineaVector = /** @class */ (function (_super) {
    __extends(LineaVector, _super);
    function LineaVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineaVector.prototype.Variables = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    LineaVector.prototype.Ejecutar = function (entorno) {
        var LaT = "";
        var Elvector = this.Hijos[0].Nombre;
        var ElTipo = "";
        var bandera = "false";
        var tamanio = "";
        for (var i = 0; i < entorno.VariableVariablesFUNCIONVECTOR.length; i++) {
            if (Elvector.toUpperCase() == entorno.VariableVariablesFUNCIONVECTOR[i].toUpperCase()) {
                LaT = entorno.TesVariablesFUNCIONVECTOR[i];
                ElTipo = entorno.TipoVariablesFUNCIONVECTOR[i];
                bandera = "true";
                //tamanio = entorno.TamanioVECTOR[i];
                //tamanio = entorno.
                entorno.numero += 1;
                entorno.direccion += "t" + entorno.numero + " = " + "Heap[" + entorno.TesVariablesFUNCIONVECTOR[i] + "];\n";
                tamanio = "t" + entorno.numero;
            }
        }
        var nuevo = new Nodo("Entero");
        var nuevovalor = new Nodo(tamanio.toString());
        nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = "Entero";
        nuevo.CadenaDe3D = tamanio.toString();
        return nuevo;
    };
    return LineaVector;
}(NodoAbstracto));
