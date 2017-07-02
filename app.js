//establishing variables for data within the rover object
var initialXPos = parseInt(process.argv[2]);
var initialYPos = parseInt(process.argv[3]);
var roverInstructions = process.argv[4].split("");
var initialDirection = roverInstructions[0];

roverInstructions.shift();


var rover = {
	xPos: initialXPos,
	yPos: initialYPos,
	direction: initialDirection,
	path: roverInstructions,
	moveRover: function(){
		switch (this.direction){
			case "N":
				return this.yPos ++
				break;

			case "E":
				return this.xPos ++
				break;

			case "S":
				return this.yPos --
				break;

			case "W":
				return this.xPos --
				break;
		}
	},

	turnRover: function(rotation){
		var cardinalDirections = ["N", "E", "S", "W"];

		//old direcition indicates the direction to be changed
		var oldIndex = cardinalDirections.indexOf(this.direction);

		if (rotation == "L") {
			
			//new direction "turns the rover 90 dgrees(shifts the position in the array left"
			var indexLeft = oldIndex -1;
			if (indexLeft == -1) indexLeft = 3;

			var turnLeft = cardinalDirections[indexLeft];
			this.direction = turnLeft;
		} else if (rotation == "R") {
			var indexRight = oldIndex +1;
			if (indexRight == 4) indexRight = 0;

			var turnRight = cardinalDirections[indexRight];
			this.direction = turnRight;
		}
	}

}

rover.turnRover("R");
console.log(rover.direction);

// console.log(rover);
// rover.moveRover();


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