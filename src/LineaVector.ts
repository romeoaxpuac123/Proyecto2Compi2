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
        var tamanio = 0;
        for(var i = 0; i < entorno.VariableVariablesFUNCIONVECTOR.length;i++){
            if(Elvector.toUpperCase() == entorno.VariableVariablesFUNCIONVECTOR[i].toUpperCase()){
                LaT = entorno.TesVariablesFUNCIONVECTOR[i];
                ElTipo = entorno.TipoVariablesFUNCIONVECTOR[i];
                bandera = "true";
                tamanio = entorno.TamanioVECTOR[i];
            }
        }


        var nuevo = new Nodo("Entero");
		var nuevovalor = new Nodo(tamanio.toString());
		nuevo.Hijos[0] = nuevovalor;
		nuevo.TipoDato = "Entero";
        nuevo.CadenaDe3D = tamanio.toString();
        return nuevo;
    }
}