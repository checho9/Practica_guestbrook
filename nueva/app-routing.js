var express = require ('express');
var path = require ('path');
var http = require('http');

var app = express();

var IP_MALVADA = "";

app.use((request,response,next) =>{
    if(request.ip=== IP_MALVADA){
        response.status(401).send("Intento de acceso no autorizado");
    } else{
        next();
    }
});

var publicPath =  path.join(__dirname,'public');
app.use('recursos',express.static(publicPath));

app.get('/',(request,response)=>{
    response.end('Bienvenido a mi pagina');
});

app.get('/about',(request,response)=>{
    response.end('Bienvenido a mi pagina acerca de...');
});

app.get('/weather',(request,response)=>{
    response.end('Hoy habra clima soleado');
});

app.get('/bienvenida/:nombre',(request,response)=>{
    response.end('Bienvenido,' + request.params.nombre + '.');
});

http.createServer(app).listen(3000);