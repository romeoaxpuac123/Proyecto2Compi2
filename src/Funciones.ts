class Funciones extends NodoAbstracto{
    Funciones(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }

    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A FUNCIONES------");
        var nombre = this.Hijos[0].Nombre;
        var TParametros = entorno.Variable.length;
        var totaltmanio = entorno.VariableVariablesFUNCION.length + entorno.Variable.length;
        console.log("La funcion tiene nombre de:->" + nombre);
        
        //VERIFICANDO SI EL RETURN ES IGUAL A LA FUNCION Xd xd
        for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
            if(entorno.VariableVariablesFUNCION[i].toUpperCase() == "RETURN"){
                console.log("holaaaaaaaa-->");
                console.log("Tipo return->" + entorno.TipoVariablesFUNCION[i]);
                console.log("tipo funcion->" + this.TipoDato);
                var ElTipo =  this.TipoDato;
                var TipoRespuesta = entorno.TipoVariablesFUNCION[i];
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
                break;

            }


        }
        //FIN DE ESE VERIFICACION
        if(entorno.existefuncion(nombre)== false){
            //no existe la funcion

            entorno.etiquetas +=1;
            var Etiqueta1x = entorno.etiquetas;
            if(TParametros == 0){
                entorno.anadirSimbolo(nombre,"global","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,0,this.TipoDato,"NO TIENE",TParametros);
                console.log("salida de variables->");
                //añadiendo las variables a la tabla de simbolos
                for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                    
                   console.log  (entorno.VariableVariablesFUNCION[i] + "->" + entorno.TipoVariablesFUNCION[i]);
                    if(entorno.TipoVariablesFUNCION[i].toUpperCase() == "GLOBAL"){

                    }else{
                        entorno.anadirSimbolo(entorno.VariableVariablesFUNCION[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,(entorno.Variable.length+i),entorno.TipoVariablesFUNCION[i],entorno.TesVariablesFUNCION[i],0);
                
                    }
                      
                }
                console.log("SIMBOLOS--->");
                entorno.mostrarSimboos();
                console.log("fin simbolos");
                //var Auxiliar = "P" ; //+ entorno.valordep;
                //var Parametrosc3d = Auxiliar + " = P;\n";
                //var Parametrosc3d = Auxiliar; //+ " = P;\n";
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + "_" + this.TipoDato + "_" +TParametros + " begin\n\n\t" + "\t" +entorno.direccion.replace(/\n/g, '\n\t');  entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";

                entorno.TipoVariables.splice(0, entorno.TipoVariables.length);
                entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
                entorno.TesVariables.splice(0,entorno.TesVariables.length);


                entorno.TipoVariablesFUNCION.splice(0, entorno.TipoVariablesFUNCION.length);
                entorno.VariableVariablesFUNCION.splice(0, entorno.VariableVariablesFUNCION.length);
                entorno.TesVariablesFUNCION.splice(0,entorno.TesVariablesFUNCION.length);
            }else{

                console.log("TIENE ESTOS PARAMETROAS->");
                //entorno.numero +=1;
                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length)
                console.log("->" + entorno.Variable.length)
                console.log("->" + entorno.Tes.length)
                console.log("fin vacios");
                entorno.anadirSimbolo(nombre,"global","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,totaltmanio ,0,this.TipoDato,"NO TIENE",TParametros);

                var Auxiliar = "P"; // + entorno.valordep;
                var Parametrosc3d = "";
                for(var i = 0; i < entorno.Variable.length; i++){
                    console.log (entorno.Variable[i] + "->" + entorno.Tipo[i]);
                    var Parametrosc3dx = "## PARAMETRO->" +  entorno.Variable[i] + "\n";
                    //entorno.numero +=1;
                    Parametrosc3dx= Parametrosc3dx+ entorno.Tes[i] + " = " +  Auxiliar + " + " + i + ";\n"
                   // entorno.numero +=1;
                   // Parametrosc3d = Parametrosc3d + "t" + entorno.numero + " = stack[t" + (entorno.numero-1) + "];\n\n";
                    Parametrosc3d = Parametrosc3d + Parametrosc3dx;
                    entorno.anadirSimbolo(entorno.Variable[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,i,entorno.Tipo[i],entorno.Tes[i],0);
                    
                }
                console.log("salida de variables->");
                //añadiendo las variables a la tabla de simbolos
                for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                    
                   console.log  (entorno.VariableVariablesFUNCION[i] + "->" + entorno.TipoVariablesFUNCION[i]);
                    if(entorno.TipoVariablesFUNCION[i].toUpperCase() == "GLOBAL"){

                    }else{
                        entorno.anadirSimbolo(entorno.VariableVariablesFUNCION[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,(entorno.Variable.length+i),entorno.TipoVariablesFUNCION[i],entorno.TesVariablesFUNCION[i],0);
                
                    }
                      
                }

                console.log("FIN TIENE ESTOS PARAMETROAS->");
                Parametrosc3d = Parametrosc3d.replace(/\n/g, '\n\t') + "\n\n";
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + "_" + this.TipoDato + "_" +TParametros + " begin\n\n\t" + Parametrosc3d + "\t" +entorno.direccion.replace(/\n/g, '\n\t');
                entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
                
                
                entorno.Tipo.splice(0, entorno.Tipo.length);
                entorno.Variable.splice(0, entorno.Variable.length);
                entorno.Tes.splice(0,entorno.Tes.length);

                entorno.TipoVariables.splice(0, entorno.TipoVariables.length);
                entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
                entorno.TesVariables.splice(0,entorno.TesVariables.length);


                entorno.TipoVariablesFUNCION.splice(0, entorno.TipoVariablesFUNCION.length);
                entorno.VariableVariablesFUNCION.splice(0, entorno.VariableVariablesFUNCION.length);
                entorno.TesVariablesFUNCION.splice(0,entorno.TesVariablesFUNCION.length);

                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length)
                console.log("->" + entorno.Variable.length)
                console.log("->" + entorno.Tes.length)
                console.log("fin vacios");

                //entorno.anadirSimbolo(nombre,"global","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,totaltmanio ,0,this.TipoDato,"NO TIENE",TParametros);

                console.log("SIMBOLOS--->");
                entorno.mostrarSimboos();
                console.log("fin simbolos");


            }
         

        }
        else{
            //si existe la funcion
            //"funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros
            if(entorno.FuncionExistenteBayron("funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros) == true){
                //ya existe una función con la misma cantidad de parametros reportar error
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Funcion: "+ nombre + " Existente"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";

            }else{
                //no existe una función con la misma cantidad de parametros
                //alert('POS SI SE AÑADE');
                entorno.etiquetas +=1;
                var Etiqueta1x = entorno.etiquetas;
                if(TParametros == 0){
                    entorno.anadirSimbolo(nombre,"global","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,0,this.TipoDato,"NO TIENE",TParametros);
                    console.log("salida de variables->");
                    //añadiendo las variables a la tabla de simbolos
                    for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                        
                       console.log  (entorno.VariableVariablesFUNCION[i] + "->" + entorno.TipoVariablesFUNCION[i]);
                        if(entorno.TipoVariablesFUNCION[i].toUpperCase() == "GLOBAL"){
    
                        }else{
                            entorno.anadirSimbolo(entorno.VariableVariablesFUNCION[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,(entorno.Variable.length+i),entorno.TipoVariablesFUNCION[i],entorno.TesVariablesFUNCION[i],0);
                    
                        }
                          
                    }
                    console.log("SIMBOLOS--->");
                    entorno.mostrarSimboos();
                    console.log("fin simbolos");
                    var Auxiliar = "P"; // + entorno.valordep;
                    //var Parametrosc3d = Auxiliar + " = P;\n";
                    var esomero = "goto L" + Etiqueta1x + ";\n";
                    entorno.direccion = esomero + "proc " + nombre + "_" + this.TipoDato + "_" +TParametros + " begin\n\n\t" + "\t" +entorno.direccion.replace(/\n/g, '\n\t');  entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
    
                    entorno.TipoVariables.splice(0, entorno.TipoVariables.length);
                    entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
                    entorno.TesVariables.splice(0,entorno.TesVariables.length);
    
    
                    entorno.TipoVariablesFUNCION.splice(0, entorno.TipoVariablesFUNCION.length);
                    entorno.VariableVariablesFUNCION.splice(0, entorno.VariableVariablesFUNCION.length);
                    entorno.TesVariablesFUNCION.splice(0,entorno.TesVariablesFUNCION.length);
                }else{
    
                    console.log("TIENE ESTOS PARAMETROAS->");
                    //entorno.numero +=1;
                    console.log("VALORES VACIOS->");
                    console.log("->" + entorno.Tipo.length)
                    console.log("->" + entorno.Variable.length)
                    console.log("->" + entorno.Tes.length)
                    console.log("fin vacios");
                    entorno.anadirSimbolo(nombre,"global","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,totaltmanio ,0,this.TipoDato,"NO TIENE",TParametros);
    
                    var Auxiliar = "P";// + entorno.valordep;
                    var Parametrosc3d = ""; //Auxiliar + " = P;\n";""
                    for(var i = 0; i < entorno.Variable.length; i++){
                        console.log (entorno.Variable[i] + "->" + entorno.Tipo[i]);
                        var Parametrosc3dx = "## PARAMETRO->" +  entorno.Variable[i] + "\n";
                        //entorno.numero +=1;
                        Parametrosc3dx= Parametrosc3dx+ entorno.Tes[i] + " = " +  Auxiliar + " + " + i + ";\n"
                       // entorno.numero +=1;
                       // Parametrosc3d = Parametrosc3d + "t" + entorno.numero + " = stack[t" + (entorno.numero-1) + "];\n\n";
                        Parametrosc3d = Parametrosc3d + Parametrosc3dx;
                        entorno.anadirSimbolo(entorno.Variable[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,i,entorno.Tipo[i],entorno.Tes[i],0);
                        
                    }
                    console.log("salida de variables->");
                    //añadiendo las variables a la tabla de simbolos
                    for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                        
                       console.log  (entorno.VariableVariablesFUNCION[i] + "->" + entorno.TipoVariablesFUNCION[i]);
                        if(entorno.TipoVariablesFUNCION[i].toUpperCase() == "GLOBAL"){
    
                        }else{
                            entorno.anadirSimbolo(entorno.VariableVariablesFUNCION[i],"local","funcionbayron_"+ nombre + "_" + this.TipoDato + "_" +TParametros,0,(entorno.Variable.length+i),entorno.TipoVariablesFUNCION[i],entorno.TesVariablesFUNCION[i],0);
                    
                        }
                          
                    }
    
                    console.log("FIN TIENE ESTOS PARAMETROAS->");
                    Parametrosc3d = Parametrosc3d.replace(/\n/g, '\n\t') + "\n\n";
                    var esomero = "goto L" + Etiqueta1x + ";\n";
                    entorno.direccion = esomero + "proc " + nombre + "_" + this.TipoDato + "_" +TParametros + " begin\n\n\t" + Parametrosc3d + "\t" +entorno.direccion.replace(/\n/g, '\n\t');
                    entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
                    
                    
                    entorno.Tipo.splice(0, entorno.Tipo.length);
                    entorno.Variable.splice(0, entorno.Variable.length);
                    entorno.Tes.splice(0,entorno.Tes.length);
    
                    entorno.TipoVariables.splice(0, entorno.TipoVariables.length);
                    entorno.VariableVariables.splice(0, entorno.VariableVariables.length);
                    entorno.TesVariables.splice(0,entorno.TesVariables.length);
    
    
                    entorno.TipoVariablesFUNCION.splice(0, entorno.TipoVariablesFUNCION.length);
                    entorno.VariableVariablesFUNCION.splice(0, entorno.VariableVariablesFUNCION.length);
                    entorno.TesVariablesFUNCION.splice(0,entorno.TesVariablesFUNCION.length);
    
                    console.log("VALORES VACIOS->");
                    console.log("->" + entorno.Tipo.length)
                    console.log("->" + entorno.Variable.length)
                    console.log("->" + entorno.Tes.length)
                    console.log("fin vacios");
    
                    
                    console.log("SIMBOLOS--->");
                    entorno.mostrarSimboos();
                    console.log("fin simbolos");
    
    
                }
            }
        }
       

        entorno.tamanioentorno = 0;
        var nuevo = new Nodo("Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}