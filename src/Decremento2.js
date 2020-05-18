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
var DECREMENTO2 = /** @class */ (function (_super) {
    __extends(DECREMENTO2, _super);
    function DECREMENTO2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DECREMENTO2.prototype.DECREMENTO2 = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    DECREMENTO2.prototype.Ejecutar = function (entorno) {
        var Variable = this.Hijos[0].Nombre;
        var signo = this.Hijos[1].Nombre;
        var Bandera = "false";
        for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
            if (Variable.toUpperCase() == entorno.VariableVariablesFUNCION[i].toUpperCase()) {
                if (entorno.EsConstante[i] == 1) {
                    alert("ERROR: se intenta modificar una constante" + entorno.VariableVariablesFUNCION[i]);
                    this.MiCadena = "ERROR NO SE GENERO C3D;\n";
                    entorno.LosErrores += "<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                    entorno.LosErrores += "<td>" + "Variable: " + entorno.VariableVariablesFUNCION[i] + "No Existe" + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
                }
                else {
                    Bandera = "true";
                    if (signo == "+") {
                        this.MiCadena += "##Vamos A Incrementar\n";
                        var tes = entorno.TesVariablesFUNCION[i];
                        entorno.numero += 1;
                        this.MiCadena += "t" + entorno.numero + " = stack[" + tes + "];\n";
                        entorno.numero += 1;
                        this.MiCadena += "t" + entorno.numero + " = t" + (entorno.numero - 1) + " + 1;\n";
                        this.MiCadena += "stack[" + tes + "] = t" + entorno.numero + ";\n";
                    }
                    else {
                        this.MiCadena += "##Vamos A decrementar\n";
                        var tes = entorno.TesVariablesFUNCION[i];
                        entorno.numero += 1;
                        this.MiCadena += "t" + entorno.numero + " = stack[" + tes + "];\n";
                        entorno.numero += 1;
                        this.MiCadena += "t" + entorno.numero + " = t" + (entorno.numero - 1) + " - 1;\n";
                        this.MiCadena += "stack[" + tes + "] = t" + entorno.numero + ";\n";
                    }
                }
            }
        }
        if (Bandera != "true") {
            for (var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length; i++) {
                if (Variable.toUpperCase() == entorno.VariableVariablesFUNCIONGLOBAL[i].toUpperCase()) {
                    if (entorno.SonConstanteGlobales[i] == 1) {
                        alert("ERROR: se intenta modificar una constante" + entorno.VariableVariablesFUNCIONGLOBAL[i]);
                        this.MiCadena = "ERROR NO SE GENERO C3D;\n";
                        entorno.LosErrores += "<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                        entorno.LosErrores += "<td>" + "Variable: " + entorno.VariableVariablesFUNCIONGLOBAL[i] + "No Existe" + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }
                    else {
                        Bandera = "true";
                        if (signo == "+") {
                            this.MiCadena += "##Vamos A Incrementar\n";
                            var tes = entorno.TesVariablesFUNCIONGLOBAL[i];
                            entorno.numero += 1;
                            this.MiCadena += "t" + entorno.numero + " = stack[" + tes + "];\n";
                            entorno.numero += 1;
                            this.MiCadena += "t" + entorno.numero + " = t" + (entorno.numero - 1) + " + 1;\n";
                            this.MiCadena += "stack[" + tes + "] = t" + entorno.numero + ";\n";
                        }
                        else {
                            this.MiCadena += "##Vamos A decrementar\n";
                            var tes = entorno.TesVariablesFUNCIONGLOBAL[i];
                            entorno.numero += 1;
                            this.MiCadena += "t" + entorno.numero + " = stack[" + tes + "];\n";
                            entorno.numero += 1;
                            this.MiCadena += "t" + entorno.numero + " = t" + (entorno.numero - 1) + " - 1;\n";
                            this.MiCadena += "stack[" + tes + "] = t" + entorno.numero + ";\n";
                        }
                    }
                }
            }
        }
        var nuevo = new Nodo("DECREMENTO");
        //nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return DECREMENTO2;
}(NodoAbstracto));
