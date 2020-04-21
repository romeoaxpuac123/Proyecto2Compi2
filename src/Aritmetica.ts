class Aritmetica extends NodoAbstracto{

Aritmetica(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }

    Ejecutar(entorno: Entorno):NodoAbstracto{
        console.log("EJECUTANDO NODO ARITMETICA");
        var Tipo1 = this.Hijos[0].TipoDato;
        var Tipo2 = this.Hijos[2].TipoDato;

        var Operador = this.Hijos[1].Nombre;

        var Valor1 = this.Hijos[0].Hijos[0].Nombre;
        var Valor2 = this.Hijos[2].Hijos[0].Nombre;

        var Total = +Valor1 + +Valor2;
        var TipoFinal = "Decimal";


        //console.log("Tipo1: " + Tipo1);
        //console.log("Tipo2: " + Tipo2);
        //console.log("Simbolo: " + Operador);
        //console.log("Valor1: " + Valor1);
        //console.log("Valor2: " + Valor2);

        console.log("Total->" + Total);

        var nuevo = new Nodo("Decimal");
        var nuevovalor = new Nodo(Total.toString());
		nuevo.Hijos[0] = nuevovalor;
		nuevo.TipoDato = "TipoFinal";
        
        return nuevo;
    }
}