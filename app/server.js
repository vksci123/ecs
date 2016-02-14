var express =   require('express') ;
var cons    =   require('consolidate') ;

var app ;
var __PORT  =   8000 ;

app =   express() ;
app.engine('html',cons.underscore) ;
app.use(express.static("static")) ;
app.use('/styles', express.static('static/styles')) ;
app.use('/scripts', express.static('static/scripts'));

app.get("/", function(req, res)    {
    res.render("landing/index.html") ;
});


var server  =   app.listen(__PORT, function()   {
    console.log("Server listening at");
    console.log(__PORT)  ;
});

