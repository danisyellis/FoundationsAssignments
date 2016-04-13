var fs = require("fs");
var theWholeFile = fs.readFile(process.argv[2], 'utf8', function(err, data) {
	if(err===true) {
		console.log("There's an error")
	} else {
		var nString = data.toString().split("\n");
		console.log(nString.length-1)
	}
})