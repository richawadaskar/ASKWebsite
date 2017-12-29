const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log.')
		}
	});
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintanance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

app.get('/', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'UCSB ASK'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});	
});

app.get('/values', (req, res) => {
	res.render('values.hbs', {
		pageTitle: 'Our Values'
	});	
});

app.get('/recruitment', (req, res) => {
	res.render('recruitment.hbs', {
		pageTitle: 'Recruitment'
	});	
});

app.get('/members', (req, res) => {
	res.render('members.hbs', {
		pageTitle: 'Members'
	});	
});


app.get('/connect', (req, res) => {
	res.render('connect.hbs', {
		pageTitle: 'Connect'
	});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});