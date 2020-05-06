var express = require('express');
var path = require('path');
var app = express();
var PORT = 8898;
app.get('/mostrartabla', (req, res) => {
    let num=req.query.valor;
   
    let pagina='<!doctype html><html><head></head><body>';
    pagina 	+= num;
   
    pagina += '</body></html>';
    res.send(pagina);
    //app.getElementById('Simbolos').innerHTML = 'Romeo Axpuac music';	
  })
  
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(express.static(path.join(__dirname+'/src')));
app.listen(PORT, function() {
 console.log('server running on http://localhost:' + PORT);
});