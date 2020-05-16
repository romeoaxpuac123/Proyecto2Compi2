class Optimizar extends NodoAbstracto{

    Optimizar(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
        this.CadenaDe3D = val;
        
    }

    Ejecutar(entorno: Casa):NodoAbstracto{
        var NombreID = this.Hijos[0].Nombre;
        var Expresion1 = this.Hijos[1].Hijos[0].Nombre;
        var Simbolo = this.Hijos[1].Hijos[1].Nombre;
        var Expresion2 = this.Hijos[1].Hijos[2].Nombre;
        //alert(NombreID);
        if((NombreID.toUpperCase() == Expresion1.toUpperCase()) && (Expresion2 == "0") && (Simbolo == "+") ){
                //agregar al reporte de optimizacions
                entorno.LosErrores +="<tr>";
                entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 8 "   + " </td>";
                entorno.LosErrores += "<td>" + this.linea + "</td>";
                entorno.LosErrores += "</tr>";
                //alert('Se Optimizo');

        }
        else if((NombreID.toUpperCase() == Expresion1.toUpperCase()) && (Expresion2 == "0") && (Simbolo == "-") ){
            //agregar al reporte de optimizacions
            //alert('Se Optimizo');
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 9 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";

        }
        else if((NombreID.toUpperCase() == Expresion1.toUpperCase()) && (Expresion2 == "1") && (Simbolo == "*") ){
            //agregar al reporte de optimizacions
            //alert('Se Optimizo');
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 10 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
        }
        else if((NombreID.toUpperCase() == Expresion1.toUpperCase()) && (Expresion2 == "1") && (Simbolo == "/") ){
            //agregar al reporte de optimizacions
            //alert('Se Optimizo');
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 11 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";

        }
        else if((NombreID.toUpperCase() != Expresion1.toUpperCase()) && (Expresion2 == "0") && (Simbolo == "+") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 12 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1  + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if((NombreID.toUpperCase() != Expresion1.toUpperCase()) && (Expresion2 == "0") && (Simbolo == "-") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 13 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1  + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if((NombreID.toUpperCase() != Expresion1.toUpperCase()) && (Expresion2 == "1") && (Simbolo == "*") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 14 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1  + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if((NombreID.toUpperCase() != Expresion1.toUpperCase()) && (Expresion2 == "1") && (Simbolo == "/") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 15 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1  + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if( (Expresion2 == "2") && (Simbolo == "*") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 16 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1  + " + " + Expresion1 + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if( (Expresion2 == "0") && (Simbolo == "*") ){
            //agregar al reporte de optimizacions
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 17 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            //alert('Se Optimizo');
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = 0"  + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else if( (Expresion1 == "0") && (Simbolo == "/") ){
            //agregar al reporte de optimizacions
            //alert('Se Optimizo');
            entorno.LosErrores +="<tr>";
            entorno.LosErrores += "<td>" +  "Simplificación algebraica y por fuerza : Se optimizó por regla 18 "   + " </td>";
            entorno.LosErrores += "<td>" + this.linea + "</td>";
            entorno.LosErrores += "</tr>";
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = 0"   + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;

        }
        else{
            var Cadena1 = document.getElementById("texto1C3D").value;
            var Salida = Cadena1 + NombreID + " = " + Expresion1 + " " + Simbolo + " " + Expresion2 + ";\n";
            document.getElementById("texto1C3D").innerHTML = Salida;
            //alert(Salida);
        }
      


        var Nodo1 = new Nodo(this.Nombre);
        return Nodo1;

    }
}