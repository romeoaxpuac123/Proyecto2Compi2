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
var Aritmetica = /** @class */ (function (_super) {
    __extends(Aritmetica, _super);
    function Aritmetica() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aritmetica.prototype.Aritmetica = function (val) {
        this.Nombre = val;
        this.id = 0;
        this.linea = 0;
        this.columna = 0;
        this.Hijos = new Array();
        this.TipoDato = "";
    };
    Aritmetica.prototype.Ejecutar = function (entorno) {
        console.log("EJECUTANDO NODO ARITMETICA");
        console.log("Casa->" + entorno.numero);
        var Tipo1 = this.Hijos[0].TipoDato;
        var Tipo2 = this.Hijos[2].TipoDato;
        var Operador = this.Hijos[1].Nombre;
        var Valor1 = this.Hijos[0].Hijos[0].Nombre;
        var Valor2 = this.Hijos[2].Hijos[0].Nombre;
        var C3D1 = this.Hijos[0].CadenaDe3D;
        var C3D2 = this.Hijos[2].CadenaDe3D;
        /*DTERMINANDO EL TIPO*/
        var TipoFinal = "";
        if (Tipo1 == "Entero" && Tipo2 == "Entero") {
            TipoFinal = "Entero";
        }
        else if ((Tipo1 == "Decimal" || Tipo1 == "Entero") && Tipo2 == "Decimal") {
            TipoFinal = "Decimal";
        }
        else if ((Tipo1 == "Decimal") && (Tipo2 == "Entero" || Tipo2 == "Decimal")) {
            TipoFinal = "Decimal";
        }
        else if ((Tipo1 == "Entero") && (Tipo2 == "Caracter")) {
            TipoFinal = "Entero";
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Entero")) {
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString();
            C3D1 = Valor1;
        }
        else if ((Tipo1 == "Decimal") && (Tipo2 == "Caracter")) {
            TipoFinal = "Decimal";
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Decimal")) {
            TipoFinal = "Decimal";
            Valor1 = Valor1.charCodeAt(1).toString();
            C3D1 = Valor1;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "+")) {
            TipoFinal = "Cadena";
            Valor1 = Valor1.charAt(1);
            Valor2 = Valor2.charAt(1);
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "-")) {
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString();
            C3D1 = Valor1;
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "*")) {
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString();
            C3D1 = Valor1;
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "/")) {
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString();
            C3D1 = Valor1;
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2;
        }
        else if ((Tipo1 == "Caracter") && (Tipo2 == "Cadena")) {
            TipoFinal = "Cadena";
            Valor1 = Valor1.charAt(1);
            Valor2 = Valor2.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }
        else if ((Tipo1 == "Cadena") && (Tipo2 == "Caracter") && (Operador == "+")) {
            TipoFinal = "Cadena";
            Valor2 = Valor2.charAt(1);
            Valor1 = Valor1.replace("\"", "");
            Valor1 = Valor1.replace("\"", "");
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }
        else if ((Tipo1 == "Cadena") && (Tipo2 == "Cadena")) {
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"", "");
            Valor1 = Valor1.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
        }
        else if ((Tipo1 == "Entero" || Tipo1 == "Decimal") && (Tipo2 == "Cadena")) {
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"", "");
            Valor1 = Valor1.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
        }
        else if ((Tipo1 == "Cadena") && (Tipo2 == "Entero" || Tipo2 == "Decimal")) {
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"", "");
            Valor1 = Valor1.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
            Valor2 = Valor2.replace("\"", "");
        }
        console.log("Valor1: " + Valor1);
        console.log("Valor2: " + Valor2);
        /*OPERANDO SEGÚN EL SIMBOLO*/
        var Total;
        var elid = this.Hijos[0].id;
        var Cadena3dxD = "";
        entorno.numero += 1;
        //this.CadenaDe3D = "t" + entorno.numero;
        //console.log("CODIGO->");
        //console.log("t" + entorno.numero + " = " + C3DFinal + ";")
        //console.log("FINCONSOLE->");
        if (TipoFinal == "Entero" || TipoFinal == "Decimal") {
            switch (Operador) {
                case "+": {
                    Total = +Valor1 + +Valor2;
                    var C3DFinal = C3D1 + " + " + C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";";
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    break;
                }
                case "-": {
                    Total = +Valor1 - +Valor2;
                    var C3DFinal = C3D1 + " - " + C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";";
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    break;
                }
                case "*": {
                    Total = +Valor1 * +Valor2;
                    var C3DFinal = C3D1 + " * " + C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";";
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    break;
                }
                case "/": {
                    Total = +Valor1 / +Valor2;
                    var C3DFinal = C3D1 + " / " + C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";";
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal = "Decimal";
                    break;
                }
                case "%": {
                    Total = +Valor1 % +Valor2;
                    var C3DFinal = C3D1 + " % " + C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";";
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    //TipoFinal  = "Decimal";
                    break;
                }
                case "^^": {
                    //Creacion de etiquetas
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta3 = entorno.etiquetas;
                    //Fin etiquetas
                    //Creacion de Temporales
                    var C3DFinal = "\n\nt" + entorno.numero + " = " + C3D1 + ";\n";
                    var Temporal1 = "t" + entorno.numero;
                    entorno.numero += 1;
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + C3D2 + ";\n";
                    var Temporal2 = "t" + entorno.numero;
                    entorno.numero += 1;
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + "0" + ";\n";
                    var Temporal3 = "t" + entorno.numero;
                    entorno.numero += 1;
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + "1" + ";\n";
                    var Temporal4 = "t" + entorno.numero;
                    //entorno.numero += 1;
                    //fin de Temporales
                    //Creando el for
                    C3DFinal = C3DFinal + "L" + Etiqueta3 + ":		#\n";
                    C3DFinal = C3DFinal + "if(" + Temporal3 + " < " + Temporal2 + ") goto L" + Etiqueta1 + ";\n";
                    C3DFinal = C3DFinal + "goto L" + Etiqueta2 + ";\n";
                    C3DFinal = C3DFinal + "L" + Etiqueta1 + ":		#\n";
                    C3DFinal = C3DFinal + Temporal4 + "=" + Temporal4 + " * " + Temporal1 + ";\n";
                    C3DFinal = C3DFinal + Temporal3 + "=" + Temporal3 + " + " + "1" + ";\n";
                    C3DFinal = C3DFinal + "goto L" + Etiqueta3 + ";\n";
                    C3DFinal = C3DFinal + "L" + Etiqueta2 + ":		#\n";
                    TipoFinal = "Entero";
                    var respuesta = C3DFinal;
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    Total = Math.pow(+Valor1, +Valor2);
                    break;
                }
                default: {
                    //statements; 
                    break;
                }
            }
        }
        else if (TipoFinal == "Cadena") {
            switch (Operador) {
                case "+": {
                    Total = Valor1 + Valor2;
                    var respuesta = "";
                    if (elid == 0) {
                        respuesta = "t" + entorno.numero + " = H;\n";
                        for (var i = 0; i < Valor1.length; i++) {
                            respuesta = respuesta + "Heap[H] = " + Valor1.charCodeAt(i).toString() + ";\n";
                            respuesta = respuesta + "H = H + 1;\n";
                        }
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                        entorno.numero += 1;
                    }
                    respuesta = respuesta + "t" + entorno.numero + " = H;\n";
                    for (var i = 0; i < Valor2.length; i++) {
                        respuesta = respuesta + "Heap[H] = " + Valor2.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n";
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = H;\n";
                    Cadena3dxD = "t" + entorno.numero;
                    entorno.etiquetas += 1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas += 1;
                    var Etiqueta3 = entorno.etiquetas;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    entorno.numero += 1;
                    if (elid == 0) {
                        respuesta = respuesta + "t" + entorno.numero + " = Heap[t" + (entorno.numero - 3) + "];\n";
                    }
                    else {
                        respuesta = respuesta + "t" + entorno.numero + " = Heap[" + this.Hijos[0].CadenaDe3D + "];\n";
                    }
                    respuesta = respuesta + "if (t" + entorno.numero + " == -1) goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "Heap[H] = t" + entorno.numero + ";\n";
                    respuesta = respuesta + "H = H + 1;\n";
                    if (elid == 0) {
                        respuesta = respuesta + "t" + (entorno.numero - 3) + " = t" + (entorno.numero - 3) + " + 1;\n";
                    }
                    else {
                        respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
                    }
                    respuesta = respuesta + "goto L" + Etiqueta1 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n";
                    if (elid == 0) {
                        respuesta = respuesta + "t" + (entorno.numero - 3) + " = t" + (entorno.numero - 2) + ";\n";
                    }
                    else {
                        respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = t" + (entorno.numero - 2) + ";\n";
                    }
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    if (elid == 0) {
                        respuesta = respuesta + "t" + entorno.numero + " = Heap[t" + (entorno.numero - 3) + "];\n";
                    }
                    else {
                        respuesta = respuesta + "t" + entorno.numero + " = Heap[" + this.Hijos[0].CadenaDe3D + "];\n";
                    }
                    respuesta = respuesta + "Heap[H] = t" + entorno.numero + ";\n";
                    respuesta = respuesta + "H = H + 1;\n";
                    if (elid == 0) {
                        respuesta = respuesta + "t" + (entorno.numero - 3) + " = t" + (entorno.numero - 3) + " + 1;\n";
                    }
                    else {
                        respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
                    }
                    respuesta = respuesta + "if (t" + entorno.numero + " <> -1) goto L" + Etiqueta2 + ";\n";
                    elid = 1;
                    document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                }
            }
        }
        //console.log("Tipo1: " + Tipo1);
        //console.log("Tipo2: " + Tipo2);
        //console.log("Simbolo: " + Operador);
        //console.log("Valor1: " + Valor1);
        //console.log("Valor2: " + Valor2);
        // console.log("Total->" + Total);
        var nuevo = new Nodo(TipoFinal);
        var nuevovalor = new Nodo(Total.toString());
        nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = TipoFinal;
        nuevo.id = elid;
        if (elid == 1) {
            nuevo.ModificarCadena(Cadena3dxD);
        }
        else {
            nuevo.ModificarCadena("t" + entorno.numero);
        }
        //entorno.numero += 1;
        return nuevo;
    };
    return Aritmetica;
}(NodoAbstracto));
