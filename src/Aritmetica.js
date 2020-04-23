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
        console.log("Valor1: " + Valor1);
        console.log("Valor2: " + Valor2);
        /*OPERANDO SEGÚN EL SIMBOLO*/
        var Total = 0;
        ;
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
                    break;
                }
                default: {
                    //statements; 
                    break;
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
        nuevo.ModificarCadena("t" + entorno.numero);
        //entorno.numero += 1;
        return nuevo;
    };
    return Aritmetica;
}(NodoAbstracto));
