const request = require('request');

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address=601%20clariton%20blvd%20street%20pittsburgh',
	json: true
}, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
//  console.log('body:', JSON.stringify(body, undefined, 2));
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Lat: ${body.results[0].geometry.location.lat}`);
	console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});