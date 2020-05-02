var simbolo = /** @class */ (function () {
    /*
    constructor(){
        this.nombre = "";
        this.ambito = "";
        this.funcion = "";
        this.tamanio = 0;
        this.posicion = 0;
        this.tipo = "";
        this.posicionT = "";
    }*/
    function simbolo(nombre1, ambito1, funcion1, tamanio1, posicion1, tipo1, posicionT1, parametros) {
        this.nombre = nombre1;
        this.ambito = ambito1;
        this.funcion = funcion1;
        this.tamanio = tamanio1;
        this.posicion = posicion1;
        this.tipo = tipo1;
        this.posicionT = posicionT1;
        this.parametros = parametros;
    }
    simbolo.prototype.simbolo_nombre = function () {
        return this.nombre;
    };
    simbolo.prototype.simbolo_ambito = function () {
        return this.ambito;
    };
    simbolo.prototype.simbolo_funcion = function () {
        return this.funcion;
    };
    simbolo.prototype.simbolo_tamanio = function () {
        return this.tamanio;
    };
    simbolo.prototype.simbolo_posicion = function () {
        return this.posicion;
    };
    simbolo.prototype.simbolo_tipo = function () {
        return this.tipo;
    };
    simbolo.prototype.simbolo_PT = function () {
        return this.posicionT;
    };
    simbolo.prototype.simbolo_Parametros = function () {
        return this.parametros;
    };
    return simbolo;
}());
