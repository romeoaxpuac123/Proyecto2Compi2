class Casa {
    // Indico mi variable
    nombreentorno:string;
    direccion:string
    numero: number;
    etiquetas : number;
    paso = 0;
    public SIMBOLOS: Array<simbolo>;
    valordep = 0;
    public Tipo =  new Array();
    public Variable = new Array();
    public Tes = new Array();
    public Salida = "";
    public TipoVariables =  new Array();
    public VariableVariables = new Array();
    public TesVariables = new Array();

    public TipoVariablesFUNCION =  new Array();
    public VariableVariablesFUNCION = new Array();
    public TesVariablesFUNCION = new Array();

    public tamanioentorno = 0;

    public LosErrores = "";

    public ListaParametrosFuncion: Array<NodoAbstracto>;
    public ListaParametrosFuncion2: Array<NodoAbstracto>;

    constructor() {
        // Le doy un valor
        this.ListaParametrosFuncion = new Array();
        this.ListaParametrosFuncion2 = new Array();
        this.nombreentorno = "Global";
        this.direccion = "";
        this.numero = 0;
        this.etiquetas = 0;
        this.paso = 0;
        this.valordep = 0;
        this.SIMBOLOS = new Array();
    }
    anadirSimbolo(nombre1:string,ambito1:string,funcion1:string,tamanio1:number,posicion1:number,tipo1:string,posicionT1:string,parametros:number){
        var NuevoSimbolo = new simbolo(nombre1,ambito1,funcion1,tamanio1,posicion1,tipo1,posicionT1,parametros );
        this.SIMBOLOS.push(NuevoSimbolo);
    }
    mostrarSimboos(){
        document.getElementById("Reporte_Simbolos").innerHTML = "";
        this.Salida = "<!DOCTYPE html><html lang=\"en\"><head>	<meta charset=\"UTF-8\">	<title>Dando estilo a tablas</title><link rel=\"stylesheet\" type=\"text/css\" href=\"tablas.css\"></head><body><div id=\"main-container\">";
        this.Salida += "<table><thead><tr><th>IDENTIFICADOR</th><th>ROL</th><th>TIPO</th><th>TAMANIO</th><th>AMBITO</th><th>POSICION</th></tr></thead>";
        var elcoso = "";
        var elcoso2 = "";
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            console.log("Nombre->" + this.SIMBOLOS[i].nombre + 
                        " Tipo->" + this.SIMBOLOS[i].tipo +
                        " Ambito->"+ this.SIMBOLOS[i].ambito +
                        " Nombre_Funcion->" + this.SIMBOLOS[i].funcion + 
                        " Tamanio_Funcion->" + this.SIMBOLOS[i].tamanio +
                        " Valor_T->" + this.SIMBOLOS[i].posicionT +
                        " posicion_en_funcion-> " + this.SIMBOLOS[i].posicion
                        );
                        var Rol ="VARIABLE";
                        if(this.SIMBOLOS[i].posicionT == "NO TIENE"){
                            Rol = "FUNCION";
                        }
                        
                        elcoso = "";
                        elcoso = "<tr>" + "<td>" + this.SIMBOLOS[i].nombre + "</td>"
                                 + "<td>" + Rol + "</td>"
                                 + "<td>" + this.SIMBOLOS[i].tipo + "</td>"
                                 + "<td>" + this.SIMBOLOS[i].tamanio + "</td>"
                                 + "<td>" + this.SIMBOLOS[i].ambito + "</td>"
                                 + "<td>" + this.SIMBOLOS[i].posicion+ "</td>"
                                 + "</tr>";                     
                        elcoso2 +=   elcoso;
        }
       this.Salida += elcoso2 + "</table></div></body></html>";
       //document.getElementById('Simbolos').innerHTML = this.Salida;	
       document.getElementById("Reporte_Simbolos").innerHTML = this.Salida;
       this.Salida = "";
         
    }

    Tipofuncion(nombre:string):string{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre){
                return this.SIMBOLOS[i].tipo;

            }
        }
        return "NOP";
    }
    
    existefuncion(nombre:string):boolean{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre){
                return true;
            }
        }
        return false;
    }
    buscarParametros(nombre:string,numparametro:number):string{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].funcion == nombre && this.SIMBOLOS[i].posicion == numparametro
                && this.SIMBOLOS[i].posicionT != "NO TIENE"){
                return this.SIMBOLOS[i].tipo;
            }
        }
        return "nullXD";
    }
    existefuncion2(nombre:string,parametros:number):boolean{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros == parametros){
                return true;
            }
        }
        return false;
    }
    tamaniofuncion(nombre:string,parametros:number):number{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros){
                return this.SIMBOLOS[i].tamanio;
            }
        }
        return 0;
    }

    existefuncion3(nombre:string,parametros:number):string{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre && this.SIMBOLOS[i].parametros){
                return this.SIMBOLOS[i].funcion;
            }
        }
        return "";
    }
   
    totalparametros(nombre:string, parametros:number):boolean{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre  && this.SIMBOLOS[i].parametros == parametros){
                return true;
            }
        }
        return false;
    }
    totalparametrosFuncion(nombre:string):number{
        var total = 0; 
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre){
                return this.SIMBOLOS[i].simbolo_tamanio();
            }
        }
        return total;
    }

    FuncionExistenteBayron(nombre:string):boolean{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].simbolo_funcion() == nombre){
                return true;
            }
        }
        return false;
    }

    FuncionTdeVariable(nombreFuncion:string,nombreParametro:string):string{
        var Resutlado= "NoTiene";
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].funcion == nombreFuncion && this.SIMBOLOS[i].nombre == nombreParametro
                ){
                return this.SIMBOLOS[i].posicionT;
            }
        }
        return Resutlado;
    }
}