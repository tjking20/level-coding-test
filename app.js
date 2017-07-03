

launchInterface = () =>{
	const Rover = require('./Rover.js');
	const readline = require('readline');

	const rl = readline.createInterface({
	  message: console.log("Welcome to the Mars Rover Control Center! "),
	  input: process.stdin,
	  output: process.stdout
	});

	const validateCoords = (inputObj, elementTotal) =>{
		let coordArr = [];
		let headings = ["N","E","S","W","n","e","s","w"];

		//pushes input objects values into an array
		for(let i in inputObj){
			if (inputObj[i] !== " "){
				coordArr.push(inputObj[i]);
			}
		}

		//checks for numbers in the first two elements of the input
		let x = parseInt(coordArr[0]);
		let y = parseInt(coordArr[1]);

		if (isNaN(x) || isNaN(y)) {
			console.log("invalid input, try again"); 
			process.exit(0);
		}

		//checks that the 3rd input is one of the 4 cardinal headings
		if (elementTotal == 3 && headings.indexOf(coordArr[2]) == -1){
			console.log("invalid input, try again"); 
			process.exit(0);
		}
	}

	const validateDirections = (inputObj) =>{
		for(let k in inputObj){
			let directionsArr = ["L","R","M","l","r","m"];
			let direction = inputObj[k];
			
			if (directionsArr.indexOf(direction) == -1){
				console.log("invalid input, try again"); 
				process.exit(0);
			}
		}
	}

	rl.question('Please enter the grid coordinates: ', (gridCoords) => {
		
		//validates elements being entered
		validateCoords(gridCoords, 2);

		rl.question('Please enter the deployment coordinates: ', (deployCoords) => {
			
			//validates elements being entered
			validateCoords(deployCoords, 3);

			rl.question('Please enter movement directions for the Rover to follow: ', 
			(directions)=>{

				//checks inputed directions for correct format
				validateDirections(directions);

				let rover = new Rover(gridCoords, deployCoords, directions);//establish a new Rover module
				rover.initiateRover(); //initiate rover calculations with data from rl questions

				rl.question('Would you like to launch again? Please enter Y or N: ', 
				(answer)=>{

					answer = answer.toUpperCase();//ensures that both lower and upper case y's are acceted

					if(answer == "Y") launchInterface();//using recursion the interface can reload

					else rl.close()

				});
			});
		});
	});
}

launchInterface();

