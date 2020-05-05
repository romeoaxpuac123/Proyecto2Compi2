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
        var ElvalordeP = "t" + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        //public TipoVariables =  new Array();
        //public VariableVariables = new Array();
        //public TesVariables = new Array();
        for (var i = 0; i < entorno.VariableVariables.length; i++) {
            for (var x = 0; x < entorno.VariableVariablesFUNCION.length; x++) {
                if (entorno.VariableVariables[i].toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()) {
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                    break;
                }
            }
            for (var x = 0; x < entorno.Variable.length; x++) {
                if (entorno.VariableVariables[i].toUpperCase() == entorno.Variable[x].toUpperCase()) {
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n";
                    break;
                }
            }
            //entorno.TipoVariables.push(ElTipo);
            //console.log("-----------");
            //console.log("La variable tiene Tipoe de:->" + ElTipo);
            //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
            //console.log("El valor de P-> " + ElvalordeP);
            //console.log("Posición en la funcion->" + (Tamanio+i+1));
            //console.log("------------");
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" + entorno.VariableVariables[i] + "\n";
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
            entorno.numero += 1;
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + ElvalordeP + " + " + (Tamanio + i) + ";\n";
            //entorno.TesVariables.push("t" + entorno.numero );
            entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero - 1) + ";\n";
            entorno.TesVariablesFUNCION.push("t" + entorno.numero);
            entorno.TipoVariablesFUNCION.push(ElTipo);
            entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
        }
        entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
        //entorno.TipoVariables.splice(0,entorno.TipoVariables.length);
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Variables;
}(NodoAbstracto));
