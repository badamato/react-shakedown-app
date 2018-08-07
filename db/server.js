//IMPORT EXPRESS 
const express = require('express');
const app = express();




app.get('/api', (req, res) => {
    res.send('SERVER CONNECTED!')
})










app.listen(3500, () => {
    console.log('The server is shakin down on 3500!')
})