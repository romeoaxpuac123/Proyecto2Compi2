class VariablesGlobales extends NodoAbstracto{

    VariablesGlobales(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A VARIABLESGlobales------");
        var ElTipo= this.Hijos[0].Nombre;
        var LaTRespuesta  = this.Hijos[1].CadenaDe3D;
        var TipoRespuesta = this.Hijos[1].TipoDato;
        var ElvalordeP = "P"; // + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        if(ElTipo.toUpperCase() != "GLOBAL"){
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
        }
        for(var i = 0; i < entorno.VariableVariables.length; i++){
            
            
            
                if(LaTRespuesta.toUpperCase() == "TRUE" && ElTipo.toUpperCase() == "BOOLEANO" ){
                    LaTRespuesta = "1";
                }else if(LaTRespuesta.toUpperCase() == "FALSE" && ElTipo.toUpperCase() == "BOOLEANO"){
                    LaTRespuesta = "0";
                }
                if(LaTRespuesta.toUpperCase() == "TRUE" && TipoRespuesta.toUpperCase() == "BOOLEANO" ){
                    LaTRespuesta = "1";
                }else if(LaTRespuesta.toUpperCase() == "FALSE" && TipoRespuesta.toUpperCase() == "BOOLEANO"){
                    LaTRespuesta = "0";
                }
                if(TipoRespuesta.toUpperCase() == "CHAR" || TipoRespuesta.toUpperCase() == "CARACTER" ){
                    LaTRespuesta = LaTRespuesta.charCodeAt(1).toString(); 
                    TipoRespuesta = "CHAR";
                }
                if(this.Hijos[1].Nombre.toUpperCase() == "CADENA"){
                    entorno.numero +=1;
                    entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
                    LaTRespuesta =  "t" + entorno.numero;
                    this.Hijos[1].CadenaDe3D = this.Hijos[1].CadenaDe3D.replace("\"","");
                    this.Hijos[1].CadenaDe3D = this.Hijos[1].CadenaDe3D.replace("\"","");
                    for(var x =0; x < this.Hijos[1].CadenaDe3D.length;x++){
                        entorno.direccion = entorno.direccion + "Heap[H] = " +  this.Hijos[1].CadenaDe3D.charCodeAt(x).toString() + ";\n"; 
                        entorno.direccion = entorno.direccion + "H = H + 1;\n";
                    }
                    entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
                    entorno.direccion = entorno.direccion + "H = H + 1;\n";
                }
                //entorno.numero +=1;
                entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE Global->" +  entorno.VariableVariables[i] + "\n";
                //entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
                if(LaTRespuesta == "0" || LaTRespuesta == "1" ){
                    entorno.numero += 1;
                   
                    var ResuladoSalida =  "";
                    ResuladoSalida =  ResuladoSalida  + "t"  + entorno.numero + " = " + LaTRespuesta + ";\n";
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    ResuladoSalida =  ResuladoSalida + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                    entorno.numero += 1; 
                    ResuladoSalida =  ResuladoSalida + "t" +  entorno.numero + " = H;\n"
                    var auxp = "t" +  entorno.numero;
                    ResuladoSalida =  ResuladoSalida + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    ResuladoSalida =  ResuladoSalida + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    ResuladoSalida =  ResuladoSalida+ "Heap[H] = -1;\nH = H + 1;\n";
    
                    ResuladoSalida =  ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida =  ResuladoSalida + "L" + Etiqueta1 + ":\n" 
                    ResuladoSalida =  ResuladoSalida + "t" +  entorno.numero + " = H;\n"
                    ResuladoSalida =  ResuladoSalida + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    ResuladoSalida =  ResuladoSalida + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    ResuladoSalida =  ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.direccion = entorno.direccion + ResuladoSalida; 

                    //una variable global se guarda en el HEAP
                    entorno.numero +=1;
                    entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n"
                    entorno.direccion = entorno.direccion + "Heap[H] = t" + (entorno.numero-1) + ";\n";
                    entorno.direccion = entorno.direccion + "H = H + 1;\n";
                    //entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio)+ ";\n";
                    //entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
                    entorno.TesVariablesFUNCIONGLOBAL.push("t" + entorno.numero);
                    entorno.TipoVariablesFUNCIONGLOBAL.push(TipoRespuesta);
                    entorno.VariableVariablesFUNCIONGLOBAL.push(entorno.VariableVariables[i]);
                    entorno.tamanioentorno += 1;
    
                }else{
                     //una variable global se guarda en el HEAP
                     entorno.numero +=1;
                     entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n"
                     entorno.direccion = entorno.direccion + "Heap[H] = " + (LaTRespuesta) + ";\n";
                     entorno.direccion = entorno.direccion + "H = H + 1;\n";
                    //entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio)+ ";\n";
                    //entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
                    entorno.TesVariablesFUNCIONGLOBAL.push("t" + entorno.numero);
                    entorno.TipoVariablesFUNCIONGLOBAL.push(TipoRespuesta);
                    entorno.VariableVariablesFUNCIONGLOBAL.push(entorno.VariableVariables[i]);
                    entorno.tamanioentorno += 1;
                }
                
        }

            
        entorno.VariableVariables.splice(0,entorno.VariableVariables.length);
        for(var x = 0; x < entorno.VariableVariablesFUNCIONGLOBAL.length; x++){
            console.log("Esta es una variable global:");
            console.log(entorno.VariableVariablesFUNCIONGLOBAL[x]);
            console.log(entorno.TipoVariablesFUNCIONGLOBAL [x]);
            console.log(entorno.TesVariablesFUNCIONGLOBAL[x]);
        }
        console.log("fin XD");
            var nuevo = new Nodo("VARIALBES");
            nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
            nuevo.NumeroDeNodo = this.NumeroDeNodo;
            return nuevo;
            entorno.mostrarSimboos()
        
    }
}