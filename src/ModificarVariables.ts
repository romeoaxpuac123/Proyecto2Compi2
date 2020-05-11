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
        var TipoRespuesta = this.Hijos[1].TipoDato;
        var LaViejaT = "";
        var LaNuevaT = "";
        
        var ElTipo = "";
        var don1 = "ERROR";
        for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
            if(LaVariable== entorno.VariableVariablesFUNCION[i]){
                don1 = "TRUE";
            }
        }

        for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
            if(LaVariable== entorno.VariableVariablesFUNCION[i]){
                ElTipo = entorno.TipoVariablesFUNCION[i];
            }
        }
        //BUSCANDO EN PARAMETROS
        if(don1 == "ERROR"){
            for(var i = 0; i < entorno.Variable.length;i++){
                if(LaVariable== entorno.Variable[i]){
                    don1 = "TRUE";
                }
            }
    
            for(var i = 0; i < entorno.Variable.length;i++){
                if(LaVariable== entorno.Variable[i]){
                    ElTipo = entorno.Tipo[i];
                }
            }
        }
        //explorando los tipos
        if((ElTipo.toUpperCase() == "CADENA" || ElTipo.toUpperCase() == "STRING"))
        {
            if(!(TipoRespuesta.toUpperCase() == "CADENA" || TipoRespuesta.toUpperCase() == "STRING")){
                    alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    entorno.LosErrores +="<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                    entorno.LosErrores += "<td>" +  "Variables de Diferentes tipos "   + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
            }
        }else if((ElTipo.toUpperCase() == "INTEGER" || ElTipo.toUpperCase() == "ENTERO"))
        {
            if(!(TipoRespuesta.toUpperCase() == "INTEGER" || TipoRespuesta.toUpperCase() == "ENTERO"
                ||TipoRespuesta.toUpperCase() == "CARACTER" || TipoRespuesta.toUpperCase() == "CHAR"
                )){
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Variables de Diferentes tipos "   + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }else  if((ElTipo.toUpperCase() == "CHAR" || ElTipo.toUpperCase() == "CARACTER"))
        {
            if(!(TipoRespuesta.toUpperCase() == "CHAR" || TipoRespuesta.toUpperCase() == "CARACTER")){
                    alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    entorno.LosErrores +="<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                    entorno.LosErrores += "<td>" +  "Variables de Diferentes tipos "   + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
            }
        }else if((ElTipo.toUpperCase() == "DOUBLE" || ElTipo.toUpperCase() == "DECIMAL"))
        {
            if(!(TipoRespuesta.toUpperCase() == "INTEGER" || TipoRespuesta.toUpperCase() == "ENTERO"
                ||TipoRespuesta.toUpperCase() == "CARACTER" || TipoRespuesta.toUpperCase() == "CHAR"
                ||TipoRespuesta.toUpperCase() == "DOUBLE" || TipoRespuesta.toUpperCase() == "DECIMAL"
                )){
                alert('Este es un semantico: ' + "Diferentes tipos" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Variables de Diferentes tipos "   + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }





        //fin te tipos



        if(don1 == "TRUE"){
            var bandera1 = "FALSE";
            for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
                if(LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                    LaViejaT = entorno.TesVariablesFUNCION[x];
                    bandera1 = "TRUE";
                }
            }
            if(bandera1 == "FALSE"){
                for(var x = 0; x < entorno.Variable.length; x++){
                    if(LaVariable.toUpperCase() == entorno.Variable[x].toUpperCase()){
                        LaViejaT = entorno.Tes[x];
                        bandera1 = "TRUE";
                    }
                }
            }

            LaNuevaT = C3DExpresion;
            //var nuevosimbolo = LaViejaT.replace("t","");
            //var hola = +nuevosimbolo - 1;
            entorno.direccion += "stack[" + LaViejaT  + "] = " + LaNuevaT + ";\n"; //:"t" + hola + " = " + LaNuevaT + ";\n";

            //for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
            //    if(LaVariable.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
            //         entorno.TesVariablesFUNCION[x] = LaNuevaT ;
            //    }
           // }
        }else{
            alert('Este es un semantico: ' + LaVariable + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
            entorno.LosErrores += "<td>" +  "Variable: "+ LaVariable+ "No Existe"  + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }

        

        console.log("-> Variable->" + LaVariable);
        console.log("-> AntiguaT->" + LaViejaT);
        console.log("-> LaViejaT->" + LaNuevaT); 

        entorno.mostrarSimboos();
        var nuevo = new Nodo("VARIALBES"); 
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.CadenaDe3D = LaNuevaT;
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}