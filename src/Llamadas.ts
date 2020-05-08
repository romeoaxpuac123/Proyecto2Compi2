class LLamadas extends NodoAbstracto{
    LLamadas(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{

        console.log("-----------ENTRO A Llamar funcionesS------");
        var nombre = this.Hijos[0].Nombre;
        var TParametros = 0;
        console.log("La funcion call tiene nombre de:->" + nombre);
        console.log("Sus parametros:->" + nombre);
        var totalparametros = 0;
        for(var x = 0; x < entorno.ListaParametrosFuncion.length;x++){
            console.log("----");
            console.log("parametro Nombre->" + x + " " + entorno.ListaParametrosFuncion[x].Nombre); 
            console.log("parametro Tipo ->" + x + " " + entorno.ListaParametrosFuncion[x].TipoDato); 
            console.log("parametro C3D->" + x + " " + entorno.ListaParametrosFuncion[x].CadenaDe3D); 
            totalparametros +=1; 
        }
        console.log("Sus parametros: fin" + totalparametros);
        if(entorno.existefuncion2(nombre,totalparametros)== true){
                var NombreCall = entorno.existefuncion3(nombre,totalparametros);
                entorno.numero += 1;
                entorno.direccion +=  "## CAMBIO DE AMBITO SIMULADO\n";
                entorno.direccion += "t" + entorno.numero +  " = P" + " + " + entorno.tamaniofuncion(nombre,totalparametros)+ ";\n\n"
                var auxi1 = "t" + entorno.numero;
                for(var y = 0; y < totalparametros; y++){
                    if(entorno.ListaParametrosFuncion[y].Nombre == "Caracter"){
                        entorno.ListaParametrosFuncion[y].CadenaDe3D  = entorno.ListaParametrosFuncion[y].CadenaDe3D.charCodeAt(1).toString();
                    }
                    if(entorno.ListaParametrosFuncion[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion[y].CadenaDe3D.toUpperCase() == "FALSE"){
                        entorno.ListaParametrosFuncion[y].CadenaDe3D  = "0";
                    }
                    if(entorno.ListaParametrosFuncion[y].Nombre == "Booleano" && entorno.ListaParametrosFuncion[y].CadenaDe3D.toUpperCase() == "TRUE"){
                        entorno.ListaParametrosFuncion[y].CadenaDe3D  = "1";
                    }
                    if(entorno.ListaParametrosFuncion[y].Nombre == "Aritmetica" && entorno.ListaParametrosFuncion[y].TipoDato.toUpperCase() == "BOOLEANO"){
                        var auxi1x = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("t","");
                        var auxi12 = +auxi1x - 1;
                        entorno.ListaParametrosFuncion[y].CadenaDe3D  = "t" + auxi12.toString();
                    }
                    if(entorno.ListaParametrosFuncion[y].Nombre == "Cadena"){
                        entorno.numero +=1;
                        entorno.direccion = entorno.direccion + "##convirtiendo\n";
                        entorno.direccion = entorno.direccion + "t" + entorno.numero + " = H;\n";
                        //entorno.ListaParametrosFuncion[y].CadenaDe3D =  "t" + entorno.numero;
                        var auxiliar1 =  "t" + entorno.numero;
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("\"","");
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = entorno.ListaParametrosFuncion[y].CadenaDe3D.replace("\"","");
                        for(var x =0; x < entorno.ListaParametrosFuncion[y].CadenaDe3D.length;x++){
                            entorno.direccion = entorno.direccion + "Heap[H] = " + entorno.ListaParametrosFuncion[y].CadenaDe3D.charCodeAt(x).toString() + ";\n"; 
                            entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        }
                        entorno.direccion = entorno.direccion + "Heap[H] = -1;\n";
                        entorno.direccion = entorno.direccion + "H = H + 1;\n";
                        entorno.ListaParametrosFuncion[y].CadenaDe3D = auxiliar1;
                        entorno.direccion = entorno.direccion + "##fin convirtiendo\n";
                    }
                    //entorno.numero = entorno.numero +1;
                    entorno.numero += 1;
                    entorno.direccion += "t" + entorno.numero +  " = " + auxi1 + " + " + (y) + ";\n"
                    entorno.direccion += "stack[" + "t" + (entorno.numero) + "] = " + entorno.ListaParametrosFuncion[y].CadenaDe3D + ";\n";
                   
                    
                   
                }
                    
                entorno.direccion +=  "## CAMBIO DE AMBITO REAL\n";
                entorno.direccion +=  "P = P + " + entorno.tamaniofuncion(nombre,totalparametros) + ";\n";
                entorno.direccion += "call " +   NombreCall.replace("funcionbayron_","") + ";\n";

        }else{
            alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
        }
        entorno.ListaParametrosFuncion.splice(0,entorno.ListaParametrosFuncion.length);
        var nuevo = new Nodo("LLamada_Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}