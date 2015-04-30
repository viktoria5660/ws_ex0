var http = require ('http');
var Game = require('./ws_tennis');


var reqHandler = function (req, res){
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.end('first\n');
}
var server = http.createServer(reqHandler); 
server.listen(8080, '127.0.0.1');
console.log ('listing on port 8080');


var game = new Game();
game.incScore(20);

