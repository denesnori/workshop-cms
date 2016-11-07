var http = require('http');
var fs = require('fs');

function handler(request,response){
  var endpoint = request.url;
  console.log(endpoint);
  if(endpoint === "/"){

    response.writeHead(200,{"Content-type":"text/html"});

    fs.readFile(__dirname + '/public/index.html',function(err,file){
        console.log(__dirname+'/public/index.html');
        if (err){
          console.log(err);
          return;
        }
      response.end(file);
    });
  }
}

var server = http.createServer(handler);
server.listen(3000,function(){
  console.log('Server listens to requests on port 3000.');
});
