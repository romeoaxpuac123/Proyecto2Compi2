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
        var C3dT = "";
        if (this.Hijos[0].TipoDato == "ID") {
            for (var i = 0; i < entorno.VariableVariablesFUNCION.length; i++) {
                if (this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCION[i]) {
                    TipoAImprimir = entorno.TipoVariablesFUNCION[i];
                    C3dT = entorno.TesVariablesFUNCION[i];
                }
            }
            console.log("imprmir tipo->" + TipoAImprimir);
            if (TipoAImprimir.toUpperCase() == "INTEGER") {
                TipoAImprimir = "\"%i\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
            }
            else if (TipoAImprimir.toUpperCase() == "DOUBLE") {
                TipoAImprimir = "\"%d\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
            }
            else if (TipoAImprimir.toUpperCase() == "CHAR") {
                TipoAImprimir = "\"%c\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
            }
            else if (TipoAImprimir.toUpperCase() == "BOOLEAN") {
                if ((this.Hijos[0].CadenaDe3D == "VERDADERO") || (this.Hijos[0].CadenaDe3D == "FALSO")) {
                    var ResuladoSalida = "";
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = " + this.Hijos[0].CadenaDe3D + ";\n";
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    ResuladoSalida = ResuladoSalida + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n";
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = H;\n";
                    var auxp = "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    ResuladoSalida = ResuladoSalida + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    ResuladoSalida = ResuladoSalida + "Heap[H] = -1;\nH = H + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = H;\n";
                    ResuladoSalida = ResuladoSalida + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    ResuladoSalida = ResuladoSalida + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.etiquetas += 1;
                    var Etiqueta1x = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2x = entorno.etiquetas;
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "##IMPRIMIENDO UN BOOL puta vida\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2x + ":\n";
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp + " = " + auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2x + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1x + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
                }
                else {
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.numero += 1;
                    var ResuladoSalida = "##IMPRIMIENDO UN BOOL \n";
                    var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                    var auxp = "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp + " = " + auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
                }
            }
            else if (TipoAImprimir.toUpperCase() == "STRING") {
                entorno.etiquetas += 1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas += 1;
                var Etiqueta2 = entorno.etiquetas;
                entorno.numero += 1;
                var ResuladoSalida = "##IMPRIMIENDO UN STRING-> \n";
                var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                var auxp = "t" + entorno.numero;
                ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                entorno.numero += 1;
                ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                ResuladoSalida = ResuladoSalida + "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                ResuladoSalida = ResuladoSalida + auxp + " = " + auxp + " + 1;\n";
                ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
            }
            else {
                for (var i = 0; i < entorno.Variable.length; i++) {
                    if (this.Hijos[0].CadenaDe3D == entorno.Variable[i]) {
                        TipoAImprimir = entorno.Tipo[i];
                        C3dT = entorno.Tes[i];
                    }
                }
                //entorno.numero += 1;
                //entorno.direccion = entorno.direccion + "t" + entorno.numero + " = stack[" + C3dT + "];\n"; ;
                //C3dT = "t" + entorno.numero ;
                if (TipoAImprimir.toUpperCase() == "INTEGER") {
                    TipoAImprimir = "\"%i\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
                }
                else if (TipoAImprimir.toUpperCase() == "DOUBLE") {
                    TipoAImprimir = "\"%d\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
                }
                else if (TipoAImprimir.toUpperCase() == "CHAR") {
                    TipoAImprimir = "\"%c\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT + "]";
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + auxiliar + ";\n" + "print( " + TipoAImprimir + "t" + entorno.numero + " );\n" + "print( \"%c\",10);" + "\n";
                }
                else if (TipoAImprimir.toUpperCase() == "BOOLEAN") {
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = " + "stack[" + C3dT + "];\n";
                    var el_aux = "t" + entorno.numero;
                    entorno.direccion += "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n";
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = H;\n";
                    //var C3D1 = "t" +  entorno.numero;
                    entorno.direccion += "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    entorno.direccion += "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    entorno.direccion += "Heap[H] = -1;\nH = H + 1;\n";
                    //parte 3
                    entorno.direccion += "goto L" + Etiqueta2 + ";\n";
                    entorno.direccion += "L" + Etiqueta1 + ":\n";
                    entorno.direccion += "t" + entorno.numero + " = H;\n";
                    entorno.direccion += "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    entorno.direccion += "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    entorno.direccion += "L" + Etiqueta2 + ":\n";
                    entorno.etiquetas += 1;
                    var Etiqueta1x = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2x = entorno.etiquetas;
                    entorno.direccion += "L" + Etiqueta2x + ":\n";
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = Heap[t" + (entorno.numero - 1) + "];\n";
                    entorno.direccion += "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1x + ";\n";
                    entorno.direccion += "print( \"%c\",t" + entorno.numero + ");\n";
                    entorno.direccion += "t" + (entorno.numero - 1) + " = t" + (entorno.numero - 1) + " + 1;\n";
                    entorno.direccion += "goto L" + Etiqueta2x + ";\n";
                    entorno.direccion += "L" + Etiqueta1x + ":\n";
                    entorno.direccion = entorno.direccion + "print( \"%c\",10);" + "\n";
                }
                else if (TipoAImprimir.toUpperCase() == "STRING") {
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.numero += 1;
                    var ResuladoSalida = "##IMPRIMIENDO UN STRING-> \n";
                    var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                    var auxp = "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.numero += 1;
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" + entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp + " = " + auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
                }
            }
        }
        else if (this.Hijos[0].TipoDato == "Entero") {
            TipoAImprimir = "\"%i\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n" + "print( \"%c\",10);" + "\n";
        }
        else if (this.Hijos[0].TipoDato == "Decimal") {
            TipoAImprimir = "\"%d\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n" + "print( \"%c\",10);" + "\n";
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
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
        }
        else if (this.Hijos[0].TipoDato == "Booleano") {
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
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion + ResuladoSalida + "print( \"%c\",10);" + "\n";
        }
        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +entorno.direccion + "\n";
        //entorno.direccion = ""; 
        document.getElementById("salida").innerHTML = document.getElementById("salida").value + respuesta + "\n";
        //entorno.direccion = entorno.direccion + respuesta + "\n";
        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    };
    return Imprimir;
}(NodoAbstracto));
