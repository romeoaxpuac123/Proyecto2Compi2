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
var UnCaracter = /** @class */ (function (_super) {
    __extends(UnCaracter, _super);
    function UnCaracter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnCaracter.prototype.UnCaracter = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    UnCaracter.prototype.Ejecutar = function (entorno) {
        entorno.direccion += "#SacandoCaracter;\n";
        var variable = this.Hijos[0].Nombre;
        var late = "false";
        var c3d = this.Hijos[1].CadenaDe3D;
        for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
            if (variable.toUpperCase() == entorno.VariableVariablesFUNCION[i].toUpperCase()) {
                late = entorno.TesVariablesFUNCION[i];
            }
        }
        if (late == "false") {
            for (var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length; i++) {
                if (variable.toUpperCase() == entorno.VariableVariablesFUNCIONGLOBAL[i].toUpperCase()) {
                    late = entorno.TesVariablesFUNCIONGLOBAL[i];
                }
            }
        }
        if (late == "false") {
            for (var i = 0; i < entorno.VariableVariables.length; i++) {
                if (variable.toUpperCase() == entorno.VariableVariables[i].toUpperCase()) {
                    late = entorno.TesVariables[i];
                }
            }
        }
        if (late == "false") {
            alert('Este es un semantico: ' + "No se puede determinar el largo de " + variable + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            entorno.LosErrores += "<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
            entorno.LosErrores += "<td>" + "No se puede determinar el largo de " + variable + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        //alert (late);
        entorno.etiquetas += 1;
        var Etiqueta1 = entorno.etiquetas;
        entorno.etiquetas += 1;
        var Etiqueta2 = entorno.etiquetas;
        entorno.etiquetas += 1;
        var Etiqueta3 = entorno.etiquetas;
        entorno.numero += 1;
        var tamanio2 = "t" + entorno.numero;
        entorno.numero += 1;
        var tamanio = "t" + entorno.numero;
        entorno.direccion += tamanio + "= 0;\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = Stack[" + late + "];\n";
        entorno.direccion += "L" + Etiqueta1 + ":\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = Heap[t" + (entorno.numero - 1) + "];\n";
        entorno.direccion += "if(" + "t" + entorno.numero + " == -1) goto L" + Etiqueta2 + ";\n";
        entorno.direccion += "if(" + tamanio + " <> " + c3d + ") goto L" + Etiqueta3 + ";\n";
        entorno.direccion += tamanio2 + " = " + "t" + entorno.numero + ";\n";
        entorno.direccion += "L" + Etiqueta3 + ":\n";
        entorno.direccion += "t" + (entorno.numero - 1) + " = " + "t" + (entorno.numero - 1) + " + 1 ;\n";
        entorno.direccion += tamanio + " = " + tamanio + " + 1 ;\n";
        entorno.direccion += "goto L" + Etiqueta1 + ";\n";
        entorno.direccion += "L" + Etiqueta2 + ":\n";
        tamanio = tamanio2;
        var nuevo = new Nodo("Caracter");
        var nuevovalor = new Nodo(tamanio.toString());
        nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = "Caracter2";
        nuevo.CadenaDe3D = tamanio.toString();
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return UnCaracter;
}(NodoAbstracto));
