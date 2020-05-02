var Casa = /** @class */ (function () {
    function Casa() {
        // Le doy un valor
        this.paso = 0;
        this.direccion = "";
        this.numero = 0;
        this.etiquetas = 0;
        this.paso = 0;
        this.SIMBOLOS = new Array();
    }
    Casa.prototype.anadirSimbolo = function (nombre1, ambito1, funcion1, tamanio1, posicion1, tipo1, posicionT1, parametros) {
        var NuevoSimbolo = new simbolo(nombre1, ambito1, funcion1, tamanio1, posicion1, tipo1, posicionT1, parametros);
        this.SIMBOLOS.push(NuevoSimbolo);
    };
    Casa.prototype.mostrarSimboos = function () {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            console.log("Nombre->" + this.SIMBOLOS[i].nombre + " Tipo->" + this.SIMBOLOS[i].tipo);
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
    return Casa;
}());
