var express = require ('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.send('Hello World')
});


app.get('/set*', function(req, res){
  var key = req.query.key;


  res.send(key)
});

app.get('/get?', function(req, res){
  res.json({ key : req.params.key,
            value: req.query.value});
});

app.listen(3000, function(){
  console.log("started on 3000")
});
