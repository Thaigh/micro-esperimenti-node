const fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


/* Leggo un pezzo del readMe.txt e lo scrivo in writeMe.txt, poi ripeto per ogni pezzetto */
myReadStream.on('data',function(chunk){
    console.log('nuovo chunk ricevuto');
    myWriteStream.write(chunk);

});

/*Il file è corto altrimenti avrei molti più "nuovo chunk ricevuto" in console*/

