// var o = {p:42, q:true};
// var {p,q} = o;           object destructuring



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());   //config express middleware inorder to send json data to this nodejs project
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);         //baseurl: /employees...we canuse individual url for each route(eg. /employees/list)

