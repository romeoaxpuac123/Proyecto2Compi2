class Aritmetica extends NodoAbstracto{

Aritmetica(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }

    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("EJECUTANDO NODO ARITMETICA");
        console.log("Casa->" + entorno.numero)
        var Tipo1 = this.Hijos[0].TipoDato;
        var Tipo2 = this.Hijos[2].TipoDato;
        
        var Operador = this.Hijos[1].Nombre;

        var Valor1 = this.Hijos[0].Hijos[0].Nombre;
        var Valor2 = this.Hijos[2].Hijos[0].Nombre;

        var C3D1 = this.Hijos[0].CadenaDe3D;
        var C3D2 = this.Hijos[2].CadenaDe3D
      
        /*DTERMINANDO EL TIPO*/
        var TipoFinal = "";
        if(Tipo1 == "Entero" && Tipo2 == "Entero"){
            TipoFinal = "Entero";
        }else if( (Tipo1 == "Decimal" || Tipo1 == "Entero")  && Tipo2 == "Decimal"){
            TipoFinal = "Decimal";
        }else if( (Tipo1 == "Decimal") && ( Tipo2 == "Entero"  || Tipo2 == "Decimal")){
            TipoFinal = "Decimal";
        }else if( (Tipo1 == "Entero") && (Tipo2 == "Caracter")){
            TipoFinal = "Entero";
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Entero")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
        }else if( (Tipo1 == "Decimal") && (Tipo2 == "Caracter")){
            TipoFinal = "Decimal";
            Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Decimal")){
            TipoFinal = "Decimal";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "+")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.charAt(1);
            Valor2 = Valor2.charAt(1);
     
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "-")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "*")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "/")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == ">")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == ">=")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "<=")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "==")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "!=")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "<")){
            TipoFinal = "Entero";
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }
        else if( (Tipo1 == "Caracter") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.charAt(1);
              Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }
        else if( (Tipo1 == "Cadena") && (Tipo2 == "Caracter") && (Operador == "+")){
            TipoFinal = "Cadena";
            Valor2 = Valor2.charAt(1);
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
           
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }
        else if( (Tipo1 == "Cadena") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }
        else if( (Tipo1 == "Entero" || Tipo1 == "Decimal") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }
        else if( (Tipo1 == "Cadena") && (Tipo2 == "Entero" ||Tipo2 == "Decimal")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }
        else if( (Tipo1 == "Cadena") && (Tipo2 == "Entero" ||Tipo2 == "Decimal")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }
        else if( (Tipo1 == "Booleano") && (Tipo2 == "Booleano")){
            TipoFinal = "Booleano";
        }
        console.log("Valor1: " + Valor1);
        console.log("Valor2: " + Valor2);
        /*OPERANDO SEGÚN EL SIMBOLO*/
        var Total; 

        
        var elid = this.Hijos[0].id;
        var Cadena3dxD = "";
        
        entorno.numero += 1;
        //this.CadenaDe3D = "t" + entorno.numero;
        //console.log("CODIGO->");
        //console.log("t" + entorno.numero + " = " + C3DFinal + ";")
        
        //console.log("FINCONSOLE->");
        if(TipoFinal == "Entero" || TipoFinal == "Decimal"){
            switch(Operador) { 
                case "+": { 
                    Total = +Valor1 + +Valor2
                    var C3DFinal = C3D1 + " + "+ C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";"
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break; 
                } 
                case "-": { 
                    Total = +Valor1 - +Valor2
                    var C3DFinal = C3D1 + " - "+ C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";"
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break; 
                }
                case "*": { 
                    Total = +Valor1 * +Valor2
                    var C3DFinal = C3D1 + " * "+ C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";"
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break; 
                }
                case "/": { 
                    Total = +Valor1 / +Valor2
                    var C3DFinal = C3D1 + " / "+ C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";"
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Decimal";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break; 
                }
                case "%": { 
                    Total = +Valor1 % +Valor2
                    var C3DFinal = C3D1 + " % "+ C3D2;
                    var respuesta = "t" + entorno.numero + " = " + C3DFinal + ";"
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    //TipoFinal  = "Decimal";
                    break; 
                }  
                case "^^": {
                    //Creacion de etiquetas
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    //Fin etiquetas

                    //Creacion de Temporales
                    var C3DFinal = "\n\nt" + entorno.numero + " = " + C3D1 + ";\n";
                    var Temporal1 = "t" + entorno.numero;
                    entorno.numero += 1; 
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + C3D2 + ";\n";
                    var Temporal2 = "t" + entorno.numero;
                    entorno.numero += 1; 
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + "0" + ";\n";
                    var Temporal3 = "t" + entorno.numero;
                    entorno.numero += 1; 
                    C3DFinal = C3DFinal + "t" + entorno.numero + " = " + "1" + ";\n";
                    var Temporal4 = "t" + entorno.numero;
                    //entorno.numero += 1;
                    //fin de Temporales

                    //Creando el for
                    C3DFinal = C3DFinal +"L"+ Etiqueta3 + ":		#\n";
                    C3DFinal = C3DFinal + "if(" + Temporal3 + " < " + Temporal2 + ") goto L" + Etiqueta1 + ";\n";
                    C3DFinal = C3DFinal + "goto L" + Etiqueta2 + ";\n";
                    C3DFinal = C3DFinal +"L"+ Etiqueta1 + ":		#\n";
                    C3DFinal = C3DFinal + Temporal4 + "=" + Temporal4 + " * " + Temporal1 + ";\n"
                    C3DFinal = C3DFinal + Temporal3 + "=" + Temporal3 + " + " + "1" + ";\n"
                    C3DFinal = C3DFinal + "goto L" + Etiqueta3 + ";\n";
                    C3DFinal = C3DFinal +"L"+ Etiqueta2 + ":		#\n";
                    TipoFinal  = "Entero";
                    var respuesta =  C3DFinal;
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    Total = Math.pow(+Valor1,+Valor2);
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break; 
                }
                case ">": { 
                    Total = +Valor1 > +Valor2
                    
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " > t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ;
                    //aprte2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                } 
                case "<": { 
                    Total = +Valor1 < +Valor2
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " < t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ; 
                    //parte 2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //parte 4 = 
                    
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                } 
                case "<=": { 
                    Total = +Valor1 <= +Valor2
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " <= t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ; 
                    //parte 2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //parte 4 = 
                    
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                }
                case ">=": { 
                    Total = +Valor1 >= +Valor2
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " >= t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ; 
                    //parte 2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //parte 4 = 
                    
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                } 
                case "==":{
                    

                    if(Valor1 == Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                    var respuesta = "";
                    //haciendo los casteos a ver que pedo 
                   

                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " == t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ; 
                    //parte 2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //parte 4 = 
                    
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                }
                case "!=":{
                 
                    if(Valor1 != Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " <> t" + (entorno.numero) + ") goto L" + Etiqueta1 + ";\n" ; 
                    //parte 2
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    respuesta = respuesta + "t" + entorno.numero + " = 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n" 
                    respuesta = respuesta + "t" + entorno.numero + " = 0;\n"
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n" 

                    //parte 3
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    respuesta = respuesta + "if(t" + entorno.numero + " == 1) goto L" + Etiqueta4 + ";\n"; 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    respuesta = respuesta + "goto L" + Etiqueta5 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n";
                    //parte 4 = 
                    
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    break; 
                    
                }         
                default: { 
                //statements; 
                break; 
                } 
            } 
        }
        else if(TipoFinal == "Cadena"){
            switch(Operador) { 
                case "+": { 
                console.log("SUMA DE CANEDAS");
                Total = Valor1 + Valor2;
                var respuesta = "";
                
                if(elid == 0){
                    
                    respuesta = respuesta + "t" + entorno.numero + " = H;\n";
                    for(var i = 0; i < Valor1.length ; i++){
                        console.log("fin caden1");
                        respuesta = respuesta + "Heap[H] = " + Valor1.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n"; 
                        
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                    entorno.numero += 1;
                    //break;
                    
                }
                console.log("fin caden2");
                respuesta = respuesta +"t" + entorno.numero + " = H;\n";                
                for(var i = 0; i < Valor2.length ; i++){
                    respuesta = respuesta + "Heap[H] = " + Valor2.charCodeAt(i).toString() + ";\n";
                    respuesta = respuesta + "H = H + 1;\n"; 
                    
                }
                respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = H;\n"
                Cadena3dxD ="t" + entorno.numero;
                entorno.etiquetas +=1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta2 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta3 = entorno.etiquetas;
                respuesta  = respuesta + "L" + Etiqueta1 + ":\n";
                entorno.numero += 1;
                if(elid == 0){
                    respuesta = respuesta + "t" + entorno.numero + " = Heap[t"+ (entorno.numero-3) +"];\n";
                }else{
                    respuesta = respuesta + "t" + entorno.numero + " = Heap["+ this.Hijos[0].CadenaDe3D +"];\n";
                }
                respuesta = respuesta + "if (t" + entorno.numero + " == -1) goto L" + Etiqueta3 + ";\n";
                respuesta = respuesta + "Heap[H] = t" + entorno.numero +";\n";
                respuesta = respuesta + "H = H + 1;\n";
                if(elid == 0){
                    respuesta = respuesta + "t"+ (entorno.numero-3) + " = t" + (entorno.numero-3) + " + 1;\n";
                }else{
                    respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
                }
                respuesta = respuesta + "goto L" + Etiqueta1 + ";\n"
                respuesta = respuesta + "L" + Etiqueta3 + ":\n";
                if(elid == 0){
                    respuesta = respuesta + "t"  + (entorno.numero-3) + " = t" + (entorno.numero-2) + ";\n";
                }else{
                    respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = t" + (entorno.numero-2) + ";\n";
                }
                respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                
                if(elid == 0){
                    respuesta = respuesta + "t" + entorno.numero + " = Heap[t" +  (entorno.numero-3) + "];\n"
                }else{
                    respuesta = respuesta + "t" + entorno.numero + " = Heap[" +  this.Hijos[0].CadenaDe3D + "];\n"
                }
                respuesta = respuesta + "Heap[H] = t" + entorno.numero + ";\n";
                respuesta = respuesta + "H = H + 1;\n"; 
                if(elid == 0){
                    respuesta = respuesta + "t"+ (entorno.numero-3) + " = t" + (entorno.numero-3) + " + 1;\n";
                }else{
                    respuesta = respuesta + this.Hijos[0].CadenaDe3D + " = " + this.Hijos[0].CadenaDe3D + " + 1;\n";
                }
                respuesta = respuesta + "if (t" + entorno.numero + " <> -1) goto L" + Etiqueta2 + ";\n";
                elid = 1;
               
                //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                entorno.direccion = entorno.direccion  + respuesta + "\n";    
                break;
                }
                case "==":{
                    if(Valor1 == Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                        
                    var respuesta = "";
                    var Auxiliar1 = "";
                    var Auxiliar2 = "";
                    
                    if(elid == 0){
                    
                    respuesta = respuesta + "t" + entorno.numero + " = H;\n";
                    Auxiliar1  = "t" + entorno.numero;
                    for(var i = 0; i < Valor1.length ; i++){
                        console.log("fin caden1");
                        respuesta = respuesta + "Heap[H] = " + Valor1.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n"; 
                        
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                    entorno.numero += 1;
                    //break;
                    
                    }else{
                        Auxiliar1 = C3D1;
                    }
                    console.log("fin caden2");
                    respuesta = respuesta +"t" + entorno.numero + " = H;\n";
                    Auxiliar2  = "t" + entorno.numero;                
                    for(var i = 0; i < Valor2.length ; i++){
                        respuesta = respuesta + "Heap[H] = " + Valor2.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n"; 
                        
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";

                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "0"+ ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "0" + ";\n";
                   
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;

                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "Heap[" +Auxiliar1 + "]"+ ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "Heap[" + Auxiliar2 + "];\n";
                    //respuesta = respuesta + "if(t" + (entorno.numero) +" != t"+ (entorno.numero-1) +") goto Lx" + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) +" == "+ "-1" +") goto L"+ Etiqueta2 + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero) +" == "+ "-1" +") goto L"+ Etiqueta2 + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero) +" <> "+ "t" + (entorno.numero-1) +") goto L"+ Etiqueta3 + ";\n";
                    respuesta = respuesta + Auxiliar1 + " = " + Auxiliar1   +" + 1;\n"
                    respuesta = respuesta + Auxiliar2 + " = " + Auxiliar2   +" + 1;\n"
                    respuesta = respuesta + "t" + (entorno.numero-3)  + " = " + "t" + (entorno.numero-3) + " + 1;\n"
                    respuesta = respuesta + "t" + (entorno.numero-2)  + " = " + "t" + (entorno.numero-2) + " + 1;\n"
                    respuesta = respuesta + "goto L" + Etiqueta1 + ";\n";
                    
                    
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n";
                    //respuesta = respuesta + "CODIGO DIFERNTES\n";
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta4 + ";\n";
                    
                    
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) +" <> "+ "t" + (entorno.numero-2) +") goto L"+ Etiqueta3 + ";\n";
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n";
                    elid = 1;
                    Cadena3dxD = "t" + entorno.numero;
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                    
                
                }
                case "!=":{
                    if(Valor1 != Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                        
                    var respuesta = "";
                    var Auxiliar1 = "";
                    var Auxiliar2 = "";
                    
                    if(elid == 0){
                    
                    respuesta = respuesta + "t" + entorno.numero + " = H;\n";
                    Auxiliar1  = "t" + entorno.numero;
                    for(var i = 0; i < Valor1.length ; i++){
                        console.log("fin caden1");
                        respuesta = respuesta + "Heap[H] = " + Valor1.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n"; 
                        
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";
                    entorno.numero += 1;
                    //break;
                    
                    }else{
                        Auxiliar1 = C3D1;
                    }
                    console.log("fin caden2");
                    respuesta = respuesta +"t" + entorno.numero + " = H;\n";
                    Auxiliar2  = "t" + entorno.numero;                
                    for(var i = 0; i < Valor2.length ; i++){
                        respuesta = respuesta + "Heap[H] = " + Valor2.charCodeAt(i).toString() + ";\n";
                        respuesta = respuesta + "H = H + 1;\n"; 
                        
                    }
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n\n\n";

                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "0"+ ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "0" + ";\n";
                   
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;

                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "Heap[" +Auxiliar1 + "]"+ ";\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero + " = " + "Heap[" + Auxiliar2 + "];\n";
                    //respuesta = respuesta + "if(t" + (entorno.numero) +" != t"+ (entorno.numero-1) +") goto Lx" + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) +" == "+ "-1" +") goto L"+ Etiqueta2 + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero) +" == "+ "-1" +") goto L"+ Etiqueta2 + ";\n";
                    respuesta = respuesta + "if(t" + (entorno.numero) +" <> "+ "t" + (entorno.numero-1) +") goto L"+ Etiqueta3 + ";\n";
                    respuesta = respuesta + Auxiliar1 + " = " + Auxiliar1   +" + 1;\n"
                    respuesta = respuesta + Auxiliar2 + " = " + Auxiliar2   +" + 1;\n"
                    respuesta = respuesta + "t" + (entorno.numero-3)  + " = " + "t" + (entorno.numero-3) + " + 1;\n"
                    respuesta = respuesta + "t" + (entorno.numero-2)  + " = " + "t" + (entorno.numero-2) + " + 1;\n"
                    respuesta = respuesta + "goto L" + Etiqueta1 + ";\n";
                    
                    
                    respuesta = respuesta + "L" + Etiqueta3 + ":\n";
                    //respuesta = respuesta + "CODIGO DIFERNTES\n";
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"

                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";

                    

                    respuesta = respuesta + "goto L" + Etiqueta4 + ";\n";
                    
                    
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) +" <> "+ "t" + (entorno.numero-2) +") goto L"+ Etiqueta3 + ";\n";
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";

                    respuesta = respuesta + "L" + Etiqueta4 + ":\n";
                    elid = 1;
                    Cadena3dxD = "t" + entorno.numero;
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                    
                
                }
            }
        }
        else if(TipoFinal == "Booleano"){
            switch(Operador) { 
                case "&&":{
                    //Total = (Valor1 && Valor2);
                    var c3x = "";
                    var c3x2 = "";
                    if(Valor1 == "true" && Valor2 == "true"){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                    console.log("EL LC31ES.->" + C3D1)
                    console.log("EL LC32ES.->" + C3D2)
                    if(C3D1 == "true"){
                        C3D1 = "1";
                        c3x = "1";
                    }else if(C3D1 == "false"){
                        C3D1 = "0";
                        c3x = "0";
                    }
                    if(C3D2 == "true"){
                        C3D2 = "1";
                        c3x2 = "1";
                    }else if(C3D2 == "false"){
                        C3D2 = "0";
                        c3x2 = "0";
                    }
                    
                    
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    var lat1;
                    var lat2;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        
                        if(c3x2=="1" || c3x2=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    if(C3D2=="1" || C3D2=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x=="1" || c3x=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D2 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    
                    
                    entorno.numero += 1;
                    respuesta = respuesta + "t" +  entorno.numero + " = 0;\n";
                    entorno.numero += 1;
                    respuesta = respuesta + "t" +  entorno.numero + " = " + C3D1 +";\n";
                    var Auxiliar1 = "t" +  entorno.numero;
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n"  
                    entorno.numero += 1;                    
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ Auxiliar1 + "];\n";

                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta2 + ";\n" ;
                    respuesta = respuesta + "t" + (entorno.numero-2) + " = t" + (entorno.numero-2) + " + 1;\n";
                    respuesta = respuesta + "" + Auxiliar1 + " = " + Auxiliar1 + " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta1 + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta2) + ":\n";
                
                    respuesta = respuesta + "if(t" + (entorno.numero-2) + " == 5) goto L" + Etiqueta3 + ";\n";
                    entorno.numero += 1;
                    
                    //probando el segundo numero
                    entorno.numero += 1;
                    respuesta = respuesta + "t" +  entorno.numero + " = 0;\n";

                    entorno.numero += 1;
                    respuesta = respuesta + "t" +  entorno.numero + " = " + C3D2 +";\n";
                    var Auxiliar2 = "t" +  entorno.numero;
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta5 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta6 = entorno.etiquetas;
                    respuesta = respuesta + "L" + Etiqueta4 + ":\n" 
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ Auxiliar2 + "];\n";                   

                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta5 + ";\n" ;
                    
                    respuesta = respuesta + "t" + (entorno.numero-2) + " = t" + (entorno.numero-2) + " + 1;\n";
                    respuesta = respuesta + "" + Auxiliar2 + " = " + Auxiliar2 + " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta4 + ";\n"
                    respuesta = respuesta + "L" + Etiqueta5 + ":\n"
                    respuesta = respuesta + "if(t" + (entorno.numero-2) + " == 5) goto L" + Etiqueta3 + ";\n";
                    //TREU
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                   
                        respuesta = respuesta + "goto L" + Etiqueta6 + ";\n";

                    respuesta = respuesta + "L" + Etiqueta3 + ":\n"
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    
                    respuesta = respuesta + "L" + Etiqueta6 + ":\n"
               
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
                case "||":{
                    if(Valor2=="false" && Valor1 == "false"){
                        Total = "false";
                    }else{
                        Total = "true";
                    }
                 
                  
                    console.log("EL LC31ES.->" + C3D1)
                    console.log("EL LC32ES.->" + C3D2)
                    var c3x = "";
                    var c3x2 = "";
                    
                    if(C3D1 == "true"){
                        C3D1 = "1";
                        c3x = "1";
                    }else if(C3D1 == "false"){
                        C3D1 = "0";
                        c3x = "0";
                    }
                    if(C3D2 == "true"){
                        C3D2 = "1";
                        c3x2 = "1";
                    }else if(C3D2 == "false"){
                        C3D2 = "0";
                        c3x2 = "0";
                    }
                    
                    
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    var lat1;
                    var lat2;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x2=="1" || c3x2=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                       // respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    if(C3D2=="1" || C3D2=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x=="1" || c3x=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D2 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                   
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;

                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = 0;\n";

                    respuesta = respuesta + "L" + Etiqueta1 + ":\n";

               
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ C3D1 + "];\n";
                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta2 + ";\n" ;
                    respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                    respuesta = respuesta + "" + C3D1 + " = " + C3D1 + " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta1 + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta2) + ":\n";
                    //si es verdadero
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 4) goto L" + Etiqueta3 + ";\n";
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta5= entorno.etiquetas;

                    entorno.etiquetas +=1;
                    var Etiqueta6= entorno.etiquetas;

                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = 0;\n";

                    respuesta = respuesta + "L" + Etiqueta4 + ":\n";

                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ C3D2 + "];\n";

                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta5 + ";\n" ;
                    respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                    respuesta = respuesta + "" + C3D2 + " = " + C3D2 + " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta4 + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta5) + ":\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 4) goto L" + Etiqueta3 + ";\n";
                    
                    entorno.numero += 1;
                    
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta6 + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta3) + ":\n";

                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    respuesta = respuesta + "L" + (Etiqueta6) + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
                case "^":{
                    //Total = (Valor1 && Valor2);
                    if(Valor1 == Valor2){
                        Total = "false";
                    }else{
                        Total = "true";
                    }
                    console.log("EL LC31ES.->" + C3D1)
                    console.log("EL LC32ES.->" + C3D2)
                    var c3x = "";
                    var c3x2 = "";
                    
                    if(C3D1 == "true"){
                        C3D1 = "1";
                        c3x = "1";
                    }else if(C3D1 == "false"){
                        C3D1 = "0";
                        c3x = "0";
                    }
                    if(C3D2 == "true"){
                        C3D2 = "1";
                        c3x2 = "1";
                    }else if(C3D2 == "false"){
                        C3D2 = "0";
                        c3x2 = "0";
                    }
                    
                    
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    var lat1;
                    var lat2;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x2=="1" || c3x2=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    if(C3D2=="1" || C3D2=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x=="1" || c3x=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D2 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }
                    entorno.etiquetas +=1;
                    var Etiqueta1 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta2 = entorno.etiquetas;
                   
                    
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ C3D1 + "];\n";
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = Heap["+ C3D2 + "];\n";
                    respuesta = respuesta + "if(t" + (entorno.numero-1) + " == t" + entorno.numero + ") goto L" + Etiqueta1 + ";\n";
                    entorno.numero += 1; 
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                    C3D2 = "t" +  entorno.numero;
                    //aca
                    respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                    
                    //FIN
                    //parte 3
                    respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                    respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                    respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                    //aca
                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                    respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                    respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                    //fin
                    respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
                case "!":{
                    if(Valor1 == "true"){
                        Total = "false";
                    }else{
                        Total = "true";
                    }
                    if(C3D1 == "true"){
                        C3D1 = "1";
                    }
                    var respuesta = "//nodo not\n";
                     respuesta =  "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        
                        respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;

                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                      
                          //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"

                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                     
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                       
                    }else{
                        entorno.numero += 1;
                        respuesta = respuesta  + "t" + entorno.numero +" = " + "0" + ";\n"
                        entorno.etiquetas +=1;
                        var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta3x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta4x = entorno.etiquetas;
                        entorno.numero += 1;
                        
                        
                        respuesta = respuesta + "L" + Etiqueta1x + ":\n";
                        respuesta = respuesta  + "t" + entorno.numero +" = Heap[" + C3D1 + "];\n"
                        respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta2x + ";\n" ;
                        respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                        respuesta = respuesta + "" +C3D1 + " = " + "" + C3D1 + " + 1;\n";
                        respuesta = respuesta + "goto L" + Etiqueta1x + ";\n"
                        respuesta = respuesta + "L" + (Etiqueta2x) + ":\n";
                        respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 4" + ") goto L" + Etiqueta3x + ";\n" ;
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "goto L" + Etiqueta4x + ";\n";
                        respuesta = respuesta + "L" + (Etiqueta3x) + ":\n";
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"

                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + (Etiqueta4x) + ":\n";
                    }
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
                case "==":{
                    var c3x = "";
                    var c3x2 = "";
                    if(Valor1 == Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                    if(C3D1 == "true"){
                        C3D1 = "1";
                        c3x = "1";
                    }else if(C3D1 == "false"){
                        C3D1 = "0";
                        c3x = "0";
                    }
                    if(C3D2 == "true"){
                        C3D2 = "1";
                        c3x2 = "1";
                    }else if(C3D2 == "false"){
                        C3D2 = "0";
                        c3x2 = "0";
                    }
                    
                    
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    var lat1;
                    var lat2;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x2=="1" || c3x2=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    if(C3D2=="1" || C3D2=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x=="1" || c3x=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D2 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    entorno.numero += 1;
                    var auxiliar11x ="";
                    respuesta = respuesta + "t" + entorno.numero +" = " + "0" + ";\n"
                    auxiliar11x = "t" + entorno.numero;
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + "0" +  ";\n"


                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D1 + ";\n"
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    entorno.etiquetas +=1;
                     var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta3x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta4x = entorno.etiquetas;
                        

                   
                    respuesta = respuesta + "L" + Etiqueta1x + ":\n";


                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-1) + "]" + ";\n"
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-2) + "]" + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta2x + ";\n" ;
                    respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                    respuesta = respuesta + "t" +(entorno.numero-2) + " = " + "t" + (entorno.numero-2)+ " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta1x + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta2x) + ":\n";
                   // respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 4" + ") goto L" + Etiqueta3x + ";\n" ;


                   
                   
                   entorno.numero += 1;
                   var auxiliar11x2 = "";
                   respuesta = respuesta + "t" + entorno.numero +" = " + "0" +  ";\n"
                   auxiliar11x2 = "t" + entorno.numero;
                    entorno.numero += 1;
                  respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                  respuesta = respuesta + "L" + Etiqueta3x + ":\n";
                   entorno.numero += 1;
                   respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-1) + "]" + ";\n"
                   //entorno.numero += 1;
                   //respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-2) + "]" + ";\n"
                   respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta4x + ";\n" ;
                   respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                   respuesta = respuesta + "t" +(entorno.numero-2) + " = " + "t" + (entorno.numero-2)+ " + 1;\n";
                   respuesta = respuesta + "goto L" + Etiqueta3x + ";\n"
                   respuesta = respuesta + "L" + (Etiqueta4x) + ":\n";
                    //CONCLUSION FINAL 
                    entorno.etiquetas +=1;
                     var EtiquetaF1 = entorno.etiquetas;
                     entorno.etiquetas +=1;
                     var EtiquetaF2 = entorno.etiquetas;
                     respuesta = respuesta + "if(" + (auxiliar11x) + " == " + (auxiliar11x2) + ") goto L" + EtiquetaF1 + ";\n" ;
                     entorno.numero += 1; 
                     respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                     C3D2 = "t" +  entorno.numero;
                     respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                     respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                     respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                     //parte 3
                     respuesta = respuesta + "goto L" + EtiquetaF2 + ";\n";
                     respuesta = respuesta + "L" + EtiquetaF1 + ":\n" ;
                     respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                     respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                     respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                     respuesta = respuesta + "L" + EtiquetaF2 + ":\n";
                    
                    
                     //a comparar esa onda :( )
                   // document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
                case "!=":{
                    var c3x = "";
                    var c3x2 = "";
                    if(Valor1 != Valor2){
                        Total = "true";
                    }else{
                        Total = "false";
                    }
                    if(C3D1 == "true"){
                        C3D1 = "1";
                        c3x = "1";
                    }else if(C3D1 == "false"){
                        C3D1 = "0";
                        c3x = "0";
                    }
                    if(C3D2 == "true"){
                        C3D2 = "1";
                        c3x2 = "1";
                    }else if(C3D2 == "false"){
                        C3D2 = "0";
                        c3x2 = "0";
                    }
                    
                    
                    var respuesta = "t" + entorno.numero +" = " + C3D1 + ";\n"
                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    var lat1;
                    var lat2;
                    if(C3D1=="1" || C3D1=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x2=="1" || c3x2=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D1 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    if(C3D2=="1" || C3D2=="0"){
                        entorno.etiquetas +=1;
                        var Etiqueta1 = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2 = entorno.etiquetas;
                        if(c3x=="1" || c3x=="0"){
                            respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                      
                        }else{
                            respuesta = respuesta + "if(t" + (entorno.numero) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        }
                        //respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 1" + ") goto L" + Etiqueta1 + ";\n" ; 
                        //parte 2
                        entorno.numero += 1; 
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                        C3D2 = "t" +  entorno.numero;
                        respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                        respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";
                        //parte 3
                        respuesta = respuesta + "goto L" + Etiqueta2 + ";\n";
                        respuesta = respuesta + "L" + Etiqueta1 + ":\n" ;
                        respuesta = respuesta + "t" +  entorno.numero + " = H;\n";
                        respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                        respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";
                        respuesta = respuesta + "L" + Etiqueta2 + ":\n";
                    }

                    entorno.numero += 1;
                    var auxiliar11x ="";
                    respuesta = respuesta + "t" + entorno.numero +" = " + "0" + ";\n"
                    auxiliar11x = "t" + entorno.numero;
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + "0" +  ";\n"


                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + C3D1 + ";\n"
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                    entorno.etiquetas +=1;
                     var Etiqueta1x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta3x = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta4x = entorno.etiquetas;
                        

                   
                    respuesta = respuesta + "L" + Etiqueta1x + ":\n";


                    entorno.numero += 1;
                    respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-1) + "]" + ";\n"
                    //entorno.numero += 1;
                    //respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-2) + "]" + ";\n"
                    respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta2x + ";\n" ;
                    respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                    respuesta = respuesta + "t" +(entorno.numero-2) + " = " + "t" + (entorno.numero-2)+ " + 1;\n";
                    respuesta = respuesta + "goto L" + Etiqueta1x + ";\n"
                    respuesta = respuesta + "L" + (Etiqueta2x) + ":\n";
                   // respuesta = respuesta + "if(t" + (entorno.numero-1) + " == 4" + ") goto L" + Etiqueta3x + ";\n" ;


                   
                   
                   entorno.numero += 1;
                   var auxiliar11x2 = "";
                   respuesta = respuesta + "t" + entorno.numero +" = " + "0" +  ";\n"
                   auxiliar11x2 = "t" + entorno.numero;
                    entorno.numero += 1;
                  respuesta = respuesta + "t" + entorno.numero +" = " + C3D2 + ";\n"
                  respuesta = respuesta + "L" + Etiqueta3x + ":\n";
                   entorno.numero += 1;
                   respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-1) + "]" + ";\n"
                   //entorno.numero += 1;
                   //respuesta = respuesta + "t" + entorno.numero +" = " + "Heap[t" + (entorno.numero-2) + "]" + ";\n"
                   respuesta = respuesta + "if(t" + (entorno.numero) + " == - 1" + ") goto L" + Etiqueta4x + ";\n" ;
                   respuesta = respuesta + "t" + (entorno.numero-1) + " = t" + (entorno.numero-1) + " + 1;\n";
                   respuesta = respuesta + "t" +(entorno.numero-2) + " = " + "t" + (entorno.numero-2)+ " + 1;\n";
                   respuesta = respuesta + "goto L" + Etiqueta3x + ";\n"
                   respuesta = respuesta + "L" + (Etiqueta4x) + ":\n";
                    //CONCLUSION FINAL 
                    entorno.etiquetas +=1;
                     var EtiquetaF1 = entorno.etiquetas;
                     entorno.etiquetas +=1;
                     var EtiquetaF2 = entorno.etiquetas;
                     respuesta = respuesta + "if(" + (auxiliar11x) + " == " + (auxiliar11x2) + ") goto L" + EtiquetaF1 + ";\n" ;
                     entorno.numero += 1; 
                     respuesta = respuesta + "t" +  entorno.numero + " = H;\n"
                     C3D2 = "t" +  entorno.numero;

                     respuesta = respuesta + "Heap[H] = 116;\nH = H + 1;\nHeap[H] = 114;\nH = H + 1;\nHeap[H] = 117;\n";
                     respuesta = respuesta + "H = H + 1;\nHeap[H] = 101;\nH = H + 1;\nHeap[H] = -1;\nH = H + 1;\n";

                     
                     //parte 3
                     respuesta = respuesta + "goto L" + EtiquetaF2 + ";\n";
                     respuesta = respuesta + "L" + EtiquetaF1 + ":\n" ;
                     respuesta = respuesta + "t" +  entorno.numero + " = H;\n";

                    respuesta = respuesta + "Heap[H] = 102;\nH = H + 1;\nHeap[H] = 97;\nH = H + 1;\nHeap[H] = 108;\n";
                     respuesta = respuesta + "H = H + 1;\nHeap[H] = 115;\nH = H + 1;\nHeap[H] = 101;\nH = H + 1;\n";
                     respuesta = respuesta + "Heap[H] = -1;\nH = H + 1;\n";

                     respuesta = respuesta + "L" + EtiquetaF2 + ":\n";
                    
                    
                     //a comparar esa onda :( )
                    //document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value + respuesta + "\n";
                    TipoFinal  = "Booleano";
                    entorno.direccion = entorno.direccion  + respuesta + "\n";
                    break;
                }
            }
        }
        
        console.log("RESULTADO FINAL:->" + Total);
       

        var nuevo = new Nodo(TipoFinal);
        var nuevovalor = new Nodo(Total.toString());
		nuevo.Hijos[0] = nuevovalor;
        nuevo.TipoDato = TipoFinal;
        nuevo.id = elid;
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        if(elid == 1){
            nuevo.ModificarCadena(Cadena3dxD);
        }else{
            nuevo.ModificarCadena("t" + entorno.numero);
        }
        
        //entorno.numero += 1;
        return nuevo;
    }
}