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
var Imprimir = /** @class */ (function (_super) {
    __extends(Imprimir, _super);
    function Imprimir() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imprimir.prototype.Imprimir = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Imprimir.prototype.Ejecutar = function (entorno) {
        console.log("Entro a Imprimir");
        console.log("TOALT->" + entorno.numero);
        var TipoAImprimir = "";
        console.log(this.Hijos[0].CadenaDe3D);
        console.log("DG->" + this.Hijos[0].TipoDato);
        var respuesta = this.Hijos[0].Hijos[0].Nombre;
        if (this.Hijos[0].TipoDato == "Entero") {
            TipoAImprimir = "\"%i\", ";
            document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n" + "print( \"%c\",10);" + "\n";
        }
        else if (this.Hijos[0].TipoDato == "Decimal") {
            TipoAImprimir = "\"%d\", ";
            document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n" + "print( \"%c\",10);" + "\n";
        }
        else if (this.Hijos[0].TipoDato == "Cadena") {
            entorno.etiquetas += 1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas += 1;
            var Etiqueta2 = entorno.etiquetas;
            var ResuladoSalida = "L" + Etiqueta2 + ":\n";
            entorno.numero += 1;
            ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + this.Hijos[0].CadenaDe3D + "];\n";
            ResuladoSalida = ResuladoSalida + "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
            ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
            ResuladoSalida = ResuladoSalida + this.Hijos[0].CadenaDe3D + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
            ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
            ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
            document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida + "print( \"%c\",10);" + "\n";
            /*var respuestax = "t" + entorno.numero + " = H;\n";
                for(var i = 0; i < respuesta.length ; i++){
                    respuestax = respuestax + "Heap[H] = " + respuesta.charCodeAt(i).toString() + ";\n";
                    respuestax = respuestax + "H = H + 1;\n";
                }
                respuestax  = respuestax + "Heap[H] = -1;\nH = H + 1;\n";
                
                entorno.etiquetas +=1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta2 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta3 = entorno.etiquetas;
                respuestax  = respuestax + "L" + Etiqueta3 + ":\n";
                entorno.numero += 1;
                respuestax  = respuestax + "t" + entorno.numero + " = Heap[t" + (entorno.numero - 1) + "];\n";
                respuestax = respuestax + "if (t" + entorno.numero + " <> -1) goto L" + Etiqueta1 + ";\n";
                respuestax = respuestax + "goto L" + Etiqueta2 + ";\n";
                respuestax = respuestax + "L" +Etiqueta1 + ":\n";
                respuestax = respuestax + "print(\"%c\",t" + entorno.numero + ");\n";
                respuestax = respuestax + "t" + (entorno.numero-1) + " = t" +  (entorno.numero-1) + " + 1;\n";
                respuestax = respuestax + "goto L" + Etiqueta3 + ";\n";
                respuestax = respuestax +"L" + Etiqueta2 + ":\nprint(\"%c\",10);\n";
                document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuestax + "\n";
                */
        }
        document.getElementById("salida").innerHTML = document.getElementById("salida").value + respuesta + "\n";
        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    };
    return Imprimir;
}(NodoAbstracto));
