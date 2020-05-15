class SWITCH extends NodoAbstracto{

    
    SWITCH(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{

        entorno.direccion += "#TRADUCIENDO SWITHC\n";
        this.Hijos[0].Ejecutar(entorno);
        var Cad3dExpresion = this.Hijos[0].CadenaDe3D;
        var TipoExpresion = this.Hijos[0].TipoDato;
        entorno.direccion += this.Hijos[0].MiCadena;
        
        entorno.etiquetas +=1;
        var NUMEROFINAL =  entorno.etiquetas;
        for(var x = 0; x < this.Hijos[1].ListaSentencias.length;x++){
            

            entorno.etiquetas += 1;
            var EtiquetaSiguiente = entorno.etiquetas;
            entorno.direccion += "#Expresion case " + x + " \n";
            this.Hijos[1].ListaSentencias[x].Hijos[0].Ejecutar(entorno);
            entorno.direccion +=  this.Hijos[1].ListaSentencias[x].Hijos[0].MiCadena;
            var C3dx2 = this.Hijos[1].ListaSentencias[x].Hijos[0].CadenaDe3D;
            //comparando expresiones
            entorno.direccion  += "if(" + Cad3dExpresion + " <> " + C3dx2 + ") goto L" + EtiquetaSiguiente + ";\n";
            //expresiones si cumple
            entorno.direccion += "#sentencias\n";
            for(var p = 0; p < this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias.length ;p++ ){
                //this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].Ejecutar(entorno);
                //entorno.direccion += this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].MiCadena;
                this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].Ejecutar(entorno);
                if(this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].MiCadena == "break;"){
                    entorno.direccion += "goto L" + NUMEROFINAL + ";\n";
                    
                }else{
                    entorno.direccion += this.Hijos[1].ListaSentencias[x].Hijos[1].ListaSentencias[p].MiCadena;
                }
            }
            
            
            //
            entorno.direccion += "L" + EtiquetaSiguiente + ":\n";
        }
        entorno.direccion += "L" + NUMEROFINAL + ":\n";

        var nuevo = new Nodo("SWITCH");
        nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        nuevo.NumeroDeNodo = this.NumeroDeNodo;
        return nuevo;
    }
}