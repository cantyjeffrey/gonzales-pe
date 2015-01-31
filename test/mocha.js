var Mocha = require('mocha');
var mocha = new Mocha();
mocha.addFile('test/parsing-error');
mocha.addFile('test/node');
mocha.run(function(failures) {
    process.on('exit', function() {
        process.exit(failures);
    });
});

require('./parser');
