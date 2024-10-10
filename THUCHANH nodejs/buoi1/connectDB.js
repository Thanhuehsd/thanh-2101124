import e from 'express';
import mysql from 'mysql2'
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'buoi1',
    password:''
});
const connection = pool.promise();
export default connection
