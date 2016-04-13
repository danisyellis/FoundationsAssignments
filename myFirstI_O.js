var fs = require("fs");
var theWholeFile = fs.readFileSync(process.argv[2]);
var nString = theWholeFile.toString().split("\n");
console.log(nString.length-1)
