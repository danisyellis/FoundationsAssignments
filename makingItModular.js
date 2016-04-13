var makeModular = require('./myModule.js');

makeModular(process.argv[2], process.argv[3], function(err, data) {
    for(var i in data) {
    console.log(data[i]);
    }
});