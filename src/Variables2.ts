class Variables2 extends NodoAbstracto{

    Variables2(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A VARIABLES------");
        var ElTipo= this.Hijos[0].Nombre;
        var LaTRespuesta  = "";
        var ElvalordeP = "t" + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        //public TipoVariables =  new Array();
        //public VariableVariables = new Array();
        //public TesVariables = new Array();
        if(ElTipo.toUpperCase() == "INTEGER"){
            LaTRespuesta  = "0";
        }else if (ElTipo.toUpperCase() == "DOUBLE"){
            LaTRespuesta  = "0.0";
        }else if (ElTipo.toUpperCase() == "CHAR"){
            LaTRespuesta  = "00";
        }
        if(ElTipo.toUpperCase() == "INTEGER" || ElTipo.toUpperCase() == "DOUBLE"
        || ElTipo.toUpperCase() == "CHAR"    || ElTipo.toUpperCase() == "BOOLEAN" 
        || ElTipo.toUpperCase() == "VAR"     || ElTipo.toUpperCase() == "CONST"){
                //entorno.Tipo.push(this.TipoDato);
                //entorno.Variable.push(nombre);
                //entorno.numero += 1;
                //var Tex = "t" + entorno.numero;
                //entorno.Tes.push(Tex);
                //entorno.tamanioentorno += 1;
                //entorno.anadirSimbolo(nombre,"local",entorno.nombreentorno,0,entorno.Tes.length,this.TipoDato,Tex,0);
        }else{
            alert('Este es un semantico: ' + ElTipo + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
        }
    
    
        for(var i = 0; i < entorno.VariableVariables.length; i++){
            console.log("variable---->" + entorno.VariableVariables[i]);
            for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
                if(entorno.VariableVariables[i].toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    break;
                }
            }
            for(var x = 0; x < entorno.Variable.length; x++){
                if(entorno.VariableVariables[i].toUpperCase() == entorno.Variable[x].toUpperCase()){
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    break;
                }
            }
            
            //entorno.TipoVariables.push(ElTipo);
            //console.log("-----------");
            //console.log("La variable tiene Tipoe de:->" + ElTipo);
            //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
            //console.log("El valor de P-> " + ElvalordeP);
            //console.log("Posición en la funcion->" + (Tamanio+i+1));
            //console.log("------------");
            entorno.numero +=1;
            entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" +  entorno.VariableVariables[i] + "\n";
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
            entorno.numero +=1;
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio+i)+ ";\n";
            //entorno.TesVariables.push("t" + entorno.numero );
            entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
            entorno.TesVariablesFUNCION.push("t" + entorno.numero);
            entorno.TipoVariablesFUNCION.push(ElTipo);
            entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
        }

        entorno.VariableVariables.splice(0,entorno.VariableVariables.length);
        //entorno.TipoVariables.splice(0,entorno.TipoVariables.length);

        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}