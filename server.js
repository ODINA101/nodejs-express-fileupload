var express = require('express');
  var app = express();
  var http = require('http').createServer(app).listen(3080);
  var upload = require('express-fileupload');

  app.use(upload());


  console.log("server started");

  app.get('/',(req,res)=>{
res.sendFile(__dirname + '/index.html');



});


app.post("/",(req,res)=>{

 
var file = req.files.filetoupload;
 var filename = file.name;
 file.mv("./upload/"+filename,(err)=>{
 	res.send('done');
 });

  });

