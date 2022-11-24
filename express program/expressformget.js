var express = require('express');  
var app = express();   
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "form.html" );  
   //The __dirname in a node script returns the path of the folder where the current JavaScript file resides.
  //res.sendFile(path.join(__dirname, '/folder', 'form.html')); 
}) 
 app.get('/apply', function (req, res) {  
response = {  
       first_n:req.query.first_name,  
       last_n:req.query.last_name,
       gen: req.query.gender,
       ad:req.query.addr
   };     //console.log(response);  
  res.send(JSON.stringify(response));  
});
app.listen(2000, function (err) {  
   if (err) console.log(err); 
	console.log("Server started"); 
  })  
