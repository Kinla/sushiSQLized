const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "sushi_db"
  });
}

connection.connect();


module.exports = connection