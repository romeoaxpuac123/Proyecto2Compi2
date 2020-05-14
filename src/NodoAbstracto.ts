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
    public ListaSentencias: Array<NodoAbstracto>;
    public MiCadena: string;
    
    constructor(name : string){
        this.MiCadena = "";
        this.Nombre = name;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.TipoDato = "";
        this.Hijos = new Array();
        this.CadenaDe3D = "";
        this.NumeroDeNodo = 0;
        this.CadenaDot = "";
        this.ListaSentencias = new Array();
    }
    
   
    abstract Ejecutar(entorno: Casa):NodoAbstracto;
}