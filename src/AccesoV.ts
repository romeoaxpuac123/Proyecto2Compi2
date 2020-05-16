class AccesoV extends NodoAbstracto{

    AccesoV(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        entorno.direccion += "##llamando a un vector\n";
        var LaT = "";
        var Elvector = this.Hijos[0].Nombre;
        var ElTipo = "";
        for(var i = 0; i < entorno.VariableVariablesFUNCIONVECTOR.length;i++){
            if(Elvector.toUpperCase() == entorno.VariableVariablesFUNCIONVECTOR[i].toUpperCase()){
                LaT = entorno.TesVariablesFUNCIONVECTOR[i];
                ElTipo = entorno.TipoVariablesFUNCIONVECTOR[i];
            }
        }
        entorno.numero+=1;
        entorno.direccion += "t" + entorno.numero + " = " + LaT + ";\n";
        entorno.numero+=1;
        entorno.direccion += "t" + entorno.numero + " = " + "t" + (entorno.numero-1) + " + " + this.Hijos[1].CadenaDe3D + ";\n";  
        entorno.numero+=1;
        entorno.direccion += "t" + entorno.numero + " = " + " Heap[t" + (entorno.numero-1) +"];\n";
        
        var TipoResultante = "";
        if(ElTipo.toUpperCase() == "STRING" ||ElTipo.toUpperCase() ==  "CADENA"){
            TipoResultante = "Cadena"
        }else if(ElTipo.toUpperCase() == "ENTERO" ||ElTipo.toUpperCase() ==  "INTEGER"){
            TipoResultante = "Entero"
        }
        else if(ElTipo.toUpperCase() == "DECIMAL" ||ElTipo.toUpperCase() ==  "DOUBLE"){
            TipoResultante = "Decimal"
        }
        else if(ElTipo.toUpperCase() == "CHAR" ||ElTipo.toUpperCase() ==  "CARACTER"){
            TipoResultante = "Caracter"
        }
        else if(ElTipo.toUpperCase() == "BOOLEAN" ||ElTipo.toUpperCase() ==  "BOOLEANO"){
            TipoResultante = "Booleano"
        }

        var nuevo = new Nodo(TipoResultante);
		var nuevovalor = new Nodo("100");
		nuevo.Hijos[0] = nuevovalor;
		nuevo.TipoDato = TipoResultante;
        nuevo.CadenaDe3D = "t" + entorno.numero;
        return nuevo;
    }
}