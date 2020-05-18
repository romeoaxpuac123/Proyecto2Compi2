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
var SWITCHD = /** @class */ (function (_super) {
    __extends(SWITCHD, _super);
    function SWITCHD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SWITCHD.prototype.SWITCHD = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    SWITCHD.prototype.Ejecutar = function (entorno) {
        entorno.direccion += "#TRADUCIENDO SWITHC\n";
        this.Hijos[0].Ejecutar(entorno);
        var Cad3dExpresion = this.Hijos[0].CadenaDe3D;
        var TipoExpresion = this.Hijos[0].TipoDato;
        entorno.direccion += this.Hijos[0].MiCadena;
        if (TipoExpresion.toUpperCase() == "ID") {
            for (var x = 0; x < entorno.VariableVariables.length; x++) {
                if (Cad3dExpresion == entorno.VariableVariables[x]) {
                    entorno.numero += 1;
                    Cad3dExpresion = "Heap[" + entorno.TesVariables[x] + "]";
                    entorno.direccion += "t" + entorno.numero + " = stack[" + entorno.TesVariables[x] + "];\n";
                    Cad3dExpresion = "t" + entorno.numero;
                }
            }
            for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
                if (Cad3dExpresion == entorno.VariableVariablesFUNCION[x]) {
                    entorno.numero += 1;
                    Cad3dExpresion = "Heap[" + entorno.TesVariablesFUNCION[x] + "]";
                    entorno.direccion += "t" + entorno.numero + " = stack[" + entorno.TesVariablesFUNCION[x] + "];\n";
                    Cad3dExpresion = "t" + entorno.numero;
                }
            }
            for (var x = 0; x < entorno.VariableVariablesFUNCIONGLOBAL.length; x++) {
                if (Cad3dExpresion == entorno.VariableVariablesFUNCIONGLOBAL[x]) {
                    entorno.numero += 1;
                    Cad3dExpresion = "Stack[" + entorno.TesVariablesFUNCIONGLOBAL[x] + "]";
                    entorno.direccion += "t" + entorno.numero + "= Heap[" + entorno.TesVariablesFUNCION[x] + "];\n";
                    Cad3dExpresion = "t" + entorno.numero;
                }
            }
        }
        //alert(Cad3dExpresion);
        entorno.etiquetas += 1;
        var NUMEROFINAL = entorno.etiquetas;
        for (var x = 0; x < this.Hijos[1].ListaSentencias.length; x++) {
            entorno.etiquetas += 1;
            var EtiquetaSiguiente = entorno.etiquetas;
            entorno.direccion += "#Expresion case " + x + " \n";
            this.Hijos[1].ListaSentencias[x].Hijos[0].Ejecutar(entorno);
            entorno.direccion += this.Hijos[1].ListaSentencias[x].Hijos[0].MiCadena;
            var C3dx2 = this.Hijos[1].ListaSentencias[x].Hijos[0].CadenaDe3D;
            //comparando expresiones
            entorno.direccion += "if(" + Cad3dExpresion + " <> " + C3dx2 + ") goto L" + EtiquetaSiguiente + ";\n";
            //expresiones si cumple
            entorno.direccion += "#senteicas\n";
            for (var p = 0; p < this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias.length; p++) {
                this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].Ejecutar(entorno);
                if (this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].MiCadena == "break;") {
                    entorno.direccion += "goto L" + NUMEROFINAL + ";\n";
                }
                else {
                    entorno.direccion += this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].MiCadena;
                }
            }
            //
            entorno.direccion += "L" + EtiquetaSiguiente + ":\n";
        }
        entorno.direccion += "#defecto\n";
        for (var p = 0; p < this.Hijos[2].ListaSentencias.length; p++) {
            this.Hijos[2].ListaSentencias[p].Ejecutar(entorno);
            if (this.Hijos[2].ListaSentencias[p].MiCadena == "break;") {
                entorno.direccion += "goto L" + NUMEROFINAL + ";\n";
            }
            else {
                entorno.direccion += this.Hijos[2].ListaSentencias[p].MiCadena;
            }
        }
        entorno.etiquetas += 1;
        entorno.direccion += "L" + entorno.etiquetas + ":\n";
        entorno.direccion += "L" + NUMEROFINAL + ":\n";
        var nuevo = new Nodo("SWITCH");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return SWITCHD;
}(NodoAbstracto));
