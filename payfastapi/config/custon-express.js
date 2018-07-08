

var express = require("express");
var consign = require("consign");

module.exports = function(){
    var app = express();


    // iniciado a exposicao dos controllers com consign
    consign()
        .include("controllers") // expoe a pasta controller
        .into(app); // carrega dentro do app toda a pasta constrolers

    return app;
}