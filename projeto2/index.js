const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('./'));

app.get("/",(rec ,res) => {
    res.render("index");
});

app.get("/perguntar",(req,res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta",(req, res) => {
    res.send("Formulário recebido!");
});

app.listen(8080,()=>{console.log("App rodando");});
