var http = require('http');

var message = "Learning node at night is fun!";

function handler(request,response){
  response.writeHead(200,{"Content-type":"text/html"});
  response.write(message);
  response.end();
}

var server = http.createServer(handler);
server.listen(3000,function(){
  console.log('Server listens to requests on port 3000.');
});
