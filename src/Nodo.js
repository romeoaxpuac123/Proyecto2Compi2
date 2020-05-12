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
var Nodo = /** @class */ (function (_super) {
    __extends(Nodo, _super);
    function Nodo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nodo.prototype.Nodo = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
        this.CadenaDe3D = val;
    };
    Nodo.prototype.Ejecutar = function (entorno) {
        if (this.Nombre == "FuncionRetornoXD") {
            console.log("-----------ENTRO A return funcionesS------");
            var nombre = this.Hijos[0].Nombre;
            var TParametros = 0;
            console.log("La funcion  tiene nombre de:->" + nombre);
            console.log("Sus parametros:->" + nombre);
            var totalparametros = 0;
            for (var x = 0; x < entorno.ListaParametrosFuncion2.length; x++) {
                console.log("----");
                console.log("parametro Nombre->" + x + " " + entorno.ListaParametrosFuncion2[x].Nombre);
                console.log("parametro Tipo ->" + x + " " + entorno.ListaParametrosFuncion2[x].TipoDato);
                console.log("parametro C3D->" + x + " " + entorno.ListaParametrosFuncion2[x].CadenaDe3D);
                totalparametros += 1;
            }
            if (entorno.existefuncion2(nombre, totalparametros) == true) {
                for (var x = 0; x < totalparametros; x++) {
                    var Par1 = entorno.existefuncion3(nombre, totalparametros);
                    console.log("VAMOOOOOOOOOOS->" + Par1);
                }
            }
            var NombreGlobal = "";
            if (entorno.existefuncion2(nombre, totalparametros) == true) {
                var NombreCall = entorno.existefuncion3(nombre, totalparametros);
                NombreGlobal = entorno.existefuncion3(nombre, totalparametros);
                entorno.numero += 1;
                entorno.direccion += "## CAMBIO DE AMBITO SIMULADO\n";
                entorno.direccion += "t" + entorno.numero + " = P" + " + " + entorno.tamaniofuncion(nombre, totalparametros) + ";\n\n";
                var auxi1 = "t" + entorno.numero;
                for (var y = 0; y < totalparametros; y++) {
                    if (entorno.ListaParametrosFuncion2[y].Nombre == "Caracter") {
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = entorno.ListaParametrosFuncion2[y].CadenaDe3D.charCodeAt(1).toString();
                    }
                    if (entorno.ListaParametrosFuncion2[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion2[y].CadenaDe3D.toUpperCase() == "FALSE") {
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = "0";
                    }
                    if (entorno.ListaParametrosFuncion2[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion2[y].CadenaDe3D.toUpperCase() == "TRUE") {
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = "1";
                    }
                    if (entorno.ListaParametrosFuncion2[y].Nombre == "Aritmetica" && entorno.ListaParametrosFuncion2[y].TipoDato.toUpperCase() == "BOOLEANO") {
                        var auxi1x = entorno.ListaParametrosFuncion2[y].CadenaDe3D.replace("t", "");
                        var auxi12 = +auxi1x - 1;
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = "t" + auxi12.toString();
                    }
                    if (entorno.ListaParametrosFuncion2[y].Nombre == "Cadena") {
                        entorno.numero += 1;
                        entorno.direccion = entorno.direccion + "##convirtiendo\n";
                        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
                        //entorno.ListaParametrosFuncion[y].CadenaDe3D =  "t" + entorno.numero;
                        var auxiliar1 = "t" + entorno.numero;
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = entorno.ListaParametrosFuncion2[y].CadenaDe3D.replace("\"", "");
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = entorno.ListaParametrosFuncion2[y].CadenaDe3D.replace("\"", "");
                        for (var x = 0; x < entorno.ListaParametrosFuncion2[y].CadenaDe3D.length; x++) {
                            entorno.direccion = entorno.direccion + "Heap[H] = " + entorno.ListaParametrosFuncion2[y].CadenaDe3D.charCodeAt(x).toString() + ";\n";
                            entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        }
                        entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
                        entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        entorno.ListaParametrosFuncion2[y].CadenaDe3D = auxiliar1;
                        entorno.direccion = entorno.direccion + "##fin convirtiendo\n";
                    }
                    //entorno.numero = entorno.numero +1;
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = " + auxi1 + " + " + (y) + ";\n";
                    entorno.direccion += "stack[" + "t" + (entorno.numero) + "] = " + entorno.ListaParametrosFuncion2[y].CadenaDe3D + ";\n";
                }
                entorno.direccion += "## CAMBIO DE AMBITO REAL\n";
                entorno.direccion += "P = P + " + entorno.tamaniofuncion(nombre, totalparametros) + ";\n";
                entorno.direccion += "call " + NombreCall.replace("funcionbayron_", "") + ";\n";
            }
            else {
                alert('Este es un semantico_: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
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
            var banderax = "false";
            for (var y = 0; y < entorno.VariableVariablesFUNCION.length; y++) {
                if ((NombreGlobal + "return") == entorno.VariableVariablesFUNCION[y]) {
                    banderax = "true";
                }
            }
            if (banderax == "false") {
                var LaTeFinal = entorno.FuncionTdeVariable(NombreGlobal, "return");
                console.log("-->" + LaTeFinal);
                entorno.TesVariablesFUNCION.push(LaTeFinal);
                entorno.TipoVariablesFUNCION.push(entorno.Tipofuncion(nombre));
                entorno.VariableVariablesFUNCION.push(NombreGlobal + "return");
                console.log("FIN DEL FUNCION RETORNO--------->");
            }
            else {
                var LaTeFinal = entorno.FuncionTdeVariable(NombreGlobal, "return");
                for (var y = 0; y < entorno.VariableVariablesFUNCION.length; y++) {
                    if ((NombreGlobal + "return") == entorno.VariableVariablesFUNCION[y]) {
                        entorno.TipoVariablesFUNCION[y] = entorno.Tipofuncion(nombre);
                        entorno.TesVariablesFUNCION[y] = LaTeFinal;
                    }
                }
            }
            entorno.ListaParametrosFuncion2.splice(0, entorno.ListaParametrosFuncion2.length);
            var nuevo = new Nodo("ID");
            var nuevovalor = new Nodo(NombreGlobal + "return");
            nuevo.Hijos[0] = nuevovalor;
            nuevo.TipoDato = "ID";
            nuevo.NumeroDeNodo = this.NumeroDeNodo;
            nuevo.CadenaDe3D = NombreGlobal + "return";
            return nuevo;
        }
        else {
            console.log("EJECUTANDO NODO");
            var Nodo1 = new Nodo(this.Nombre);
            console.log("El Nombre:" + Nodo1.Nombre);
            return Nodo1;
        }
    };
    Nodo.prototype.ModificarCadena = function (cadenax) {
        this.CadenaDe3D = cadenax;
    };
    return Nodo;
}(NodoAbstracto));
