const mysql = require('mysql')

const host = "localhost";
const user = "root";
const pass = "Deepk&123";
const databaseName = "node";
const port = '3306'

const dbConn =  mysql.createConnection({
    host:host,
    user:user,
    password:pass,
    database:databaseName,
    port:port
})

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database Connected Successfully")
})

module.exports = dbConn;








// var mysql = require("mysql");


// /**/
// const host = "localhost";
// const user = "root";
// const pass = "Deepk&123";
// const databaseName = "node";
// const port = '3306'

// /*/
// const host = "localhost";
// const user = "root";
// const pass = "";
// const databaseName = "node";
// const port = '3307'
// /**/

// dbConn = mysql.createConnection({
//   host: host,
//   user: user,
//   password: pass,
//   database: databaseName,
//   port:port
// });

// // console.log(connection)

// dbConn.connect(function (error) {
//   if (error) throw error;
//   console.log("MySql connected");
// });

// module.exports = dbConn




// ------------------
// var mysql = require("mysql");

// const host = "148.72.232.173";
// const user = "ph16302578697";
// const pass = "5$G8vzs6";
// const databaseName = "ph16302578697_liba";

// dbConn = mysql.createConnection({
//   host: host,
//   user: user,
//   password: pass,
//   database: databaseName,
//   port:'3306',
//   charset:'utf8'
// });

// // console.log(dbConn)

// dbConn.connect(function (error) {
//     if(error) throw error;
//   console.log("MySql connected");
// });

// module.exports = dbConn