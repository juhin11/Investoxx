require('dotenv').config()
const mysql = require('mysql2');

const POLARDBconnection = mysql.createPool({
    host:"testing-endpoint.mysql.polardb.ap-south-1.rds.aliyuncs.com",
    user:"investoxx",
    password:"investoxx@123",
    database:"testingpolardb",
    // host: process.env.ENDPOINT,
    // user: process.env.USERNAME,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

if(POLARDBconnection){
    console.log("Database connected");
    module.exports = POLARDBconnection;

}else{
    console.log("Database not connected");
    
}