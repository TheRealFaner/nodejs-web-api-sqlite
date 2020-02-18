const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const sqlite3 = require('sqlite3');
const fs = require('fs')

const configureRoutes = require('./routes/routes.config');

process.env.SQLITE_DB_PATH = './db.sqlite3'

if (!fs.existsSync(process.env.SQLITE_DB_PATH)) {
    let db = new sqlite3.Database(process.env.SQLITE_DB_PATH, createTable);

    function createTable() {
        const tables = ['playlists'];
        tables.forEach((val) => {
            db.run(`CREATE TABLE ${val} (Name TEXT NOT NULL);`);
        })
    }
    db.close();
}

configureRoutes(app);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);