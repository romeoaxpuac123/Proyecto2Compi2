/**
 * SEGUNDO PROYECTO DE OLC2
 BAYRON ROMEO AXPUAC YOC 
 201314474
 */

/* Definición Léxica */
%{
	var respuesta = "";
	var Entorno1 = new Casa();
	var GraficasDOT = new Graficas();
	var contador = 0;
	var Parametro1 = "Romeo";
	var Parametro2 = "Axpuac";
	var Textos = "";

	
	
%}

%lex

%options case-insensitive

%%
[#][*][^*]*[*]+([^/*][^*]*[*]+)*[#]	{}		// comentario multiple líneas
"#".*				{}						// comentario simple línea

"\"%c\""		return "IMPRIMIRCARACTER";
"\"%i\""		return "IMPRIMIRENTERO";
"\"%d\""		return "IMPRIMIRDECIMAL";
"end"			return "ELFINAL";
"print"			return 'IMPRMIR';
"goto"			return 'GOTO';
";"					return 'PTyCOMA';
"++"				return 'INCREMENTO';
"--"				return 'DECINCREMENTO';
"("					return 'PARIZQ';
")"					return 'PARDER';
"["					return 'CORIZQ';
"]"					return 'CORDER';
"{"					return 'LLAVIZQ';
"}"					return 'LLAVDER';
","					return 'COMA';
"+"					return 'MAS';
"-"					return 'MENOS';
"*"					return 'POR';
"/"					return 'DIVIDIDO';
"^^"				return 'POTENCIA';
"%"					return 'MODULO';
"<>"				return 'DESIGUALDAD';
">="				return 'MAYORIGUAL';
"<="				return 'MENORIGUAL';
">"					return 'MAYOR';
"<"					return 'MENOR';
"=="				return 'IGUALDAD';

"&&"				return 'AND';
"||"				return 'OR';
"^"					return 'XOR';
"!"					return 'NOT';
"="					return 'IGUAL';
":"					return 'DOSP';
"var"				return 'VAR';
"Stack"				return 'STACK';
"Heap"				return 'HEAP';
"P"					return 'LA_P';
"H"					return 'LA_H';
"proc"				return "PROCX";
"begin"				return "BEGINX";
"if"				return 'ELIF';
"call"				return 'LLAMADA';



/* Espacios en blanco */
[ \r\t]+			{}
\n					{}



[0-9]+("."[0-9]+)\b  	return 'DECIMAL';
[0-9]+\b				return 'ENTERO';
("'"[a-zA-Z0-9_]"'")	return "CARACTER";
//("\""([a-zA-Z0-9_" "]+)"\"")	return "CADENA";
\"([^\\\"]|\\\"|\\t|\\n|\\r|\\)*\"				return "CADENA";

([t])[0-9]*	return "ID";
([L])[0-9]*	return "ETIQUETAS";
([a-zA-Z])[a-zA-Z0-9ñÑ_]+	return "IDENTIFICADOC3D";
<<EOF>>				return 'EOF';

.					{ 
						alert('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
       					console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); 
				   
					}
/lex



/* Asociación de operadores y precedencia */
%left 'AND' 'OR' 'XOR'
%left 'IGUALDAD' 'DESIGUALDAD' 
%left 'MAYOR' 'MENOR' 'MAYORIGUAL' 'MENORIGUAL'

%left 'MAS' 'MENOS' 'INCREMENTO' 'DECINCREMENTO'
%left 'POR' 'DIVIDIDO' 'MODULO'
%left 'POTENCIA' 
%left 'NOT'
%left UMENOS




%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF{{
			document.getElementById("Reporte_Optimizacion").innerHTML = "";
			var ReporteErrores = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Dando estilo a tablas</title>";
			ReporteErrores += "<link rel=\"stylesheet\" type=\"text/css\" href=\"tablas.css\"></head><body><div id=\"main-container\">";
			ReporteErrores += "<table><thead><tr><th>DESCRIPCION</th><th>LINEA</th></tr></thead>";

			ReporteErrores += Entorno1.LosErrores;
			ReporteErrores += "</table></div></body></html>"

			document.getElementById("Reporte_Optimizacion").innerHTML = ReporteErrores;
	    }
    }
;

instrucciones
	: instrucciones instruccion{

	}
	| instruccion{

	}
	| error {
			alert('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
    
	}
;

instruccion
	:   
	ID IGUAL expresionC3D PTyCOMA{
		//Textos += $1 + " " + $2 + + " " + $3.Hjos[0].Nombre + " " + $3.Hjos[1].Nombre + " " + $3.Hjos[2].Nombre + ";\n";
		if(contador == 0){
			var nuevo = new Optimizar("Optimizar");
			var IDS = new Nodo($1);
			nuevo.Hijos[0] = IDS;
			nuevo.Hijos[1] = $3;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			$$ = nuevo.Ejecutar(Entorno1);
		}
    }
	|ID IGUAL expresion PTyCOMA{
		//alert("hola1->" + Parametro1);
		//alert("hola2->" + Parametro2);
		//Textos += $1 + " " + $2 + $3.Nombre + " " + ";\n";
	
		
		if($1 == Parametro2 && $3.Nombre == Parametro1){
			Entorno1.LosErrores +="<tr>";
			Entorno1.LosErrores += "<td>" +  "Eliminación de instrucciones redundantes de carga y  almacenamiento : Se optimizó por regla 1 "   + " </td>";
			Entorno1.LosErrores += "<td>" + this._$.first_line; + "</td>";
			Entorno1.LosErrores += "</tr>";
		}else{
			
			if(contador == 0){
			
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " = " + $3.Nombre + ";\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
			}
		}
		Parametro1 = $1;
			Parametro2 = $3.Nombre;
		
		
    }
	|ETIQUETAS DOSP{
		if(respuesta == $1){
			contador = 0;
		}else{
			contador = 1;
		}
		
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + ":"+ "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|GOTO ETIQUETAS PTyCOMA{
		//alert(Textos);
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + ";"+ "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|VAR LISTA_TES PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + ";\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|VAR STACK CORIZQ CORDER PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + "var Stack[];\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|VAR HEAP CORIZQ CORDER PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + "var Heap[];\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|VAR LA_P IGUAL expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + "var P = 0;\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|VAR LA_H IGUAL expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + "var H = 0;\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|PROCX IDENTIFICADOC3D BEGINX{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + " " + $3 + "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|HEAP CORIZQ LA_H CORDER IGUAL expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + "" + $3 +  "" + $4 + " " + $5 + " " + $6.Nombre + "" + $7+"\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|HEAP CORIZQ ID CORDER IGUAL expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + "" + $3 +  "" + $4 + " " + $5 + " " + $6.Nombre + "" + $7+"\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	| LA_H IGUAL expresionC3D PTyCOMA{
		if(contador == 0){
			var nuevo = new Optimizar("Optimizar");
			var IDS = new Nodo($1);
			nuevo.Hijos[0] = IDS;
			nuevo.Hijos[1] = $3;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			$$ = nuevo.Ejecutar(Entorno1);
		}
	}
	|HEAP CORIZQ LA_H CORDER IGUAL MENOS expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + "" + $3 +  "" + $4 + " " + $5 + " " + $6 + "" + $7.Nombre+";\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|ID IGUAL HEAP CORIZQ ID CORDER PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + " " + $3 +  " " + $4 + "" + $5 + "" + $6 + "" + $7+"\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}

	}
	|ELIF PARIZQ expresionC3D PARDER GOTO ETIQUETAS  PTyCOMA{
		if(contador == 0){
			if(($3.Hijos[0].Nombre == $3.Hijos[2].Nombre) && $3.Hijos[1].Nombre == "=="){
					contador = 1;
					respuesta = $6;
					var Cadena1 = document.getElementById("texto1C3D").value;
					var Salida = Cadena1 + $5 + " " + $6 + $7 + "\n";
					document.getElementById("texto1C3D").innerHTML = Salida;
					Entorno1.LosErrores +="<tr>";
					Entorno1.LosErrores += "<td>" +  "Eliminación de código inalcanzable : Se optimizó por regla 4 "   + " </td>";
					Entorno1.LosErrores += "<td>" + this._$.first_line; + "</td>";
					Entorno1.LosErrores += "</tr>";
			}
			else if(($3.Hijos[0].Nombre != $3.Hijos[2].Nombre) && $3.Hijos[1].Nombre == "==" && 
				$3.Hijos[0].TipoDato == "ENTERO"  && $3.Hijos[2].TipoDato == "ENTERO"
				){
					//var Cadena1 = document.getElementById("texto1C3D").value;
					//var Salida = Cadena1 + $1 + $2 + $3.Hijos[0].Nombre + " " +  $3.Hijos[1].Nombre + " " + $3.Hijos[2].Nombre  + " " + $4 + " " + $5 + " " + $6 + $7 + "\n";
					//document.getElementById("texto1C3D").innerHTML = Salida;

					Entorno1.LosErrores +="<tr>";
					Entorno1.LosErrores += "<td>" +  "Eliminación de código inalcanzable : Se optimizó por regla 5 "   + " </td>";
					Entorno1.LosErrores += "<td>" + this._$.first_line; + "</td>";
					Entorno1.LosErrores += "</tr>";
			}
			
			else{
				var Cadena1 = document.getElementById("texto1C3D").value;
				var Salida = Cadena1 + $1 + $2 + $3.Hijos[0].Nombre + " " +  $3.Hijos[1].Nombre + " " + $3.Hijos[2].Nombre  + " " + $4 + " " + $5 + " " + $6 + $7 + "\n";
				document.getElementById("texto1C3D").innerHTML = Salida;
			}
		}
		
	}
	|IMPRMIR PARIZQ IMPRIMIRCARACTER COMA expresion PARDER PTyCOMA{
		if(contador == 0){		
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + $2 + $3 + $4 + $5.Nombre + $6 + $7 + "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|IMPRMIR PARIZQ IMPRIMIRDECIMAL COMA expresion PARDER PTyCOMA{
		if(contador == 0){		
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + $2 + $3 + $4 + $5.Nombre + $6 + $7 + "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|IMPRMIR PARIZQ IMPRIMIRENTERO COMA expresion PARDER PTyCOMA{
		if(contador == 0){	
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + $2 + $3 + $4 + $5.Nombre + $6 + $7 + "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|ELFINAL{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + "end"+ "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|STACK CORIZQ expresion CORDER IGUAL  expresion PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + "" + $3.Nombre +  "" + $4 + " " + $5 + " " + $6.Nombre + ";\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	|ID IGUAL STACK CORIZQ expresion CORDER PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + "" + $3 +  "" + $4 + " " + $5.Nombre + " " + $6 + ";\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
	| LA_P IGUAL expresionC3D PTyCOMA{
		if(contador == 0){
			var nuevo = new Optimizar("Optimizar");
			var IDS = new Nodo($1);
			nuevo.Hijos[0] = IDS;
			nuevo.Hijos[1] = $3;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			$$ = nuevo.Ejecutar(Entorno1);
		}
	}
	|LLAMADA IDENTIFICADOC3D PTyCOMA{
		if(contador == 0){
			var Cadena1 = document.getElementById("texto1C3D").value;
			var Salida = Cadena1 + $1 + " " + $2 + " " + $3 + "\n";
			document.getElementById("texto1C3D").innerHTML = Salida;
		}
	}
;
LISTA_TES:
	LISTA_TES COMA ID{
		var Cadena1 = document.getElementById("texto1C3D").value;
    	var Salida = Cadena1 + "," + $3;
        document.getElementById("texto1C3D").innerHTML = Salida;
	}
	|ID{
		var Cadena1 = document.getElementById("texto1C3D").value;
    	var Salida = Cadena1 + "var " + $1;
        document.getElementById("texto1C3D").innerHTML = Salida;
	}
	;


expresionC3D:
	expresion MAS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("+");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;									
			
			}
	|expresion MAS MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("+");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	
	
	| expresion MENOS expresion		{ 
									var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("-");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;		
									}
	
	|expresion MENOS MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("-");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	| expresion POR expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("*");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
									}
	
	|expresion POR MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("*");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	| expresion DIVIDIDO expresion	{ 
								var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("/");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;			
									}
    
	
	|expresion DIVIDIDO MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("/");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	| expresion MODULO expresion	{
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("%");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	 
									}
	
	|expresion MODULO MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("%");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	| expresion MAYOR expresion	{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo(">");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
								}
	
	|expresion MAYOR MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo(">");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	| expresion MENOR expresion	{ 

		var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
								}
	
	|expresion MENOR MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	| expresion MENORIGUAL expresion	{ 
		var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<=");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
								}
	
	|expresion MENORIGUAL MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<=");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}

	| expresion MAYORIGUAL expresion	{ 
		var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo(">=");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
								}
	
	|expresion MAYORIGUAL MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo(">=");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;									
			
	}
	
	| expresion IGUALDAD expresion	{ 
		var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("==");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
										}
	| expresion DESIGUALDAD expresion	{ 
		var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<>");
			nuevo.Hijos[1] = Signo;

			nuevo.Hijos[2] = $3;

			$$ = nuevo;	
	}
    | expresion IGUALDAD MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("==");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;	
	}
	| expresion DESIGUALDAD MENOS expresion		{ 
			var nuevo = new Nodo("SUMA");
			nuevo.Hijos[0] = $1;

			var Signo = new Nodo("<>");
			nuevo.Hijos[1] = Signo;

			$4.Nombre = "-" + $4.Nombre; 
			nuevo.Hijos[2] = $4;

			$$ = nuevo;	
	}
	;
expresion:
    ENTERO						{
			var nuevo = new Nodo($1);
			nuevo.Nombre = $1;
			nuevo.TipoDato = "ENTERO";
			$$ = nuevo;
								}
	| DECIMAL						{ 
			var nuevo = new Nodo($1);
			nuevo.Nombre = $1;
			nuevo.TipoDato = "DECIMAL";
			$$ = nuevo;						
									}
	| ID							{ 
		var nuevo = new Nodo($1);
		nuevo.Nombre = $1;
		nuevo.TipoDato = "ID";
		$$ = nuevo;
										
									}
	|LA_H{
		var nuevo = new Nodo("H");
		nuevo.Nombre = $1;
		nuevo.TipoDato = "H";
		$$ = nuevo;
	}
	|LA_P{
		var nuevo = new Nodo("P");
		nuevo.Nombre = $1;
		nuevo.TipoDato = "P";
		$$ = nuevo;
	}
	
	
	;

