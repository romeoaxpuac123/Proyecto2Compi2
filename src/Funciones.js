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
        console.log("La funcion tiene nombre de:->" + nombre);
        entorno.anadirSimbolo(nombre, "global", "global", 0, 0, "funcion", "t" + entorno.numero, 0);
        console.log("SIMBOLOS--->");
        entorno.mostrarSimboos();
        console.log("fin simbolos");
        entorno.direccion = "proc " + nombre + " begin\n\n\t" + entorno.direccion.replace(/\n/g, '\n\t');
        entorno.direccion = entorno.direccion + "\n" + "end" + "\n";
        var nuevo = new Nodo("Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    };
    return Funciones;
}(NodoAbstracto));
