class Rover {
	constructor(gridCoords, deployCoords, directions){
		//outter grid coordinates
		this.gridCoords = gridCoords.trim().split(" "),//turns the input string into an array and trims white space
		this.gridLength = parseInt(this.gridCoords[0]),//parseInt turns the individual strings into integers
		this.gridHeight = parseInt(this.gridCoords[1]),

		//rover deployment coordinates
		this.deployCoords = deployCoords.trim().split(" "),
		this.xPos = parseInt(this.deployCoords[0]),
		this.yPos = parseInt(this.deployCoords[1]),
		this.heading = this.deployCoords[2].toUpperCase(),

		//directions and heading
		this.directions = directions.trim().toUpperCase()//ensures all incoming direcitons are capitalized
		
		
	}

	moveRover() {
		//switch case uses the current heading and outputs different outcomes for eacg
		switch (this.heading){
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
	}

	turnRover(rotation) {
		//cardinalDirections lists all headings in order
		//this allows us to determine which direction is left or right of current heading
		const cardinalDirections = ["N", "E", "S", "W"];

		//old direcition indicates the index of the heading to be changed
		let oldIndex = cardinalDirections.indexOf(this.heading);

		if (rotation == "L") {
			let indexLeft = oldIndex -1;//changes the index to the element on the left
			if (indexLeft == -1) indexLeft = 3;//rotates to the end of the array
			
			let turnLeft = cardinalDirections[indexLeft];//assigns new element based on changed index
			this.heading = turnLeft;//sets new heading

		} else if (rotation == "R") {
			let indexRight = oldIndex +1;
			if (indexRight == 4) indexRight = 0;

			let turnRight = cardinalDirections[indexRight];
			this.heading = turnRight; 
		}
	}

	initiateRover(){
		const roverInstructions = this.directions

		//allows us to execute functions for movement or turning
		for(var i = 0; i < roverInstructions.length; i++){

			if ((roverInstructions[i] == "R") || (roverInstructions[i] == "L")){
				//executes the turnRover based on which direction is passed in
				this.turnRover(roverInstructions[i]);

			}else if(roverInstructions[i] == "M"){
				//execute moveRover based on current heading
				this.moveRover();

			 }else{
			 	//if node encounters a direction other than L, R, or M it will reject the input
				console.log("Sorry that is not a valid input, please try again!");
				return;

			}
		}

		//conditional checks to see if the rover has gone outside its limits
		if((this.xPos > this.gridLength) || (this.yPos > this.gridHeight)){

			console.log("I'm sorry, your rover has driven off the plateau.",
				"You should probably run. Their gonna be pretty pissed about this.");
		
		} else if ((this.xPos < 0) || (this.yPos < 0)){

			console.log("You have wandered outside your specified area...");

		} else{
		
			console.log(`The new rover position is: ${this.xPos} ${this.yPos} ${this.heading}`);
		
		}
		
	}
}
module.exports = Rover;
// const timRover = new Rover("5 5 ", " 16 5   ", "   nlmlmlmlmm ")
// timRover.initiateRover();


