
var express = require("express");

var app = express();

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});

app.get("/pagamentos", function(req, res){
    console.log("Requisição recebida com sucesso.");
    res.send("OK");
});