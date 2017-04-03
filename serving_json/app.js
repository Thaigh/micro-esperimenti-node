const http = require('http');
const fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('La richiesta fatta è : ' + req.url);
    res.writeHead(200,{'Content-Type': 'application/json'});
    const myObj ={
        name : 'Luca',
        job: 'developer',
        age: 26
    };
    res.end(JSON.stringify(myObj));
    
});

server.listen(3000,'localhost');
console.log('server in ascolto su porta 3000');