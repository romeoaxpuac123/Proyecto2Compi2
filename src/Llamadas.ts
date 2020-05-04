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
        
        if(entorno.existefuncion(nombre)== true){
            if(entorno.totalparametros(nombre, TParametros) == true){
                //ya existe una función con la misma cantidad de parametros reportar error
                if(TParametros == 0){
                    entorno.direccion = entorno.direccion + "call " + nombre + ";";
                }else{
                    //algo del cambio no ?
                }
    
            }else{
                //no existe una función con la misma cantidad de 
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            }

        }else{
            //la funcion no existe :()
        }
        var nuevo = new Nodo("LLamada_Funciones");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}