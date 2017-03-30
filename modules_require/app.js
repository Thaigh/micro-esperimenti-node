var stuff = require ('./stuff');

/*stuff è l'oggetto (cioè il modulo stuff.js) e couter è il metodo*/
console.log(stuff.counter(['ciao','come','va']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,2));