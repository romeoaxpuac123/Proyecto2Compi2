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
var LLamadas = /** @class */ (function (_super) {
    __extends(LLamadas, _super);
    function LLamadas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LLamadas.prototype.LLamadas = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    LLamadas.prototype.Ejecutar = function (entorno) {
        console.log("-----------ENTRO A Llamar funcionesS------");
        var nombre = this.Hijos[0].Nombre;
        var TParametros = 0;
        console.log("La funcion call tiene nombre de:->" + nombre);
        console.log("Sus parametros:->" + nombre);
        var totalparametros = 0;
        for (var x = 0; x < entorno.ListaParametrosFuncion.length; x++) {
            console.log("----");
            console.log("parametro Nombre->" + x + " " + entorno.ListaParametrosFuncion[x].Nombre);
            console.log("parametro Tipo ->" + x + " " + entorno.ListaParametrosFuncion[x].TipoDato);
            console.log("parametro C3D->" + x + " " + entorno.ListaParametrosFuncion[x].CadenaDe3D);
            totalparametros += 1;
        }
        //verificando los tipos xD
        if (entorno.existefuncion2(nombre, totalparametros) == true) {
            for (var x = 0; x < totalparametros; x++) {
                var Par1 = entorno.existefuncion3(nombre, totalparametros);
                console.log("VAMOOOOOOOOOOS->" + Par1);
                var Par2 = x;
                var TipoResultante = entorno.buscarParametros(Par1, Par2);
                var TipoParametro = entorno.ListaParametrosFuncion[x].TipoDato;
                console.log("Dejo TP->" + TipoParametro + "<-TR->" + TipoResultante);
                if ((TipoResultante.toUpperCase() == "CADENA" || TipoResultante.toUpperCase() == "STRING")) {
                    if (!(TipoParametro.toUpperCase() == "STRING" || TipoParametro.toUpperCase() == "CADENA")) {
                        alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                        entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                        entorno.LosErrores += "<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                        entorno.LosErrores += "<td>" + "Parametro: " + (x + 1) + " en funcion" + nombre + " no coincide" + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }
                }
                else if ((TipoResultante.toUpperCase() == "INTEGER" || TipoResultante.toUpperCase() == "ENTERO")) {
                    if (!(TipoParametro.toUpperCase() == "INTEGER" || TipoParametro.toUpperCase() == "ENTERO"
                        || TipoParametro.toUpperCase() == "CHAR" || TipoParametro.toUpperCase() == "CARACTER")) {
                        alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                        entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                        entorno.LosErrores += "<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                        entorno.LosErrores += "<td>" + "Parametro: " + (x + 1) + " en funcion" + nombre + " no coincide" + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }
                }
                else if ((TipoResultante.toUpperCase() == "CHAR" || TipoResultante.toUpperCase() == "CARACTER")) {
                    if (!(TipoParametro.toUpperCase() == "CHAR" || TipoParametro.toUpperCase() == "CARACTER")) {
                        alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                        entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                        entorno.LosErrores += "<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                        entorno.LosErrores += "<td>" + "Parametro: " + (x + 1) + " en funcion" + nombre + " no coincide" + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }
                }
                else if ((TipoResultante.toUpperCase() == "DOUBLE" || TipoResultante.toUpperCase() == "DECIMAL")) {
                    if (!(TipoParametro.toUpperCase() == "INTEGER" || TipoParametro.toUpperCase() == "ENTERO"
                        || TipoParametro.toUpperCase() == "CHAR" || TipoParametro.toUpperCase() == "CARACTER"
                        || TipoParametro.toUpperCase() == "DOUBLE" || TipoParametro.toUpperCase() == "DECIMAL")) {
                        alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                        entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                        entorno.LosErrores += "<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                        entorno.LosErrores += "<td>" + "Parametro: " + (x + 1) + " en funcion" + nombre + " no coincide" + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }
                }
            }
            console.log("Sus parametros: fin" + totalparametros);
            if (entorno.existefuncion2(nombre, totalparametros) == true) {
                var NombreCall = entorno.existefuncion3(nombre, totalparametros);
                entorno.numero += 1;
                entorno.direccion += "## CAMBIO DE AMBITO SIMULADO\n";
                //entorno.direccion += "t" + entorno.numero +  " = P" + " + " + entorno.tamaniofuncion(nombre,totalparametros)+ ";\n\n"
                entorno.direccion += "t" + entorno.numero + " = P" + " + " + entorno.VariableVariablesFUNCION.length + ";\n";
                var auxi1 = "t" + entorno.numero;
                for (var y = 0; y < totalparametros; y++) {
                    if (entorno.ListaParametrosFuncion[y].Nombre == "Caracter") {
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = entorno.ListaParametrosFuncion[y].CadenaDe3D.charCodeAt(1).toString();
                    }
                    if (entorno.ListaParametrosFuncion[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion[y].CadenaDe3D.toUpperCase() == "FALSE") {
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = "0";
                    }
                    if (entorno.ListaParametrosFuncion[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion[y].CadenaDe3D.toUpperCase() == "TRUE") {
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = "1";
                    }
                    if (entorno.ListaParametrosFuncion[y].Nombre == "Aritmetica" && entorno.ListaParametrosFuncion[y].TipoDato.toUpperCase() == "BOOLEANO") {
                        var auxi1x = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("t", "");
                        var auxi12 = +auxi1x - 1;
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = "t" + auxi12.toString();
                    }
                    if (entorno.ListaParametrosFuncion[y].Nombre == "Cadena") {
                        entorno.numero += 1;
                        entorno.direccion = entorno.direccion + "##convirtiendo\n";
                        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
                        //entorno.ListaParametrosFuncion[y].CadenaDe3D =  "t" + entorno.numero;
                        var auxiliar1 = "t" + entorno.numero;
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("\"", "");
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("\"", "");
                        for (var x = 0; x < entorno.ListaParametrosFuncion[y].CadenaDe3D.length; x++) {
                            entorno.direccion = entorno.direccion + "Heap[H] = " + entorno.ListaParametrosFuncion[y].CadenaDe3D.charCodeAt(x).toString() + ";\n";
                            entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        }
                        entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
                        entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = auxiliar1;
                        entorno.direccion = entorno.direccion + "##fin convirtiendo\n";
                    }
                    //entorno.numero = entorno.numero +1;
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = " + auxi1 + " + " + (y) + ";\n";
                    entorno.direccion += "stack[" + "t" + (entorno.numero) + "] = " + entorno.ListaParametrosFuncion[y].CadenaDe3D + ";\n";
                }
                entorno.direccion += "## CAMBIO DE AMBITO REAL\n";
                //entorno.direccion +=  "P = P + " + entorno.tamaniofuncion(nombre,totalparametros) + ";\n";
                entorno.direccion += "P = P + " + entorno.VariableVariablesFUNCION.length + ";\n";
                entorno.direccion += "call " + NombreCall.replace("funcionbayron_", "") + ";\n";
                entorno.direccion += "P = P - " + entorno.VariableVariablesFUNCION.length + ";\n";
            }
            else {
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                //alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                //entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores += "<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
                entorno.LosErrores += "<td>" + "Funcion: " + nombre + " NO Existe" + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
            entorno.ListaParametrosFuncion.splice(0, entorno.ListaParametrosFuncion.length);
            var nuevo = new Nodo("LLamada_Funciones");
            nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
            nuevo.NumeroDeNodo = this.NumeroDeNodo;
            return nuevo;
        }
        var nuevo = new Nodo("LLamada_Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return LLamadas;
}(NodoAbstracto));
