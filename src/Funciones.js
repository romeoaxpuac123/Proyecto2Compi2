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
var Funciones = /** @class */ (function (_super) {
    __extends(Funciones, _super);
    function Funciones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Funciones.prototype.Funciones = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Funciones.prototype.Ejecutar = function (entorno) {
        console.log("-----------ENTRO A FUNCIONES------");
        var nombre = this.Hijos[0].Nombre;
        var TParametros = entorno.Variable.length;
        var totaltmanio = entorno.VariableVariablesFUNCION.length + entorno.Variable.length;
        console.log("La funcion tiene nombre de:->" + nombre);
        if (entorno.existefuncion(nombre) == false) {
            //no existe la funcion
            entorno.etiquetas += 1;
            var Etiqueta1x = entorno.etiquetas;
            if (TParametros == 0) {
                entorno.anadirSimbolo(nombre, "global", "global", 0, 0, "funcion", "t" + entorno.numero, TParametros);
                console.log("SIMBOLOS--->");
                entorno.mostrarSimboos();
                console.log("fin simbolos");
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + " begin\n\n\t" + entorno.direccion.replace(/\n/g, '\n\t');
                entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
            }
            else {
                console.log("TIENE ESTOS PARAMETROAS->");
                //entorno.numero +=1;
                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length);
                console.log("->" + entorno.Variable.length);
                console.log("->" + entorno.Tes.length);
                console.log("fin vacios");
                var Auxiliar = "t" + entorno.valordep;
                var Parametrosc3d = Auxiliar + " = P;\n";
                for (var i = 0; i < entorno.Variable.length; i++) {
                    console.log(entorno.Variable[i] + "->" + entorno.Tipo[i]);
                    var Parametrosc3dx = "## PARAMETRO->" + entorno.Variable[i] + "\n";
                    //entorno.numero +=1;
                    Parametrosc3dx = Parametrosc3dx + entorno.Tes[i] + " = " + Auxiliar + " + " + i + ";\n";
                    // entorno.numero +=1;
                    // Parametrosc3d = Parametrosc3d + "t" + entorno.numero + " = stack[t" + (entorno.numero-1) + "];\n\n";
                    Parametrosc3d = Parametrosc3d + Parametrosc3dx;
                    entorno.anadirSimbolo(entorno.Variable[i], "local", entorno.nombreentorno, 0, i, entorno.Tipo[i], entorno.Tes[i], 0);
                }
                console.log("salida de variables->");
                //añadiendo las variables a la tabla de simbolos
                for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
                    console.log(entorno.VariableVariablesFUNCION[i] + "->" + entorno.TipoVariablesFUNCION[i]);
                    if (entorno.TipoVariablesFUNCION[i].toUpperCase() == "GLOBAL") {
                    }
                    else {
                        entorno.anadirSimbolo(entorno.VariableVariablesFUNCION[i], "local", entorno.nombreentorno, 0, (entorno.Variable.length + i), entorno.TipoVariablesFUNCION[i], entorno.TesVariablesFUNCION[i], 0);
                    }
                }
                console.log("FIN TIENE ESTOS PARAMETROAS->");
                Parametrosc3d = Parametrosc3d.replace(/\n/g, '\n\t') + "\n\n";
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + " begin\n\n\t" + Parametrosc3d + "\t" + entorno.direccion.replace(/\n/g, '\n\t');
                entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
                entorno.Tipo.splice(0, entorno.Tipo.length);
                entorno.Variable.splice(0, entorno.Variable.length);
                entorno.Tes.splice(0, entorno.Tes.length);
                entorno.TipoVariables.splice(0, entorno.TipoVariables.length);
                entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
                entorno.TesVariables.splice(0, entorno.TesVariables.length);
                entorno.TipoVariablesFUNCION.splice(0, entorno.TipoVariablesFUNCION.length);
                entorno.VariableVariablesFUNCION.splice(0, entorno.VariableVariablesFUNCION.length);
                entorno.TesVariablesFUNCION.splice(0, entorno.TesVariablesFUNCION.length);
                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length);
                console.log("->" + entorno.Variable.length);
                console.log("->" + entorno.Tes.length);
                console.log("fin vacios");
                entorno.anadirSimbolo(nombre, "global", "global", totaltmanio, 0, "funcion", "t" + entorno.numero, TParametros);
                console.log("SIMBOLOS--->");
                entorno.mostrarSimboos();
                console.log("fin simbolos");
            }
        }
        else {
            //si existe la funcion
            if (entorno.totalparametros(nombre, TParametros) == true) {
                //ya existe una función con la misma cantidad de parametros reportar error
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            }
            else {
                //no existe una función con la misma cantidad de parametros
            }
        }
        entorno.tamanioentorno = 0;
        var nuevo = new Nodo("Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Funciones;
}(NodoAbstracto));
