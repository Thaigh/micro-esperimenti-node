var counter =function (arr){
    return 'There are ' + arr.length + ' elements in this array ';
};

var adder = function(a,b){
 return `The sum of the two number is ${a+b}`;
};


const pi =3.142;

/*Siccome ciò che mi esporta ritorna in una variabile questo spiega perchè nel require
devo assegnare il risultato ad una variabile*/
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

/*Posso in alternativa esportare così, togliendo la 14-15-16*/

/*

module.exports{
    counter : counter,
    adder: adder,
    pi : pi
} 

*/