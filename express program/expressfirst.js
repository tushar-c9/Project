var express = require('express');
var app = express();
app.get('/hello1', function(req, res){
   res.send("Hello World!");
});
app.listen(3000);