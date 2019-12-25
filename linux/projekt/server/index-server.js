#!/usr/bin/env babel-node

/**
 * KRAV 2 INDEX TILL SERVER
 * Main program to run the server
 */
"use strict";



const VERSION = "1.0.0";

// For CLI usage
var path = require("path");
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);
var arg;


// Get the server
import server from "./server.js";


//var port;
var port = 1337;


var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);

function search_string (search){

const result = [];

     const alternativ =        ["Salsnr",
            "Salsnamn",
            "Lat",
            "Long",
            "Ort",
            "Hus",
            "Våning",
            "Typ",
            "Storlek"];


	for (var u = alternativ.length - 1; u >= 0; u--) {
		
	
function ss (alt) {
	for (var i = json_data.salar.length - 1; i >= 0; i--) {
	//console.log(json_data.salar[i][alternativ[u]]);
	if (json_data.salar[i][alt[u]].includes(search) == ){
result.push(json_data.salar[i]);
}}


}
ss(alternativ);
//console.log(json_data.salar[i][alternativ[u]]);


console.log(result);
}}
search_string("H20");
});






 //console.log("2: " + json_data);
//console.log(json_data.Salsnr);


/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options]

Options:
 -h               Display help text.
 -v               Display the version.
 --port <number>  Run server on this port.

 Routes:
  /                        Display a list of supported routes.
  /room/list               Display all rooms.
  /room/view/id/:number    Display details about room by room number.
  /room/view/house/:house  Display all rooms in a house.
  /room/search/:search     Display rooms matching search.`);
}

/**
 * Display version.
 */
function version() {
    console.log(VERSION);
}

/**
 * Display helptext about bad usage.
 *
 * @param String message to display.
 */
function badUsage(message) {
    console.log(`${message}
Use -h to get an overview of the command.`);
}



// Walkthrough all arguments checking for options.
while ((arg = args.shift()) !== undefined) {
    switch (arg) {
        case "-h":
            usage();
            process.exit(0);
            break;

        case "-v":
            version();
            process.exit(0);
            break;

        case "--port":
            port = Number.parseInt(args.shift());
            if (Number.isNaN(port)) {
                badUsage("--port must be followed by a port number.");
                process.exit(1);
            }
            break;

        default:
            //remainingArgs.push(arg);
            badUsage("Unknown argument.");
            process.exit(1);
            break;
    }
}


// Main
server.listen(port);
console.log("The server is now listening on: " + port);
