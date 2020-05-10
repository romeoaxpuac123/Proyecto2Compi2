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
var ModificarVariables = /** @class */ (function (_super) {
    __extends(ModificarVariables, _super);
    function ModificarVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModificarVariables.prototype.Variables2 = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    ModificarVariables.prototype.Ejecutar = function (entorno) {
        console.log("-----> ENTRO A MODIFICAR VARIABLE<-----");
        var LaVariable = this.Hijos[0].Nombre;
        var C3DExpresion = this.Hijos[1].CadenaDe3D;
        var LaViejaT = "";
        var LaNuevaT = "";
        for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
            if (LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                LaViejaT = entorno.TesVariablesFUNCION[x];
            }
        }
        LaNuevaT = C3DExpresion;
        for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
            if (LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                entorno.TesVariablesFUNCION[x] = LaViejaT;
            }
        }
        console.log("-> Variable->" + LaVariable);
        console.log("-> AntiguaT->" + LaViejaT);
        console.log("-> LaViejaT->" + LaNuevaT);
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return ModificarVariables;
}(NodoAbstracto));
