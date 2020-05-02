class Casa {
    // Indico mi variable

    direccion:string
    numero: number;
    etiquetas : number;
    paso = 0;
    public SIMBOLOS: Array<simbolo>;
    constructor() {
        // Le doy un valor

        this.direccion = "";
        this.numero = 0;
        this.etiquetas = 0;
        this.paso = 0;
        this.SIMBOLOS = new Array();
    }
    anadirSimbolo(nombre1:string,ambito1:string,funcion1:string,tamanio1:number,posicion1:number,tipo1:string,posicionT1:string,parametros:number){
        var NuevoSimbolo = new simbolo(nombre1,ambito1,funcion1,tamanio1,posicion1,tipo1,posicionT1,parametrostsc );
        this.SIMBOLOS.push(NuevoSimbolo);
    }
    mostrarSimboos(){
        for(var i = 0; i < this.SIMBOLOS.length;i++){
            console.log("Nombre->" + this.SIMBOLOS[i].nombre + " Tipo->" + this.SIMBOLOS[i].tipo);
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
}