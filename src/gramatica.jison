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


/* Espacios en blanco */
[ \r\t]+			{}
\n					{}


[0-9]+("."[0-9]+)\b  	return 'DECIMAL';
[0-9]+\b				return 'ENTERO';

<<EOF>>				return 'EOF';

.					{ alert('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
       console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex



/* Asociación de operadores y precedencia */

%left 'MAS' 'MENOS'
%left 'POR' 'DIVIDIDO'
%left UMENOS



%start ini

%% /* Definición de la gramática */

ini
	: instrucciones EOF{{
		
	}}
;

instrucciones
	: instruccion instrucciones
	| instruccion
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
		$$ = nuevo;
		
	}
;


expresion
	: MENOS expresion %prec UMENOS	{ 
										//$$ = $2 *-1;
										//var nuevo = Nodo("Hola");
										//$$ = nuevo;
										//console.log("DUA LIPA");
									}
	| expresion MAS expresion		{ 
										//$$ = $1 + $3;
										//var nuevo = Nodo("Hola");
										//$$ = $1;
										//console.log("SUMA"); 
										var nuevo = new Aritmetica("Aritmetica");
										var operador = new Nodo($2);
										nuevo.Hijos[0] = $1;
										nuevo.Hijos[1] = operador;
										nuevo.Hijos[2] = $3;
										$$ =  nuevo.Ejecutar(Entorno1);
										//$$ = nuevo;
									}
	| expresion MENOS expresion		{ 
										//$$ = $1 - $3; 
										//var nuevo = Nodo("Hola");
										//$$ = nuevo;
										//console.log("DUA LIPA");
									}
	| expresion POR expresion		{ 
										//$$ = $1 * $3; 
										//var nuevo = Nodo("Hola");
										//$$ = nuevo;
										//console.log("DUA LIPA");
									}
	| expresion DIVIDIDO expresion	{ 
										//$$ = $1 / $3;
										//var nuevo = Nodo("Hola");
										//$$ = nuevo; 
										//console.log("DUA LIPA");
									}
	| ENTERO						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Entero");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Entero";
										$$ = nuevo;
										console.log("Leimos un Entero->" + $1);
									}
	| DECIMAL						{ 
										//$$ = Number($1); 
										var nuevo = new Nodo("Decimal");
										var nuevovalor = new Nodo($1);
										nuevo.Hijos[0] = nuevovalor;
										nuevo.TipoDato = "Decimal";
										$$ = nuevo;
										console.log("Leimos un Decial->" + $1);
									}
	| PARIZQ expresion PARDER		{ 
										$$ = $2;  
										console.log("DUA LIPA");
									}
;