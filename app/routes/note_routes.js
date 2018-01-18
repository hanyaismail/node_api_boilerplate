var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db1){
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const database = db1.db('notable')
		database.collection('notes').findOne(details, (err, item) => {
			if (err)  {
				res.send('An error has occured');
			} else if (item === null){
				res.send('Id not match');
			} else {
				res.send(item);
			}
		})
	});

	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const database = db1.db('notable')
		database.collection('notes').remove(details, (err, item) => {
			if (err)  {
				res.send('An error has occured');
			} else {
				res.send('Note ' + id + ' deleted');
			}
		})
	});

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const note = {text: req.body.body, title: req.body.title};
		const database = db1.db('notable')
		database.collection('notes').update(details, note, (err, result) => {
			if (err)  {
				res.send('An error has occured');
			} else {
				res.send(result);
			}
		})
	});

	app.post('/notes', (req, res) => {
		const note = {text: req.body.body, title: req.body.title};
		const database = db1.db('notable');
		database.collection('notes').insert(note, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occured'});
			} else {
				res.send(result.ops[0]);
			}
		})
	})
}