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
var Variables2 = /** @class */ (function (_super) {
    __extends(Variables2, _super);
    function Variables2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Variables2.prototype.Variables2 = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Variables2.prototype.Ejecutar = function (entorno) {
        console.log("-----------ENTRO A VARIABLES------");
        var ElTipo = this.Hijos[0].Nombre;
        var LaTRespuesta = "";
        var ElvalordeP = "P"; // + entorno.valordep;
        //var ElvalordeP = "t" + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        //public TipoVariables =  new Array();
        //public VariableVariables = new Array();
        //public TesVariables = new Array();
        if (ElTipo.toUpperCase() == "INTEGER") {
            LaTRespuesta = "0";
        }
        else if (ElTipo.toUpperCase() == "DOUBLE") {
            LaTRespuesta = "0.0";
        }
        else if (ElTipo.toUpperCase() == "CHAR") {
            LaTRespuesta = "00";
        }
        else if (ElTipo.toUpperCase() == "STRING") {
            //LaTRespuesta  = "00";
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
            LaTRespuesta = "t" + entorno.numero;
            entorno.direccion = entorno.direccion + "Heap[H] = 110;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
            entorno.direccion = entorno.direccion + "Heap[H] = 117;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
            entorno.direccion = entorno.direccion + "Heap[H] = 108;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
            entorno.direccion = entorno.direccion + "Heap[H] = 108;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
            entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
            entorno.direccion = entorno.direccion + "H = H + 1;\n";
        }
        else if (ElTipo.toUpperCase() == "BOOLEAN") {
            LaTRespuesta = "0";
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
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" + entorno.VariableVariables[i] + "\n";
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
            if ((LaTRespuesta == "0" || LaTRespuesta == "1") && ElTipo.toUpperCase() == "BOOLEAN") {
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
                //entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" +  entorno.VariableVariables[i] + "\n";
                //entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
                //entorno.numero +=1;
                entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + ElvalordeP + " + " + (Tamanio) + ";\n";
                //entorno.TesVariables.push("t" + entorno.numero );
                entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero - 1) + ";\n";
                entorno.TesVariablesFUNCION.push("t" + entorno.numero);
                entorno.TipoVariablesFUNCION.push(ElTipo);
                entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
                entorno.tamanioentorno += 1;
            }
            //entorno.TipoVariables.push(ElTipo);
            //console.log("-----------");
            //console.log("La variable tiene Tipoe de:->" + ElTipo);
            //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
            //console.log("El valor de P-> " + ElvalordeP);
            //console.log("Posición en la funcion->" + (Tamanio+i+1));
            //console.log("------------");
        }
        entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
        //entorno.TipoVariables.splice(0,entorno.TipoVariables.length);
        //entorno.tamanioentorno += 1;
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Variables2;
}(NodoAbstracto));
