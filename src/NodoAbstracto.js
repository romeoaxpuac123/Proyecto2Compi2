var NodoAbstracto = /** @class */ (function () {
    function NodoAbstracto(name) {
        this.MiCadena = "";
        this.Nombre = name;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.TipoDato = "";
        this.Hijos = new Array();
        this.CadenaDe3D = "";
        this.NumeroDeNodo = 0;
        this.CadenaDot = "";
        this.ListaSentencias = new Array();
    }
    return NodoAbstracto;
}());
