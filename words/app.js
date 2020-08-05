//db 연결하는 파일
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = require('./database.json');
const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: conf.host,
//     user: conf.user,
//     password: conf.password,
//     port: conf.port,
//     database: conf.database,
// });

const dbPool = mysql.createPool(data);
global.dbConn = (callback) => {
    dbPool.getConnection((err, conn) => {
        if (!err) {
            callback(conn);
        } else {
            console.log(new Error(err));
        }
    });
};

app.get('/api/words', (req, res) => {
    dbConn((connection) => {
        console.log('fetch words...');
        connection.query('SELECT * FROM words', (err, rows, fields) => {
            connection.release();
            console.log(err, rows);
            if (err) throw err;
            else {
                res.send(rows);
            }
        });
    });
});

module.exports = app;
