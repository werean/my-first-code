const express = require("express");
const app = express();

app.set('view engine','ejs');

app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirmsg = true;
    
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "mecpock",
        inscritos: 5000,
        msg: exibirmsg
        });
});

app.listen(8080,()=>{console.log("App rodando");});
