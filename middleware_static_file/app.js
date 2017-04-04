
const express = require('express');
var app = express();

// setto l'engine usata
app.set('view engine', 'ejs');


//gestisco il middleware
/*
app.use('/assets',function(req,res,next){
    console.log(req.url);    //http://localhost:3000/assets/style.css mi restituisce /style.css in console
                            // http://localhost:3000/contact non restituisce niente perchè non fa parte di /assets
    next();
});
*/


//  '/assets' indica cosa scrivere nell'URL, -----express.static('assets') è la directory sul server
app.use('/assets',express.static('assets'));


app.get('/',function(req,res){ 
    /*
    Il middleware è qui tra la richiesta e la risposta
    */  
    res.render('index');
});

app.get('/contact',function(req,res){ 
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