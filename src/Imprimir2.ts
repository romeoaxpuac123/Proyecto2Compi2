class Imprimir2 extends NodoAbstracto{

    
    Imprimir2(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("Entro a Imprimir");
        console.log("TOALT->" + entorno.numero);
        var TipoAImprimir = "";
        
        console.log(this.Hijos[0].CadenaDe3D);
        console.log("DG->"+ this.Hijos[0].TipoDato);
        var respuesta =  this.Hijos[0].Hijos[0].Nombre;
        var C3dT = "";
        var BanderaX = "false";
        if(this.Hijos[0].TipoDato == "ID"){
            var Bandera1 = "false";
            for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                if(this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCION[i]){
                    TipoAImprimir =  entorno.TipoVariablesFUNCION[i];
                    C3dT = entorno.TesVariablesFUNCION[i];
                    Bandera1 = "true";
                }
            }
            if(Bandera1 == "false"){
                for(var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length;i++){
                    if(this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCIONGLOBAL[i]){
                        TipoAImprimir =  entorno.TipoVariablesFUNCIONGLOBAL[i];
                        if(TipoAImprimir.toUpperCase() == "ENTERO"){
                            TipoAImprimir = "INTEGER";
                            BanderaX = "true";
                        }else if(TipoAImprimir.toUpperCase() == "DECIMAL"){
                            TipoAImprimir = "DOUBLE";
                            BanderaX = "true";
                        }else if(TipoAImprimir.toUpperCase() == "CHAR"){
                            TipoAImprimir = "CHAR";
                            BanderaX = "true";
                        }else if(TipoAImprimir.toUpperCase() == "BOOLEANO"){
                            TipoAImprimir = "BOOLEAN";
                            BanderaX = "true";
                        }else if(TipoAImprimir.toUpperCase() == "CADENA"){
                            TipoAImprimir = "STRING";
                            BanderaX = "true";
                        }
                        C3dT = entorno.TesVariablesFUNCIONGLOBAL[i];
                        Bandera1 = "true";
                    }
                }
            }
            
            console.log("imprmir tipo->" + TipoAImprimir);
            if(TipoAImprimir.toUpperCase() == "INTEGER"){
                TipoAImprimir = "\"%i\", ";
                entorno.numero += 1;
                if(BanderaX == "true"){
                    var auxiliar = "t" + entorno.numero + " = " + "Heap[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";

                }else{
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                }

            }else  if(TipoAImprimir.toUpperCase() == "DOUBLE"){
                if(BanderaX == "true"){
                    TipoAImprimir = "\"%d\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "Heap[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                }else{
                    TipoAImprimir = "\"%d\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                }
               
            }
            else  if(TipoAImprimir.toUpperCase() == "CHAR"){
                this.MiCadena = this.MiCadena + "##imprimiendo cahr\n";
                if(BanderaX == "true"){
                    TipoAImprimir = "\"%c\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "Heap[" + C3dT  + "]" ;
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
        
                }else{
                    TipoAImprimir = "\"%c\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
        
                }
            }
            else if(TipoAImprimir.toUpperCase() == "BOOLEAN"){
                if(BanderaX == "true"){
                    if((this.Hijos[0].CadenaDe3D == "VERDADERO")  || (this.Hijos[0].CadenaDe3D == "FALSO")){
                        var ResuladoSalida =  "";
                        entorno.numero += 1;
                        ResuladoSalida =  ResuladoSalida + "t" + entorno.numero +" = " + this.Hijos[0].CadenaDe3D + ";\n"
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
    
                        entorno.etiquetas +=1;
                        var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        
                        entorno.numero += 1;
                        ResuladoSalida = ResuladoSalida + "##IMPRIMIENDO UN BOOL puta vida\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta2x + ":\n";
                        entorno.numero += 1;
                        
                        ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                        ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                        ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                        ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                        ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2x + ";\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta1x + ":\n";
                        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                        this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
    
                    }else{
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        
                        entorno.numero += 1;
                        var ResuladoSalida =  "##IMPRIMIENDO UN BOOL \n";
                        var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + C3dT + "];\n";
                        var auxp =  "t" + entorno.numero;
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                        entorno.numero += 1;
                       
                        ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                        ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                        ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                        ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                        ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                        this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    }

                }else{
                    if((this.Hijos[0].CadenaDe3D == "VERDADERO")  || (this.Hijos[0].CadenaDe3D == "FALSO")){
                        var ResuladoSalida =  "";
                        entorno.numero += 1;
                        ResuladoSalida =  ResuladoSalida + "t" + entorno.numero +" = " + this.Hijos[0].CadenaDe3D + ";\n"
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
    
                        entorno.etiquetas +=1;
                        var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        
                        entorno.numero += 1;
                        ResuladoSalida = ResuladoSalida + "##IMPRIMIENDO UN BOOL puta vida\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta2x + ":\n";
                        entorno.numero += 1;
                        
                        ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                        ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                        ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                        ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                        ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2x + ";\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta1x + ":\n";
                        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                        this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
    
                    }else{
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        
                        entorno.numero += 1;
                        var ResuladoSalida =  "##IMPRIMIENDO UN BOOL \n";
                        var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                        var auxp =  "t" + entorno.numero;
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                        entorno.numero += 1;
                       
                        ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                        ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                        ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                        ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                        ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                        ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                        this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    }
                }
               
                
            }
            else if(TipoAImprimir.toUpperCase() == "STRING"){
                if(BanderaX == "true"){
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    
                    entorno.numero += 1;
                    var ResuladoSalida =  "##IMPRIMIENDO UN STRING-> \n";
                    var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + C3dT + "];\n";
                    var auxp =  "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.numero += 1;
                   
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                }else{
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    
                    entorno.numero += 1;
                    var ResuladoSalida =  "##IMPRIMIENDO UN STRING-> \n";
                    var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                    var auxp =  "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.numero += 1;
                   
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                }
              
           
            }
            else{
                for(var i = 0; i < entorno.Variable.length;i++){
                    if(this.Hijos[0].CadenaDe3D == entorno.Variable[i]){
                        TipoAImprimir =  entorno.Tipo[i];
                        C3dT = entorno.Tes[i];
                    }
                }
                //entorno.numero += 1;
                //this.MiCadena = this.MiCadena + "t" + entorno.numero + " = stack[" + C3dT + "];\n"; ;
                //C3dT = "t" + entorno.numero ;
                if(TipoAImprimir.toUpperCase() == "INTEGER"){
                    TipoAImprimir = "\"%i\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                } 
                else  if(TipoAImprimir.toUpperCase() == "DOUBLE"){
                    TipoAImprimir = "\"%d\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                }
                else  if(TipoAImprimir.toUpperCase() == "CHAR"){
                    TipoAImprimir = "\"%c\", ";
                    entorno.numero += 1;
                    var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                    //TipoAImprimir = "\"%i\", ";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
                }   
                else if(TipoAImprimir.toUpperCase() == "BOOLEAN"){

                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;

                        entorno.numero += 1;
                        this.MiCadena += "t" + entorno.numero + " = " + "stack[" + C3dT  + "];\n" ;
                        var el_aux = "t" + entorno.numero;
                        this.MiCadena +=  "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                     
                       
                        entorno.numero += 1; 
                        this.MiCadena +=  "t" +  entorno.numero + " = H;\n"
                        //var C3D1 = "t" +  entorno.numero;
                        this.MiCadena +=  "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        this.MiCadena +=  "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        this.MiCadena +=  "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        this.MiCadena +=  "goto L" + Etiqueta2 + ";\n";
                        this.MiCadena +=  "L" + Etiqueta1 + ":\n" 
                        this.MiCadena +=  "t" +  entorno.numero + " = H;\n"
                        this.MiCadena +=  "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        this.MiCadena +=  "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        this.MiCadena +=  "L" + Etiqueta2 + ":\n";

                        entorno.etiquetas +=1;
                        var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        this.MiCadena += "L" + Etiqueta2x + ":\n";
                        entorno.numero += 1;
                        this.MiCadena +=   "t" + entorno.numero + " = Heap[t" + (entorno.numero-1) + "];\n";
                        this.MiCadena +=   "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1x + ";\n";
                        this.MiCadena +=   "print( \"%c\",t" + entorno.numero + ");\n";
                        this.MiCadena +=  "t" + (entorno.numero-1)  + " = t" + (entorno.numero-1) + " + 1;\n";
                        this.MiCadena +=  "goto L" + Etiqueta2x + ";\n";
                        this.MiCadena +=   "L" + Etiqueta1x + ":\n";
                        this.MiCadena = this.MiCadena + "print( \"%c\",10);"+ "\n";
                    
                }
                else if(TipoAImprimir.toUpperCase() == "STRING"){
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    
                    entorno.numero += 1;
                    var ResuladoSalida =  "##IMPRIMIENDO UN STRING-> \n";
                    var ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = stack[" + C3dT + "];\n";
                    var auxp =  "t" + entorno.numero;
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta2 + ":\n";
                    entorno.numero += 1;
                   
                    ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + auxp + "];\n";
                    ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
                    ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
                    ResuladoSalida = ResuladoSalida + auxp  + " = " +auxp + " + 1;\n";
                    ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
                    ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                    this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                }    
                

            }

            
        }
        else if(this.Hijos[0].TipoDato == "Entero"){
            TipoAImprimir = "\"%i\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            this.MiCadena = this.MiCadena  + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
        }
        else if(this.Hijos[0].TipoDato == "Decimal"){
            TipoAImprimir = "\"%d\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            this.MiCadena = this.MiCadena +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
        }
        else if(this.Hijos[0].TipoDato == "Caracter"){
            TipoAImprimir = "\"%c\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            this.MiCadena = this.MiCadena +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D.charCodeAt(1).toString()  + " );\n"+ "print( \"%c\",10);"+ "\n";
        }else if(this.Hijos[0].TipoDato == "Cadena"){

            if(this.Hijos[0].Nombre == "Cadena"){
                console.log("ENTRO A IMPGIMIR CADANEA :(");
                this.Hijos[0].CadenaDe3D = this.Hijos[0].CadenaDe3D.substring(1,this.Hijos[0].CadenaDe3D.length-1);
                    entorno.numero += 1;
                    this.MiCadena = this.MiCadena+ "t" + entorno.numero + " = H;\n";
                    var Romeaxu = "t" + entorno.numero ;
                    for(var i = 0; i < this.Hijos[0].CadenaDe3D.length ; i++){
                        console.log("fin caden1");
                        this.MiCadena = this.MiCadena + "Heap[H] = " + this.Hijos[0].CadenaDe3D.charCodeAt(i).toString() + ";\n";
                        this.MiCadena = this.MiCadena + "H = H + 1;\n"; 
                        
                    }
                    this.MiCadena = this.MiCadena + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                    this.Hijos[0].CadenaDe3D = Romeaxu;
            }
            
            
            entorno.etiquetas +=1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta2 = entorno.etiquetas;
            var ResuladoSalida = "L" + Etiqueta2 + ":\n";
            entorno.numero += 1;
            ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + this.Hijos[0].CadenaDe3D + "];\n";
            ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
            ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
            ResuladoSalida = ResuladoSalida + this.Hijos[0].CadenaDe3D  + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
            ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
            ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
            this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
        }
        else if(this.Hijos[0].TipoDato == "Booleano"){
            var C3D1 = "";
            this.MiCadena = this.MiCadena + "##IMPRIMIENDO BOOLEN\n"
            if(this.Hijos[0].Nombre == "Booleano"){
                if(this.Hijos[0].CadenaDe3D == "true"){
                    C3D1 = "1";
                }else{
                    C3D1 = "0";
                }
                entorno.numero += 1;
                this.MiCadena = this.MiCadena + "t" + entorno.numero +" = " + C3D1 + ";\n"
                entorno.numero += 1;
                entorno.etiquetas +=1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta2 = entorno.etiquetas;
                
                this.MiCadena = this.MiCadena + "if(t" + (entorno.numero-1) + " == 0" + ") goto L" + Etiqueta1 + ";\n" ; 
                //parte 2
                entorno.numero += 1; 
                this.MiCadena = this.MiCadena+ "t" +  entorno.numero + " = H;\n"
                this.Hijos[0].CadenaDe3D = "t" +  entorno.numero;

                this.MiCadena = this.MiCadena + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                this.MiCadena = this.MiCadena + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
              
                  //parte 3
                  this.MiCadena = this.MiCadena + "goto L" + Etiqueta2 + ";\n";
                  this.MiCadena = this.MiCadena + "L" + Etiqueta1 + ":\n" 
                  this.MiCadena = this.MiCadena + "t" +  entorno.numero + " = H;\n"

                  this.MiCadena = this.MiCadena + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                  this.MiCadena = this.MiCadena + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                  this.MiCadena = this.MiCadena + "Heap[H] = -1;\nH = H + 1;\n";
             
                  this.MiCadena = this.MiCadena + "L" + Etiqueta2 + ":\n";

            }
            entorno.etiquetas +=1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta2 = entorno.etiquetas;
            var ResuladoSalida = "L" + Etiqueta2 + ":\n";
            entorno.numero += 1;
            ResuladoSalida = ResuladoSalida + "t" + entorno.numero + " = Heap[" + this.Hijos[0].CadenaDe3D + "];\n";
            ResuladoSalida = ResuladoSalida + "if( t" +  entorno.numero + " ==  -1)" + " goto L" + Etiqueta1 + ";\n";
            ResuladoSalida = ResuladoSalida + "print( \"%c\",t" + entorno.numero + ");\n";
            ResuladoSalida = ResuladoSalida + this.Hijos[0].CadenaDe3D  + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
            ResuladoSalida = ResuladoSalida + "goto L" + Etiqueta2 + ";\n";
            ResuladoSalida = ResuladoSalida + "L" + Etiqueta1 + ":\n";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
            this.MiCadena = this.MiCadena + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
        }
        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +this.MiCadena + "\n";
        //this.MiCadena = ""; 
        document.getElementById("salida").innerHTML = document.getElementById("salida").value + respuesta + "\n";
        //this.MiCadena = this.MiCadena + respuesta + "\n";
       
        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    }
}