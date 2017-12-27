const request = require('request');
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
//
//const geocode = require('./geocode/geocode');
//
//geocode.geocodeAddress(argv.a, (errorMessage, results) => {
//	if (errorMessage) {
//		console.log(errorMessage);
//	} else {
//		console.log(JSON.stringify(results, undefined, 2));
//	}
//});

var apiKey = '';
var lat = 40.368328;
var lng = -79.9912621;

request({
	url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
	json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			console.log(body.currently.temperature);
		} else {
			console.log('Unable to fetch weather.');
		}
	});