const request = require('request');
const express = require('express');
const app = express();
const axios = require('axios');
//const argv = require('yargs')
//	.options({
//		a: {
//			describe: 'Address',
//			demand: true,
//			alias: 'a',
//			string: true
//		}
//	})
//	.help()
//	.argv;

const data = require('./config'); 

app.set('view engine', 'ejs');
app.use(express.static('public'));

// ROUTES
app.get('/', function(req, res) {
	res.redirect('/index');
});

app.get('/index', function(req, res) {
	res.render('index');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));





//var encodedAddress = encodeURIComponent(argv.a);
//var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
//
//axios.get(geocodeURL)
//	.then(response => {
//		if (response.data.status === 'ZERO_RESULTS') {
//			// calling throw new Error immediately stops the execution of the function
//			throw new Error('Unable to find that address.');
//		}
//			
//		var apiKey = data.apiKey;
//		var lat = response.data.results[0].geometry.location.lat;
//		var lng = response.data.results[0].geometry.location.lng;
//		var weatherURL = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;
//	
//		console.log(response.data.results[0].formatted_address);
//			
//		return axios.get(weatherURL)
//	})
//	.then(response => {
//		var temperature = response.data.currently.temperature;
//		var actualTemp = response.data.currently.apparentTemperature;
//		console.log(`The temperature is ${temperature}. It feels like ${actualTemp}.`);
//	})
//	.catch(error => {
//		if (error.code === 'ENOTFOUND') {
//			console.log('Unable to connnect to API servers.');
//		} else {
//			console.log(error.message);
//		}
//	});