class Variables extends NodoAbstracto{

    Variables(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A VARIABLES------");
        
        var ElTipo = this.Hijos[0].Nombre;
        var LaTRespuesta  = this.Hijos[1].CadenaDe3D;
        var TipoRespuesta = this.Hijos[1].TipoDato;
        var ElvalordeP = "P"; // + entorno.valordep;
        var Tamanio = entorno.tamanioentorno;
        var banderaconstante = 0;

        if(TipoRespuesta == "VectorRomeo"){
           var XDRomeo = "false";
            for(var i = 0; i < entorno.VariableVariables.length; i++){
                //alert("RomeoXD" + entorno.VariableVariables[i] + this.Hijos[1].Hijos[0].Nombre);
                for(var x = 0; x < entorno.VariableVariablesFUNCIONVECTOR.length;x++){
                    if(this.Hijos[1].Hijos[0].Nombre == entorno.VariableVariablesFUNCIONVECTOR[x]){
                        entorno.VariableVariablesFUNCIONVECTOR.push(entorno.VariableVariables[i]);
                        entorno.TesVariablesFUNCIONVECTOR.push(entorno.TesVariablesFUNCIONVECTOR[x]);
                        entorno.TamanioVECTOR.push(entorno.TamanioVECTOR[x]);
                        entorno.TipoVariablesFUNCIONVECTOR.push(entorno.TipoVariablesFUNCIONVECTOR[x]);
                        XDRomeo = "TRUE";
                    }
                }
            }
            
            if(XDRomeo== "false"){
                alert('Este es un semantico: ' + "no existe el vector " + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +   "no existe el vector  " + "</td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }

            var nuevo = new Nodo("VARIALBES");
            nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
            nuevo.NumeroDeNodo = this.NumeroDeNodo;
            return nuevo;
        }
        //alert("RomeoXDx");
        //alert(this.Hijos[0].Nombre);
        //alert(TipoRespuesta);
        //alert("ENTRO A BUSCAR un id" + TipoRespuesta);
        //console.log("La variable tiene Tipoe de:->" + ElTipo);
        //console.log("La T A LA QUE HACE REF->" + LaTRespuesta);
        //public TipoVariables =  new Array();
        //public VariableVariables = new Array();
        //public 
        //alert('Anhelo->' + this.Hijos[1].Nombre);
        if(ElTipo.toUpperCase() =="GLOBAL"){
        
            for(var i = 0; i < entorno.VariableVariables.length; i++){
                if(LaTRespuesta.toUpperCase() == "TRUE" && ElTipo.toUpperCase() == "GLOBAL" ){
                    LaTRespuesta = "1";
                }else if(LaTRespuesta.toUpperCase() == "FALSE" && ElTipo.toUpperCase() == "GLOBAL"){
                    LaTRespuesta = "0";
                }
                if(TipoRespuesta.toUpperCase() == "CHAR" || TipoRespuesta.toUpperCase() == "CARACTER" ){
                    LaTRespuesta = LaTRespuesta.charCodeAt(1).toString(); 
                    TipoRespuesta = "CHAR";
                }
                if(TipoRespuesta.toUpperCase() == "CHAR2" || TipoRespuesta.toUpperCase() == "CARACTER2" ){
                    LaTRespuesta = LaTRespuesta; 
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
    }
    if(ElTipo.toUpperCase() =="VAR"){
        ElTipo = TipoRespuesta;
        if(ElTipo.toUpperCase() == "CADENA"){
            ElTipo = "STRING";
        }else if(ElTipo.toUpperCase() == "BOOLEANO"){
            ElTipo = "BOOLEAN";
        } 
        else if(ElTipo.toUpperCase() == "DECIMAL"){
            ElTipo = "DOUBLE";
        } 
        else if(ElTipo.toUpperCase() == "ENTERO"){
            ElTipo = "INTEGER";
        } 
    }

    if(ElTipo.toUpperCase() =="CONST"){
        banderaconstante = 1;
        ElTipo = TipoRespuesta;
        if(ElTipo.toUpperCase() == "CADENA"){
            ElTipo = "STRING";
        }else if(ElTipo.toUpperCase() == "BOOLEANO"){
            ElTipo = "BOOLEAN";
        } 
        else if(ElTipo.toUpperCase() == "DECIMAL"){
            ElTipo = "DOUBLE";
        } 
        else if(ElTipo.toUpperCase() == "ENTERO"){
            ElTipo = "INTEGER";
        } 
    }


        if(TipoRespuesta == "ID"){
           // alert("ENTRO A BUSCAR un id");
            var bandera1 = "false";
            for(var x = 0; x < entorno.VariableVariablesFUNCION.length;x++){
                if(this.Hijos[1].Hijos[0].Nombre.toUpperCase() == 
                entorno.VariableVariablesFUNCION[x].toUpperCase() ){
                    //alert("ENTRO A BUSCAR un id locales");
                    TipoRespuesta = entorno.TipoVariablesFUNCION[x];
                    
                    LaTRespuesta =  entorno.TesVariablesFUNCION[x];
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero + " = stack["+ LaTRespuesta + "];\n";
                    LaTRespuesta = "t" + entorno.numero;
                    bandera1 = "true";
                    break;
                }
            }
            if(bandera1 == "false"){
               // alert("ENTRO A BUSCAR EN GLOBALES");
                for(var x = 0; x < entorno.VariableVariablesFUNCIONGLOBAL.length;x++){
                    if(this.Hijos[1].Hijos[0].Nombre.toUpperCase() == 
                    entorno.VariableVariablesFUNCIONGLOBAL[x].toUpperCase() ){
                        TipoRespuesta = entorno.TipoVariablesFUNCIONGLOBAL[x];
                        
                        LaTRespuesta =  entorno.TesVariablesFUNCIONGLOBAL[x];
                        entorno.numero += 1;
                        entorno.direccion += "t" + entorno.numero + " = Heap["+ LaTRespuesta + "];\n";
                        LaTRespuesta = "t" + entorno.numero;
                        bandera1 = "true";
                    }
                }
            }
            if(bandera1 == "false"){
                //alert('Este es un semantico: ' + this.Hijos[1].Hijos[0].Nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"

                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "La Variable "+  this.Hijos[1].Hijos[0].Nombre + "No Existente"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
        }
        if(LaTRespuesta.toUpperCase() == "TRUE" && ElTipo.toUpperCase() == "BOOLEAN" ){
            LaTRespuesta = "1";
        }else if(LaTRespuesta.toUpperCase() == "FALSE" && ElTipo.toUpperCase() == "BOOLEAN"){
            LaTRespuesta = "0";
        }
        if(this.Hijos[1].TipoDato == "Caracter"){
            //alert("pos si hay caracter");
          
            LaTRespuesta = LaTRespuesta.charCodeAt(1).toString(); 
        }
        if(TipoRespuesta.toUpperCase() == "CHAR2" || TipoRespuesta.toUpperCase() == "CARACTER2" ){
            LaTRespuesta = LaTRespuesta; 
            TipoRespuesta = "CHAR";
        }

        if(ElTipo.toUpperCase() == "INTEGER" || ElTipo.toUpperCase() == "DOUBLE"
        || ElTipo.toUpperCase() == "CHAR"    || ElTipo.toUpperCase() == "BOOLEAN" 
        || ElTipo.toUpperCase() == "VAR"     || ElTipo.toUpperCase() == "CONST"
        || ElTipo.toUpperCase() == "STRING"){
               
        }else{
            alert('Este es un semantico: ' + ElTipo + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  " Tipo Variable "+ ElTipo  + " No Permitido"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
        }
        if(this.Hijos[1].Nombre == "Cadena"){
            //alert('Carga->' + this.Hijos[1].Nombre);
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
    
        for(var i = 0; i < entorno.VariableVariables.length; i++){
            Tamanio = entorno.tamanioentorno;
            console.log("variable---->" + entorno.VariableVariables[i]);
            for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
                if(entorno.VariableVariables[i].toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"

                    entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  " Variable "+  entorno.VariableVariables[i] + " Existente"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
                    break;
                }
            }
            for(var x = 0; x < entorno.Variable.length; x++){
                if(entorno.VariableVariables[i].toUpperCase() == entorno.Variable[x].toUpperCase()){
                    alert('Este es un semantico: ' + entorno.VariableVariables[i] + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    entorno.LosErrores +="<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                    entorno.LosErrores += "<td>" +  " Variable "+  entorno.VariableVariables[i] + " Existente"  + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
                    break;
                }
            }
            
           
            entorno.numero +=1;
            entorno.direccion = entorno.direccion + "## ASIGANDNO VARIABLE->" +  entorno.VariableVariables[i] + "\n";
            entorno.direccion = entorno.direccion + "t" + entorno.numero + " = " + LaTRespuesta + ";\n";
            if((LaTRespuesta == "0" || LaTRespuesta == "1") && (ElTipo.toUpperCase() == "BOOLEAN" || ElTipo.toUpperCase() == "BOOLEANO") ){
                var ResuladoSalida =  "";
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
                entorno.numero +=1;
                entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio)+ ";\n";
                
                entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
                entorno.TesVariablesFUNCION.push("t" + entorno.numero);
                entorno.TipoVariablesFUNCION.push(ElTipo);
                entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
                entorno.EsConstante.push(banderaconstante);
                entorno.tamanioentorno += 1;

            }else{
                entorno.numero +=1;
                entorno.direccion = entorno.direccion + "t" + entorno.numero + " = "+  ElvalordeP  +" + " + (Tamanio)+ ";\n";
               
                entorno.direccion = entorno.direccion + "stack[t" + entorno.numero + "] = t" + (entorno.numero-1) + ";\n";
                entorno.TesVariablesFUNCION.push("t" + entorno.numero);
                entorno.TipoVariablesFUNCION.push(ElTipo);
                entorno.VariableVariablesFUNCION.push(entorno.VariableVariables[i]);
                entorno.EsConstante.push(banderaconstante);
                entorno.tamanioentorno += 1;
            }
            
        }

        entorno.VariableVariables.splice(0,entorno.VariableVariables.length);
        //entorno.TipoVariables.splice(0,entorno.TipoVariables.length);
        //entorno.tamanioentorno += 1;
        var nuevo = new Nodo("VARIALBES");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}