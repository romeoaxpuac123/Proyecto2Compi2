var Casa = /** @class */ (function () {
    function Casa() {
        this.paso = 0;
        this.valordep = 0;
        this.Tipo = new Array();
        this.Variable = new Array();
        this.Tes = new Array();
        this.TipoVariables = new Array();
        this.VariableVariables = new Array();
        this.TesVariables = new Array();
        this.TipoVariablesFUNCION = new Array();
        this.VariableVariablesFUNCION = new Array();
        this.TesVariablesFUNCION = new Array();
        this.tamanioentorno = 0;
        // Le doy un valor
        this.nombreentorno = "Global";
        this.direccion = "";
        this.numero = 0;
        this.etiquetas = 0;
        this.paso = 0;
        this.valordep = 0;
        this.SIMBOLOS = new Array();
    }
    Casa.prototype.anadirSimbolo = function (nombre1, ambito1, funcion1, tamanio1, posicion1, tipo1, posicionT1, parametros) {
        var NuevoSimbolo = new simbolo(nombre1, ambito1, funcion1, tamanio1, posicion1, tipo1, posicionT1, parametros);
        this.SIMBOLOS.push(NuevoSimbolo);
    };
    Casa.prototype.mostrarSimboos = function () {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            console.log("Nombre->" + this.SIMBOLOS[i].nombre +
                " Tipo->" + this.SIMBOLOS[i].tipo +
                " Ambito->" + this.SIMBOLOS[i].ambito +
                " Nombre_Funcion->" + this.SIMBOLOS[i].funcion +
                " Tamanio_Funcion->" + this.SIMBOLOS[i].tamanio +
                " Valor_T->" + this.SIMBOLOS[i].posicionT +
                " posicion_en_funcion-> " + this.SIMBOLOS[i].posicion);
        }
    };
    Casa.prototype.existefuncion = function (nombre) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre) {
                return true;
            }
        }
        return false;
    };
    Casa.prototype.totalparametros = function (nombre, parametros) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros == parametros) {
                return true;
            }
        }
        return false;
    };
    Casa.prototype.totalparametrosFuncion = function (nombre) {
        var total = 0;
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre) {
                return this.SIMBOLOS[i].simbolo_tamanio();
            }
        }
        return total;
    };
    return Casa;
}());
