var http = require('http');

var myServerEngine = function(request, response){
    let d = new Date();
    response.writeHead(200,{'content-type':'text/plain'});
    response.end(d.toString());
}

var myServer = http.createServer(myServerEngine);
myServer.listen(9991);
console.log("At @9991");