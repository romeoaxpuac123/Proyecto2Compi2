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
        console.log("La funcion tiene nombre de:->" + nombre);
        

        
        if(entorno.existefuncion(nombre)== false){
            //no existe la funcion

            entorno.etiquetas +=1;
            var Etiqueta1x = entorno.etiquetas;
            if(TParametros == 0){

                entorno.anadirSimbolo(nombre,"global","global",0,0,"funcion","t"+entorno.numero,TParametros);
                console.log("SIMBOLOS--->");
                entorno.mostrarSimboos();
                console.log("fin simbolos");
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + " begin\n\n\t" + entorno.direccion.replace(/\n/g, '\n\t');
                entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
            }else{

                console.log("TIENE ESTOS PARAMETROAS->");
                //entorno.numero +=1;
                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length)
                console.log("->" + entorno.Variable.length)
                console.log("->" + entorno.Tes.length)
                console.log("fin vacios");
                var Auxiliar = "t" + entorno.valordep;
                var Parametrosc3d = Auxiliar + " = P;\n";
                for(var i = 0; i < entorno.Variable.length; i++){
                    console.log (entorno.Variable[i] + "->" + entorno.Tipo[i]);
                    var Parametrosc3dx = "## PARAMETRO->" +  entorno.Variable[i] + "\n";
                    //entorno.numero +=1;
                    Parametrosc3dx= Parametrosc3dx+ entorno.Tes[i] + " = " +  Auxiliar + " + " + i + ";\n"
                   // entorno.numero +=1;
                   // Parametrosc3d = Parametrosc3d + "t" + entorno.numero + " = stack[t" + (entorno.numero-1) + "];\n\n";
                    Parametrosc3d = Parametrosc3d + Parametrosc3dx;
                }
                console.log("FIN TIENE ESTOS PARAMETROAS->");
                Parametrosc3d = Parametrosc3d.replace(/\n/g, '\n\t') + "\n\n";
                var esomero = "goto L" + Etiqueta1x + ";\n";
                entorno.direccion = esomero + "proc " + nombre + " begin\n\n\t" + Parametrosc3d + "\t" +entorno.direccion.replace(/\n/g, '\n\t');
                entorno.direccion = entorno.direccion + "\n" + "end" + "\n" + "L" + Etiqueta1x + ":\n";
                entorno.Tipo.splice(0, entorno.Tipo.length);
                entorno.Variable.splice(0, entorno.Variable.length);
                entorno.Tes.splice(0,entorno.Tes.length);
                console.log("VALORES VACIOS->");
                console.log("->" + entorno.Tipo.length)
                console.log("->" + entorno.Variable.length)
                console.log("->" + entorno.Tes.length)
                console.log("fin vacios");
            }
         

        }
        else{
            //si existe la funcion
            if(entorno.totalparametros(nombre, TParametros) == true){
                //ya existe una función con la misma cantidad de parametros reportar error
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            }else{
                //no existe una función con la misma cantidad de parametros
                
            }
        }
       


        var nuevo = new Nodo("Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}