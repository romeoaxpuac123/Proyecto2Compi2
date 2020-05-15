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
var DO_WHILE = /** @class */ (function (_super) {
    __extends(DO_WHILE, _super);
    function DO_WHILE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DO_WHILE.prototype.DO_WHILE = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    DO_WHILE.prototype.Ejecutar = function (entorno) {
        console.log("ENTROOOOOOO AL WHILE-->");
        entorno.etiquetas += 1;
        var NUMEROFINAL = entorno.etiquetas;
        entorno.etiquetas += 1;
        var EtiquetaCiclo = entorno.etiquetas;
        entorno.direccion += "##SENTENCIAS DO WHILE->\n";
        entorno.direccion += "L" + EtiquetaCiclo + ":\n";
        for (var x = 0; x < this.Hijos[0].ListaSentencias.length; x++) {
            this.Hijos[0].ListaSentencias[x].Ejecutar(entorno);
            if (this.Hijos[0].ListaSentencias[x].MiCadena == "break;") {
                entorno.direccion += "goto L" + NUMEROFINAL + ";\n";
            }
            else {
                entorno.direccion += this.Hijos[0].ListaSentencias[x].MiCadena;
            }
        }
        //this.Hijos[0].Ejecutar(entorno);
        //entorno.direccion += this.Hijos[0].MiCadena;
        //entorno.direccion += entorno.direccionIF;
        //entorno.direccionIF  = "";
        entorno.direccion += "##fin SENTENCIAS DO WHILE->\n";
        this.Hijos[1].Ejecutar(entorno);
        entorno.direccion += this.Hijos[1].MiCadena;
        var Cad3dExpresion = this.Hijos[1].CadenaDe3D;
        var TipoExpresion = this.Hijos[1].TipoDato;
        entorno.direccion += "## TRADUCIENDO WHIELE\n";
        if (TipoExpresion.toUpperCase() == "BOOLEAN" || TipoExpresion.toUpperCase() == "BOOLEANO") {
            if (this.Hijos[0].Nombre.toUpperCase() == "BOOLEANO") {
                if (Cad3dExpresion.toUpperCase() == "FALSE") {
                    Cad3dExpresion = "0";
                }
                else {
                    Cad3dExpresion = "1";
                }
            }
            else {
                entorno.etiquetas += 1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas += 1;
                var Etiqueta2 = entorno.etiquetas;
                entorno.numero += 1;
                entorno.direccion += "t" + entorno.numero + " = " + Cad3dExpresion + ";\n";
                var auxi = "t" + entorno.numero;
                entorno.numero += 1;
                entorno.direccion += "t" + entorno.numero + " = " + 0 + ";\n";
                var auxi2 = "t" + entorno.numero;
                entorno.numero += 1;
                entorno.direccion += "L" + Etiqueta1 + ":\n";
                entorno.direccion += "t" + entorno.numero + " = Heap[" + auxi + "];\n";
                entorno.direccion += "if(t" + entorno.numero + " == -1 ) goto L" + Etiqueta2 + ";\n";
                entorno.direccion += auxi + " = " + auxi + " + 1;\n";
                entorno.direccion += auxi2 + " = " + auxi2 + " + 1;\n";
                entorno.direccion += "goto L" + Etiqueta1 + ";\n";
                entorno.direccion += "L" + Etiqueta2 + ":\n";
                entorno.etiquetas += 1;
                var Etiqueta3 = entorno.etiquetas;
                entorno.etiquetas += 1;
                var Etiqueta4 = entorno.etiquetas;
                entorno.direccion += "if(" + auxi2 + "== 5) goto L" + Etiqueta4 + ";\n";
                entorno.direccion += auxi2 + " = 1;\n";
                entorno.direccion += "goto L" + Etiqueta3 + ";\n";
                entorno.direccion += "L" + Etiqueta4 + ":\n";
                entorno.direccion += auxi2 + " = 0;\n";
                entorno.direccion += "L" + Etiqueta3 + ":\n";
                Cad3dExpresion = auxi2;
            }
            entorno.etiquetas += 1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas += 1;
            var Etiqueta2 = entorno.etiquetas;
            entorno.direccion += "##traduciendo if\n";
            entorno.direccion += "if(" + Cad3dExpresion + " == 0) goto L" + Etiqueta1 + ";\n";
            //
            // for(var x = 0; x< this.Hijos[1].ListaSentencias.length;x++){
            //     this.Hijos[1].ListaSentencias[x].Ejecutar(entorno);
            //     entorno.direccion += this.Hijos[1].ListaSentencias[x].MiCadena;
            // }
            //
            //entorno.direccion += entorno.direccionIF;
            //entorno.direccionIF = "";
            entorno.direccion += "goto L" + EtiquetaCiclo + ";\n";
            entorno.direccion += "L" + Etiqueta1 + ":\n";
            //entorno.direccion = ""; 
        }
        else {
            alert('Este es un semantico: ' + "EXP incorrecta" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            entorno.LosErrores += "<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
            entorno.LosErrores += "<td>" + "EXP incorrecta en el if" + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        entorno.direccion += "L" + NUMEROFINAL + ":\n";
        var nuevo = new Nodo("IF");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return DO_WHILE;
}(NodoAbstracto));
