class simbolo{
    nombre:string
    ambito: string;
    funcion : string;
    tamanio : number;
    posicion : number;
    tipo: string;
    posicionT: string;
    parametros: number;
    /*
    constructor(){
        this.nombre = "";
        this.ambito = "";
        this.funcion = "";
        this.tamanio = 0;
        this.posicion = 0;
        this.tipo = "";
        this.posicionT = "";
    }*/
    constructor(nombre1:string,ambito1:string,funcion1:string,tamanio1:number,posicion1:number,tipo1:string,posicionT1:string,parametros:number){
        this.nombre = nombre1;
        this.ambito = ambito1;
        this.funcion = funcion1;
        this.tamanio = tamanio1;
        this.posicion = posicion1;
        this.tipo = tipo1;
        this.posicionT = posicionT1;
        this.parametros = parametros;

    }
    simbolo_nombre(){
        return this.nombre;
    }
    simbolo_ambito(){
        return this.ambito;
    }
    simbolo_funcion(){
        return this.funcion;
    }
    simbolo_tamanio(){
        return this.tamanio;
    }
    simbolo_posicion(){
        return this.posicion;
    }
    simbolo_tipo(){
        return this.tipo;
    }
    simbolo_PT(){
        return this.posicionT;
    }
    simbolo_Parametros(){
        return this.parametros;
    }


}