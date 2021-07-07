const express = require("express");
const app = express(); // Iniciando o express


app.get("/",function(req,res){
    res.send("Your welcome")

});

app.get("/blog/:artigo?",function(req,res){


var artigo = req.params.artigo;

if (artigo) {
    res.send("artigo: " + artigo);
} else {
    res.send("welcome to this shitt!!!!");
}
})
app.get("/carrinho/",function(req,res){
    res.send("Todas as suas teste")
});

app.get("/ola/:name/:altura/",function(req,res){
    var name = req.params.name
    var altura = req.params.altura
    res.send(" oi "+ name +" eu tenho "+ altura);  
});

app.listen(4000,function(erro){
    if (erro){
        console.log("Ocorreu um erro!");   
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})

