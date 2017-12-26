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

const address = argv.a;

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to Google servers.');
	} else if (body.status === 'ZERO_RESULTS') {
		console.log(`Unable to find address ${address}`)
	} else if (body.status === 'OK') {
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Lat: ${body.results[0].geometry.location.lat}`);
		console.log(`Lng: ${body.results[0].geometry.location.lng}`);
	}
});