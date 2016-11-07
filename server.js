var http = require('http');
var fs = require('fs');
var path = require('path');

function handler(request,response){
  var endpoint = request.url;
  var extension = path.extname(endpoint).substring(1);
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
  } else {
    response.writeHead(200,{"Content-type":"text/"+extension});

    fs.readFile(__dirname +'/public'+ endpoint,function(err,file){
      if (err) {
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
