var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user:'root',
    password: 'pass',
    database: 'burgers_db'

})

connection.connect(function(err) {
    if(err) {
        console.error("error: " + err.stack);
        return;
    }
    console.log("Connected as id:" + connection.threadId);
});

module.exports = connection;