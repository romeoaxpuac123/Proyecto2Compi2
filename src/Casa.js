var Casa = /** @class */ (function () {
    function Casa() {
        this.paso = 0;
        this.valordep = 0;
        this.Tipo = new Array();
        this.Variable = new Array();
        this.Tes = new Array();
        this.Salida = "";
        this.TipoVariables = new Array();
        this.VariableVariables = new Array();
        this.TesVariables = new Array();
        this.TipoVariablesFUNCION = new Array();
        this.VariableVariablesFUNCION = new Array();
        this.TesVariablesFUNCION = new Array();
        this.tamanioentorno = 0;
        this.LosErrores = "";
        // Le doy un valor
        this.ListaParametrosFuncion = new Array();
        this.ListaParametrosFuncion2 = new Array();
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
        document.getElementById("Reporte_Simbolos").innerHTML = "";
        this.Salida = "<!DOCTYPE html><html lang=\"en\"><head>	<meta charset=\"UTF-8\">	<title>Dando estilo a tablas</title><link rel=\"stylesheet\" type=\"text/css\" href=\"tablas.css\"></head><body><div id=\"main-container\">";
        this.Salida += "<table><thead><tr><th>IDENTIFICADOR</th><th>ROL</th><th>TIPO</th><th>TAMANIO</th><th>AMBITO</th><th>POSICION</th></tr></thead>";
        var elcoso = "";
        var elcoso2 = "";
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            console.log("Nombre->" + this.SIMBOLOS[i].nombre +
                " Tipo->" + this.SIMBOLOS[i].tipo +
                " Ambito->" + this.SIMBOLOS[i].ambito +
                " Nombre_Funcion->" + this.SIMBOLOS[i].funcion +
                " Tamanio_Funcion->" + this.SIMBOLOS[i].tamanio +
                " Valor_T->" + this.SIMBOLOS[i].posicionT +
                " posicion_en_funcion-> " + this.SIMBOLOS[i].posicion);
            var Rol = "VARIABLE";
            if (this.SIMBOLOS[i].posicionT == "NO TIENE") {
                Rol = "FUNCION";
            }
            elcoso = "";
            elcoso = "<tr>" + "<td>" + this.SIMBOLOS[i].nombre + "</td>"
                + "<td>" + Rol + "</td>"
                + "<td>" + this.SIMBOLOS[i].tipo + "</td>"
                + "<td>" + this.SIMBOLOS[i].tamanio + "</td>"
                + "<td>" + this.SIMBOLOS[i].ambito + "</td>"
                + "<td>" + this.SIMBOLOS[i].posicion + "</td>"
                + "</tr>";
            elcoso2 += elcoso;
        }
        this.Salida += elcoso2 + "</table></div></body></html>";
        //document.getElementById('Simbolos').innerHTML = this.Salida;	
        document.getElementById("Reporte_Simbolos").innerHTML = this.Salida;
        this.Salida = "";
    };
    Casa.prototype.Tipofuncion = function (nombre) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre) {
                return this.SIMBOLOS[i].tipo;
            }
        }
        return "NOP";
    };
    Casa.prototype.existefuncion = function (nombre) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre) {
                return true;
            }
        }
        return false;
    };
    Casa.prototype.buscarParametros = function (nombre, numparametro) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].funcion == nombre && this.SIMBOLOS[i].posicion == numparametro
                && this.SIMBOLOS[i].posicionT != "NO TIENE") {
                return this.SIMBOLOS[i].tipo;
            }
        }
        return "nullXD";
    };
    Casa.prototype.existefuncion2 = function (nombre, parametros) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros == parametros) {
                return true;
            }
        }
        return false;
    };
    Casa.prototype.tamaniofuncion = function (nombre, parametros) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros) {
                return this.SIMBOLOS[i].tamanio;
            }
        }
        return 0;
    };
    Casa.prototype.existefuncion3 = function (nombre, parametros) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros) {
                return this.SIMBOLOS[i].funcion;
            }
        }
        return "";
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
    Casa.prototype.FuncionExistenteBayron = function (nombre) {
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].simbolo_funcion() == nombre) {
                return true;
            }
        }
        return false;
    };
    Casa.prototype.FuncionTdeVariable = function (nombreFuncion, nombreParametro) {
        var Resutlado = "NoTiene";
        for (var i = 0; i < this.SIMBOLOS.length; i++) {
            if (this.SIMBOLOS[i].funcion == nombreFuncion && this.SIMBOLOS[i].nombre == nombreParametro) {
                return this.SIMBOLOS[i].posicionT;
            }
        }
        return Resutlado;
    };
    return Casa;
}());
