/**
 * PRIMERA EVALUACION DE OLC2
 BAYRON ROMEO AXPUAC YOC 
 201314474
 */

/* Definición Léxica */
%{
	var respuesta = "";
	var Entorno1 = new Casa();
	var GraficasDOT = new Graficas();
	var contador = 0;
	
	
	
%}

%lex

%options case-insensitive

%%

"print"			return 'IMPRMIR';
";"					return 'PTyCOMA';
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
">="				return 'MAYORIGUAL';
"<="				return 'MENORIGUAL';
">"					return 'MAYOR';
"<"					return 'MENOR';
"=="				return 'IGUALDAD';
"!="				return 'DESIGUALDAD';
"&&"				return 'AND';
"||"				return 'OR';
"^"					return 'XOR';
"!"					return 'NOT';
"true"				return 'VERDADERO';
"false"				return 'FALSO';
"public"			return 'PUBLIC';
"var"				return 'VAR';
"const"				return 'CONST';
"global"			return 'GLOBAL';
":"					return 'DOSP';
"="					return 'IGUAL';




/* Espacios en blanco */
[ \r\t]+			{}
\n					{}


[0-9]+("."[0-9]+)\b  	return 'DECIMAL';
[0-9]+\b				return 'ENTERO';
("'"[a-zA-Z0-9_]"'")	return "CARACTER";
//("\""([a-zA-Z0-9_" "]+)"\"")	return "CADENA";
\"([^\\\"]|\\\"|\\t|\\n|\\r|\\)*\"				return "CADENA";
([a-zA-Z_]+([a-zA-Z0-9_ñÑ]+))	return "ID";

<<EOF>>				return 'EOF';

.					{ 
					alert('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
       					console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); 
					Entorno1.LosErrores +="<tr>";
					Entorno1.LosErrores += "<td>" + "Sintáctico" + "  </td>" ;
					Entorno1.LosErrores += "<td>" + "Caracter no perteneciente" + yytext + " </td>";
					Entorno1.LosErrores += "<td>" + yylloc.first_line  + "</td>";
					Entorno1.LosErrores += "<td>" + yylloc.first_column+ "</td>";
					Entorno1.LosErrores += "</tr>";	   
					}
/lex



/* Asociación de operadores y precedencia */
%left 'AND' 'OR' 'XOR'
%left 'IGUALDAD' 'DESIGUALDAD'
%left 'MAYOR' 'MENOR' 'MAYORIGUAL' 'MENORIGUAL'
%left 'NOT'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO' 'MODULO'
%left 'POTENCIA' 
%left UMENOS



%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF{{
			document.getElementById("Reporte_Errores").innerHTML = "";
			var ReporteErrores = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Dando estilo a tablas</title>";
			ReporteErrores += "<link rel=\"stylesheet\" type=\"text/css\" href=\"tablas.css\"></head><body><div id=\"main-container\">";
			ReporteErrores += "<table><thead><tr><th>TIPO</th><th>DESCRIPCION</th><th>LINEA</th><th>COLUMNA</th></tr></thead>";

			ReporteErrores += Entorno1.LosErrores;
			ReporteErrores += "</table></div></body></html>"

			document.getElementById("Reporte_Errores").innerHTML = ReporteErrores;

			var nuevo = new Nodo("INICIO");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "INICIO" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
		
			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);


		//Vamos a mostra tooodos los cosos
		var Cadena_Inicio = "var ";
		for (var i = 1; i <= Entorno1.numero; i++) {
			if(i == Entorno1.numero){
				Cadena_Inicio = Cadena_Inicio + " t" + i + ";\n";
			}else{
				Cadena_Inicio = Cadena_Inicio + " t" + i + ",";
			}
			
		}
		if(Entorno1.numero == 0){
			Cadena_Inicio = "";
		}
		Cadena_Inicio = Cadena_Inicio + "var Stack[]; \nvar Heap[];\nvar P = 0;\nvar H = 0;\n"
		//console.log("CIRUGIA->" + Cadena_Inicio);
		document.getElementById("texto1C3D").innerHTML = Cadena_Inicio + document.getElementById("texto1C3D").value;
		Entorno1.numero = 0;
		Entorno1.etiquetas = 0;

		console.log("RESULTADO CODIGO DOT");
		GraficasDOT.anadir("}");
		console.log(GraficasDOT.ResultCadena());
		console.log("fin DOT");
		document.getElementById("numero1x").innerHTML = GraficasDOT.ResultCadena();
		GraficasDOT.Renovar();
		Entorno1.direccion = "";
		Entorno1.SIMBOLOS.splice(0, Entorno1.SIMBOLOS.length);
	}}
;
PTCOMA
	:PTyCOMA
	|;
instrucciones
	: instrucciones instruccion{
			

			var nuevo = new Nodo("SENTENCIA");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);


			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $2.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			var nuevo2 = new Nodo("SENTENCIAS");
			contador = contador + 1;
			nuevo2.NumeroDeNodo = contador;
			var Hijo2 = "node_"+ nuevo2.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIAS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			var Conexion2 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion2);

			var Conexion3 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + nuevo.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion3);
			document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +Entorno1.direccion + "\n";
        	Entorno1.direccion = ""; 

			$$ = nuevo2;
			
	}
	| instruccion{
			var nuevo = new Nodo("SENTENCIAS");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);


			var nuevo2 = new Nodo("SENTENCIA");
			contador = contador + 1;
			nuevo2.NumeroDeNodo = contador;
			var Hijo2 = "node_"+ nuevo2.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIAS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);


			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			var Conexion2 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + nuevo.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion2);
			document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +Entorno1.direccion + "\n";
        	Entorno1.direccion = ""; 
			$$ = nuevo2;
	}
	| error {
		alert('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
        console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); 
		Entorno1.LosErrores +="<tr>";
		Entorno1.LosErrores += "<td>" + "sintáctico" + "  </td>" ;
		Entorno1.LosErrores += "<td>" +  "Expresion incorrecta"  + " </td>";
		Entorno1.LosErrores += "<td>" + this._$.first_line  + "</td>";
		Entorno1.LosErrores += "<td>" + this._$.first_column + "</td>";
		Entorno1.LosErrores += "</tr>";

		}
;

instruccion
	/*:   PUBLIC ID ID PARIZQ PARDER LLAVIZQ lista_instrucciones LLAVDER {
				//declaramos una funcion de la forma public void nombre(){}
				Entorno1.nombreentorno = $3;
				console.log("VAMOS A DECLARAR UNA FUNCION xd, PUBLIC VOID");
				var nuevo = new Funciones("Funciones");
				var NombreFuncion = new Nodo($3);
				nuevo.Hijos[0] = NombreFuncion;
				contador = contador + 1;
				nuevo.NumeroDeNodo = contador;

				nuevo.linea = this._$.first_line;
				nuevo.columna = this._$.first_column;

				var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "DEC_FUNCION" + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo1);

				

				
				contador = contador + 1;
				var Hijo3 = "node_"+ contador + "[shape=circle label=\"" + $3 + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo3);

				var Conexion2 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador + "\n";
				GraficasDOT.anadir(Conexion2);

				var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $7.NumeroDeNodo + "\n";
				GraficasDOT.anadir(Conexion1);

				

				$$ =  nuevo.Ejecutar(Entorno1);
				document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +Entorno1.direccion + "\n";
        		Entorno1.direccion = ""; 
				Entorno1.direccion = ""; 
		} */
	:   PUBLIC ID ID PARIZQ lista_Parametros PARDER LLAVIZQ lista_instrucciones LLAVDER {
				Entorno1.nombreentorno = $3;
				var nuevo = new Funciones("Funciones");
				var NombreFuncion = new Nodo($3);
				nuevo.Hijos[0] = NombreFuncion;
				nuevo.TipoDato = $2;
				contador = contador + 1;
				nuevo.NumeroDeNodo = contador;

				nuevo.linea = this._$.first_line;
				nuevo.columna = this._$.first_column;

				var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "DEC_FUNCION" + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo1);

				

				
				contador = contador + 1;
				var Hijo3 = "node_"+ contador + "[shape=circle label=\"" + $3 + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo3);

				var Conexion2 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador + "\n";
				GraficasDOT.anadir(Conexion2);

				var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $8.NumeroDeNodo + "\n";
				GraficasDOT.anadir(Conexion1);

				var Conexion3 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $5.NumeroDeNodo + "\n";
				GraficasDOT.anadir(Conexion3);


				$$ =  nuevo.Ejecutar(Entorno1);
			
	}
;
lista_Parametros
	: lista_Parametros COMA ID ID{
			//Entorno1.tamanioentorno += 1;
			var nuevo = new Parametros ("PARAMETROS");
			var nuevovalor2 = new Nodo($4);
			nuevo.Hijos[0] = nuevovalor2;
		    nuevo.TipoDato = $3;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "PARAMETROS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			
			contador = contador + 1;
			var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + $3 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			contador = contador + 1;
			var Hijo3 = "node_"+ contador + "[shape=circle label=\"" + $4 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo3);

			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + (contador-1)+ "\n";
			GraficasDOT.anadir(Conexion1);

			var Conexion2 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" +  contador + "\n";
			GraficasDOT.anadir(Conexion2);
			//nuevo.Ejecutar(Entorno1);
			

			var nuevo2 = new Parametros ("PARAMETROS");
			contador = contador + 1;
			nuevo2.NumeroDeNodo = contador;
			var Hijo1x = "node_"+ nuevo2.NumeroDeNodo + "[shape=circle label=\"" + "LISTA_PARAMETROS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1x);
			
			var Conexion2X = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" +  nuevo.NumeroDeNodo+ "\n";
			GraficasDOT.anadir(Conexion2X);
			
			var Conexion2XX = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" +  $1.NumeroDeNodo+ "\n";
			GraficasDOT.anadir(Conexion2XX);
			nuevo.Ejecutar(Entorno1);

			
			$$ =  nuevo2;
	}
	| ID ID{
			//Entorno1.numero += 1;
			//Entorno1.valordep = Entorno1.numero += 1;
			//Entorno1.tamanioentorno += 1;
			var nuevo = new Parametros ("PARAMETROS");
			var nuevovalor2 = new Nodo($2);
			nuevo.Hijos[0] = nuevovalor2;
		    nuevo.TipoDato = $1;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "PARAMETROS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			
			contador = contador + 1;
			var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			contador = contador + 1;
			var Hijo3 = "node_"+ contador + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo3);

			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + (contador-1)+ "\n";
			GraficasDOT.anadir(Conexion1);

			var Conexion2 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" +  contador + "\n";
			GraficasDOT.anadir(Conexion2);
			nuevo.Ejecutar(Entorno1);
			//$$ =  nuevo.Ejecutar(Entorno1);
			var nuevop = new Parametros ("LISTA_PARAMETROS");
			contador = contador + 1;
			nuevop.NumeroDeNodo =  contador;

			var Hijo1x = "node_"+ nuevop.NumeroDeNodo + "[shape=circle label=\"" + "LISTA_PARAMETROS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1x);

			var Conexion1x = "node_" + nuevop.NumeroDeNodo + "->" + "node_" + nuevo.NumeroDeNodo+ "\n";
			GraficasDOT.anadir(Conexion1x);

			$$ = nuevop;
			
	}
	|{	     //Entorno1.valordep = Entorno1.numero += 1;
			//Entorno1.tamanioentorno += 1;
			var nuevo = new Nodo ("PARAMETROS");
			
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			//Entorno1.valordep = Entorno1.numero += 1;
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SIN_PARAMETROS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
		};



lista_instrucciones
	: lista_instrucciones instruccion2{
		
			var nuevo = new Nodo("SENTENCIA");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);


			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $2.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			var nuevo2 = new Nodo("SENTENCIAS");
			contador = contador + 1;
			nuevo2.NumeroDeNodo = contador;
			var Hijo2 = "node_"+ nuevo2.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIAS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			var Conexion2 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion2);

			var Conexion3 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + nuevo.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion3);
			//document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +Entorno1.direccion + "\n";
        	//Entorno1.direccion = ""; 

			$$ = nuevo2;
	}
	|instruccion2{
		var nuevo = new Nodo("SENTENCIAS");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);


			var nuevo2 = new Nodo("SENTENCIA");
			contador = contador + 1;
			nuevo2.NumeroDeNodo = contador;
			var Hijo2 = "node_"+ nuevo2.NumeroDeNodo + "[shape=circle label=\"" + "SENTENCIAS" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);


			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			var Conexion2 = "node_" + nuevo2.NumeroDeNodo + "->" + "node_" + nuevo.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion2);
			//document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +Entorno1.direccion + "\n";
        	//Entorno1.direccion = ""; 
			$$ = nuevo2;
		console.log("hola lista2");
	};

instruccion2
	: IMPRMIR PARIZQ expresion PARDER PTCOMA {
		console.log("PASO POR IMPRIMIR");
		//console.log('El valor de la expresión es: ' + $3.Nombre);
		//respuesta = respuesta + '->' + $3.Ejecutar() + "\n";
        //document.getElementById("salida").innerHTML = respuesta;
		var nuevo = new Imprimir("Imprimir");
		nuevo.Hijos[0] = $3;
		nuevo.Ejecutar(Entorno1);
		
		contador = contador + 1;
		nuevo.NumeroDeNodo = contador;
		var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "IMP" + "\"]" +"\n";									
        GraficasDOT.anadir(Hijo1);	

		contador = contador + 1;
		var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + "EXP" + "\"]" +"\n";									
        GraficasDOT.anadir(Hijo2);	

		var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador + "\n";
		GraficasDOT.anadir(Conexion1);

		var Conexion2 = "node_" + contador + "->" + "node_" + $3.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion2);
		//document.getElementById("texto1C3D").innerHTML = document.getElementById("texto1C3D").value +entorno.direccion + "\n";
        //entorno.direccion = ""; 
		$$ = nuevo;
	}
	
	| ID PARIZQ lista_Expresiones PARDER PTCOMA{
		//llamada de funcion principal();
				var nuevo = new LLamadas("LLamada");
				var NombreFuncion = new Nodo($1);
				nuevo.Hijos[0] = NombreFuncion;
				contador = contador + 1;
				nuevo.NumeroDeNodo = contador;
				
				nuevo.linea = this._$.first_line;
				nuevo.columna = this._$.first_column;
				
				
				var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "LLAMADA_FUNCION" + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo1);

				contador = contador + 1;
				var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
				GraficasDOT.anadir(Hijo2);	

				var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador + "\n";
				GraficasDOT.anadir(Conexion1);

				var Conexion1xZ = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $3.NumeroDeNodo + "\n";
				GraficasDOT.anadir(Conexion1xZ);
				

				$$ =  nuevo.Ejecutar(Entorno1);

	}
	|TIPOS ID_LISTA DOSP IGUAL expresion PTCOMA	{
		console.log("DEC1");
		var nuevo = new Variables ("VARIABLES");
		//var Tipo = new Nodo($1);
		nuevo.Hijos[0] = $1;
		nuevo.Hijos[1] = $5;
		nuevo.linea = this._$.first_line;
		nuevo.columna = this._$.first_column;
		contador = contador + 1;
		nuevo.NumeroDeNodo = contador;
			

		var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "DEC_VAR" + "\"]" +"\n";									
		GraficasDOT.anadir(Hijo1);

		

		var Conexion1x = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion1x);

		var Conexion1xZ = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $2.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion1xZ);

		var Conexion1xZx = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $5.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion1xZx);

		$$ = nuevo.Ejecutar(Entorno1);
	}
	|TIPOS ID_LISTA PTCOMA {
		var nuevo = new Variables2 ("VARIABLES");
		//var Tipo = new Nodo($1);
		nuevo.Hijos[0] = $1;
		nuevo.linea = this._$.first_line;
		nuevo.columna = this._$.first_column;
		contador = contador + 1;
		nuevo.NumeroDeNodo = contador;
			

		var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "DEC_VAR" + "\"]" +"\n";									
		GraficasDOT.anadir(Hijo1);

		

		var Conexion1x = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion1x);

		var Conexion1xZ = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $2.NumeroDeNodo + "\n";
		GraficasDOT.anadir(Conexion1xZ);

	

		$$ = nuevo.Ejecutar(Entorno1);
	}
	;

lista_Expresiones
	:lista_Expresiones COMA expresion{
			Entorno1.ListaParametrosFuncion.push($3);
			var nuevo = new Nodo("lista_Expresiones");
			
		    nuevo.TipoDato = $1;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "lista_Expresiones" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);

			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			var Conexion1x = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $3.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1x);

			$$ = nuevo;
	}
	|expresion{
			Entorno1.ListaParametrosFuncion.push($1);
			var nuevo = new Nodo("lista_Expresiones");
			
		    nuevo.TipoDato = $1;
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			
			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "lista_Expresiones" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);

			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);

			$$ = nuevo;
	}
	|{
			var nuevo = new Nodo ("lista_Expresiones");
			
			nuevo.linea = this._$.first_line;
			nuevo.columna = this._$.first_column;
			//Entorno1.valordep = Entorno1.numero += 1;
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "SIN_EXPRESIONES" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
	};

ID_LISTA:
	ID_LISTA COMA ID{
		Entorno1.VariableVariables.push($3);
			var nuevo = new Nodo("ID_LISTA");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "ID_LISTA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			
			contador = contador + 1;
			var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + $3 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			var Conexion1 = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + $1.NumeroDeNodo + "\n";
			GraficasDOT.anadir(Conexion1);
			
			var Conexion1x = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador+ "\n";
			GraficasDOT.anadir(Conexion1x);

			$$ = nuevo ;
	}
	|ID{
			Entorno1.VariableVariables.push($1);
			var nuevo = new Nodo("ID_LISTA");
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "ID_LISTA" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			
			contador = contador + 1;
			var Hijo2 = "node_"+ contador + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo2);

			
			var Conexion1x = "node_" + nuevo.NumeroDeNodo + "->" + "node_" + contador+ "\n";
			GraficasDOT.anadir(Conexion1x);

			$$ = nuevo ;

	}
;

TIPOS:
	VAR{
			var nuevo = new Nodo($1);
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "VAR" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
	}
	|CONST{
			var nuevo = new Nodo($1);
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "CONST" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
	}
	|GLOBAL{
			var nuevo = new Nodo($1);
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + "GLOBAL" + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
	}
	|ID{
			var nuevo = new Nodo($1);
			contador = contador + 1;
			nuevo.NumeroDeNodo = contador;
			

			var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
			GraficasDOT.anadir(Hijo1);
			$$ = nuevo;
	}
;

expresion
	: MENOS expresion %prec UMENOS	{ 
										//$$ = $2 *-1;
										//var nuevo = Nodo("Hola");
										//$$ = nuevo;
										//console.log("DUA LIPA");
										//$$ = $1 * $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo("*");

										var nuevo2 = new Nodo("Entero");
										var nuevovalor2 = new Nodo("-1");
										nuevo2.Hijos[0] = nuevovalor2;
										nuevo2.TipoDato = "Entero";
										nuevo2.CadenaDe3D = "-1";

										nuevo.Hijos[0] = $2;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] =  nuevo2;
										$$ =  nuevo.Ejecutar(Entorno1);
									}
	|NOT expresion 					{ 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($1);
										nuevo.Hijos[0] = $2;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $2;
										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion MAS expresion		{ 
										//$$ = $1 + $3;										
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;
										
										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	
										
										$$ =  nuevo.Ejecutar(Entorno1);
										
									}
	| expresion MENOS expresion		{ 
										//$$ = $1 - $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion POR expresion		{ 
										//$$ = $1 * $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										
										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion DIVIDIDO expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion POTENCIA expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion MODULO expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										$$ =  nuevo.Ejecutar(Entorno1);
									}
	| expresion MAYOR expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion MENOR expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion MENORIGUAL expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion MAYORIGUAL expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion AND expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion OR expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										$$ =  nuevo.Ejecutar(Entorno1);
								}
	| expresion XOR expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
										}
	| expresion IGUALDAD expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	


										$$ =  nuevo.Ejecutar(Entorno1);
										}
	| expresion DESIGUALDAD expresion	{ 
										//$$ = $1 / $3; 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $2 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);	

										var Conexion1 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $1.NumeroDeNodo + "\n";
										var Conexion2 = "node_"+ nuevo.NumeroDeNodo + "->" + "node_"+ $3.NumeroDeNodo +"\n";
										GraficasDOT.anadir(Conexion1);	
										GraficasDOT.anadir(Conexion2);	

										$$ =  nuevo.Ejecutar(Entorno1);
										}
	| ENTERO						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Entero");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Entero";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);									



										$$ = nuevo;
										
									//	console.log("Leimos un Entero->" + $1);
									}
	| DECIMAL						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Entero");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Decimal";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);
										

										$$ = nuevo;
									//	console.log("Leimos un Entero->" + $1);
									}
	| CARACTER						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Caracter");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Caracter";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1.replace("'","").replace("'","") + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);


										$$ = nuevo;
										console.log("Leimos un Caracter->" + $1);
									}
	| VERDADERO   					{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Booleano");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Booleano";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);


										$$ = nuevo;
										console.log("Leimos un Booleano->" + $1);
									}
	| FALSO 						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Booleano");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Booleano";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1 + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);


										$$ = nuevo;
										console.log("Leimos un Booleano->" + $1);
									}
	| CADENA						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Cadena");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Cadena";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1.replace("\"","").replace("\"","") + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);

										
										$$ = nuevo;
										console.log("Leimos una cadena->" + $1);
										
									}
	|ID								{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("ID");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "ID";
										nuevo.CadenaDe3D = $1;

										contador = contador + 1;
										nuevo.NumeroDeNodo = contador;
										var Hijo1 = "node_"+ nuevo.NumeroDeNodo + "[shape=circle label=\"" + $1.replace("\"","").replace("\"","") + "\"]" +"\n";									
										GraficasDOT.anadir(Hijo1);

										
										$$ = nuevo;
										console.log("ID->" + $1);
										
									}
	| PARIZQ expresion PARDER		{ 
										$$ = $2;  
										//console.log("DUA LIPA");
									}
;