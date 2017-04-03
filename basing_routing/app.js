const http = require('http');
const fs = require('fs');


/*esempio di routing a livello didattico senza Express*/
/*Uso del package.json*/

var server = http.createServer(function(req,res){
    console.log('La richiesta fatta è : ' + req.url);
  if(req.url === '/home' || req.url === '/'){
      res.writeHead(200, 'Content-Type: text/html');
      fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200, 'Content-Type: text/html');
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }else{
    res.writeHead(404, 'Content-Type: text/html');
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
    
});

server.listen(3000,'localhost');
console.log('server in ascolto su porta 3000');