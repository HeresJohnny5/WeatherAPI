const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const axios = require('axios');

const port = process.env.PORT || 3000;

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const dateFormat = require('./weather/dateFormat');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', function(req, res) {
	res.redirect('/index');
});

app.get('/index', function(req, res) {
	res.render('index');
});

app.post('/result', function(req, res) {
	var address = req.body.zip;
	
	geocode.geocodeAddress(address, (errorMessage, results) => {
		if (errorMessage) {
			res.render('404', { errorMessage: errorMessage });
		} else {
			var address = results.address;
			
			weather.getWeather(results, (errorMessage, weatherResults) => {					
				if (errorMessage) {
					res.render('404', { errorMessage: errorMessage });
				} else {
					res.render('results', { address: address, weatherResults: weatherResults, dateFormat: dateFormat });
				}
			});
		}
	});
		
});

app.listen(port, () => console.log(`Server has started on port ${port}.`));