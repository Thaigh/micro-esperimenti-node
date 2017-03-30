
/*Variabili global*/

/*
console.log(__dirname);
console.log(__filename);
*/

/*normal function statement*/
function saysHi() {
    console.log("Hi");
}
saysHi();


/*funzione come parametro*/
function callFunction(fun){
    fun();
}


//function expression
var sayBye = function(){
    console.log('Bye');
}
//sayBye();

/*merdate di JS*/
callFunction(sayBye);
