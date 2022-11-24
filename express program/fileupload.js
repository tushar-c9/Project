var express = require('express');
var formidable = require('formidable');
//var fs =require('fs');
var app = express();
var bodyParser = require('body-parser');   
app.use(bodyParser.urlencoded({extended:false})) 
app.get('/', function (req, res){
    res.sendFile(__dirname + '/fileuploadform.html');
});app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
    res.end("Succes");
});app.listen(3000);