var fs = require('fs');
var path = require('path');

module.exports = function(directoryName, extension, callback) {
    
    var results = [];

    fs.readdir(directoryName, function(err, data) {
	    if (err) {
	        return callback(err);
	    }
	    else {
	        for(var i in data) {
	        var fileExtension = path.extname(data[i]);

	        if (fileExtension == '.'+extension)
	            results.push(data[i]);
	        }
	    callback(null, results);
	    }
    });
}