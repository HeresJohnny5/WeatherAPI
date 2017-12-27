const request = require('request');

var getWeather = (results, callback) => {
	var apiKey = '';
	var lat = results.lat;
	var lng = results.lng;

	request({
		url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
		json: true
		}, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					temperature: body.currently.temperature,
					actualTemperature: body.currently.apparentTemperature
				});
			} else {
				callback('Unable to fetch weather.');
			}
	});
};

module.exports = {
	getWeather
};