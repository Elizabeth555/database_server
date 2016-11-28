var express = require ('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.send('Hello World')
});


app.get('/set?', function(req, res){
  req.json = ({ key: 'value'})


});




app.listen(3000, function(){
  console.log("started on 3000")

});
