const mysql = require("mysql2")
require('dotenv').config();

var mysqlConnection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
})

mysqlConnection.connect((err) => {
    if(err){
        console.log("Error in db connection: " + JSON.stringify(err, undefined, 2));
    }else{
        console.log("DB connected succesfully");
    }
});

module.exports = mysqlConnection;