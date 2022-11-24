const http = require('http')
const fs = require('fs');

// const mod = require('./moduleExport')
// console.log(mod)

const app = http.createServer((req,res)=>{

    // res.write("<h1>hello tushar</h1>");

//READING FILE
    // fs.readFile('demo.html',(err,data)=>{

    //     console.log(err)
    //     res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("HELLO WORLD!!") 
        res.end(); 
    // })

//CREATING FILE
    // fs.appendFile('demo.txt',"\nnew",err=>{
    //     if(err) throw err;
    //     console.log('file created successfully')
    // })

//DELETING FILE
    fs.unlink('demo.txt',err=>{
        if(err) throw err;
        console.log("file deleted successfully")
    })


    app.get('/home',(req,res)=>{
        res.write("homepage")
    })
    
    
})

app.listen(3000, ()=>console.log("server is running on port 3000"));