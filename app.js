'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargas rutas



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-method');
    res.header('Access-Control-Allow-Methods','GET,POST, OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST, OPTIONS,PUT,DELETE');

    next();
});
//ruta base
// esto es para agregar la /api


/* app.get('/pruebas',function(req, res){
    res.status(200).send({message: 'bienvenido'}) ;
});*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });


module.exports = app;