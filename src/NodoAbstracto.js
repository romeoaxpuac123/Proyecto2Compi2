var NodoAbstracto = /** @class */ (function () {
    function NodoAbstracto(name) {
        this.Nombre = name;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.TipoDato = "";
        this.Hijos = new Array();
    }
    return NodoAbstracto;
}());
