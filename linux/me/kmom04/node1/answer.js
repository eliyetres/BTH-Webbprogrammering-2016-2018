#!/usr/bin/env node

/**
 * @preserve 9326167dc264475026a1674f0714fb96
 *
 * 9326167dc264475026a1674f0714fb96
 * linux
 * node1
 * elhb16
 * 2017-02-07 17:17:50
 * v2.2.28* (2017-02-01)
 *
 * Generated 2017-02-07 18:17:51 by dbwebb lab-utility v2.2.28* (2017-02-01).
 * https://github.com/mosbth/lab
 */
"use strict";


import dbwebb from "./.dbwebb.js";

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/**
 * ======================================================================
 * node1 - JavaScript med Nodejs
 *
 * JavaScript using nodejs.
 *
 * ----------------------------------------------------------------------
 * Section 1 . nodejs built-ins
 *
 * In this section we try out some of the new nodejs and ES6 features.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable called `numbersArray` holding the numbers 2,48,19,12,93.
 *
 * Use find to get the first occurence of a number bigger than or equal to 42.
 *
 * Answer with the number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var numbersArray = [2, 48, 19, 12, 93];

ANSWER = numbersArray.find(x => x >= 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2
 *
 * Find the smallest number in `numbersArray` by using the spread operator
 * `...` and the function `Math.min()`.
 *
 * Answer with the smallest number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = numbersArray.find(x => Math.min(...x));


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a function called `meaningOfLife()` with one default parameter with
 * the value of 42.
 *
 * The function should return the sentence 'The meaning of life is '
 * concatenated with the parameter.
 *
 * Answer with a call to the `meaningOfLife()` function without any
 * parameters.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


function meaningOfLife(x = 42) {
    return "The meaning of life is " + x;
}


ANSWER = meaningOfLife();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Check if the word Antilope contains the letters 'oo'. Return true or false
 * depending on the answer.
 *
 * Tip: Use nodejs function `includes`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



ANSWER = "Antilope".includes("oo");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Check if the word Antilope starts with the letters 'El'. Return true or
 * false depending on the answer.
 *
 * Tip: Use nodejs function `startsWith`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = "Antilope".startsWith("El");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Filtering arrays
 *
 * In this section we filter arrays in different ways.
 *
 */
/**
 * Exercise 2.1
 *
 * Use `numbersArray` from above holding the numbers 2,48,19,12,93.
 *
 * Use a for-loop to save all numbers smaller than 42 in a new array.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


let newArray = [];
for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] < 42) {
        newArray.push(numbersArray[i]);
    }
}

ANSWER = newArray;



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a variable called `moreNumbersArray` holding the numbers
 * 2,48,19,12,93,71,26.
 *
 * Use the built-in higher-order function `filter` and a callback function to
 * filter out all numbers bigger than or equal to 42.
 *
 * Use arrow-notation to keep the code short and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var moreNumbersArray = [2, 48, 19, 12, 93, 71, 26];

ANSWER = moreNumbersArray.filter(x => x <= 42);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Transforming arrays
 *
 * In this section we change arrays using the higher-order functions map and
 * reduce.
 *
 */
/**
 * Exercise 3.1
 *
 * Create a variable called `stringArray` holding the strings 'Pete
 * Conrad','Richard F. Gordon Jr.','Alan Bean'.
 *
 * Use a for-loop to concatenate the string ' was on the apollo 12' too each
 * name in the array.
 *
 * Store the result in a new array and answer with that array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var stringArray = ['Pete Conrad', 'Richard F. Gordon Jr.', 'Alan Bean'];

let newArray2 = [];


for (var i = 0; i < stringArray.length; i++) {
    newArray2.push(stringArray[i] + " was on the apollo 12");

}



ANSWER = newArray2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, true);

/**
 * Exercise 3.2
 *
 * Use the `stringArray` from above and the built-in higher-order function
 * `map` to concatenate the string ' was not on the apollo 11' and each name.
 *
 * Use arrow notation to keep the code simple and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


ANSWER = stringArray.map(x => x + " was not on the apollo 11");


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Create a variable called `maybePrimeNumber` holding the numbers
 * 5,8,11,14,17,20,23,28,31.
 *
 * In a for-loop sum all prime numbers from `maybePrimeNumber`, you need to
 * find out whether or not the number is a prime number.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var maybePrimeNumber = [5, 8, 11, 14, 17, 20, 23, 28, 31];

let newArray3 = [];

for (var i = maybePrimeNumber.length - 1; i >= 0; i--) {
    var current_number = maybePrimeNumber[i];
    var is_prime = true;
    for (var x = current_number - 1; x > 1; x--) {
        //console.log(current_number + " % " + x + " = " + current_number%x);
        if (current_number % x === 0) {
            is_prime = false;
        }
    }
    if (is_prime) {
        newArray3.push(current_number);
    }
}

ANSWER = newArray3.reduce((a, b) => a + b, 0);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/**
 * Exercise 3.4
 *
 * Create a function `isNotPrime()` that takes one parameter (an integer) and
 * tests if that number is a prime number. If the number is not prime, the
 * number is returned otherwise return 0.
 *
 * Use the built-in higher-order functions `reduce` to sum all numbers that
 * are NOT prime numbers.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let newArray4 = [];

function isNotPrime(num) {
    if (num > 1 && num % 2 !== 0) {
        newArray4.push(0);
    } else {
        newArray4.push(num);
    }
}

for (var i = 0; i < maybePrimeNumber.length; i++) {
    isNotPrime(maybePrimeNumber[i]);

}

ANSWER = newArray4.reduce((a, b) => a + b, 0);
// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, true);


process.exit(dbwebb.exitWithSummary());
