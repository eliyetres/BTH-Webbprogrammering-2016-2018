/* Baddie1 - Assignment */
/*
Assignment-sections start like this:
	// -------------------------------------------
	// ASSIGNMENT

Note that the INSTRUCTION can be to fill a whole BLOCK of code, not just one row.
In some cases you have to fill in some missing parts of code or change parts of it.
It can look like this:
	if(false)
These should be filled out by replacing the boolean false with your code, for example:
	if(x > 10)

Good luck!
*/

(function(){
	'use strict';
	// HTML Elements
	var baddie, content;
	// Numbers
	var step, left, top;

	// Get HTML elements that are to be used
	baddie = document.getElementById('baddie');
	content = document.getElementById("content");

	// Step value - how far does baddie go per step - his own size per step
	step = baddie.offsetWidth;
	console.log("Baddie will step " + step + " pixels each move");

	// Gets starting position of baddie
	left = 100;
	top = 200;
	baddie.style.left = left + "px";
	baddie.style.top = top + "px";
	//console.log("Baddie started at " + left + "," + top);

	/* ------------------------------------
	 * EVENTS
	 */
	// Triggers action on keypress
	document.addEventListener("keydown", function(event) {
		var key;

		// Get which key was pressed
		key = event.keyCode || event.which;
		console.log(key + " was pressed");

		// Gets baddie's current position
		left = baddie.offsetLeft;
		top = baddie.offsetTop;
		//console.log("Baddie is currently at " + left + "," + top);

		var ch = 300 - baddie.offsetWidth;
		var cw = 400 - baddie.offsetWidth;

		//function baddiejump(){
		//	top = baddie.style.top  = parseInt(baddie.style.top) - step;
		//	console.log("Baddie jumped!");
		//}
	
		if (key===37){

			left = baddie.style.left = parseInt(baddie.style.left) - step;
			// Turn baddie left - Use the given function
			document.getElementById("baddie").className += " baddie-left";

			if(baddie.offsetLeft <= 0){
				left = baddie.style.left = 0;
				console.log("Baddie collided with left wall");
			}
			
		}
		else if (key===38){
			top = baddie.style.top  = parseInt(baddie.style.top) - step;

				if(baddie.offsetTop <= 0){
				top = baddie.style.top = 0;
				console.log("Baddie collided with top wall");
			}
		}
		else if (key===39){
			// Turn baddie right - Use the given function
			left = baddie.style.left = parseInt(baddie.style.left) + step;
			document.getElementById("baddie").className = "baddie";

				if(baddie.offsetLeft >= cw){
				left = baddie.style.left = parseInt(cw);
				console.log("Baddie collided with right wall");
			}
		}
		else if (key===40){
			top = baddie.style.top = parseInt(baddie.style.top) + step;

			if(baddie.offsetTop >= ch){
				top = baddie.style.top = parseInt(ch);
				console.log("Baddie collided with bottom wall");
			}
	
	}	//else if (key===32){
		//	top = baddie.style.top = parseInt(baddie.style.top) - step;
		//	window.setTimeout(function(){baddiejump();}, 1000);
			
		//}

		// Assign a new position for baddie
		baddie.style.left = left + "px";
		baddie.style.top = top + "px";
		console.log("Baddie moved to %i,%i", left, top);

		
	});
}());


