const request = require('request');
//const data = require('../config');
const apiKey = process.env.apiKey;

var getWeather = (results, callback) => {	
	var apiKey = data.apiKey;
	var lat = results.lat;
	var lng = results.lng;
	
	console.log(lat);
	console.log(lng);

	request({
		url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
		json: true
		}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					summary: body.currently.summary,
					icon: body.currently.icon,
					temp: body.currently.temperature,
					apparentTemp: body.currently.apparentTemperature,
					tempHigh: body.daily.data[0].temperatureHigh,
					tempLow: body.daily.data[0].temperatureLow,
					summary: body.daily.data[0].summary
				});
			} else {
				callback('Unable to fetch weather.');
			}
	});
};

module.exports = {
	getWeather
};