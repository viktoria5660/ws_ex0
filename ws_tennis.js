var events = require('events');
var util = require('util');
util.inherits(Game, events.EventEmitter);

function Game () {
	this.score = 0;
	events.EventEmitter.call(this);
	this.msg = "";
}

Game.prototype.incScore = function(scoreP) {
	this.score += scoreP;
	this.emit('EscoreChanged');
};
Game.prototype.decScore = function(scoreP) {
	this.score -= scoreP;
	this.emit('EscoreChanged');
};


function displayScore(){
	console.log("The Score is:" + this.score);
	this.msg += "The Score is:" + this.score + "\n";
}

function cheacOverdraw (){
	if (this.score < 0){
		console.log("Score overdrawn!" + this.score);
		this.msg += "Score overdrawn!" + this.score + "\n";
	}
}

module.exports = function (){
	var gameOn = new Game();
	gameOn.on("EscoreChanged", displayScore);
	gameOn.on("EscoreChanged", cheacOverdraw);
	return gameOn;
} 

