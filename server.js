var http = require('http');
//var fs = require('fs');
//var path = require('path');
//var querystring = require('querystring');
var handler = require('./src/handlers.js');


var server = http.createServer(handler);
server.listen(3000,function(){
  console.log('Server listens to requests on port 3000.');
});
