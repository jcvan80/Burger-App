var connection = require('../config/connection')

function printMark (number){
    var arry = [];

    for (var i=0; i<number; i++) {
        arry.push("?")
    }

    return arry.toString();
}

function objToSql(obj) {
    var arry = [];

    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" " >=0) {
                value = " " + value + " ";
            }
            arry.push(key + "=" + value);
        }
    }

    return arry.toString();

}

var orm = {
    selectAll: function (tableInput, cb) {
        var querryString = "SELECT * FROM" + tableInput;
        connection.query(querryString, function (err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table , col , val , cb) {
        var querryString = 'insert into' + table;
        querryString += "(";
        querryString += cols.toString();
        querryString += ")";
        querryString += 'values (';
        querryString += printMark(val.length);
        querryString += ") ";

        connection.query(querryString , val , function( err , result) {
            if(err) throw err;
            cb(result);
        })
    },

    updateOne: function (table , objCol , condition , cb) {
        var querryString = "update" + table;
        querryString += "set";
        querryString += objToSql(objCol);
        querryString += "where";
        querryString += condition;
        connection.query(querryString, function (err , result) {
            if (err) throw err;
        })
    }
}

//Export orm 
module.exports = orm
