const express = require("express");
const app = express();

app.set('view engine','ejs');
app.use(express.static('./'));

app.get("/",(rec ,res) => {
    res.render("index");
});

app.listen(8080,()=>{console.log("App rodando");});
