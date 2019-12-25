/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function() {
    "use strict";

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill":     document.getElementById('hang_hill'),
            "gallow":   document.getElementById('hang_construction'),
            "body":     document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm":  document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg":  document.getElementById('hang_leftleg'),
            "rope":     document.getElementById('hang_rope'),
            "head":     document.getElementById('hang_head')
        },
        "usedParts" : {},

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],

        //all possible words
        "allWords": [
            "moose",
            "hello",
            "nailpolish",
            "lamp",
            "maplesyrup",
            "cinnamon",
            "book",
            "harddrive",
            "lighter"
        ],
        "space" : 0,        
        "guesses" : [],
        "counter" : 0,
        "lives" : 9,
        "currentWord" : "",

        // skriver ut hela ordlistan i consolen.
        "wordlist": function () {
          console.log("Word list:\n" + hangman.allWords);
        },
        //skriver ut det aktiva ordet
        "peek" : function(){
          console.log("The answer is: " + hangman.word);
        },
        // select random word

        "word": function(){
          var word = hangman.allWords[Math.floor(Math.random() * hangman.allWords.length)];
          return hangman.currentWord = word, word;
        },

        //all letters
        "alphabet" : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'],

        //add event ON  CLICK 
         "clickLetter" : function (i){
            var list = document.getElementById("letter"+i);          
            list.addEventListener("click", function(){  
              var guess = (this.innerHTML);
              console.log(this);
              this.setAttribute("class", "active");
              this.onclick = null;
                for (var i = 0; i < hangman.word().length; i++) {
                  if (hangman.word()[i] === guess) {
                    hangman.guesses[i].innerHTML = guess;
                    hangman.counter += 1;  
                  } 
                }                
                var j = (hangman.word().indexOf(guess));
                if (j === -1) {
                  hangman.lives -= 1;
                  hangman.comments();
                  //animate();
                 } else {
                 hangman.comments();
              }      
            });
          },

        // create alphabet 
        "buttons" : function () {
        var myButtons = document.getElementById('buttons');
        var letters = document.createElement('ul');      
        for (var i = 0; i < hangman.alphabet.length; i++) {
            letters.id = 'alphabet';
            var list = document.createElement('li');
            list.id = 'letter'+i;
            list.classList.add("clickable");
            list.innerHTML = hangman.alphabet[i];            
            myButtons.appendChild(letters);
            letters.appendChild(list);
            hangman.clickLetter(i);
          }
        },

         // Create guesses ul
         "result" : function () {
          var wordHolder = document.getElementById('hold');
          var correct = document.createElement('ul');
          var guess = (hangman.innerHTML);
          for (var i = 0; i < hangman.word().length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (hangman.word()[i] === "-") {
              guess.innerHTML = "-";
              hangman.space = 1;
            } else {
              guess.innerHTML = "_";
            }
            hangman.guesses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
          }
        },

   "comments" : function () {
      var showLives = document.getElementById("mylives");
      showLives.innerHTML = "You have " + hangman.lives + " tries left!";
      if (hangman.lives < 1) {
        showLives.innerHTML = "This guy died because of you! Press F5 to restart.";
      }
      for (var i = 0; i < hangman.guesses.length; i++) {
        if (hangman.counter + hangman.space === hangman.guesses.length) {
          showLives.innerHTML = "You saved him!";
        }
      }
    },

        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {
            if (this.validParts.indexOf(part) === -1) {
                console.log("The part is not valid: " + part);
                return false;
            }
            console.log("The part is valid: " + part);
            return true;

        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {
            if (this.isValid(part)) {
                console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
            }
        },

        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {

            if (this.isValid(part)) {
                console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
            }
        }
    };

    console.log("You can now use the hangman object as a part of the window-object. Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')\n\nHere are all the parts you can work on.");
    console.log(hangman.validParts);
    console.log("Type 'Window.Hangman.peek()' in the console to check all possible words.");

    hangman.buttons();
    hangman.result();

    console.log(hangman.peek());

    // Return the object to make it visible.
    return hangman;
})();
