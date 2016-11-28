var express = require ('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var data = []

app.get('/', function(req, res){
  res.json(data)
});


app.get('/set?:value', function(req, res){
  var obj = {key: req.query.value};
  data.push(obj);
  res.json(obj);
  console.log(data)

});

app.get('/get?:key', function(req, res){

  var k  = data[req.query.key];
  res.json(k);

});

app.listen(3000, function(){
  console.log("started on 3000")
});
