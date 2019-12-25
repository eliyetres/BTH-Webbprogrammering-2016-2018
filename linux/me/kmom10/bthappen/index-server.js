#!/usr/bin/env babel-node

/**
 * Main program to run the Gomoku server
 *
 */
"use strict";

const VERSION = "1.0.0";

// For CLI usage
var path = require("path");
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);
var arg;



// Get the server
import server from "./GomokuServer.js";


/** 2. Uppdatera skriptet så att det läser av environment-variabeln LINUX_PORT och,
 *  om variabeln är definierad, använder dess innehåll som portnummer att koppla upp sig mot.
 *  Standardvärde skall vara 1337.
 */
var port;

console.log("Attemting connect to LINUX_PORT:");
if ('LINUX_PORT' in process.env) {
    port = process.env.LINUX_PORT;
    console.log("Port " + process.env.LINUX_PORT + ".");
} else {
    console.log("LINUX_PORT not found.");
    port = 1337;
    console.log("Default port 1337");
}



/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options]

Options:
 -h               Display help text.
 -v               Display the version.
 --port <number>  Run server on this port.`);
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



/**
 * Display version.
 */
function version() {
    console.log(VERSION);
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
