const http = require('http');
const fs = require('fs');

/* Il file viene passato a pezzi nella variabile*/
//var myStream = fs.createReadStream(__dirname + '/readMe.txt');

/*In questo modo vedo il testo in console  */
var myStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');


/*Se il file fosse molto più lungo verrebbe suddiviso in più "chunk"  */
myStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);

});


/*In sostanza per file molto corposi ne ricevo un pezzo per volta, e quando ho acquisito il 
singolo pezzo posso farci qualcosa*/