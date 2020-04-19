var express = require('express');
var path = require('path');
var app = express();
var PORT = 8898;
app.get('/',function(req,res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.use(express.static(path.join(__dirname+'/src')));
app.listen(PORT, function() {
 console.log('server running on http://localhost:' + PORT);
});