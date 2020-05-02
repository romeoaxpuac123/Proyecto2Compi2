class Funciones extends NodoAbstracto{
    Funciones(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }

    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A FUNCIONES------");
        var nombre = this.Hijos[0].Nombre;
        console.log("La funcion tiene nombre de:->" + nombre);
        entorno.anadirSimbolo(nombre,"global","global",0,0,"funcion","t"+entorno.numero,0);
        console.log("SIMBOLOS--->");
        entorno.mostrarSimboos();
        console.log("fin simbolos");
        entorno.direccion = "proc " + nombre + " begin\n\n\t" + entorno.direccion.replace(/\n/g, '\n\t');
        entorno.direccion = entorno.direccion + "\n" + "end" + "\n";

        var nuevo = new Nodo("Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}