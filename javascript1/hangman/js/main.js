window.Main = function(){
    'use strict';

    //var myContent = document.getElementById('content');

    var space = 0;        
    var guesses = [];
    var counter = 0;
    var lives = 9;

        //all letters
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

        //add event ON  CLICK 
        var clickLetter = function (){

	    var guess = (this.innerHTML);
	    console.log("guess =" + guess);
	    var list = document.getElementById("letter");
            
        list.addEventListener("click", function(){               
        list.classList.remove("clickable");
        list.classList.add("active");
        this.onclick = null;
        console.log(hangman.word());
        for (var i = 0; i < hangman.word().length; i++) {
            if (hangman.word()[i] === guess) {
                hangman.guesses[i].innerHTML = guess;
                hangman.counter += 1;
                console.log(guess);
                console.log(hangman.counter);
                } 
              }
              var j = (hangman.word.indexOf(guess));
              if (j === -1) {
                this.lives -= 1;
                this.comments();
                //animate();
               } else {
               this.comments();
            }
    
  
            });
          },

        // create alphabet 
        function buttons() {
        	var myButtons = document.getElementById('buttons');
        	var letters = document.createElement('ul');
      	
        	for (var i = 0; i < alphabet.length; i++) {
        	    letters.id = 'alphabet';
        	    var list = document.createElement('li');
        	    list.id = 'letter';
        	    list.classList.add("clickable");
        	    list.innerHTML = alphabet()[i];
	
        	    //check();
        	    myButtons.appendChild(letters);
        	    letters.appendChild(list);
        	  }clickLetter();
        },


         // Create geusses ul
         function result() {
          var wordHolder = document.getElementById('hold');
          var correct = document.createElement('ul');
          var guess = (this.innerHTML);

          for (var i = 0; i < word().length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
              guess.innerHTML = "-";
              space = 1;
            } else {
              guess.innerHTML = "_";
            }

            guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
          }
        },





        // put letter in guesses
        function addGuess(pressedletter){
                  
          for (var i = 0; i < alphabet.length; i++) { 
            if (pressedletter[i] !== alphabet){
              guesses.push(pressedletter);
              alphabet.delete(pressedletter);
            }
          }
          },
      // Show lives
   	function comments() {
      var showLives = document.getElementById("mylives");
      showLives.innerHTML = "You have " + lives + " tries left!";
      if (lives < 1) {
        showLives.innerHTML = "Oh no! This guy died because of you!";
      }
      for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    },


    console.log('Sandbox is ready!');
})();
