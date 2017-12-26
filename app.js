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
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
//  console.log('body:', JSON.stringify(body, undefined, 2));
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Lat: ${body.results[0].geometry.location.lat}`);
	console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});