//string of letters input by NASA
// var nasaInput = process.argv;
var initialXPos = process.argv[2];
var initialYPos = process.argv[3];
var roverDirections = process.argv[4];

function moveRover(a,b){

	var currentXPos = a;
	var currentYPos = b;
	var finalPos = [];

	finalPos.push(currentXPos, currentYPos)

	console.log(finalPos);

}

moveRover(initialXPos, initialYPos);


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