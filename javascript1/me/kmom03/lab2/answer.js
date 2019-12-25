/**
 * @preserve 23d7f24dd2f71191d76f2a4dcc3a5f30
 *
 * 23d7f24dd2f71191d76f2a4dcc3a5f30
 * javascript1
 * lab2
 * elhb16
 * 2016-11-13 12:21:42
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-13 13:21:42 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - javascript1
 *
 * Practice to write functions.
 *
 */
/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */
/**
 * Exercise 1.1
 *
 * Create a function called 'sumNumbers()'. The function should take two
 * arguments and return the sum of them. Test the function using the arguments
 * 432 and 471.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function sumNumbers(x, y){
	return x + y;
}


ANSWER = sumNumbers(432, 471);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Create a function called 'productNumbers()'. The function should take three
 * arguments and return the product of them. Try the function using the
 * numbers 432, 471 and 208.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function productNumbers(x, y, z){
	return x * y * z;
}


ANSWER = productNumbers(432, 471, 208);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);
/**
 * Exercise 1.3
 *
 * Create a function 'sumRangeNumbers()' that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.  
 * 
 * Test it using the values 16 and 97 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function sumRangeNumbers(min, max) {
var sums = 0;
for (var counter = min; counter <= max; counter += 1){
	sums = sums + counter;
}
	console.log(counter);
	console.log(sums);
	return sums;
}


ANSWER = sumRangeNumbers(16, 97);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, true);

/**
 * Exercise 1.4
 *
 * Create a function 'stringPhrase()' that returns a phrase. Your word is
 * 'brown'. Pass the word as an argument to the function and the returned
 * phrase should be: 'My favorite color is brown.'.  
 * 
 * Test your function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringPhrase(color){
	return "My favorite color is " + color + ".";
}

ANSWER = stringPhrase("brown");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, true);

/**
 * Exercise 1.5
 *
 * Create a function called 'fruitColor()' that takes one argument called
 * 'fruit' and returns the color of the fruit. The function should be aware of
 * the following fruits (banana, apple, kiwi, plum) with respective color
 * (yellow, green, green, red).  
 * 
 * Try it out using the fruit 'kiwi' and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fruitColor(fruit){
	switch (fruit){
		case "banana":
		return "yellow";


		case "apple":
		return "green";


		case "kiwi":
		return "green";


		case "plum":
		return "red";

		default: 
		return "No such fruit here!";
	}
}

ANSWER = fruitColor("kiwi");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Create a function 'printRange()' that takes two arguments 'rangeStart' and
 * 'rangeStart' and returns a string with all numbers comma-separated in the
 * range. Try it using the arguments 25 and 44.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function printRange(rangeStart, rangeStop){
	var looprange = "";
	for (var counter = rangeStart; counter < (rangeStop + 1) ; counter += 1){
	looprange = looprange + counter;
	if (counter != rangeStop) 
		looprange += ",";}
return looprange;
}
ANSWER = printRange(25, 44);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7
 *
 * Create a function 'printRangeReversed()' that takes two arguments
 * 'rangeStart' and 'rangeStop' and returns a string with all numbers
 * comma-separated in the range. Try it using the arguments 44 and 25.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRangeReversed(rangeStart, rangeStop){
	var looprange = "";
	for (var counter = rangeStart; counter >= (rangeStop) ; counter -= 1){
	looprange = looprange + counter;
	if (counter != rangeStop) 
		looprange += ",";}

return looprange;
}

ANSWER = printRangeReversed(44, 25);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, true);

/**
 * Exercise 1.8
 *
 * Create a function 'printAnyRange()' that takes two arguments 'rangeStart'
 * and 'rangeStop' and returns a string with all numbers comma-separated in
 * the range. If 'rangeStart' is smaller than 'rangeStop' then call the
 * function 'printRange()'.  If 'rangeStart' is greater than 'rangeStop' the
 * call the function 'printRangeReversed()'. Try it using the arguments 25 and
 * 44 (both ways).  
 * 
 * Answer with the result using arguments 25 and 44.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printAnyRange(rangeStart, rangeStop){

	if (rangeStart < rangeStop){
		return printRange(rangeStart, rangeStop);
	}
 	else if (rangeStart > rangeStop){
 		return printRangeReversed(rangeStart, rangeStop);
 	}
}

ANSWER = printAnyRange(25, 44);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9
 *
 * Create a function called 'stringRepeat()' that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: 'red' and 5. The number represents the number of times the string
 * should be added to a string.  
 * 
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function stringRepeat(text, x){
	return Array(x+1).join(text);
}

ANSWER = stringRepeat("red", 5);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10
 *
 * Create a function called 'calculateInterest()' that returns the money you
 * have after x years of interest, given three arguments: 557, 22 and 1. First
 * argument represents the start money, the second argument represents the
 * number of years your money produces interest. The third argument is the
 * interest rate in percent (%).  
 * 
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function calculateInterest(money, years, interest){
	var newmoney = money;
	for (var i = 0; i < years; i +=1){
		newmoney = newmoney * (1 + interest/100);

	}var newmoney2 = newmoney;
return Math.round(newmoney2*10000)/10000;
}

ANSWER = calculateInterest(557, 22, 1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, true);

/**
 * Exercise 1.11
 *
 * Create a function 'inRange()' that takes three arguments, 'rangeStart',
 * 'rangeStop' and 'value'. The function should return boolean 'true' if
 * 'value' is greater than 'rangeStart' and less than 'rangeStop'. Otherwise
 * it should return boolean 'false'. Try it out using the range 157 - 525 and
 * the value 336.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function inRange(rangeStart, rangeStop, value){
	if (value > rangeStart && value < rangeStop) {
		return true;}
	else {
		return false;
	}

}

ANSWER = inRange(157, 525, 366);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.11", ANSWER, false);

/**
 * Exercise 1.12
 *
 * Try out the function 'inRange()' using the range 157 - 525 and the value
 * 624.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = inRange(157, 525);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.12", ANSWER, false);

/**
 * Exercise 1.13
 *
 * Create a function called 'degreesToRadians()' that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.  
 * 
 * Test your function with the value 164 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function degreesToRadians(degree){
	var ans = degree * Math.PI /180;
	return Math.round(ans*10000)/10000;
}

ANSWER = degreesToRadians(164);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.13", ANSWER, true);

/**
 * Exercise 1.14
 *
 * Create a function called 'fizzBuzz()' that takes two arguments 'start' and
 * 'stop' and returns a comma-separated string. The arguments represents the
 * starting point and stop point of the game 'Fizz Buzz'
 * (http://en.wikipedia.org/wiki/Fizz_buzz). The function should run from
 * start to stop and add 'Fizz', 'Buzz' or both to your 'result'-variable at
 * appropriate numbers. Each entry to your result should be comma-separated.
 * If 'stop' is equal or lower than 'start', the function should return an
 * appropriate error message.  
 * 
 * Test the function using start=2 and stop=23.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
function fizzBuzz(start, stop){
// Initialize a string variable for the output
var fizzstring ="";
for (var i= start; i <= stop; i++)
{
    if (i % 15 === 0)
        fizzstring += "Fizz Buzz,";
    else if (i % 3 === 0)
        fizzstring +="Fizz,";
    else if (i % 5 === 0)
        fizzstring += "Buzz,";
    else
        fizzstring += i+",";

}return fizzstring.replace(/,\s*$/, "");
}
// Count to 100 using i as the counter


    // If i is divisible by 3 with no remainder, append Fizz

    // If i is divisible by 5 with no remainder, append Buzz


    // If i is not divisible by 3 or 5, append the number itself.
    // Note: In JavaScript, non-zero integers are considered as
    // truthy values, therefore if there's a remainder on both,
    // we append the number instead.


ANSWER = fizzBuzz(2, 23);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.14", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . Black jack functions
 *
 * In this section, you could re-use your code from lab 1
 *
 */
/**
 * Exercise 2.1
 *
 * Create a function called 'printSum()' that should take two variables, the
 * sum of the players hand and the sum of the dealers hand. Your hand should
 * be three cards with the values: 1, 10 and 9. The dealers hand should be
 * three card with the values: 1, 7, 6. The function should return the sum and
 * the player: 'Player: 20, Dealer: 14'.  
 * 
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
 function printSum(player, dealer){
	player = 1 + 10 + 9;
	dealer = 1 + 7 + 6;
	return "Player: " + player +"," + " Dealer: " + dealer;
}


ANSWER = printSum(20, 14);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2
 *
 * Create a function called 'printResult()' that should take two variables,
 * the sum of the players hand and the sum of the dealers hand. Players hand
 * should be three cards with the values: 1, 10 and 9. The dealers hand should
 * be three card with the values: 1, 7, 6. This time you should include the
 * check from lab 1 where you find out the boundaries of the player and the
 * dealer. 

 Player hand = 21 ('black jack'), Player hand less than 21 ('safe'),
 * Player hand larger than 21 ('busted'). 
 Dealer hand less than 17 ('safe'),
 * Dealer hand larger or equal to 17 and less than 21 ('stop'), Dealer hand =
 * 21 ('black jack'), Delaer hand larger than 21 ('busted'). Return a string
 * in the format: 'Player: safe, Dealer: busted'.  
 * 
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var player = 1 + 10 +9;
var dealer = 1 + 7 +6;
function printResult(playerhand, dealerhand){

	var play;
	var deal;
	

	if (playerhand == 21){
		play = "black jack,";
	}
	if (playerhand > 21){
		play = "safe";
	}
	if (playerhand < 21){
		play = "safe";
	}
	if (dealerhand < 17){
		deal = "safe";
	}

	if (dealerhand >= 17 && dealerhand < 21){
		deal = "stop";
	}	
	if (dealerhand == 21){
		deal = "black jack";
	}
	if (dealerhand > 21){
		deal =  "busted";
	}
	var gamehand = "Player: " + play + ", " + "Dealer: " + deal;
 return gamehand;
}
ANSWER = printResult(player, dealer);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
