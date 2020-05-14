class IFELSEIFELSE extends NodoAbstracto{

    
    IFELSEIFELSE(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("ENTROOOOOOO AL IF ELLLLLLLLLSE-->");
        var Cad3dExpresion = this.Hijos[2].CadenaDe3D;
        var TipoExpresion = this.Hijos[2].TipoDato;
        var Totalde_ELSEIF = this.Hijos[1].ListaSentencias.length;
        console.log("JUANES->" + Totalde_ELSEIF);
        entorno.direccion += "##traduciendo un monton de else ifs\n";
        //alert(TipoExpresion.toUpperCase());
        if(TipoExpresion.toUpperCase() == "BOOLEAN" || TipoExpresion.toUpperCase() == "BOOLEANO"){
            if(this.Hijos[2].Nombre.toUpperCase() == "BOOLEANO"){
                if(Cad3dExpresion.toUpperCase() == "FALSE"){
                    Cad3dExpresion = "0";
                }else{
                    Cad3dExpresion = "1";
                }
            }else{
                entorno.etiquetas +=1;
                var Etiqueta1 = entorno.etiquetas;
                entorno.etiquetas +=1;
                var Etiqueta2 = entorno.etiquetas; 
                entorno.numero += 1; 
                entorno.direccion += "t" + entorno.numero + " = " + Cad3dExpresion + ";\n";
                var auxi = "t" + entorno.numero;
                entorno.numero += 1; 
                entorno.direccion += "t" + entorno.numero + " = " + 0 + ";\n";
                var auxi2 = "t" + entorno.numero;
                    entorno.numero += 1; 
                    entorno.direccion += "L" + Etiqueta1 + ":\n";
                    entorno.direccion += "t" +  entorno.numero + " = Heap["+ auxi + "];\n";
                    entorno.direccion +=  "if(t" + entorno.numero + " == -1 ) goto L" + Etiqueta2 + ";\n";
                    entorno.direccion += auxi + " = " + auxi + " + 1;\n";
                    entorno.direccion += auxi2 + " = " + auxi2 + " + 1;\n";
                    entorno.direccion += "goto L" + Etiqueta1 + ";\n";
                    
                    entorno.direccion += "L" + Etiqueta2 + ":\n";
                    entorno.etiquetas +=1;
                    var Etiqueta3 = entorno.etiquetas;
                    entorno.etiquetas +=1;
                    var Etiqueta4 = entorno.etiquetas;
                    entorno.direccion += "if(" + auxi2 + "== 5) goto L" + Etiqueta4 + ";\n";
                    entorno.direccion += auxi2 + " = 1;\n";
                    entorno.direccion += "goto L" + Etiqueta3 + ";\n";
                    entorno.direccion += "L" + Etiqueta4 + ":\n";
                    entorno.direccion += auxi2 + " = 0;\n";
                    entorno.direccion += "L" + Etiqueta3 + ":\n";
                    Cad3dExpresion  = auxi2;
            }
            
            entorno.etiquetas +=1;
            var Etiqueta1 = entorno.etiquetas;
            entorno.etiquetas +=1;
            var Etiqueta2 = entorno.etiquetas; 
            entorno.direccion += "##traduciendo if\n";
            entorno.direccion += "if(" + Cad3dExpresion + " == 0) goto L" + Etiqueta1 + ";\n";
            //
            for(var x = 0; x< this.Hijos[0].ListaSentencias.length;x++){
                this.Hijos[0].ListaSentencias[x].Ejecutar(entorno);
            }
            
            //
            entorno.direccion += entorno.direccionIF;
            entorno.direccion += "goto L" + Etiqueta2 + ";\n";
            entorno.direccion += "L" + Etiqueta1 + ":\n";
            entorno.direccionIF = "";
            //EMPEZAMOS CON LA TRADUCCION xd DE LOS ELSE IF
            for(var x = 0; x < this.Hijos[1].ListaSentencias.length;x++){
                TipoExpresion = this.Hijos[1].ListaSentencias[x].Hijos[0].TipoDato;
                Cad3dExpresion  = this.Hijos[1].ListaSentencias[x].Hijos[0].CadenaDe3D;
                if(TipoExpresion.toUpperCase() == "BOOLEAN" || TipoExpresion.toUpperCase() == "BOOLEANO"){
                    entorno.direccion += "##traduciendo EL ELSEIF\n";
                    if(TipoExpresion.toUpperCase() == "BOOLEANO"){
                        if(Cad3dExpresion.toUpperCase() == "FALSE"){
                            Cad3dExpresion = "0";
                        }else{
                            Cad3dExpresion = "1";
                        }
                    }else{
                        
                        entorno.etiquetas +=1;
                        var Etiqueta1q = entorno.etiquetas;
                        entorno.etiquetas +=1;
                        var Etiqueta2q = entorno.etiquetas; 
                        entorno.numero += 1; 
                        entorno.direccion += "t" + entorno.numero + " = " + Cad3dExpresion + ";\n";
                        var auxi = "t" + entorno.numero;
                        entorno.numero += 1; 
                        entorno.direccion += "t" + entorno.numero + " = " + 0 + ";\n";
                        var auxi2 = "t" + entorno.numero;
                            entorno.numero += 1; 
                            entorno.direccion += "L" + Etiqueta1q + ":\n";
                            entorno.direccion += "t" +  entorno.numero + " = Heap["+ auxi + "];\n";
                            entorno.direccion +=  "if(t" + entorno.numero + " == -1 ) goto L" + Etiqueta2q + ";\n";
                            entorno.direccion += auxi + " = " + auxi + " + 1;\n";
                            entorno.direccion += auxi2 + " = " + auxi2 + " + 1;\n";
                            entorno.direccion += "goto L" + Etiqueta1q + ";\n";
                            
                            entorno.direccion += "L" + Etiqueta2q + ":\n";
                            entorno.etiquetas +=1;
                            var Etiqueta3q = entorno.etiquetas;
                            entorno.etiquetas +=1;
                            var Etiqueta4q = entorno.etiquetas;
                            entorno.direccion += "if(" + auxi2 + "== 5) goto L" + Etiqueta4q + ";\n";
                            entorno.direccion += auxi2 + " = 1;\n";
                            entorno.direccion += "goto L" + Etiqueta3q + ";\n";
                            entorno.direccion += "L" + Etiqueta4q + ":\n";
                            entorno.direccion += auxi2 + " = 0;\n";
                            entorno.direccion += "L" + Etiqueta3q + ":\n";
                            Cad3dExpresion  = auxi2;
                    }
                    
                }else{
                    alert('Este es un semantico: ' + "EXP incorrecta" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                    entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                    entorno.LosErrores +="<tr>";
                    entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                    entorno.LosErrores += "<td>" +  "EXP incorrecta en el if"  + " </td>";
                    entorno.LosErrores += "<td>" + this.linea + "</td>";
                    entorno.LosErrores += "<td>" + this.columna + "</td>";
                    entorno.LosErrores += "</tr>";
                }
                
                entorno.etiquetas +=1;
                var Etiqueta1x = entorno.etiquetas;
                //entorno.direccion += "##traduciendo if\n";
                entorno.direccion += "if(" + Cad3dExpresion + " == 0) goto L" + Etiqueta1x + ";\n";
                for(var Y = 0;Y< this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias.length;Y++){
                    //alert("hola");
                    this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[Y].Ejecutar(entorno);
                    entorno.direccion += entorno.direccionIF;
                }
                entorno.direccionIF = "";
                entorno.direccion += "goto L" + Etiqueta2 + ";\n";
                entorno.direccion +=  "L" + Etiqueta1x + ":\n";
            }

            entorno.direccion += entorno.direccionIF;
            //entorno.direccion += "goto L" + Etiqueta2 + ";\n";
            //entorno.direccion += "L" + Etiqueta1 + ":\n";
            entorno.direccionIF = "";
            entorno.direccion += "##traduciendo if -else2\n";
            for(var x = 0; x< this.Hijos[3].ListaSentencias.length;x++){
                //alert("hola");
                this.Hijos[3].ListaSentencias[x].Ejecutar(entorno);
            }
            entorno.direccion += entorno.direccionIF;
           // entorno.direccion += "L" + Etiqueta2 + ":\n";
            entorno.direccionIF = "";

            entorno.direccion += "L" + Etiqueta2 + ":\n";
            //entorno.direccion = ""; 
            

        }else{
            alert('Este es un semantico: ' + "EXP incorrecta" + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "EXP incorrecta en el if"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
        }

        /*
        for(var x = 0; x < this.Hijos[1].ListaSentencias.length;x++){
            entorno.direccion += "##traduciendo EL ELSEIF\n";
            for(var Y = 0;Y< this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias.length;Y++){
                //alert("hola");
                this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[Y].Ejecutar(entorno);
                entorno.direccion += entorno.direccionIF;
            }
            entorno.direccionIF = "";
        }
        */
        var nuevo = new Nodo("IF");
        nuevo.Hijos[0] = this.Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}