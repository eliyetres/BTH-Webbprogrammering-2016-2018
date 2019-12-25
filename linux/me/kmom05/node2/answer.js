#!/usr/bin/env node

/**
 * @preserve type
 *
 * type
 * linux
 * node2
 * elhb16
 * 2017-02-07 17:17:53
 * v2.2.28* (2017-02-01)
 *
 * Generated 2017-02-07 18:17:54 by dbwebb lab-utility v2.2.28* (2017-02-01).
 * https://github.com/mosbth/lab
 */
"use strict";


import dbwebb from "./.dbwebb.js";

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/** ======================================================================
 * Lab 4 - JavaScript with Nodejs
 *
 * JavaScript using nodejs. These exercises are directed at the [nodejs
 * api](https://nodejs.org/api/) and how to use the api documentation during
 * coding.
 *
 */
/** ----------------------------------------------------------------------
 * Section 1 . Filesystem
 *
 * This section is about the built-in module filesystem and how to read files
 * synchronously.
 *
 */
/**
 * Exercise 1.1
 *
 * Start by requiring the filesystem module `fs` and assign the module to a
 * variable called `fs`.
 *
 * Use the new `fs` variable and the function `readFileSync` to read the
 * entire `ircLog.txt` in UTF-8 encoding into a variable. Answer with the
 * number of characters in the file.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
import fs from 'fs';

var text = fs.readFileSync("ircLog.txt", "utf8");

ANSWER = text.length;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2
 *
 * Use your variable from the exercise above and answer with the contents on
 * line 4.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function get_line(filename, line_no, callback) {
    var data = fs.readFileSync(filename, 'utf8');
    var lines = data.split("\n");

    if (+line_no > lines.length) {
        throw new Error('File end reached without finding line');
    }

    callback(null, lines[+line_no]);
}

var lines = "";
get_line('ircLog.txt', 3, function(err, line) {
    lines = line;
});



ANSWER = lines;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, true);

/**
 * Exercise 1.3
 *
 * Write line number 4 of `ircLog.txt` to a new file synchronously that you
 * create called `highlights.txt`. Replace `highlights.txt` if it already
 * exists.
 * Answer with characters 7 through 10 from `highlights.txt`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


//fs.writeFileSync(file, data[, options])
fs.writeFileSync('highlights.txt', lines, 'utf8');

var high = fs.readFileSync("highlights.txt", "utf8");

ANSWER = high[6] + high[7] + high[8];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . querystring
 *
 * This section is about the built-in module querystring and how to parse
 * query strings.
 *
 */
/**
 * Exercise 2.1
 *
 * Start by requiring the querystring module `querystring` and assign the
 * module to a variable called `querystring`.
 *
 * Use the new `querystring` variable and to parse to parse a query string
 * 'first_name=Pete&last_name=Conrad&mission=Apollo12'. Answer with the the
 * value of mission.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

import querystring from 'querystring';


var part = querystring.parse('first_name=Pete&last_name=Conrad&mission=Apollo12');

var miss = part.mission;

ANSWER = miss;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Use the parsed query string from above to concatenate the astronaut's
 * fullname with the string ' was on the ' and the mission that the astronaut
 * was on.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

ANSWER = part.first_name + " " + part.last_name + " was on the " + miss;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3
 *
 * Create a javascript object with the following attributes and values:
 *
 * ```json
 * url = https://dbwebb.se/
 * id = 17
 * payload = aHR0cHM6Ly9kYndlYmIuc2Uv
 * type = json
 *
 * ```
 *
 * Encode the javascript object as a querystring.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let json = { url: "https://dbwebb.se/", id: "17", payload: "aHR0cHM6Ly9kYndlYmIuc2Uv", type: "json" };


ANSWER = querystring.stringify(json);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 3 . crypto
 *
 * This section is about the built-in module crypto and how to encrypt and
 * decrypt data with nodejs.
 *
 */
/**
 * Exercise 3.1
 *
 * Start by requiring the crypto module `crypto` and assign the module to a
 * variable called `crypto`.
 *
 * Use the new `crypto` variable to create a hash of 'So close, no matter how
 * far' using the `sha256` algorithm.
 *
 * Answer with a digest of the hash in `hex` format.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */
import crypto from 'crypto';

const secret = 'So close, no matter how far';
let hash = crypto.createHash('sha256')
    .update(secret)
    .digest('hex');
console.log(hash);



ANSWER = hash;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, true);

/**
 * Exercise 3.2
 *
 * Create an array called `.update('I love cupcakes')` holding the strings 'So close, no
 * matter how far', 'Couldnt be much more from the heart', 'Forever trusting
 * who we are', 'And nothing else matters'.
 *
 * Use filter to create an array only containing elements that has the string
 * 'nothing else matters' in them.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

let metallica = ['So close, no matter how far', 'Couldnt be much more from the heart', 'Forever trusting who we are', 'And nothing else matters'];

function filterItems(query) {
    return metallica.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}
var nothing = filterItems('nothing else matters');

ANSWER = nothing;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Use the array from above only containing elements with 'nothing else
 * matters'.
 *
 * For the elements in the array create a hex digest of a hash created with
 * with the `sha256` algorithm of each element.
 *
 * Answer with the array of hashes.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

//var nothing = filterItems('nothing else matters');

var hmacArrays = [];

for (const elem of nothing) {
    let hmacs = crypto.createHash("sha256").update(elem).digest("hex");
    hmacArrays.push(hmacs);
}

ANSWER = hmacArrays;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/**
 * Exercise 3.4
 *
 * Using `cryptoStrings` create a hash of the elements containing both an 'i',
 * an 'e' and a 'm', check both capital and non-capital letters.
 *
 * For the remaining elements create a hex digest of a hash created with with
 * the `sha256` algorithm of each remaining element.
 *
 * Answer with the array of hashes.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

const cryptoStrings = ['Couldnt be much more from the heart', 'Forever trusting who we are',
    'And nothing else matters', 'Never opened myself this way'
];


function containsWord(str) {
    str = str.toLowerCase();
    if (str.includes("iem")) {
        return true;
    }

    return false;
}

var cryptoIEM = ['And nothing else matters'];
var cryptoAnswer = [];

for (const elem of cryptoIEM) {
    let IEM = crypto.createHash("sha256").update(elem).digest("hex");
    cryptoAnswer.push(IEM);
}

ANSWER = cryptoAnswer;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, true);

/**
 * Exercise 3.5
 *
 * Using the same `cryptoStrings` array from above, create a hash of the
 * elements containing 'matters', check both capital and non-capital letters.
 *
 * For the remaining elements create a HMAC using the `sha256` algorithm and
 * the secret 'metallica' for each element. Create a `base64` digest of the
 * HMAC for each element.
 *
 * Answer with the array of HMACs.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var hmacArray = [];

for (const elem of cryptoStrings) {
    if (containsWord(elem)) {
        let hmac = crypto.createHmac("sha256", "metallica").update(elem).digest("base64");
        hmacArray.push(hmac);
    }
}

ANSWER = hmacArray;


// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.5", ANSWER, false);


process.exit(dbwebb.exitWithSummary());
