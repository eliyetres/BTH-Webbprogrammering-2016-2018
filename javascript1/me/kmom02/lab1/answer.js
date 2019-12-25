/**
 * @preserve 1621b85a64d5d7ba20ca063c2e2f5a9b
 *
 * 1621b85a64d5d7ba20ca063c2e2f5a9b
 * javascript1
 * lab1
 * elhb16
 * 2016-11-02 12:10:34
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-02 13:10:34 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function (dbwebb) {
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - javascript1
 *
 * If you need to peek at examples or just want to know more, take a look at
 * the references at MDNs (Mozilla Developers Network) page:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.  
 * 
 * Here you will find everything this lab will go through and much more.
 *
 */

/** ----------------------------------------------------------------------
 * Section 1 . Integers, floats and variables
 *
 * The foundation of variables, numbers, strings and basic arithmetic. In
 * questions 1.5 and 1.6 you are going to work with floats. One way to round a
 * float to a certain amount of decimals is:  Math.round(val*10000)/10000,
 * where 'val' is your float number.
 *
 */
/**
 * Exercise 1.1
 *
 * Create a variable called 'numberOne' and give it the value 507. Create
 * another variable called 'numberTwo' and give it the value 358. Create a
 * third variable called 'result' and assign to it the sum of the first two
 * variables.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var numberOne = 507;
var numberTwo = 358;
var result = numberOne + numberTwo;

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);
/**
 * Exercise 1.2
 *
 * Use your two variables, 'numberOne' and 'numberTwo'. Create one more,
 * called 'numberThree' and give it the value: 689. Use your variable 'result'
 * and assign to it the sum of all three variables.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numberThree = 689;
var sumall = numberOne + numberTwo + numberThree;


ANSWER = sumall;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Use your variables 'numberOne' and 'numberTwo' and answer with the product
 * of the numbers in your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var prodnum = numberOne * numberTwo;

ANSWER = prodnum;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Use your variables 'numberOne', 'numberTwo' and 'numberThree'. Subtract
 * 'numberThree' from the product of the other two variables.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var result3 = (numberOne * numberTwo) - numberThree;

 ANSWER = result3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Create two variables, 'floatOne' and 'floatTwo'. Give them the values:
 * 278.07 and 908.4. Use your 'result'-variable and assign to it the sum of
 * the float numbers.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var floatOne = 278.07;
var floatTwo = 908.4;
var result4 = floatOne + floatTwo;


ANSWER = result4;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Answer with the result of 294 modulus (%) 25.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = 294%25;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Built-in Number-methods and functions
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Number
 *
 */

/**
 * Exercise 2.1
 *
 * Create a variable 'someIntText' and give it a value of '74.358 crocodile'.
 * Use the function 'parseInt' to find out the integer representation of the
 * text.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var someIntText = '74.358 crocodile';
var resultparseint = parseInt(someIntText);

ANSWER = resultparseint;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Use your variable 'someIntText'. Use the function 'parseFloat' to find out
 * the float representation of the text.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var resultarsefloat = parseFloat(someIntText);


ANSWER = resultarsefloat;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Built-in Math-methods and functions
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Math
 *
 */
/**
 * Exercise 3.1
 *
 * Use the method 'max', in Math, to find out the highest number in the serie:
 * 376,683,258,728.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var mathmax = Math.max(376, 683, 258, 728);

ANSWER = mathmax;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2
 *
 * Use the method 'min', in Math, to find out the lowest number in the serie:
 * 376,683,258,728.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var mathmin = Math.min(376, 683, 258, 728);

ANSWER = mathmin;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Use the method 'round', in Math, to round the float number: 115.93 to the
 * closest integer.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var roundvar = Math.round(115.93);

ANSWER = roundvar;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/**
 * Exercise 3.4
 *
 * Find out the quotient of 471 / 96 and use the method 'floor', in Math, to
 * get only the integer value.  
 * 
 * Use your 'result'-variable in your answer.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var quot = 471/96;
var floor = Math.floor(quot);


ANSWER = floor;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, false);

/**
 * Exercise 3.5
 *
 * Use the Math property 'E' to get the float value of 'E'. Find the product
 * of 'E' and 87. Use the built-in method 'ceil()' to get an integer value of
 * your result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var efloat = Math.E;
var efloatresult = efloat * 87;

ANSWER = Math.ceil(efloatresult);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.5", ANSWER, false);

/**
 * Exercise 3.6
 *
 * Use the Math property 'PI' to get the float value of 'Pi'. Round the result
 * to 4 decimals.  
 * 
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var mathpi = Math.PI;
var roundedmath = Math.round(mathpi*10000)/10000;


ANSWER = roundedmath;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.6", ANSWER, false);

/**
 * Exercise 3.7
 *
 * Use the method 'pow', in Math, to find the power of (base) 96 and
 * (exponent) 3.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var mathpow = Math.pow(96,3);

ANSWER = mathpow;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.7", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . Strings and variables
 *
 * Practice strings and variables. If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */
/**
 * Exercise 4.1
 *
 * Create a variable, named 'firstWord', that holds the word 'JavaScript'.
 * Create a second variable, named 'secondWord', that holds the word 'rocks!'.
 * Create a third variable, named 'bothWords', and put together 'firstWord'
 * and 'secondWord' with a space between.  
 * 
 * Answer with the variable 'bothWords'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var firstWord = 'JavaScript';
var space = ' ';
var secondWord = 'rocks!';
var bothWords = firstWord + space + secondWord;



ANSWER = bothWords;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2
 *
 * Create a variable called 'wordOne' and assign to it: 'elephant'. Add the
 * number 635 to the word and answer with the result in your
 * 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var wordOne = 'elephant';
var elepresult = wordOne + 635;


ANSWER = elepresult;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 5 . Built-in String-methods, functions and properties
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */
/**
 * Exercise 5.1
 *
 * Use 'charAt' on a string to return the character at a given index. Use it
 * on the word 'chicken' and answer with the character at index 3.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var chick = 'chicken';
var chara = chick.charAt(3);


ANSWER = chara;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.1", ANSWER, false);

/**
 * Exercise 5.2
 *
 * Use 'toUpperCase' to transform the string: 'Do you want to hear the most
 * annoying sound in the world?' to uppercase.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var transstr = 'Do you want to hear the most annoying sound in the world?';
var transres = transstr.toUpperCase(transstr); 


ANSWER = transres;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.2", ANSWER, false);

/**
 * Exercise 5.3
 *
 * Use 'length' to find out the length of the string: 'chicken'.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var lenchick = chick.length;


ANSWER = lenchick;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.3", ANSWER, false);

/**
 * Exercise 5.4
 *
 * Use 'substr' to extract the last three characters of the word: 'chicken'.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var subchick = chick.substr(4, 6);
console.log(subchick);

ANSWER = subchick;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 6 . Built-in Date-methods and functions
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Date
 *
 */
/**
 * Exercise 6.1
 *
 * Create a Date object called 'myDate' and initiate it with: 'Aug 14, 1992'.
 * Use the built-in function Date.getFullYear to get the year from your Date
 * object.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myDate = new Date('Aug 14, 1992');
var years = myDate.getFullYear();


ANSWER = years;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.1", ANSWER, false);

/**
 * Exercise 6.2
 *
 * Create a new Date object that is equal to 'myDate' plus 30 days.  
 * 
 * Use Date.getDate and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var newdate = new Date('Aug 14, 1992');
newdate.setDate(newdate.getDate() + 30);

var newget = newdate.getDate();

ANSWER = newget;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 7 . If, else if and else
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/if...else
 *
 */
/**
 * Exercise 7.1
 *
 * Create five variables: 'card1'=1, 'card2'=5, 'card3'=6, 'card4'=2,
 * 'card5'=2.  
 * 
 * Add them up and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var card1 = 1;
var card2 = 5;
var card3 = 6;
var card4 = 2;
var card5 = 2;

var deck = card1 + card2 + card3 + card4 + card5;

ANSWER = deck;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.1", ANSWER, false);

/**
 * Exercise 7.2
 *
 * Use an if statement to see if the five cards (card1-card5) have a combined
 * value that is higher than 21.  
 * 
 * If the value is higher, answer with the string 'busted'. Else answer with
 * the string 'safe'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var deckgame = 'safe';
if (deck > 21)  {
deckgame = ('busted');
}



ANSWER = deckgame;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.2", ANSWER, false);

/**
 * Exercise 7.3
 *
 * Use if else statements to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.  
 * 
 * Answer with lower = 'safe', higher = 'busted', 21 = 'black jack'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var newgame = 'safe';
if (deck > 21) {
deckgame = ('busted');
}
else if (deck == 21){
	deckgame = ('black jack');
}



ANSWER = newgame;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.3", ANSWER, false);

/**
 * Exercise 7.4
 *
 * Create three variables: 'dealer1' = 11, 'dealer2' = 10 and 'dealer3' = 6.
 * Combine the if, else and the AND (&&) statements to see what the dealer
 * should do.  
 * 
 * If the combined value of the dealercards is lower than 17, answer with
 * 'safe', if the value is higher than or equal to 17 and lower than 21 answer
 * 'stop'. If the value is 21 answer 'black jack'. If the value is higher than
 * 21 answer 'busted'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var dealer1 = 11;
var dealer2 = 10;
var dealer3 = 6;

var totaldealer = dealer1 + dealer2 + dealer3;

var combinedvalue = 'safe';
if (totaldealer >= 17 && totaldealer < 21) {
	combinedvalue = 'stop';
}
else if (totaldealer == 21) {
	combinedvalue = 'black jack';
}
else if (totaldealer > 21) {
	combinedvalue = 'busted';
}



ANSWER = combinedvalue;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 8 . Switch, case
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/switch
 *
 */
/**
 * Exercise 8.1
 *
 * Use a switch-case statement to figure out the color of a fruit. You have
 * the following fruits - banana=yellow, apple=green, kiwi=green,
 * plum=purple). Create a variable 'myFruit' which holds the current value of
 * your fruit. If 'myFruit' is banana, the result should be 'The banana is
 * yellow.'.  
 * 
 * Answer with the result where 'myFruit = kiwi'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var ansfruit;

var myFruit = 'kiwi';
switch (myFruit) {
	case "banana":
		ansfruit ='The ' + myFruit + ' is yellow.';
		break;
	case "apple":
	case "kiwi":
		ansfruit = 'The ' + myFruit + ' is green.';
		break;
	case "plum":
		ansfruit = 'The ' + myFruit + ' is purple.';
}


ANSWER = ansfruit;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.1", ANSWER, false);

/**
 * Exercise 8.2
 *
 * Extend your switch-case statement with a default value. The result should
 * be 'That is an unknown fruit.' when the variable 'myFruit' has an unknown
 * value.  
 * 
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var ansfruit2;

var myFruit2 = 'pear';
switch (myFruit2) {
	case "banana":
		ansfruit2 ='The ' + myFruit2 + ' is yellow.';
		break;
	case "apple":
	case "kiwi":
		ansfruit2 = 'The ' + myFruit2 + ' is green.';
		break;
	case "plum":
		ansfruit2 = 'The ' + myFruit2 + ' is purple.';
		break;
	default:
		ansfruit2 = "That is an unknown fruit.";
}

ANSWER = ansfruit2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 9 . For loops
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/for
 *
 */
/**
 * Exercise 9.1
 *
 * Use a for-loop to increment 541 with the value 4, 12 times.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var resultvar = 541;
for (var counter = 0; counter < 12; counter += 1)
	resultvar = resultvar + 4;


ANSWER = resultvar;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.1", ANSWER, false);

/**
 * Exercise 9.2
 *
 * Use a for-loop to decrement 615 with the value 7, 14 times.  
 * 
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var decvar = 615;
for (var counter2 = 0; counter2 < 14; counter2 += 1)
	decvar = decvar - 7;


ANSWER = decvar;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.2", ANSWER, false);

/**
 * Exercise 9.3
 *
 * Use a for-loop to add all the values in the range - 20 to 41 - to a string
 * with each number separated by a comma ','. The result should not end with a
 * comma. You should neither have a space after the comma.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var looprange = "";
for (var counter3 = 20; counter3 < 42; counter3 += 1){
	looprange = looprange + counter3;
	if (counter3 != 41) 
		looprange += ",";
}

	


ANSWER = looprange;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.3", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 10 . While loops
 *
 * If you need a hint, take a look at:  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/while
 *
 */
/**
 * Exercise 10.1
 *
 * Use a while-loop to increment 12 with the value 4 until it has reached or
 * passed 541.  
 * 
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
var loopvar = 12;
var countloop = 0;
while (loopvar <= 541) {
	countloop += 1;
	loopvar = loopvar + 4;
}

ANSWER = countloop;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.1", ANSWER, false);

/**
 * Exercise 10.2
 *
 * Use a while-loop to subtract 7 from 615 until the value has reached or
 * passed 0.  
 * 
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var loopvar2 = 615;
var countloop2 = 0;
while (loopvar2 >= 0) {
	countloop2 += 1;
	loopvar2 = loopvar2 - 7;
}


ANSWER = countloop2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.2", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
