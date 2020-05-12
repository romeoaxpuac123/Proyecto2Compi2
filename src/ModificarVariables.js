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
        var TipoRespuesta = this.Hijos[1].TipoDato;
        var LaViejaT = "";
        var LaNuevaT = "";
        if (TipoRespuesta == "ID") {
            for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
                if (this.Hijos[1].Hijos[0].Nombre.toUpperCase() ==
                    entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                    entorno.direccion += "##modificando var\n";
                    TipoRespuesta = entorno.TipoVariablesFUNCION[x];
                    C3DExpresion = entorno.TesVariablesFUNCION[x];
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = stack[" + C3DExpresion + "];\n";
                    C3DExpresion = "t" + entorno.numero;
                }
            }
        }
        var ElTipo = "";
        var don1 = "ERROR";
        for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
            if (LaVariable == entorno.VariableVariablesFUNCION[i]) {
                don1 = "TRUE";
            }
        }
        for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
            if (LaVariable == entorno.VariableVariablesFUNCION[i]) {
                ElTipo = entorno.TipoVariablesFUNCION[i];
            }
        }
        //BUSCANDO EN PARAMETROS
        if (don1 == "ERROR") {
            for (var i = 0; i < entorno.Variable.length; i++) {
                if (LaVariable == entorno.Variable[i]) {
                    don1 = "TRUE";
                }
            }
            for (var i = 0; i < entorno.Variable.length; i++) {
                if (LaVariable == entorno.Variable[i]) {
                    ElTipo = entorno.Tipo[i];
                }
            }
        }
        //explorando los tipos
        if ((ElTipo.toUpperCase() == "CADENA" || ElTipo.toUpperCase() == "STRING")) {
            if (!(TipoRespuesta.toUpperCase() == "CADENA" || TipoRespuesta.toUpperCase() == "STRING")) {
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                entorno.LosErrores += "<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                entorno.LosErrores += "<td>" + "Variables de Diferentes tipos " + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }
        else if ((ElTipo.toUpperCase() == "INTEGER" || ElTipo.toUpperCase() == "ENTERO")) {
            if (!(TipoRespuesta.toUpperCase() == "INTEGER" || TipoRespuesta.toUpperCase() == "ENTERO"
                || TipoRespuesta.toUpperCase() == "CARACTER" || TipoRespuesta.toUpperCase() == "CHAR")) {
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                entorno.LosErrores += "<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                entorno.LosErrores += "<td>" + "Variables de Diferentes tipos " + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }
        else if ((ElTipo.toUpperCase() == "CHAR" || ElTipo.toUpperCase() == "CARACTER")) {
            if (!(TipoRespuesta.toUpperCase() == "CHAR" || TipoRespuesta.toUpperCase() == "CARACTER")) {
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                entorno.LosErrores += "<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                entorno.LosErrores += "<td>" + "Variables de Diferentes tipos " + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }
        else if ((ElTipo.toUpperCase() == "DOUBLE" || ElTipo.toUpperCase() == "DECIMAL")) {
            if (!(TipoRespuesta.toUpperCase() == "INTEGER" || TipoRespuesta.toUpperCase() == "ENTERO"
                || TipoRespuesta.toUpperCase() == "CARACTER" || TipoRespuesta.toUpperCase() == "CHAR"
                || TipoRespuesta.toUpperCase() == "DOUBLE" || TipoRespuesta.toUpperCase() == "DECIMAL")) {
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                entorno.LosErrores += "<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                entorno.LosErrores += "<td>" + "Variables de Diferentes tipos " + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }
        //fin te tipos
        if (don1 == "TRUE") {
            var bandera1 = "FALSE";
            for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
                if (LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                    LaViejaT = entorno.TesVariablesFUNCION[x];
                    bandera1 = "TRUE";
                }
            }
            if (bandera1 == "FALSE") {
                for (var x = 0; x < entorno.Variable.length; x++) {
                    if (LaVariable.toUpperCase() == entorno.Variable[x].toUpperCase()) {
                        LaViejaT = entorno.Tes[x];
                        bandera1 = "TRUE";
                    }
                }
            }
            LaNuevaT = C3DExpresion;
            //var nuevosimbolo = LaViejaT.replace("t","");
            //var hola = +nuevosimbolo - 1;
            entorno.direccion += "stack[" + LaViejaT + "] = " + LaNuevaT + ";\n"; //:"t" + hola + " = " + LaNuevaT + ";\n";
            //for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
            //    if(LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
            //         entorno.TesVariablesFUNCION[x] = LaNuevaT ;
            //    }
            // }
        }
        else {
            alert('Este es un semantico: ' + LaVariable + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            entorno.LosErrores += "<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
            entorno.LosErrores += "<td>" + "Variable: " + LaVariable + "No Existe" + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        console.log("-> Variable->" + LaVariable);
        console.log("-> AntiguaT->" + LaViejaT);
        console.log("-> LaViejaT->" + LaNuevaT);
        entorno.mostrarSimboos();
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.CadenaDe3D = LaNuevaT;
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return ModificarVariables;
}(NodoAbstracto));
