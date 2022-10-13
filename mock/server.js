const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')
const adapter = new FileAsync('mock/db/db.json')
const db = low(adapter)
const port = 3000;
const countries = require('./countries')
const initiative = require('./initiative')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/countries', (req, res) => {
  res.json(countries);
});

app.get('/api/initiative', (req, res) => {
  res.json(initiative);
});


app.listen(port, () => {
  console.log('We are live on ' + port);
});

require('./app/routes')(app, db);


