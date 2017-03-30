var fs = require('fs');

/*
var readMe = fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
});
*/
//fs.writeFileSync('writeMe.txt',readMe);

var readMe = fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt', data);
});