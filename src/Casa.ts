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

    public TipoVariables =  new Array();
    public VariableVariables = new Array();
    public TesVariables = new Array();

    public TipoVariablesFUNCION =  new Array();
    public VariableVariablesFUNCION = new Array();
    public TesVariablesFUNCION = new Array();

    public tamanioentorno = 0;
    constructor() {
        // Le doy un valor
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
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            console.log("Nombre->" + this.SIMBOLOS[i].nombre + 
                        " Tipo->" + this.SIMBOLOS[i].tipo +
                        " Ambito->"+ this.SIMBOLOS[i].ambito +
                        " Nombre_Funcion->" + this.SIMBOLOS[i].funcion + 
                        " Tamanio_Funcion->" + this.SIMBOLOS[i].tamanio +
                        " Valor_T->" + this.SIMBOLOS[i].posicionT +
                        " posicion_en_funcion-> " + this.SIMBOLOS[i].posicion
                        );
        }
    }
    existefuncion(nombre:string):boolean{
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            if(this.SIMBOLOS[i].nombre == nombre){
                return true;
            }
        }
        return false;
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
}