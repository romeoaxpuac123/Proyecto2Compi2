// Creamos nuestra clase o módulo importado

let miCasa = new Casa()

// Mostramos por consola el contenido de la variable 'direccion' del documento

console.log(miCasa.direccion)


function Compilar() {
    var p1 = document.getElementById("texto1").value;
    //console.log(p1);
    //document.getElementById("caca").innerHTML= "tocino";
    var myTextArea = document.getElementById('salida');
    myTextArea.innerHTML = p1;
   
}