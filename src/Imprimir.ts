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
        var respuesta =  this.Hijos[0].Hijos[0].Nombre;
        document.getElementById("salida").innerHTML = respuesta;

        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    }
}