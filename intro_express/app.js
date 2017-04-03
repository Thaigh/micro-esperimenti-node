const express = require('express');

var app = express();

app.listen(3000);


app.get('/',function(req,res){
    res.send('Ecco una stringa in Home Page');
});

app.get('/contact',function(req,res){
    res.send('Ecco una stringa sulla pagina Contact');
});


app.get('/profile/:id', function(req,res){
    res.send('Con questa GET vedi il profilo numero : ' + req.params.id);
});

/*
  esempio method HTTP :   GET - app.get('route',function)
*/