var express = require("express")
var router = express.Router();

var burger = require("../models/burger");

router.get("/" , function (req , res) {
    burger.selectAll(function (data) {
        var burgerObject = {
            burgers: data
        };
        res.render("index" , burgerObject);
    });
});

router.post("/api/burgers/:id" , function (req , res) {
    var con
})