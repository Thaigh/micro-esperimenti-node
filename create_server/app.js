const http = require('http');


var server = http.createServer(function(req,res){
    /*controllo in console le richiesta fatte a scopo didattico*/
    console.log('La richiesta fatta è : ' + req.url);
    /*Headers di risposta*/
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Testo di risposta');
});

server.listen(3000,'localhost');

/*In alternativa*/
  //server.listen(3000,'127.0.0.1');

/*per verificare in console che è andato tutto a buon fine*/
console.log('OK, il server è in attesa su localhost:3000');  