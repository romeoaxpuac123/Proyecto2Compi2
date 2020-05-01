abstract class NodoAbstracto {

    public Nombre: string;    
    public id: number;
    public linea:number;
    public columna: number;
    public TipoDato: string;
    public CadenaDe3D : string;
    public Hijos: Array<NodoAbstracto>;
    public NumeroDeNodo: number;
    public CadenaDot : string;
    
    constructor(name : string){
        this.Nombre = name;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.TipoDato = "";
        this.Hijos = new Array();
        this.CadenaDe3D = "";
        this.NumeroDeNodo = 0;
        this.CadenaDot = "";
    }
    
   
    abstract Ejecutar(entorno: Casa):NodoAbstracto;
}