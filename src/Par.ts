class Parametros extends NodoAbstracto{

    Parametros(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("-----------ENTRO A PARAMETROS------");
        var nombre = this.Hijos[0].Nombre;
        var TParametros = 0;
        console.log("El parametro se llama de:->" + nombre);
        console.log("de Tipo->" + this.TipoDato.toUpperCase() );

        if(this.TipoDato.toUpperCase() == "INTEGER" || this.TipoDato.toUpperCase() == "DOUBLE"
        || this.TipoDato.toUpperCase() == "CHAR"    || this.TipoDato.toUpperCase() == "BOOLEAN" 
        || this.TipoDato.toUpperCase() == "VAR"     || this.TipoDato.toUpperCase() == "CONST"){
                entorno.Tipo.push(this.TipoDato);
                entorno.Variable.push(nombre);
                entorno.numero += 1;
                var Tex = "t" + entorno.numero;
                entorno.Tes.push(Tex);
        }else{
            alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
        }

        var nuevo = new Nodo("Parametros");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        nuevo.TipoDato =this.TipoDato;
        console.log("-----------FIN A PARAMETROS------");
        return nuevo;
    }
}