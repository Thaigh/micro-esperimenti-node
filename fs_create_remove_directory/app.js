var fs = require('fs');

/*Elimino il file che mi interessa, attenzione che se il file non esiste va in errore*/
    //fs.unlink('writeMe.txt');

/*creazione directory*/
    //fs.mkdirSync('stuff');

/*Rimozione directory*/
    //fs.rmdirSync('stuff');

/*Versione asincrona, creo prima la directory e ci metto dentro il file 
writeMe.txt con il testo preso da readMe.txt*/


    //fs.mkdir('stuff',function(){
    //    fs.readFile('readMe.txt','utf8',function(err,data){
    //        fs.writeFile('./stuff/writeMe.txt', data);
    //   });
    //});



/*Rimozione della directory*/
    /*se uso semplicemente fs.fmdir() va in errore perchè contiene un file all'interno, uso quindi una callback*/


fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff');
});