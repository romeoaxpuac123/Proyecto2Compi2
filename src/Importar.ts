class Importar extends NodoAbstracto{

    
    Importar(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
    }
    Ejecutar(entorno: Casa):NodoAbstracto{
    
        for(var i = 0; i < entorno.ListaArchivos.length; i++){
            
            readTextFile(entorno.ListaArchivos[i]);
        }

        


        var nuevo = new Nodo("Importar");
       // nuevo.Hijos[0] = this.Hijos[0].Hijos[0];
        return nuevo;
    }
}
function readTextFile(file:string)
{
    
   var rawFile = new XMLHttpRequest();
   rawFile.open("GET", file, false);
   rawFile.onreadystatechange = function ()
   {
       if(rawFile.readyState === 4)
       {
           if(rawFile.status === 200 || rawFile.status == 0)
           {
               var allText = rawFile.responseText;
               //alert(allText);
               //gramatica.parse(allText);
           }
       }
   }
   rawFile.send(null);
}