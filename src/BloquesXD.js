var BloquesXD = /** @class */ (function () {
    function BloquesXD() {
        // Le doy un valor
        this.Nodosxd = new Array();
        this.cadenaxd = 'digraph D {\n';
        this.numero = 0;
    }
    BloquesXD.prototype.creandoBloques = function (texto) {
        //console.log(texto);
        var Cadena = "";
        var NumeroDeNodo = 0;
        var arrayDeCadenas = texto.split('\n');
        this.cadenaxd = 'digraph D {\n';
        for (var x = 0; x < arrayDeCadenas.length; x++) {
            //alert(arrayDeCadenas[x]);
            if (arrayDeCadenas[x].toUpperCase().includes("GOTO")) {
                console.log(Cadena);
                if (Cadena != "") {
                    NumeroDeNodo += 1;
                    var Hijo1 = "node_" + NumeroDeNodo + "[shape=box label=\"" + Cadena + "\"]" + "\n";
                    this.cadenaxd += Hijo1;
                }
                console.log("---");
                console.log(arrayDeCadenas[x]);
                NumeroDeNodo += 1;
                var Hijo1 = "node_" + NumeroDeNodo + "[shape=box label=\"" + arrayDeCadenas[x] + "\"]" + "\n";
                this.cadenaxd += Hijo1;
                var nuevo = new LasEles();
                nuevo.SuNodo = "node_" + NumeroDeNodo;
                nuevo.LaL = arrayDeCadenas[x];
                this.Nodosxd.push(nuevo);
                console.log("---");
                Cadena = "";
            }
            else if (arrayDeCadenas[x].toUpperCase().includes("L") && arrayDeCadenas[x].toUpperCase().includes(":")) {
                console.log(Cadena);
                if (Cadena != "") {
                    NumeroDeNodo += 1;
                    var Hijo1 = "node_" + NumeroDeNodo + "[shape=box label=\"" + Cadena + "\"]" + "\n";
                    this.cadenaxd += Hijo1;
                }
                console.log("---");
                console.log(arrayDeCadenas[x]);
                NumeroDeNodo += 1;
                var Hijo1 = "node_" + NumeroDeNodo + "[shape=box label=\"" + arrayDeCadenas[x] + "\"]" + "\n";
                this.cadenaxd += Hijo1;
                var nuevo = new LasEles();
                nuevo.SuNodo = "node_" + NumeroDeNodo;
                nuevo.LaL = arrayDeCadenas[x];
                this.Nodosxd.push(nuevo);
                console.log("---");
                Cadena = "";
            }
            else {
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%c\"", "\\\"%c\\\"");
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%i\"", "\\\"%i\\\"");
                arrayDeCadenas[x] = arrayDeCadenas[x].replace("\"%d\"", "\\\"%d\\\""); //replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"").replace("\"","\\\"");
                Cadena += arrayDeCadenas[x] + "\\n";
            }
        }
        NumeroDeNodo += 1;
        var Hijo1 = "node_" + NumeroDeNodo + "[shape=box label=\"" + Cadena + "\"]" + "\n";
        this.cadenaxd += Hijo1;
        for (var x = 1; x < NumeroDeNodo; x++) {
            this.cadenaxd += "node_" + x + "->" + "node_" + (x + 1) + "\n";
        }
        //this.cadenaxd += "node_"+ (NumeroDeNodo-1) + "->" + "node_"+ (NumeroDeNodo) + "\n";
        for (var x = 0; x < arrayDeCadenas.length; x++) {
            //alert(arrayDeCadenas[x]);
            if (arrayDeCadenas[x].toUpperCase().includes("GOTO")) {
                var Nodo1 = "";
                for (var y = 0; y < this.Nodosxd.length; y++) {
                    if (this.Nodosxd[y].LaL == arrayDeCadenas[x]) {
                        Nodo1 = this.Nodosxd[y].sunodo(arrayDeCadenas[x]);
                    }
                }
                var arrayDeCadenas2 = arrayDeCadenas[x].split('goto');
                var cadenaxx = arrayDeCadenas2[1].replace(" ", "").replace(";", ":");
                var Nodo2 = "";
                for (var y = 0; y < this.Nodosxd.length; y++) {
                    if (this.Nodosxd[y].LaL == cadenaxx) {
                        Nodo2 = this.Nodosxd[y].sunodo(cadenaxx);
                    }
                }
                if (Nodo2 == "") {
                    Nodo2 = "node_" + NumeroDeNodo;
                }
                //alert(cadenaxx);
                this.cadenaxd += Nodo1 + "->" + Nodo2 + "\n";
            }
        }
        this.cadenaxd += "}\n";
        console.log(this.cadenaxd);
        return this.cadenaxd;
    };
    return BloquesXD;
}());
var LasEles = /** @class */ (function () {
    function LasEles() {
        // Le doy un valor
        this.LaL = "";
        this.SuNodo = "";
    }
    LasEles.prototype.sunodo = function (elesita) {
        return this.SuNodo;
    };
    return LasEles;
}());
