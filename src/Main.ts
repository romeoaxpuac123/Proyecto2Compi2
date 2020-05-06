// Creamos nuestra clase o módulo importado
//var miCasa = new Casa();
// Mostramos por consola el contenido de la variable 'direccion' del documento
//console.log(miCasa.direccion);
function Compilar() {
    var p1 = document.getElementById("texto1").value;
    //console.log(p1);
    //document.getElementById("caca").innerHTML= "tocino";
    var myTextArea = document.getElementById('salida');
    myTextArea.innerHTML = p1;
    //var pats = "/mostrartabla"+ "?valor=" + document.getElementById('Simbolos').value;
    parent.open("/mostrartabla"+ "?valor=romeo");
   
}


/// funcion para leer un archivo
window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('archivo').addEventListener('change', cargar, false);               
}

function cargar(ev) {
    //document.getElementById('datos').innerHTML='Nombre del archivo:'+ev.target.files[0].name+'<br>'+
    //                                           'Tamaño del archivo:'+ev.target.files[0].size+'<br>'+  
    //                                           'Tipo MIME:'+ev.target.files[0].type;
    var arch=new FileReader();
    arch.addEventListener('load',leer,false);
    arch.readAsText(ev.target.files[0]);
}

function leer(ev) {
    document.getElementById('texto1').value=ev.target.result;
}
