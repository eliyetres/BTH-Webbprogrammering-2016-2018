#!/usr/bin/env babel-node

/**
 * KRAV 3 KLIENT i Node.js för att testköra mot servern
 *
 */
"use strict";

const VERSION = "1.0.0";

// For CLI usage
var path = require("path");
var scriptName = path.basename(process.argv[1]);
var args = process.argv.slice(2);
var arg;



// Get the server with defaults
import client from "./client.js";

var client = new client();
/**
 * 3. Klienten skall läsa av environment-variabeln LINUX_SERVER och, om variabeln är definierad,
 * använda dess innehåll som adress till servern. Standardvärde skall vara localhost.
 *
 */
var server;
if ("LINUX_SERVER" in process.env) {
    server = `http://${process.env.LINUX_SERVER}:1337`; //Oklart om detta fungerar
} else {
    server = "http://localhost:1337";
}


// Make it using prompt
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Display helptext about usage of this script.
 */
function usage() {
    console.log(`Usage: ${scriptName} [options]

Options:
 -h    Display help text.
 -v    Display the version.
 --server <server> --port <number>  Set the server port to use.`);
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

        case "--server":
            server = args.shift();
            if (server === undefined) {
                badUsage("--server must be followed by a url.");
                process.exit(1);
            }
            break;

        default:
            badUsage("Unknown argument.");
            process.exit(1);
            break;
    }
}



/**
 * Display a menu.
 */
function menu() {
    console.log(`Commands available:

 exit            Leave this program.
 menu            Print this menu.
 url             Get url to view the server in browser.
 list            List all rooms.
 view <id>       View the room with the selected id.
 house <house>   View the names of all rooms in this building (house).
 search <string> View the details of all matching rooms (one per row).`);
}



/**
 * Callbacks for asking question.
 */
rl.on("line", function(line) {
    // Split incoming line with arguments into an array
    var args = line.trim().split(" ");
    args = args.filter(value => {
        return value !== "";
    });

    switch (args[0]) {
        case "exit":
            console.log("Bye!");
            process.exit(0);
            break;

        case "menu":
            menu();
            rl.prompt();
            break;

        case "url":
        // LÄGG TILL RÄTT URL HÄR
            console.log("Click this url to view the server in a browser.\n" + server + "/view/ascii");
            rl.prompt();
            break;

        case "list":
            console.log("Add something!");
            rl.prompt();
            break;

        case "view":
            console.log("Add something!");
            rl.prompt();
            break;

        case "house":
            var id = args[1];
            client.

            console.log("House id!");
            rl.prompt();
            break;

        case "search":
            console.log("Add something!");
            rl.prompt();
            break;

        default:
            console.log("Enter 'menu' to get an overview of what you can do here.");
            rl.prompt();
    }
});


rl.on("close", function() {
    console.log("Bye!");
    process.exit(0);
});


// Main
server.setServer(server);
console.log("Use -h to get a list of options to start this program.");
console.log("Ready to talk to server url '" + server + "'.");
console.log("Use 'menu' to get a list of commands.");
rl.setPrompt("Server$ ");
rl.prompt();
