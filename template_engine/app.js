// Uso il template EJS per comodità, lo stesso di Hexo

// la directory "views" non è una convenzione, è proprio necessaria, "view non funziona infatti"
//Uso anche le partial views per la navigazione

const express = require('express');
var app = express();

// setto l'engine usata
app.set('view engine', 'ejs');


//invece che inviare i file uso il rendering dei file ejs

app.get('/',function(req,res){
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});

app.get('/contact',function(req,res){
   // res.sendFile(__dirname + '/contact.html');
   res.render('contact');
});


app.get('/profile/:id', function(req,res){
    var data ={
        age: 26,
        job: "developer",
        hobbies:['coding','dormire','altro']
    };
    res.render('profile',{person: req.params.id, data: data});
    
});

app.listen(3000);