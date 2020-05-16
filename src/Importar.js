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
var Importar = /** @class */ (function (_super) {
    __extends(Importar, _super);
    function Importar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Importar.prototype.Importar = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Importar.prototype.Ejecutar = function (entorno) {
        for (var i = 0; i < entorno.ListaArchivos.length; i++) {
            readTextFile(entorno.ListaArchivos[i]);
        }
        var nuevo = new Nodo("Importar");
        // nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    };
    return Importar;
}(NodoAbstracto));
function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                //alert(allText);
                //gramatica.parse(allText);
            }
        }
    };
    rawFile.send(null);
}
