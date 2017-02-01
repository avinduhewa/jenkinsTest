var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
  res.send("New content");
});

app.listen(4000);