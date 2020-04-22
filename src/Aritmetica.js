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
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aritmetica.prototype.Aritmetica = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Aritmetica.prototype.Ejecutar = function (entorno) {
        console.log("EJECUTANDO NODO ARITMETICA");
        console.log("Casa->" + entorno.numero);
        var Tipo1 = this.Hijos[0].TipoDato;
        var Tipo2 = this.Hijos[2].TipoDato;
        var Operador = this.Hijos[1].Nombre;
        var Valor1 = this.Hijos[0].Hijos[0].Nombre;
        var Valor2 = this.Hijos[2].Hijos[0].Nombre;
        var Total = +Valor1 + +Valor2;
        var TipoFinal = "Decimal";
        if (Tipo1 == "Entero" && Tipo2 == "Entero") {
            TipoFinal = "Entero";
        }
        else if ((Tipo1 == "Decimal" || Tipo1 == "Entero") && Tipo2 == "Decimal") {
            TipoFinal = "Decimal";
        }
        else if ((Tipo1 == "Decimal") && (Tipo2 == "Entero" || Tipo2 == "Decimal")) {
            TipoFinal = "Decimal";
        }
        //console.log("Tipo1: " + Tipo1);
        //console.log("Tipo2: " + Tipo2);
        //console.log("Simbolo: " + Operador);
        //console.log("Valor1: " + Valor1);
        //console.log("Valor2: " + Valor2);
        console.log("Total->" + Total);
        var nuevo = new Nodo(TipoFinal);
        var nuevovalor = new Nodo(Total.toString());
        nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = TipoFinal;
        entorno.numero += 1;
        return nuevo;
    };
    return Aritmetica;
}(NodoAbstracto));
