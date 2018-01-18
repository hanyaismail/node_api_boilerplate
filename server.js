const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 8000;

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err);
	require('./app/routes')(app, database);
	app.listen(port, () => {
	console.log('Live server on port' + port);
	});
})