class BloquesXD {
    // Indico mi variable

    cadenaxd:string
    numero: number;
    

    constructor() {
        // Le doy un valor

        this.cadenaxd = 'digraph D {\n'
        this.numero = 0;
      
    }

    creandoBloques(texto:string){
        //console.log(texto);
        var Cadena = "";
        var NumeroDeNodo = 0;
        var arrayDeCadenas = texto.split('\n');
        this.cadenaxd = 'digraph D {\n'
        for(var x = 0; x < arrayDeCadenas.length; x++){
            if(arrayDeCadenas[x].toUpperCase().includes("GOTO")){
                console.log(Cadena);
                NumeroDeNodo += 1;

                var Hijo1 = "node_"+ NumeroDeNodo + "[shape=box label=\"" + Cadena + "\"]" +"\n";
                this.cadenaxd += Hijo1;

                console.log("---");
                console.log(arrayDeCadenas[x]);

                NumeroDeNodo += 1;
                var Hijo1 = "node_"+ NumeroDeNodo + "[shape=box label=\"" + arrayDeCadenas[x] + "\"]" +"\n";
                this.cadenaxd += Hijo1;

                console.log("---");
                Cadena = "";

            }else if(arrayDeCadenas[x].toUpperCase().includes("L") || arrayDeCadenas[x].toUpperCase().includes(":")){

            }else{
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%c\"","\\\"%c\\\"");
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%i\"","\\\"%i\\\"");
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%d\"","\\\"%d\\\"");    //replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"");
                Cadena += arrayDeCadenas[x] + "\\n";
            }
        }
        for(var x = 0; x < NumeroDeNodo-1;x++){
            this.cadenaxd += "node_"+ x + "->" + "node_"+ (x+1) + "\n";
        }

        this.cadenaxd += "}\n";
        console.log(this.cadenaxd);
    }
}