const http=require('http')


http.createServer((req, res)=>{
    res.end("guia do programador")
   
}).listen(8081);