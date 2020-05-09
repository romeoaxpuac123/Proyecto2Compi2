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
var Variables = /** @class */ (function (_super) {
    __extends(Variables, _super);
    function Variables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Variables.prototype.Variables = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Variables.prototype.Ejecutar = function (entorno) {
        console.log("-----------ENTRO A VARIABLES------");
        var ElTipo = this.Hijos[0].Nombre;
        var LaTRespuesta = this.Hijos[1].CadenaDe3D;
        var TipoRespuesta = this.Hijos[1].TipoDato;
        var ElvalordeP = "P"; // + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        //public TipoVariables =  new Array();
        //public VariableVariables = new Array();
        //public 
        //alert('Anhelo->' + this.Hijos[1].Nombre);
        if (LaTRespuesta.toUpperCase() == "TRUE" && ElTipo.toUpperCase() == "BOOLEAN") {
            LaTRespuesta = "1";
        }
        else if (LaTRespuesta.toUpperCase() == "FALSE" && ElTipo.toUpperCase() == "BOOLEAN") {
            LaTRespuesta = "0";
        }
        if (this.Hijos[1].TipoDato == "Caracter") {
            //alert("pos si hay caracter");
            LaTRespuesta = LaTRespuesta.charCodeAt(1).toString();
        }
        if (ElTipo.toUpperCase() == "INTEGER" || ElTipo.toUpperCase() == "DOUBLE"
            || ElTipo.toUpperCase() == "CHAR" || ElTipo.toUpperCase() == "BOOLEAN"
            || ElTipo.toUpperCase() == "VAR" || ElTipo.toUpperCase() == "CONST"
            || ElTipo.toUpperCase() == "STRING") {
            //entorno.Tipo.push(this.TipoDato);
            //entorno.Variable.push(nombre);
            //entorno.numero += 1;
            //var Tex = "t" + entorno.numero;
            //entorno.Tes.push(Tex);
            //entorno.tamanioentorno += 1;
            //entorno.anadirSimbolo(nombre,"local",entorno.nombreentorno,0,entorno.Tes.length,this.TipoDato,Tex,0);
        }
        else {
            alert('Este es un semantico: ' + ElTipo + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            entorno.LosErrores += "<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
            entorno.LosErrores += "<td>" + " Tipo Variable " + ElTipo + " No Permitido" + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        if (this.Hijos[1].Nombre == "Cadena") {
            //alert('Carga->' + this.Hijos[1].Nombre);
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
            LaTRespuesta = "t" + entorno.numero;
            this.Hijos[1].CadenaDe3D = this.Hijos[1].CadenaDe3D.replace("\"", "");
            this.Hijos[1].CadenaDe3D = this.Hijos[1].CadenaDe3D.replace("\"", "");
            for (var x = 0; x < this.Hijos[1].CadenaDe3D.length; x++) {
                entorno.direccion = entorno.direccion + "Heap[H] = " + this.Hijos[1].CadenaDe3D.charCodeAt(x).toString() + ";\n";
                entorno.direccion = entorno.direccion + "H = H + 1;\n";
            }
            entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
        }
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
        for (var i = 0; i < entorno.VariableVariables.length; i++) {
            Tamanio = entorno.tamanioentorno;
            console.log("variable---->" + entorno.VariableVariables[i]);
            for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
                if (entorno.VariableVariables[i].toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                    entorno.LosErrores += "<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                    entorno.LosErrores += "<td>" + " Variable " + entorno.VariableVariables[i] + " Existente" + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
                    break;
                }
            }
            for (var x = 0; x < entorno.Variable.length; x++) {
                if (entorno.VariableVariables[i].toUpperCase() == entorno.Variable[x].toUpperCase()) {
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                    entorno.LosErrores += "<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                    entorno.LosErrores += "<td>" + " Variable " + entorno.VariableVariables[i] + " Existente" + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
                    break;
                }
            }
            //entorno.TipoVariables.push(ElTipo);
            //console.log("-----------");
            //console.log("La variable tiene Tipoe de:->" + ElTipo);
            //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
            //console.log("El valor de P-> " + ElvalordeP);
            //console.log("Posición en la funcion->" + (Tamanio+i+1));
            //console.log("------------");--
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" + entorno.VariableVariables[i] + "\n";
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
            if (LaTRespuesta == "0" || LaTRespuesta == "1") {
                var ResuladoSalida = "";
                entorno.etiquetas += 1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas += 1;
                var Etiqueta2 = entorno.etiquetas;
                ResuladoSalida = ResuladoSalida + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n";
                entorno.numero += 1;
                ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = H;\n";
                var auxp = "t" + entorno.numero;
                ResuladoSalida = ResuladoSalida + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                ResuladoSalida = ResuladoSalida + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                ResuladoSalida = ResuladoSalida + "Heap[H] = -1;\nH = H + 1;\n";
                ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = H;\n";
                ResuladoSalida = ResuladoSalida + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                ResuladoSalida = ResuladoSalida + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                entorno.direccion = entorno.direccion + ResuladoSalida;
                entorno.numero += 1;
                entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + ElvalordeP + " + " + (Tamanio) + ";\n";
                //entorno.TesVariables.push("t" + entorno.numero );
                entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero - 1) + ";\n";
                entorno.TesVariablesFUNCION.push("t" + entorno.numero);
                entorno.TipoVariablesFUNCION.push(ElTipo);
                entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
                entorno.tamanioentorno += 1;
            }
            else {
                entorno.numero += 1;
                entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + ElvalordeP + " + " + (Tamanio) + ";\n";
                //entorno.TesVariables.push("t" + entorno.numero );
                entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero - 1) + ";\n";
                entorno.TesVariablesFUNCION.push("t" + entorno.numero);
                entorno.TipoVariablesFUNCION.push(ElTipo);
                entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
                entorno.tamanioentorno += 1;
            }
        }
        entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
        //entorno.TipoVariables.splice(0,entorno.TipoVariables.length);
        //entorno.tamanioentorno += 1;
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Variables;
}(NodoAbstracto));
