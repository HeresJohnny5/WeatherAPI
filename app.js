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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});