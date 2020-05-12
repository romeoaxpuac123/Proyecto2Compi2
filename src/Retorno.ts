class Retorno extends NodoAbstracto{

    Retorno(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        var ElvalordeP = "P"; // + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        entorno.numero +=1;
        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+ this.Hijos[0].CadenaDe3D + ";\n";
        entorno.numero +=1;
        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio)+ ";\n";
        //entorno.TesVariables.push("t" + entorno.numero );
        entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
        entorno.TesVariablesFUNCION.push("t" + entorno.numero);
        entorno.TipoVariablesFUNCION.push(this.Hijos[0].TipoDato);
        entorno.VariableVariablesFUNCION.push("return");
        entorno.tamanioentorno += 1;

        entorno.mostrarSimboos();
        var nuevo = new Nodo("RETORNO"); 
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }


}