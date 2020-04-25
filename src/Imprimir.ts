class Imprimir extends NodoAbstracto{

    
    Imprimir(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("Entro a Imprimir");
        console.log("TOALT->" + entorno.numero);
        var TipoAImprimir = "";
        
        console.log(this.Hijos[0].CadenaDe3D);
        console.log("DG->"+ this.Hijos[0].TipoDato);
        var respuesta =  this.Hijos[0].Hijos[0].Nombre;
        if(this.Hijos[0].TipoDato == "Entero"){
            TipoAImprimir = "\"%i\", ";
        }
        else if(this.Hijos[0].TipoDato == "Decimal"){
            TipoAImprimir = "\"%d\", ";
        }
        document.getElementById("salida").innerHTML = respuesta;
        document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";

        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    }
}