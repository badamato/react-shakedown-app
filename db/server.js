//IMPORT EXPRESS 
const express = require('express');
const app = express();

//IMPORT body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//IMPORT db.js
const shakedown = require('./db');











app.get('/api', (req, res) => {
    res.send('SERVER CONNECTED!')
})










app.listen(3500, () => {
    console.log('The server is shakin down on 3500!')
})