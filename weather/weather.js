const request = require('request');
const data = require('../config');

var getWeather = (results, callback) => {	
	var apiKey = data.apiKey;
	var lat = results.lat;
	var lng = results.lng;

	request({
		url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
		json: true
		}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					summary: body.currently.summary,
					icon: body.currently.icon,
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				});
			} else {
				callback('Unable to fetch weather.');
			}
	});
};

module.exports = {
	getWeather
};