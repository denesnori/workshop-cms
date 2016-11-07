//var http = require('http');
var fs = require('fs');
var path = require('path');
var querystring = require('querystring');

function handler(request,response){
  var endpoint = request.url;
  var extension = path.extname(endpoint).substring(1);
  console.log(endpoint);
  if(endpoint === "/"){
    response.writeHead(200,{"Content-type":"text/html"});

    fs.readFile(__dirname + '/../public/index.html',function(err,file){
        console.log(__dirname+'/../public/index.html');
        if (err){
          console.log(err);
          return;
        }
      response.end(file);
    });
  } else if( endpoint === '/create-post'){
      response.writeHead(303,{"Location":"/index.html"});
      var allData = "";
      request.on('data', function(chunkOfData){
          allData += chunkOfData;
      });
      request.on('end',function(){
        var convertedData = querystring.parse(allData);
        response.end();
      });
  }
  else {
    response.writeHead(200,{"Content-type":"text/"+extension});

    fs.readFile(__dirname +'/../public'+ endpoint,function(err,file){
      if (err) {
        console.log(err);
        return;
      }
      response.end(file);
    });
  }
}
module.exports = handler;
