module.exports = function(app, db1){
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