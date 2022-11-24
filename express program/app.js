var express = require('express');
var app = express();
const {hello,welcome} = require("./middle");
app.use(welcome);
app.get("/",hello,welcome (req,res)=>{
res.send({data:'You are in'});
})
app.listen(3000, function (err) {  
     if (err) console.log(err); 
      console.log("Server started"); 
   
  }) 
