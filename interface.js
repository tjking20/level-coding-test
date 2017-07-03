

launchInterface = () =>{
	const Rover = require('./Rover.js');
	const readline = require('readline');

	const rl = readline.createInterface({
	  message: console.log("Welcome to the Mars Rover Control Center! "),
	  input: process.stdin,
	  output: process.stdout
	});

	rl.question('Please enter the outer right coordinates: ', (gridCoords) => {

		rl.question('Please enter the deployment coordinates: ', (deployCoords) => {

			rl.question('Please enter movement directions for the Rover to follow: ', 
			(directions)=>{			

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

