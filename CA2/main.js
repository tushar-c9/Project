var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
res.sendFile( __dirname + "/index.html" );
});
app.post('/',(req, res)=>{
    console.log(req.body.fileName);
    res.download( "sample.txt")
})


app.listen(2000, function (err) {
    if (err) console.log(err);
    console.log("Server started"); 
})