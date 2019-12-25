(function(){
    'use strict';


	var allElements = document.getElementsByClassName("box"); //get all elements with class "box"
	var myContent = document.getElementById("content");
    var box1 = document.getElementById("box1");

    
    // get box width & height
    box1.style.width = box1.clientWidth + "px";
    box1.style.height = box1.clientHeight + "px";

    // get box top & left position
    box1.style.top = box1.offsetTop + "px";
    box1.style.left = box1.offsetLeft + "px";

    // get height & width of window
    var pageHi = window.innerWidth;
    var pageWi = window.innerHeight;
    
    // get height & width of box
   	var boxWi = box1.offsetWidth;
   	var boxHi = box1.offsetHeight;
   	
    // get box1 position
    var boxPosx = box1.offsetTop;
    var boxPosy = box1.offsetLeft;
    
    //print info
    function logSize(){
    	console.log("Window height: " + pageHi +"x width: " + pageWi);
    	console.log("Box width: " + boxWi + "x height: " + boxHi);
    	console.log("Box pos top: " + boxPosx + ", left: " + boxPosy);
    }
    logSize();


    // EVENT SINGLE CLICK: function for box1, toggle outline/selected
	box1.addEventListener("click", function(){
		box1.classList.toggle("selected");
		console.log(box1.classList);
		console.log("Toggled outline");

	});
	//functions for removing object after 2 sec
	var myVar;
	function myFunction() {
    myVar = window.setTimeout(animate, 2000);
}
	function animate() {
    document.getElementById("box1").remove();
    console.log("Object was removed");
}
			
	//EVENT DOUBLE CLICK: function for removing box
	box1.addEventListener("dblclick", function(){
		if (box1.classList.contains("selected")){
			console.log("Double click");
			box1.classList.add("animateSize");
			box1.style.width = 2 +"px";
			box1.style.height = 2 +"px";
			myFunction();
		}

	});

	//function for keeping div centered
	var centerObject = function () {
	var u;
		for (u = 0; u < allElements.length; u++) {
	  	allElements[u].style.marginTop = (window.innerHeight - allElements[u].offsetHeight) / 2 + 'px';
	  	allElements[u].style.marginLeft = (window.innerWidth - allElements[u].offsetWidth) / 2 + 'px';
  		}
  	};

	function adds(){ //add selection
		var divs = document.querySelectorAll(".box"); //all box elements
		var u;
		for (u = 0; u < divs.length; u++) {
			divs[u].classList.add("selected");		
		}	
	}
	function removes(){ //remove selection
		var divs = document.querySelectorAll(".box"); //all box elements
		var u;
		for (u = 0; u < divs.length; u++) {
			if (divs[u].classList.contains("selected")){
				divs[u].classList.remove("selected");
			}
		}	
	}
	function deleteSelected(){ //delete selection
		var x = document.getElementsByClassName("selected");
		var u;
		for (u = 0; u < x.length; u++) {
			x[u].remove();
		}	
	}

//change colour on box
function colour(d, fromcolour, tocolour){

if (allElements[d].classList.contains("selected")){	
	if (allElements[d].classList.contains(fromcolour)){
		allElements[d].classList.remove(fromcolour);
		allElements[d].classList.add(tocolour);
	}
	console.log("Changed colour");
		}
}

//move objects
 function moveAll(hori, vert){
	var o;
	for (o = 0; o < allElements.length; o++) {
		if (allElements[o].classList.contains("selected")){
			allElements[o].style.left = parseInt(allElements[o].style.left) + hori +"px";
			allElements[o].style.top = parseInt(allElements[o].style.top) + vert +"px";
		}
	}
 }
//move elements by z-index
function zIndex(pix){
	var o;
	for (o = 0; o < allElements.length; o++) {
		if (allElements[o].classList.contains("selected")){
			allElements[o].style.zIndex = parseInt(allElements[o].style.zIndex = pix);
		}
	}console.log("Moved" + o + pix + " pixels in z-index");
}
//change size and keep center of box
function changeSize(size, pix){
	var u;
	for (u = 0; u < allElements.length; u++) {
		if (allElements[u].classList.contains("selected")){
		allElements[u].style.width = parseInt(allElements[u].style.width) + size + "px";
		allElements[u].style.height = parseInt(allElements[u].style.height) + size +"px";
		moveAll(pix, pix);
		console.log("Size changed by " + size + "px");
		}
	}	
}

//copy selected box
function copyBox(){
	var randHi = Math.floor((Math.random() * window.innerHeight) + 0);
	var randWi = Math.floor((Math.random() * window.innerWidth) + 0);

	var u;

	for (u = 0; u < allElements.length; u++) {
		if (allElements[u].classList.contains("selected")){
		var newbox = allElements[u].cloneNode(true);
		newbox.id = "";
		document.body.appendChild(newbox);
		newbox.setAttribute('id','copy');

		newbox.style.left = randHi +'px';
		newbox.style.top = randWi +'px';
		newbox.style.marginLeft = "0px";
		newbox.style.marginTop = "0px";
		zIndex("1");
		}
	}
}
//create a random box
function randomBox(){
    var randHi = Math.floor((Math.random() * window.innerHeight) + 0);
	var randWi = Math.floor((Math.random() * window.innerWidth) + 0);	
	var copy = box1.cloneNode(true);
	copy.id = "";
	document.body.appendChild(copy);
	copy.setAttribute('id','random');
	copy.classList.add("selected");
	copy.classList.remove("pink");

	console.log("Object copied");


	//random placement
	copy.style.left = randHi +'px';
	copy.style.top = randWi +'px';
	copy.style.marginLeft = "0px";
	copy.style.marginTop = "0px";
	//random class
	var classes = ["pink", "darkpink", "black", "white"];
	var randomClass = classes[Math.floor(classes.length * Math.random())];
	copy.classList.add(randomClass);

	//random size
	copy.style.width = randWi + "px";
	copy.style.height = randHi +"px";
	console.log("Object at pos: " + randHi + ", " + randWi);
}

//EVENT RESIZE: window resize function for box
window.addEventListener("resize", centerObject);
	myContent.innerHTML = "New size: " + window.innerWidth + "x" + window.innerHeight;
centerObject();



//Key events
	document.onkeydown = function(event){
		var key = event.keyCode || event.which;
		switch(key){
			// e key function for box1
			case 69: //e, toggle circle
			var i;
			for (i = 0; i < allElements.length; i++) {
				if (allElements[i].classList.contains("selected")){
			    allElements[i].classList.toggle("circle");
			    console.log("Toggled circle");}	}

				break;

			case 81: //q size up
				changeSize(10, -5);
				break;

			case 87: //w size down
				changeSize(-10, 5);
				break;

			case 84: //t create copy of selected
				if (box1.classList.contains("selected")){
					var boxcopy = box1.cloneNode(); 	
					box1.appendChild(boxcopy);
					console.log(boxcopy);		
				}
			break;


			case 82: //r, change colour
			var d;
			for (d = 0; d < allElements.length; d++) {
					if (allElements[d].classList.contains("pink")){
						colour(d, "pink", "black");
						}
			
				    else if (allElements[d].classList.contains("black")){
				    	colour(d, "black", "white");
						}

					else if (allElements[d].classList.contains("white")){
					 	colour(d, "white", "darkpink");
						}
			
					else if (allElements[d].classList.contains("darkpink")){
					 	colour(d, "darkpink", "pink");
						}
			
				console.log("Toggle object colour");
			}
				break;

			case 37: 
				moveAll(-15,0);
				//leftPos(-15);
				console.log("Moved left");
				break;

			case 38: 
				moveAll(0,-15);	
				console.log("Moved up");
				break;

			case 39: 
				moveAll(15,0);
				console.log("Moved right");
				break;

			case 40: 
				moveAll(0, 15);	
				console.log("Moved down");
				break; 

			case 73: // i
				adds();
				console.log("Selected all");
				break;

			case 85: // u
				removes();
				console.log("Deselected all");
				break;

			case 80: // p
				randomBox();
				console.log("Created random box");
				break;

			case 65: //  a
				zIndex("-1");
				console.log("Moved selected up in z-index");
				break;

			case 83: // s
				zIndex("1");
				console.log("Moved selected down in z-index");
				break;

			case 89: // y
				deleteSelected();
				console.log("Deleted selected");
				break;

			case 84: // t
				copyBox();
				console.log("Copied selected");
				break;

			case 70: //f
			
			var newCircle = box1.cloneNode(true);
			document.body.appendChild(newCircle);

			var randHi = Math.floor((Math.random() * window.innerHeight) + 0);
			var randWi = Math.floor((Math.random() * window.innerWidth) + 0); 
			newCircle.setAttribute('id','bubble');
			newCircle.classList.add("circle");
			newCircle.classList.add("smiley");

						console.log(newCircle);

			
			newCircle.style.left = randHi +'px';
			newCircle.style.top = randWi +'px';
			newCircle.style.marginLeft = "0px";
			newCircle.style.marginTop = "0px";



			



}
};

	

 
   //MyContent
	//myContent.appendChild(box);



	console.log('Sandbox is ready!');
    
    
    


})();

