const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const expr_handle = require('express-handlebars');
const mysql = require('mysql');

const hostname = 'localhost';
const port = 2000;
const routes = require('./routes/index');

//create connection to database
const db = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : '',
   database: 'nodemysql'
});

//Initialize App
const app = express();

//connect database
db.connect((err) =>{
    if(err){
        console.log('errorrs');
        throw err;
    }
    console.log('Database (Mysql) connected... on port ' + port);

})

// view engine
app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', expr_handle({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, '/views')));



app.use('/', routes);

//test for connection to database
app.get('/', (req,res) => {
    let sql = 'SELECT * FROM sampleTable nodemysql';
    db.query(sql, (err,result) =>{
        if(err){
            throw err;
        }
        
    });
});

db.end();
console.log('Server running on port :' + port);
app.listen(2000);
