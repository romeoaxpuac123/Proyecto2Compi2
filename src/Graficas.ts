class Graficas {
    // Indico mi variable

    cadena:string
    numero: number;
    

    constructor() {
        // Le doy un valor

        this.cadena = 'digraph D {\n'
        this.numero = 0;
      
    }
    public anadir(cadena2:string){
        this.cadena = this.cadena + cadena2;
    }
    public ResultCadena(){
        return this.cadena;
    }
    public Renovar(){
        this.cadena = 'digraph D {\n';
    }
}