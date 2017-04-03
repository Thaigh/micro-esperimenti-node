const http = require('http');
const fs = require('fs');


/*Usando "pipe" e quindi passando il file a pezzi carico molto più velocemente in caso 
di testi estremamente lunghi.*/


var server = http.createServer(function(req,res){
    console.log('La richiesta fatta è : ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
    myReadStream.pipe(res);

    
});

server.listen(3000,'localhost');
console.log('server in ascolto su porta 3000');

