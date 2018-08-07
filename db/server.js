//IMPORT EXPRESS 
const express = require('express');
const app = express();

//IMPORT body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//IMPORT db.js
const shakedown = require('./db');










//get all the categories - Essentials, Clothing, Footwear, Optional
app.get('/api', (req, res) => {
    
    res.send('SERVER CONNECTED!')
})

//get one category from categories-Just show the essentials catgory
app.get('/api/:category', (req,res) => {
    res.send('Got a category')
})

//get everything in a gear-type - Just show me All Backpacks
app.get('/api/:catgory/:gearType', (req,res) => {
    res.send('Got a type of gear')
})


//get my gear
//add my gear
//delete my gear
//edit my gear







app.listen(3500, () => {
    console.log('The server is shakin down on 3500!')
})