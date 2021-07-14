const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('./'))

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome; 
    var lang = req.params.lang;
    var exibirmsg = false;
    var produtos = [
        {nome: "mouse", preco: 59.90},
        {nome: "teclado", preco: 79.99},
        {nome: "headset", preco: 110.00},
        {nome: "monitor", preco: 179.69}
    ]
    
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "mecpock",
        inscritos: 5000,
        msg: exibirmsg,
        produtos: produtos
        });
});

app.listen(8080,()=>{console.log("App rodando");});
