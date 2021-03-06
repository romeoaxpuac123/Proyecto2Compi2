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
var AccesoV = /** @class */ (function (_super) {
    __extends(AccesoV, _super);
    function AccesoV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccesoV.prototype.AccesoV = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    AccesoV.prototype.Ejecutar = function (entorno) {
        entorno.direccion += "##llamando a un vector\n";
        var LaT = "";
        var Elvector = this.Hijos[0].Nombre;
        var ElTipo = "";
        var bandera = "false";
        for (var i = 0; i < entorno.VariableVariablesFUNCIONVECTOR.length; i++) {
            if (Elvector.toUpperCase() == entorno.VariableVariablesFUNCIONVECTOR[i].toUpperCase()) {
                LaT = entorno.TesVariablesFUNCIONVECTOR[i];
                ElTipo = entorno.TipoVariablesFUNCIONVECTOR[i];
                bandera = "true";
            }
        }
        if (bandera == "false") {
            alert('Este es un semantico: ' + "No Existe El vector" + Elvector + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n";
            entorno.LosErrores += "<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>";
            entorno.LosErrores += "<td>" + "No Existe El vector " + Elvector + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = " + LaT + ";\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = " + "t" + (entorno.numero - 1) + " + " + this.Hijos[1].CadenaDe3D + ";\n";
        entorno.numero += 1;
        entorno.direccion += "t" + entorno.numero + " = " + " Heap[t" + (entorno.numero - 1) + "];\n";
        var TipoResultante = "";
        if (ElTipo.toUpperCase() == "STRING" || ElTipo.toUpperCase() == "CADENA") {
            TipoResultante = "Cadena";
        }
        else if (ElTipo.toUpperCase() == "ENTERO" || ElTipo.toUpperCase() == "INTEGER") {
            TipoResultante = "Entero";
        }
        else if (ElTipo.toUpperCase() == "DECIMAL" || ElTipo.toUpperCase() == "DOUBLE") {
            TipoResultante = "Decimal";
        }
        else if (ElTipo.toUpperCase() == "CHAR" || ElTipo.toUpperCase() == "CARACTER") {
            TipoResultante = "Caracter";
        }
        else if (ElTipo.toUpperCase() == "BOOLEAN" || ElTipo.toUpperCase() == "BOOLEANO") {
            TipoResultante = "Booleano";
        }
        var nuevo = new Nodo(TipoResultante);
        var nuevovalor = new Nodo("100");
        nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = TipoResultante;
        nuevo.CadenaDe3D = "t" + entorno.numero;
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return AccesoV;
}(NodoAbstracto));
