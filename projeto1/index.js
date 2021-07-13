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

app.get("canal/youtube", function(req,res){
    var canal - req.query["canal"];

    if (canal) {
        res.send(canal);
    } else {
        res.send("nenhum canal fornecido");
    }l
})

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
 

// AULA 23 PRA FRENTE 

// const express = require("express");
// const app = express();

// // Estou dizendo para o express usar o EJS como view engine
// app.set('view engine','ejs');

// app.get("/",(req, res) => {
//     res.render("index.ejs");
// });

// app.listen(8080,()=>{console.log("app rodando!");});

