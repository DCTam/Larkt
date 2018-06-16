'use strict';

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/health-check', (req, res) => {
	res.send({
		data: {
			status: 'OK'
		}
	});
});

app.post('/login', (req, res) => {
	res.send({
		data: {
			success: true
		}
	});
});

app.listen(4020, () => {
	console.log('Server running on port 3000');
});
