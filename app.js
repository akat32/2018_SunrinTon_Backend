var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const request = require('request')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var earth = require('./routes/earth')(express.Router(), request);
var army = require('./routes/army')(express.Router(), request);
var nami = require('./routes/nami')(express.Router(),request);
app.use('/earth', earth);
app.use('/army', army);
app.use('/nami', nami)




app.listen(3030, ()=>{
  console.log('Server On!');
})
