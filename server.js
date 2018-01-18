const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
	console.log('Live server on port' + port);
});