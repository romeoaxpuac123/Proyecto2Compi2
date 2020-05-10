class ModificarVariables extends NodoAbstracto{

    Variables2(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----> ENTRO A MODIFICAR VARIABLE<-----");
        var LaVariable = this.Hijos[0].Nombre;
        var C3DExpresion = this.Hijos[1].CadenaDe3D;
        var LaViejaT = "";
        var LaNuevaT = "";        
        for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
            if(LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                LaViejaT = entorno.TesVariablesFUNCION[x];
            }
        }
        LaNuevaT = C3DExpresion;
        for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
            if(LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                 entorno.TesVariablesFUNCION[x] = LaViejaT ;
            }
        }

        console.log("-> Variable->" + LaVariable);
        console.log("-> AntiguaT->" + LaViejaT);
        console.log("-> LaViejaT->" + LaNuevaT);
        var nuevo = new Nodo("VARIALBES"); 
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}