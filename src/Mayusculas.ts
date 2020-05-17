class Mayusculas extends NodoAbstracto{

    Mayusculas(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
        entorno.direccion += "#PasandoAMayusculas;\n"
        var variable = this.Hijos[0].Nombre;
        var late = "false";
        for(var i = 0; i < entorno.VariableVariablesFUNCION.length;i++){
            if(variable.toUpperCase() == entorno.VariableVariablesFUNCION[i].toUpperCase()){
                late = entorno.TesVariablesFUNCION[i];
            }
        }
        if(late == "false"){
            for(var i = 0; i < entorno.VariableVariablesFUNCIONGLOBAL.length;i++){
                if(variable.toUpperCase() == entorno.VariableVariablesFUNCIONGLOBAL[i].toUpperCase()){
                    late = entorno.TesVariablesFUNCIONGLOBAL[i];
                }
            }
        }
        if(late == "false"){
            for(var i = 0; i < entorno.VariableVariables.length;i++){
                if(variable.toUpperCase() == entorno.VariableVariables[i].toUpperCase()){
                    late = entorno.TesVariables[i];
                }
            }
        }

        if(late == "false"){
            alert('Este es un semantico: ' + "No se puede determinar el largo de " + variable + ', en la linea: ' + this.linea + ', en la columna: ' + this.columna);
            entorno.direccion = "ERROR NO SE GENERO C3D;\n"
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" + "Semantico" + "  </td>" ;
            entorno.LosErrores += "<td>" +   "No se puede determinar el largo de " + variable    + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "<td>" + this.columna + "</td>";
            entorno.LosErrores += "</tr>";
        }
        entorno.etiquetas+= 1;
        var Etiqueta1 = entorno.etiquetas;

        entorno.etiquetas+= 1;
        var Etiqueta2 = entorno.etiquetas;
        entorno.etiquetas+= 1;
        var Etiqueta3 = entorno.etiquetas;

        entorno.numero+= 1;
        var tamanio = "t" + entorno.numero;

        entorno.direccion += tamanio + "= H;\n";

        entorno.numero+= 1;
        entorno.direccion += "t" + entorno.numero + " = Stack["+ late + "];\n";

        entorno.direccion += "L" + Etiqueta1 + ":\n";
        entorno.numero+= 1;
        entorno.direccion += "t" + entorno.numero + " = Heap[t" +(entorno.numero-1)+ "];\n";
        
        //recorriendo la cadena
        entorno.direccion += "if(" + "t" + entorno.numero + " == -1) goto L" + Etiqueta2 + ";\n";
        entorno.direccion += "t" +(entorno.numero-1) + " = " + "t" +(entorno.numero-1) + " + 1 ;\n";
        entorno.direccion += "  if(" + "t" + entorno.numero + " < 97) goto L"+ Etiqueta3 +";\n";
        entorno.direccion += "t" + entorno.numero  + " = " + "t" + entorno.numero + "- 32;\n";
        entorno.direccion += "  Heap[H] = " + "t" + entorno.numero + ";\n";
        entorno.direccion += "  H = H + 1;\n"
        entorno.direccion += "goto L" + Etiqueta1 + ";\n";
        entorno.direccion += "  L" + Etiqueta3 + ":\n";
        entorno.direccion += "  Heap[H] = " + "t" + entorno.numero + ";\n";
        
        entorno.direccion += "  H = H + 1;\n"
        entorno.direccion += "goto L" + Etiqueta1 + ";\n";
        entorno.direccion += "L" + Etiqueta2 + ":\n";
        entorno.direccion += "  Heap[H] =  -1;\n";
        
        entorno.direccion += "  H = H + 1;\n"
        //fin de recorrer la cadena
        
        entorno.direccion += "##fin pasando mayuscula\n";
        //var tamanio = ;
        var nuevo = new Nodo("Aritmetica");
		var nuevovalor = new Nodo(tamanio.toString());
		nuevo.Hijos[0] = nuevovalor;
		nuevo.TipoDato = "Cadena";
        nuevo.CadenaDe3D = tamanio.toString();
        return nuevo;
    }
}