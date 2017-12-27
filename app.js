const request = require('request');
const argv = require('yargs')
	.options({
		a: {
			describe: 'Address',
			demand: true,
			alias: 'a',
			string: true
		}
	})
	.help()
	.argv;

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		weather.getWeather(results, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.actualTemperature}.`);
			}
		});
	}
});