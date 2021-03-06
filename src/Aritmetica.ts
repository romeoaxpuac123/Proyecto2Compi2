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
        var ElPrimerIDCadena = "";
        var ElSegundoIDCadnea = "";

        var Tipo1 = this.Hijos[0].TipoDato;
        var Tipo2 = this.Hijos[2].TipoDato;
        
        var Operador = this.Hijos[1].Nombre;

        var Valor1 = this.Hijos[0].Hijos[0].Nombre;
        var Valor2 = this.Hijos[2].Hijos[0].Nombre;

        var C3D1 = this.Hijos[0].CadenaDe3D;
        var C3D2 = this.Hijos[2].CadenaDe3D
    
        var banderaChar1 = 0;
        var banderaChar2 = 0;

        if(Tipo1 == "Caracter2"){
            banderaChar1 = 1;
            Tipo1 = "Caracter";
        }
        if(Tipo2 == "Caracter2"){
            banderaChar2 = 1;
            Tipo2 = "Caracter";
        }

        if(Tipo1 == "ID"){
            //alert("el valor 1 es un id");
            var don1 = "ERROR";
            for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                if(this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCION[i]){
                    Tipo1 =  entorno.TipoVariablesFUNCION[i];
                    C3D1 = entorno.TesVariablesFUNCION[i];
                    don1 = C3D1;
                }
            }
            if(don1 == "ERROR"){
                for(var i = 0; i < entorno.Variable.length;i++){
                    if(this.Hijos[0].CadenaDe3D == entorno.Variable[i]){
                        Tipo1 =  entorno.Tipo[i];
                        C3D1 = entorno.Tes[i];
                        don1 = C3D1;
                    }
                }
            }
            var bandera1 = "false";
            if(don1 == "ERROR"){ 
                for(var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length;i++){
                    if(this.Hijos[0].CadenaDe3D == entorno.VariableVariablesFUNCIONGLOBAL[i]){
                        Tipo1 =  entorno.TipoVariablesFUNCIONGLOBAL[i];
                        C3D1 = entorno.TesVariablesFUNCIONGLOBAL[i];
                        don1 = C3D1;
                        bandera1 = "true";
                    }
                }
            }
            if(don1 == "ERROR"){
                alert('Este es un semantico: ' + this.Hijos[0].CadenaDe3D + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Variable: "+ this.Hijos[0].CadenaDe3D + "No Existe"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }

            entorno.numero += 1;
            var auxiliar = "";// "t" + entorno.numero + " = " + "stack[" + C3D1  + "];\n" ;
            if(bandera1 == "true"){
               auxiliar = "t" + entorno.numero + " = " + "Heap[" + C3D1  + "];\n" ;
            }else{
                auxiliar = "t" + entorno.numero + " = " + "stack[" + C3D1  + "];\n" ;
            }
            
            C3D1 = "t" + entorno.numero ;
            entorno.direccion = entorno.direccion + "##ide2\n" + auxiliar ;
            if(Tipo1.toUpperCase() == "INTEGER"){
                Tipo1 = "Entero";
            }else if(Tipo1.toUpperCase() == "DOUBLE"){
                Tipo1 = "Decimal";
            }
            else if(Tipo1.toUpperCase() == "CHAR"){
                Tipo1 = "DON";
                
            }
            else if(Tipo1.toUpperCase() == "BOOLEAN"){
                Tipo1 = "Booleano";
            }
            else if(Tipo1.toUpperCase() == "STRING"){
                
                Tipo1 = "Celular";
            }
        }
        if(Tipo2 == "ID"){
            //alert("el valor 2 es un id");
            var don2 = "ERROR";
            for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
                if(this.Hijos[2].CadenaDe3D == entorno.VariableVariablesFUNCION[i]){
                    Tipo2 =  entorno.TipoVariablesFUNCION[i];
                    C3D2 = entorno.TesVariablesFUNCION[i];
                    don2 = C3D2;
                }
            }
            if(don2 == "ERROR"){
                for(var i = 0; i < entorno.Variable.length;i++){
                    if(this.Hijos[2].CadenaDe3D == entorno.Variable[i]){
                        Tipo2 =  entorno.Tipo[i];
                        C3D2 = entorno.Tes[i];
                        don2 = C3D2;
                    }
                }

            }
            var bandera1 = "false";
            if(don2 == "ERROR"){
                for(var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length;i++){
                    if(this.Hijos[2].CadenaDe3D == entorno.VariableVariablesFUNCIONGLOBAL[i]){
                        Tipo2 =  entorno.TipoVariablesFUNCIONGLOBAL[i];
                        C3D2 = entorno.TesVariablesFUNCIONGLOBAL[i];
                        don2 = C3D2;
                        bandera1 = "true";
                    }
                }

            }
            if(don2 == "ERROR"){
                alert('Este es un semantico: ' + this.Hijos[2].CadenaDe3D + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Variable: "+ this.Hijos[2].CadenaDe3D + "No Existe"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
            }
            entorno.numero += 1;

            var auxiliar = "";// "t" + entorno.numero + " = " + "stack[" + C3D1  + "];\n" ;
            if(bandera1 == "true"){
               auxiliar = "t" + entorno.numero + " = " + "Heap[" + C3D2  + "];\n" ;
            }else{
                auxiliar = "t" + entorno.numero + " = " + "stack[" + C3D2  + "];\n" ;
            }

            //var auxiliar = "t" + entorno.numero + " = " + "stack[" + C3D2  + "];\n" ;
            C3D2 = "t" + entorno.numero ;
            entorno.direccion = entorno.direccion + "##ide2\n" + auxiliar ;
            if(Tipo2.toUpperCase() == "INTEGER"){
                Tipo2 = "Entero";
            }else if(Tipo2.toUpperCase() == "DOUBLE"){
                Tipo2 = "Decimal";
            }
            else if(Tipo2.toUpperCase() == "CHAR"){
                Tipo2 = "DON";                
            }
            else if(Tipo2.toUpperCase() == "BOOLEAN"){
                Tipo2 = "Booleano";
            }
            else if(Tipo2.toUpperCase() == "STRING"){
                Tipo2 = "Celular";
            }
        }
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
            if(banderaChar2 == 0){
                Valor2 = Valor2.charCodeAt(1).toString();
            }           
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Entero")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0){
                Valor1 = Valor1.charCodeAt(1).toString();
            }  
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
        }else if( (Tipo1 == "Decimal") && (Tipo2 == "Caracter")){
            TipoFinal = "Decimal";
            if(banderaChar2 == 0){
                Valor2 = Valor2.charCodeAt(1).toString();
            }
            //Valor2 = Valor2.charCodeAt(1).toString();
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Decimal")){
            TipoFinal = "Decimal";
            if(banderaChar1 == 0){
                Valor1 = Valor1.charCodeAt(1).toString();
            }
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "+")){
            TipoFinal = "Cadena";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charAt(1);
            if(banderaChar2 == 0)
            Valor2 = Valor2.charAt(1);
            //console.log("<->>>>>>>>>> don dliabox B1->" + Valor1);
            //console.log("<->>>>>>>>>> don dliabox B2->" + Valor2);
     
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "-")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1;
            if(banderaChar2 == 0) 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "*")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1;
            if(banderaChar2 == 0) 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "/")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1;
            if(banderaChar2 == 0) 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == ">")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1;
            if(banderaChar2 == 0) 
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == ">=")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            if(banderaChar2 == 0)
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "<=")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            if(banderaChar2 == 0)
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "==")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            if(banderaChar2 == 0)
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "!=")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            if(banderaChar2 == 0)
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Caracter") && (Operador == "<")){
            TipoFinal = "Entero";
            if(banderaChar1 == 0)
            Valor1 = Valor1.charCodeAt(1).toString(); 
            C3D1 = Valor1; 
            if(banderaChar2 == 0)
            Valor2 = Valor2.charCodeAt(1).toString(); 
            C3D2 = Valor2; 
        }else if( (Tipo1 == "Caracter") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            
            Valor1 = Valor1.charAt(1);
              Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }else if( (Tipo1 == "Cadena") && (Tipo2 == "Caracter") && (Operador == "+")){
            TipoFinal = "Cadena";
           
            Valor2 = Valor2.charAt(1);
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
           
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }else if( (Tipo1 == "Cadena") && (Tipo2 == "Booleano") && (Operador == "+")){
            TipoFinal = "Cadena";
            Valor2 = Valor2.toLocaleLowerCase();
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
           
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }else if( (Tipo1 == "Booleano") && (Tipo2 == "Cadena") && (Operador == "+")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.toLocaleLowerCase();
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
           
            //Valor1 = Valor1.charCodeAt(1).toString(); 
            //Valor2 = Valor2.charCodeAt(1).toString(); 
            //C3D1 = Valor1; 
            //C3D2 = Valor2;
        }else if( (Tipo1 == "Cadena") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }else if( (Tipo1 == "Entero" || Tipo1 == "Decimal") && (Tipo2 == "Cadena")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }else if( (Tipo1 == "Cadena") && (Tipo2 == "Entero" ||Tipo2 == "Decimal")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }else if( (Tipo1 == "Cadena") && (Tipo2 == "Entero" ||Tipo2 == "Decimal")){
            TipoFinal = "Cadena";
            Valor1 = Valor1.replace("\"","");
            Valor1 = Valor1.replace("\"","");
            Valor2 = Valor2.replace("\"","");
            Valor2 = Valor2.replace("\"","");
        }else if( (Tipo1 == "Booleano") && (Tipo2 == "Booleano")){
            TipoFinal = "Booleano";
        }
        //aca comienzan las cosas con ids :P
       
        else if( (Tipo1 == "Celular") && (Tipo2 == "Celular")){
            TipoFinal = "Celular";
        }
        else if( (Tipo1 == "DON") && (Tipo2 == "DON")){
            TipoFinal = "DON";
        }
        else if( (Tipo1 == "DON") && (Tipo2 == "Decimal" || Tipo2 == "Entero")){
            Valor1 = C3D1;
            TipoFinal = Tipo2;
        }
        else if( (Tipo2 == "DON") && (Tipo1 == "Decimal" || Tipo1 == "Entero")){
            Valor1 = C3D2;
            TipoFinal = Tipo1;
        }
        console.log("Valor1: " + Valor1);
        console.log("Valor2: " + Valor2);
        console.log("ValorC3D1: " + C3D1);
        console.log("ValorC3D2: " + C3D2);
        /*OPERANDO SEGÚN EL SIMBOLO*/
        var Total; 

        var EntroAUnaOperacion = "FALSE";

        
        var elid = this.Hijos[0].id;
        var Cadena3dxD = "";
        
        entorno.numero += 1;
        //this.CadenaDe3D = "t" + entorno.numero;
        //console.log("CODIGO->");
        //console.log("t" + entorno.numero + " = " + C3DFinal + ";")
        
        //console.log("FINCONSOLE->");
        if(TipoFinal == "Entero" || TipoFinal == "Decimal"){
            EntroAUnaOperacion = "TRUE";
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
                    if(Valor2 == "0"){
                        alert('Este es un semantico: ' + "EXP incorrecta" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                        entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                        entorno.LosErrores +="<tr>";
                        entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                        entorno.LosErrores += "<td>" +  "se divide 0"  + " </td>";
                        entorno.LosErrores += "<td>" + this.linea + "</td>";
                        entorno.LosErrores += "<td>" + this.columna + "</td>";
                        entorno.LosErrores += "</tr>";
                    }

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
                    EntroAUnaOperacion = "TRUE";
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
                //aca 1
                if(elid == 0){
                    respuesta = respuesta + "t" + entorno.numero + " = Heap[t"+ (entorno.numero-3) +"];\n";
                }else{
                    respuesta = respuesta + "t" + entorno.numero + " = Heap["+ this.Hijos[0].CadenaDe3D +"];\n";
                }
                //aca 1
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
                //aca 1
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
                //aca 1
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
                    EntroAUnaOperacion = "TRUE";
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
                    EntroAUnaOperacion = "TRUE";
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
            EntroAUnaOperacion = "TRUE";
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
                    console.log("entro a negacion_>")
                    if(Valor1 == "true"){
                        Total = "false";
                    }else{
                        Total = "true";
                    }
                    if(C3D1 == "true"){
                        C3D1 = "1";
                    }else{
                        C3D1 = "0";
                    }
                    console.log("entro a negacion_>" + Valor1)
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
        //opercioens del ida
      

        else if(TipoFinal == "Celular" && Operador == "+"){
            EntroAUnaOperacion = "TRUE";
                var respuesta = "##stringid + stringid\n";
                //entorno.numero += 1;
                //respuesta = respuesta + "t" + entorno.numero + " = H;\n"
                entorno.etiquetas +=1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta2 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta3 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta4 = entorno.etiquetas;
                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = H;\n"
                Cadena3dxD ="t" + entorno.numero;

                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = " + C3D1 +";\n";
                C3D1 = "t" + entorno.numero;

                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = " + C3D2 +";\n";
                C3D2 = "t" + entorno.numero;

               

                respuesta  = respuesta + "L" + Etiqueta1 + ":\n";

                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = Heap["+ C3D1 +"];\n";
                respuesta = respuesta + "if (t" + entorno.numero + " == -1) goto L" + Etiqueta2 + ";\n";
                respuesta = respuesta + "Heap[H] = " + "t" + entorno.numero +";\n";
                respuesta = respuesta + C3D1 + " = " + C3D1 + " + 1;\n";
                respuesta = respuesta + "H = H + 1;\n";
                respuesta = respuesta + "goto L" + Etiqueta1 + ";\n";
                respuesta  = respuesta + "L" + Etiqueta2 + ":\n";

                respuesta  = respuesta + "L" + Etiqueta3 + ":\n";

                entorno.numero += 1;
                respuesta = respuesta + "t" + entorno.numero + " = Heap["+ C3D2 +"];\n";
                respuesta = respuesta + "if (t" + entorno.numero + " == -1) goto L" + Etiqueta4 + ";\n";
                respuesta = respuesta + "Heap[H] = " + "t" + entorno.numero +";\n";
                respuesta = respuesta + C3D2 + " = " + C3D2 + " + 1;\n";
                respuesta = respuesta + "H = H + 1;\n";
                respuesta = respuesta + "goto L" + Etiqueta3 + ";\n";
                respuesta  = respuesta + "L" + Etiqueta4 + ":\n";


                respuesta  = respuesta +  "Heap[H] = -1;\n" + "H = H + 1;\n";

                elid = 1;
            
                Total = "hola";
                TipoFinal = "Cadena";
                entorno.direccion = entorno.direccion  + respuesta + "\n"; 
        }
        else if(TipoFinal == "Celular" && Operador == "=="){
            EntroAUnaOperacion = "TRUE";
            var respuesta = "##comparando dos vids\n";
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

            TipoFinal  = "Booleano";
            entorno.direccion = entorno.direccion  + respuesta + "\n";
        }
        
        
        
        else if(TipoFinal == "DON" && Operador == "+"){
            EntroAUnaOperacion = "TRUE";
            var respuesta = "##carid chard\n";
            entorno.etiquetas +=1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta2 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta3 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta4 = entorno.etiquetas;
            entorno.numero += 1;
            respuesta = respuesta + "t" + entorno.numero + " = H;\n"
            Cadena3dxD ="t" + entorno.numero;

            entorno.numero += 1;
            respuesta = respuesta + "t" + entorno.numero + " = " + C3D1 +";\n";
            C3D1 = "t" + entorno.numero;

            entorno.numero += 1;
            respuesta = respuesta + "t" + entorno.numero + " = " + C3D2 +";\n";
            C3D2 = "t" + entorno.numero;
            entorno.numero += 1;
            respuesta = respuesta + "t" + entorno.numero + " = "+ C3D1 +";\n";
            respuesta = respuesta + "Heap[H] = " + "t" + entorno.numero +";\n";
            respuesta = respuesta + "H = H + 1;\n";
            entorno.numero += 1;
            respuesta = respuesta + "t" + entorno.numero + " = "+ C3D2 +";\n";
            respuesta = respuesta + "Heap[H] = " + "t" + entorno.numero +";\n";
            respuesta = respuesta + "H = H + 1;\n";
            respuesta  = respuesta +  "Heap[H] = -1;\n" + "H = H + 1;\n";
            elid = 1;
            
                Total = "hola";
                TipoFinal = "Cadena";
                entorno.direccion = entorno.direccion  + respuesta + "\n"; 
        }
        console.log("RESULTADO FINAL:->" + Total);
        Total = 1;

        if(EntroAUnaOperacion == "FALSE"){
                alert('Este es un semantico: ' + this.Hijos[2].CadenaDe3D + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Variable: "+ this.Hijos[2].CadenaDe3D + " y " + this.Hijos[2].CadenaDe3D + " Tipos no permitidos"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
        }

        var nuevo = new Nodo("Aritmetica");
        //nuevo.Nombre = "Aritmetica";
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