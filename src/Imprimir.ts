class Imprimir extends NodoAbstracto{

    
    Imprimir(val : string){
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
        if(this.Hijos[0].TipoDato == "ID"){
            for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                if(this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCION[i]){
                    TipoAImprimir =  entorno.TipoVariablesFUNCION[i];
                    C3dT = entorno.TesVariablesFUNCION[i];
                }
            }

            if(TipoAImprimir.toUpperCase() == "INTEGER"){
                TipoAImprimir = "\"%i\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
            }else  if(TipoAImprimir.toUpperCase() == "DOUBLE"){
                TipoAImprimir = "\"%d\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
            }
            else  if(TipoAImprimir.toUpperCase() == "CHAR"){
                TipoAImprimir = "\"%c\", ";
                entorno.numero += 1;
                var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3dT  + "]" ;
                //TipoAImprimir = "\"%i\", ";
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
                entorno.direccion = entorno.direccion  + auxiliar + ";\n" +"print( " + TipoAImprimir  + "t" + entorno.numero   + " );\n"+ "print( \"%c\",10);"+ "\n";
            }
            else if(TipoAImprimir.toUpperCase() == "BOOLEAN"){
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
                    entorno.direccion = entorno.direccion + ResuladoSalida+ "print( \"%c\",10);"+ "\n";

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
                    entorno.direccion = entorno.direccion + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
                }
                
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
                entorno.direccion = entorno.direccion + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
           
            }

            
        }
        else if(this.Hijos[0].TipoDato == "Entero"){
            TipoAImprimir = "\"%i\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion  + "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
        }
        else if(this.Hijos[0].TipoDato == "Decimal"){
            TipoAImprimir = "\"%d\", ";
            //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
            entorno.direccion = entorno.direccion +  "print( " + TipoAImprimir + this.Hijos[0].CadenaDe3D + " );\n"+ "print( \"%c\",10);"+ "\n";
        }else if(this.Hijos[0].TipoDato == "Cadena"){

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
            entorno.direccion = entorno.direccion + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
        }
        else if(this.Hijos[0].TipoDato == "Booleano"){

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
            entorno.direccion = entorno.direccion + ResuladoSalida+ "print( \"%c\",10);"+ "\n";
        }
        //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +entorno.direccion + "\n";
        //entorno.direccion = ""; 
        document.getElementById("salida").innerHTML = document.getElementById("salida").value + respuesta + "\n";
        //entorno.direccion = entorno.direccion + respuesta + "\n";
       
        var nuevo = new Nodo("Imprimir");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    }
}