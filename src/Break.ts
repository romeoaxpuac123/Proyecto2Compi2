class BREAKXD extends NodoAbstracto{

    
    BREAKXD(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{


        var nuevo = new Nodo("BREAKXD");
        //nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        nuevo.MiCadena = "break;"
        nuevo.CadenaDe3D = "break";
        return nuevo;

    }
}