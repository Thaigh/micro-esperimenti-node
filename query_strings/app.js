const express = require('express');
var app = express();

// setto l'engine usata
app.set('view engine', 'ejs');

//  '/assets' indica cosa scrivere nell'URL, -----express.static('assets') è la directory sul server
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){ 
    res.render('index');
});

app.get('/contact',function(req,res){ 
   res.render('contact',{qs: req.query});
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