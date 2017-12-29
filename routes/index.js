var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'UCSB ASK'
	});
});

router.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});	
});

router.get('/values', (req, res) => {
	res.render('values.hbs', {
		pageTitle: 'Our Values'
	});	
});

router.get('/recruitment', (req, res) => {
	res.render('recruitment.hbs', {
		pageTitle: 'Recruitment'
	});	
});

router.get('/members', (req, res) => {
	res.render('members.hbs', {
		pageTitle: 'Members'
	});	
});


router.get('/connect', (req, res) => {
	res.render('connect.hbs', {
		pageTitle: 'Connect'
	});
});

module.exports = router;