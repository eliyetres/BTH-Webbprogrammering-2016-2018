#!/usr/bin/env node

/**
 * Main program for the a game of Gomoku.
 */

"use strict";

import GomokuBoard from "./GomokuBoard.js";

const VERSION = "1.0.0";

var path = require('path');
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);

/**
 * 3. Du skall kunna starta programmet och ange storleken på spelet.
 * ./index-game1.js    Kör igång ett spel med 20x20 rutor. (default)
 */
var size = 20,
    prompt = "Gomoku$ ",
    gameBoard;

gameBoard = new GomokuBoard();



var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var input_y = 1;
var input_x = 10;

/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options] <x> <y>

Options:
 -h               Display help text.
 -v               Display the version.
 x y              Select placement for marker.
 15               Start a new game with size 15x15.`);
}

/**
 * Display version.
 */
function version() {
    console.log(VERSION);
}

/**
 * Returns a random integer between y (included) and x (included)
 * Using Math.round() will give you a non-uniform distribution!
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
//function getRandoytInclusive(y, x) {
//    return Math.floor(Math.random() * (x - y + 1)) + y;
//}


/**
 * Place a marker on the board.
 */
function placeMarker(x, y) {
    //var x, y,
    var player = gameBoard.playerInTurn();
    console.log(player);

    //while (!gameBoard.isFull()) {
    if (x > size || y > size) {
        console.log("Placement is out of range. Table size is " + size + "x" + size + ".");
        return;
    }
    //x = getRandoytInclusive(0, size);
    //y = getRandoytInclusive(0, size);
    if (gameBoard.isPositionTaken(x, y)) {
        console.log("Position is aleady taken.");
        return;
    }
    //}

    gameBoard.place(x, y);
    console.log(">>> " + player + " places " + x + " " + y + "\n");
    console.log(gameBoard.asAscii());
}


/**
 * 4. Spelet skall innehålla en mainloop där du kan placera ut nästa bricka i spelet.
 * Du skall ange två integer på raden, först värdet på x, följt av värdet på y.
 * Din mainloop tar dessa värden och placerar en bricka (X eller O beroende på vems tur det är) på rätt position.
 * Därefter skrivs spelplanen ut.
 */
rl.on("line", function(line) {
    switch (line.trim()) {

        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;


        default:
            var placement,
                x, y;
            // Take the 2 inputs, split into x and y and put into function placeMarker();
            placement = line.split(" ");
            x = parseInt(placement[0]);
            y = parseInt(placement[1]);
            placeMarker(x, y);
    }
    rl.prompt();
});



rl.on("close", function() {
    rl.write("Bye!");
    process.exit(0);
});

/**
 * Walkthrough all arguments checking for options.
 */
var remaining = [];
args.forEach((arg) => {
    switch (arg) {

        //Visar hjälptext om programmet och avslutar med exit code 0.
        case '-h':
            usage();
            process.exit(0);
            break;

            // Visar versionen av programmet och avslutar med exit code 0.
        case '-v':
            version();
            process.exit(0);
            break;

            //Kör igång ett spel med 15x15 rutor.
        case '15':
            size = 15;
            remaining.push(arg);
            break;
            // Push remaining arguments into agument string
        default:
            remaining.push(arg);
            break;
    }
});



// Check if there is remaining arguments that should be used for placing x and y
if (remaining.length >= 2) {
    input_y = parseInt(remaining[0], 10);
    input_x = parseInt(remaining[1], 10);
} else if (remaining.length === 1) {
    input_y = parseInt(remaining[0], 10);
}

// Here starts the actual main program
console.log(">>> Start the game with board size of " + size);
gameBoard.start(size);


rl.setPrompt(prompt);
rl.prompt();
