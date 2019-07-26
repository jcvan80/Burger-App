var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers" , function(res) {
            cb(res);
        });
    },

    insertOne: function(col , vals , cb) {
        orm.insertOne("burgers" , col , vals , function(res) {
            cb(res);
        })
    },

    updateOne: function (obj , condition , cb) {
        orm.updateOne("burgers" , obj ,condition , function(res) {
            cb(res)
        })
    }
}

//Export burger.js
module.exports = burger;