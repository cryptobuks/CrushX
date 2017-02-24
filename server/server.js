var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();


app.get('/', function(request, response)
   {      
          response.writeHead(200, {"context-Type":"text/html"});
          fs.createReadStream('../Templates/index.html').pipe(response);
  })

app.get('/profile', function(request, response){
  
          response.writeHead(200, {"context-Type":"text/html"});
          fs.createReadStream('../Templates/profile.html').pipe(response);
        
})

app.get('/about', function(request, response){
  
          response.writeHead(200, {"context-Type":"text/html"});
          fs.createReadStream('../Templates/about.html').pipe(response);
        
})
app.get('/feedback', function(request, response){
            
         response.writeHead(200, {"context-Type":"text/html"});
         fs.createReadStream('../Templates/feedback.html').pipe(response);

})



http.createServer(app).listen(8134,"127.0.0.1");
console.log("server is running at http://127.0.0.1:8134");

