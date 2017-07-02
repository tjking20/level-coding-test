//user interface that will be put in last
var readline = require('readline');



const rl = readline.createInterface({
  message: console.log("Welcome to the Mars Rover Control Center! "),
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter the outer right coordinates: ', (gridCoords) => {
	// const inputOne = gridCoords;
	rl.question('Please enter the deployment coordinates: ', (deployCoords) => {
		console.log(gridCoords);
		console.log(deployCoords);

		rl.question('Please enter movement instructions for the Rover to follow: ', 
			(instructions)=>{

				console.log(gridCoords);
				console.log(deployCoords);
				console.log(instructions);
				rl.close()
			});
		
	});
 
});
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