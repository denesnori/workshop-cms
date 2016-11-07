var http = require('http');
var server = http.createServer();
server.listen(3000,function(){
  console.log('Server listens to requests on port 3000.');
});
