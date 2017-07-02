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
			var indexLeft = oldIndex -1;//changes the index to the element on the left
			if (indexLeft == -1) indexLeft = 3;//rotates to the end of the array
			
			var turnLeft = cardinalDirections[indexLeft];//assigns new element based on changed index
			this.direction = turnLeft;
		} else if (rotation == "R") {
			var indexRight = oldIndex +1;
			if (indexRight == 4) indexRight = 0;

			var turnRight = cardinalDirections[indexRight];
			this.direction = turnRight;
		}
	},
	initiateRover: function(instructions){
		// console.log("foobar")
		for(var i = 0; i < instructions.length; i++){

			// console.log("bears")
			if ((instructions[i] == "R") || (instructions[i] == "L")){
				this.turnRover(instructions[i]);
			}else if (instructions[i] == "M"){
				this.moveRover();
			}
		}

	}



}
// console.log(rover.path);
rover.initiateRover(rover.path);
console.log(rover.xPos, rover.yPos, rover.direction)

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