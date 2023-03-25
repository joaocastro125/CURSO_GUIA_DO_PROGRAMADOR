const express=require("express")
//configuração 





const app=express()

//configuração do ejs 
app.set('view engine','ejs')
// utilizando arquivos estaticos
app.use(express.static('public'))


app.get("/:nome/:liguaguem",(req,res)=>{
    let nome=req.params.nome
    let linguaguem=req.params.liguaguem
    let msg=true
    let products=[
       {nome:"cola-cola",preco:"7.00",unidade:1} ,
       {nome:"x-salada",preco:"15.00",unidade:1} ,
       {nome:"creme",preco:"7.00",unidade:1} 

    ]
    
       
   res.render("index",{
     nome,
     linguaguem,
     inscritos:"8000",
     msg,
     products
   })
})


app.listen(4444,()=>console.log("servidor carregando"))