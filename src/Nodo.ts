class Nodo extends NodoAbstracto{

    Nodo(val : string){
        this.Nombre = val;
        this.id=0;
        this.linea=0;
        this.columna=0;
        this.Hijos = new Array();
        this.TipoDato = "";
        this.CadenaDe3D = val;
    }

    Ejecutar(entorno: Casa):NodoAbstracto{
        console.log("EJECUTANDO NODO");
        let Nodo1 = new Nodo(this.Nombre);
        console.log("El Nombre:" + Nodo1.Nombre);
        return Nodo1;
    }

    ModificarCadena(cadenax:string){
       this.CadenaDe3D = cadenax;
    }
}