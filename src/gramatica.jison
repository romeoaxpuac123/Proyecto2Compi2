/**
 * PRIMERA EVALUACION DE OLC2
 BAYRON ROMEO AXPUAC YOC 
 201314474
 */

/* Definición Léxica */
%{
	var respuesta = "";
	var Entorno1 = new Casa();
	//console.log("hola") ;
	//console.log(Entorno1);
	//console.log("fin");
	var GraficasDOT = new Graficas();
	var contador = 0;
	
	
%}

%lex

%options case-insensitive

%%

"print"			return 'IMPRMIR';
";"					return 'PTCOMA';
"("					return 'PARIZQ';
")"					return 'PARDER';
"["					return 'CORIZQ';
"]"					return 'CORDER';

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



/* Espacios en blanco */
[ \r\t]+			{}
\n					{}


[0-9]+("."[0-9]+)\b  	return 'DECIMAL';
[0-9]+\b				return 'ENTERO';
("'"[a-zA-Z0-9_]"'")	return "CARACTER";
("\""[a-zA-Z0-9_]+([a-zA-Z0-9_" "]+)"\"")	return "CADENA";

<<EOF>>				return 'EOF';

.					{ alert('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
       console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
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
	}}
;

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

			$$ = nuevo2;
	}
	| error {alert('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
        console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
;

instruccion
	: IMPRMIR PARIZQ expresion PARDER PTCOMA {
		
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
										var nuevo = new Nodo("Entero");
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
	| PARIZQ expresion PARDER		{ 
										$$ = $2;  
										//console.log("DUA LIPA");
									}
;