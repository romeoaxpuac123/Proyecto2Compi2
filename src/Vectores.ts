class Vectores extends NodoAbstracto{

    Vectores(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A VVectores------");
        //Entorno1.VariableVariables.push($3);
        //Entorno1.ListaParametrosFuncion.push($1);
        entorno.direccion += "##Asigando un vector;\n"
        entorno.numero += 1;
        var TeDeLaVariable = entorno.numero;
        //asignando vectores en AltoNivel
        // entorno.tamanioentorno += 1;
        for(var x = 0; x < entorno.VariableVariables.length; x++){
            entorno.tamanioentorno += 1;
            entorno.TipoVariablesFUNCIONVECTOR.push(this.Hijos[0].Nombre)
            entorno.VariableVariablesFUNCIONVECTOR.push(entorno.VariableVariables[x]);
            entorno.TesVariablesFUNCIONVECTOR.push("t" + TeDeLaVariable);
            entorno.TamanioVECTOR.push(entorno.ListaParametrosFuncion.length);
        }

        entorno.direccion += "t" + entorno.numero + " = H;\n";
        entorno.direccion +=  "Heap[H] = " +  entorno.ListaParametrosFuncion.length + ";\n";
        for(var x = 0; x < entorno.ListaParametrosFuncion.length;x++){
            entorno.direccion += "##VALOR->" + (x+1) + ";\n";
            entorno.direccion += "H = H + 1;\n"
            entorno.direccion +=  "Heap[H] = " + entorno.ListaParametrosFuncion[x].CadenaDe3D + ";\n"
        }

        entorno.ListaParametrosFuncion.splice(0,entorno.ListaParametrosFuncion.length);
        entorno.VariableVariables.splice(0,entorno.VariableVariables.length);
        
        //mostrndo los vectores
        for(var x = 0; x < entorno.VariableVariablesFUNCIONVECTOR.length;x++){

            console.log("DATOS VECTOR->" + x)
            console.log(entorno.TipoVariablesFUNCIONVECTOR[x]);
            console.log(entorno.VariableVariablesFUNCIONVECTOR[x]);
            console.log(entorno.TesVariablesFUNCIONVECTOR[x]);
            console.log(entorno.TamanioVECTOR[x]);
        }
        
        
        var nuevo = new Nodo("VARIALBES");
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}