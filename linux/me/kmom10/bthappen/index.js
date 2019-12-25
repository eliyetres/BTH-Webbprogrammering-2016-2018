//Server index file
"use strict";

//3. Skriv en server och spara den i filen server.js.

import server from './server.js';

//console.log(" /index.html to read file index.html.");
//console.log(" /status to print uname -a JSON object.");
//console.log(" /sum to sum all arguments given.");
//console.log(" /filter?value1&value2&value3 to filter values larger than 42.");


/**1. Skriv ett main-program som startar din server, döp det till index.js.
 * Din server skall läsa av environment-variabeln LINUX_PORT och, om variabeln är definierad,
 * använda dess innehåll för att starta servern på just den porten. Standardport är annars 1337.
 */

console.log("Attemting connect to LINUX_PORT:");
if ('LINUX_PORT' in process.env) {
    server.listen(process.env.LINUX_PORT);
    console.log("Server listen on " + process.env.LINUX_PORT + " with process id " + process.pid + ".");
} else {
    console.log("LINUX_PORT not found.");
    server.listen(1337);
    console.log("Server listen on default port 1337 with process id " + process.pid + ".");
}
/**
 * 2. Din server skall skriva sitt pid till en fil som heter pid.
 * När man kör kommandot kill $( cat pid ) så skall din server stängas ned.
 */
const path = require('path');
const fs = require("fs");
// Write pid to file
var pidFile = path.join(__dirname, "pid");
fs.writeFile(pidFile, process.pid, function(err) {
    if (err) {
        return console.log(err);
    }

    console.log("Wrote process id to file 'pid'");
});
/**
 * Listen on SIGINT, SIGTERM
 */

if (process.platform === "win32") {
    var rl = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("SIGINT", function() {
        process.emit("SIGINT");
    });
}

process.on("SIGINT", function() {
    //graceful shutdown
    process.exit();
});
