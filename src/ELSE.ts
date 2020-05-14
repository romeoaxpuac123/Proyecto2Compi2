class ELSE extends NodoAbstracto{

    
    ELSE(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("ENTROOOOOOO AL ELSE-->");
        //var Cad3dExpresion = this.Hijos[0].CadenaDe3D;
        //var TipoExpresion = this.Hijos[0].TipoDato;

        entorno.direccionIF += "##inf_ELSE\n";

        var nuevo = new Nodo("ELSE");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}