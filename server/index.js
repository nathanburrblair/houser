require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
const connectionString = process.env.CONNECTION_STRING;

const app = express();

app.use(bodyParser.json());

const PORT = 3005;

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen( PORT, () => {
        console.log('The magic is happening on port', PORT)
    })
})

app.get('/api/houses', controller.getHouses)
app.post('/api/house', controller.addHouse)
