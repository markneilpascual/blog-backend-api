import { MYSQL_DATABASE, MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } from "../constants";

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});

connection.connect((error)=>{
    if(error){
        throw error
    }

    console.log("Connected to MySQL server");
    
});

export default connection


// connection.end();