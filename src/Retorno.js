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
var Retorno = /** @class */ (function (_super) {
    __extends(Retorno, _super);
    function Retorno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Retorno.prototype.Retorno = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Retorno.prototype.Ejecutar = function (entorno) {
        var ElvalordeP = "P"; // + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        entorno.numero += 1;
        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + this.Hijos[0].CadenaDe3D + ";\n";
        entorno.numero += 1;
        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + ElvalordeP + " + " + (Tamanio) + ";\n";
        //entorno.TesVariables.push("t" + entorno.numero );
        entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero - 1) + ";\n";
        entorno.TesVariablesFUNCION.push("t" + entorno.numero);
        entorno.TipoVariablesFUNCION.push(this.Hijos[0].TipoDato);
        entorno.VariableVariablesFUNCION.push("return");
        entorno.tamanioentorno += 1;
        entorno.mostrarSimboos();
        var nuevo = new Nodo("RETORNO");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Retorno;
}(NodoAbstracto));
