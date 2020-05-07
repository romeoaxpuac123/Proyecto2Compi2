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
        console.log("La funcion se llama de:->" + entorno.nombreentorno);
        console.log("de Tipo->" + this.TipoDato.toUpperCase() );

           
        for(var x = 0; x < entorno.VariableVariablesFUNCION.length; x++){
            if(nombre.toUpperCase() == entorno.VariableVariablesFUNCION[x].toUpperCase()){
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Parametro "+ nombre + " Existente"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
                break;
            }
        }
        for(var x = 0; x < entorno.Variable.length; x++){
            if(nombre.toUpperCase() == entorno.Variable[x].toUpperCase()){
                alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
                entorno.direccion = "ERROR NO SE GENERO C3D;\n"
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  "Parametro "+ nombre + " Existente"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
                break;
            }
        }
        

        if(this.TipoDato.toUpperCase() == "INTEGER" || this.TipoDato.toUpperCase() == "DOUBLE"
        || this.TipoDato.toUpperCase() == "CHAR"    || this.TipoDato.toUpperCase() == "BOOLEAN" 
        || this.TipoDato.toUpperCase() == "VAR"     || this.TipoDato.toUpperCase() == "CONST"){
                entorno.Tipo.push(this.TipoDato);
                entorno.Variable.push(nombre);
                entorno.numero += 1;
                var Tex = "t" + entorno.numero;
                entorno.Tes.push(Tex);
                entorno.tamanioentorno += 1;
                //entorno.anadirSimbolo(nombre,"local",entorno.nombreentorno,0,entorno.Tes.length,this.TipoDato,Tex,0);
        }else{
            alert('Este es un semantico: ' + nombre + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
                entorno.LosErrores += "<td>" +  " Tipo Parametro "+ nombre + " No Permitido"  + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "<td>" + this.columna + "</td>";
                entorno.LosErrores += "</tr>";
        }

        var nuevo = new Nodo("Parametros");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        nuevo.TipoDato =this.TipoDato;
        console.log("-----------FIN A PARAMETROS------");
        return nuevo;
    }
}