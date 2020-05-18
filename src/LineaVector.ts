class LineaVector extends NodoAbstracto{

    Variables(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{


        var LaT = "";
        var Elvector = this.Hijos[0].Nombre;
        var ElTipo = "";
        var bandera = "false";
        var tamanio = "";
        for(var i = 0; i < entorno.VariableVariablesFUNCIONVECTOR.length;i++){
            if(Elvector.toUpperCase() == entorno.VariableVariablesFUNCIONVECTOR[i].toUpperCase()){
                LaT = entorno.TesVariablesFUNCIONVECTOR[i];
                ElTipo = entorno.TipoVariablesFUNCIONVECTOR[i];
                bandera = "true";
                //tamanio = entorno.TamanioVECTOR[i];
                //tamanio = entorno.
                entorno.numero += 1;
                entorno.direccion += "t" +  entorno.numero + " = " + "Heap[" +  entorno.TesVariablesFUNCIONVECTOR[i] + "];\n";
                tamanio = "t" +  entorno.numero; 
            }
        }


        var nuevo = new Nodo("Entero");
		var nuevovalor = new Nodo(tamanio.toString());
		nuevo.Hijos[0] = nuevovalor;
		nuevo.TipoDato = "Entero";
        nuevo.CadenaDe3D = tamanio.toString();
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}