//establishing variables for data within the rover object
var initialXPos = process.argv[2];
var initialYPos = process.argv[3];
var roverInstructions = process.argv[4].split("");
var initialDirection = roverInstructions[0];

roverInstructions.shift();




var rover = {
	xPos: initialXPos,
	yPos: initialYPos,
	direction: initialDirection,
	path: roverInstructions
	// move: function(xPos, yPos){
	// 	var finalPos = [];

	// 	finalPos.push(currentXPos, currentYPos);
	// 	finalPos = finalPos.join(" ");

	// 	console.log(finalPos);
	// },
}

console.log(rover);


// moveRover(initialXPos, initialYPos);


// console.log("hello world " + inputCommand);



////user interface that will be put in last
// var readline = require('readline');

// var input = [];

// var rl = readline.createInterface({
//     message: console.log("hello"),
//     input: process.stdin,
//     output: process.stdout
// });

// rl.prompt();

// rl.on('line', function (cmd) {

//     input.push(cmd);
// });

// rl.on('close', function (cmd) {

//     console.log(input.join('\n'));
//     process.exit(0);
// });