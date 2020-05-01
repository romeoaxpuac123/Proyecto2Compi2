var fs = require('fs')
fs.appendFile('Salida.dot', 'new data', function (err) {
     if (err) {
       // append failed
     } else {
       // done
     }
})