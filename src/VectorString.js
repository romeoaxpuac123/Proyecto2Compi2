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
var VectorString = /** @class */ (function (_super) {
    __extends(VectorString, _super);
    function VectorString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VectorString.prototype.VectorString = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    VectorString.prototype.Ejecutar = function (entorno) {
        //entorno.direccion += "##Asigando un vector;\n"
        entorno.numero += 1;
        var elinicio = entorno.numero;
        var variable = this.Hijos[1].Nombre;
        var late = "false";
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
        entorno.direccion += "t" + elinicio + " = 0;\n";
        entorno.direccion += "##Asigando un vector;\n";
        entorno.numero += 1;
        var TeDeLaVariable = entorno.numero;
        //asignando vectores en AltoNivel
        // entorno.tamanioentorno += 1;
        for (var x = 0; x < entorno.VariableVariables.length; x++) {
            entorno.tamanioentorno += 1;
            entorno.TipoVariablesFUNCIONVECTOR.push(this.Hijos[0].Nombre);
            entorno.VariableVariablesFUNCIONVECTOR.push(entorno.VariableVariables[x]);
            entorno.TesVariablesFUNCIONVECTOR.push("t" + TeDeLaVariable);
            entorno.TamanioVECTOR.push(entorno.ListaParametrosFuncion.length);
        }
        entorno.direccion += "t" + entorno.numero + " = H;\n";
        //var tamaniovariable = "t" + entorno.numero;
        entorno.direccion += "Heap[H] = " + 0 + ";\n";
        entorno.direccion += "H = H + 1;\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = " + late + ";\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = Stack[t" + (entorno.numero - 1) + "];\n";
        var posicionInicial = "t" + entorno.numero;
        //leer la cadena
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = " + posicionInicial + ";\n";
        entorno.etiquetas += 1;
        var Etiqueta1 = entorno.etiquetas;
        entorno.etiquetas += 1;
        var Etiqueta2 = entorno.etiquetas;
        entorno.etiquetas += 1;
        var Etiqueta3 = entorno.etiquetas;
        entorno.direccion += "L" + Etiqueta1 + ":\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = Heap[t" + (entorno.numero - 1) + "];\n";
        entorno.direccion += "if(" + "t" + entorno.numero + " == -1) goto L" + Etiqueta2 + ";\n";
        entorno.direccion += "Heap[H] = " + "t" + entorno.numero + ";\n";
        entorno.direccion += "H = H + 1;\n";
        entorno.direccion += "t" + elinicio + " = " + "t" + elinicio + " + 1;\n";
        entorno.direccion += "t" + (entorno.numero - 1) + " = " + "t" + (entorno.numero - 1) + " + 1;\n";
        entorno.direccion += "goto L" + Etiqueta1 + ";\n";
        entorno.direccion += "L" + Etiqueta2 + ":\n";
        entorno.direccion += "Heap[H] = " + "-1" + ";\n";
        entorno.direccion += "H = H + 1;\n";
        //entorno.direccion += "t" + elinicio + " = " + "t" + elinicio + " - 1;\n"
        entorno.direccion += "Heap[t" + TeDeLaVariable + "] = t" + elinicio + ";\n";
        var nuevo = new Nodo("VARIALBES");
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return VectorString;
}(NodoAbstracto));
