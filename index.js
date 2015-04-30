var http = require ('http');
var Game = require('./ws_tennis');

var game = new Game();
var Secgame = new Game();

game.incScore(20);
game.decScore(15);
game.incScore(13);

Secgame.incScore(10);
Secgame.decScore(15);

var reqHandler = function (req, res){
	res.writeHead(200,{'Content-Type' : 'text/plain'});
	res.end('success\n' + "first game:\n" + game.msg + "second game:\n" + Secgame.msg);
}
var server = http.createServer(reqHandler); 
server.listen(8080, '127.0.0.1');
console.log ('listing on port 8080');


