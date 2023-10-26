const mysql = require('mysql2');
const dbconfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB

});

connection.connect(error => {
    if (error) throw error;
    console.log("mysqldb connection succesful");
});

module.exports = connection;