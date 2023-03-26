const express=require('express')
const app=express()

app.get('/',(req,res)=>{
   res.send("guia do programador")
})

app.get('/blog',(req,res)=>{
   res.send("um blog do guia do programador")
})
// parametro opcional
app.get('/blog2/:artigo?',(req,res)=>{
    let artigo=req.params.artigo
    if(artigo){
        res.send("<h2>artigo:"+artigo+"</h2>")
    }else{
        res.send("um blog do guia do programador:https://guiadoprogramador.com.br")
    }
   
 })
 

// rota statica
app.get('/canal/youtube',(req,res)=>{
    res.send("meu canal do youtube")
 })
//rota dinamica 
 app.get('/ola/:nome',(req,res)=>{
    let nome=req.params.nome

res.send("<h1>ola,"+req.params.nome+"</h1>")
 })
app.listen(4000,(error)=>{
    if(error){
        console.log("ocorreu um error!")
    }else{
        console.log("iniciado com sucesso!")
    }
})

// os query para são aquelas informações que fica na url =http://example.com/articles?sort=ASC&page=2

// ex = let parametro=req.query["parametro"]

