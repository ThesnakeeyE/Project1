var mysql = require("mysql");
var express = require('express');
var app =express();

var con  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'prototype'
});
con.connect(function (err) {
    if(!err)
        console.log('Connected..');
    else
        console.log(err);
});
 app.get('/', function(req,res){
     Connection.quer('SELECT * FROM productsdb', function (error, row, fields){
     if(!!error){
         console.log('Error in the query');
     }else{
         console.log('all good');
     }
    });
 })
 app.listen(3578);
 