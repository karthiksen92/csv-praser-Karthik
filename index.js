const CSV = require('./main');

CSV.parse('./sample.csv', function(err, data, next) {
	console.log(data);
	next();
});