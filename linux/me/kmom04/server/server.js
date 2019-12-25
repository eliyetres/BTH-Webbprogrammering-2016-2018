//SERVER MODULE
//3. Skriv en server och spara den i filen server.js.

"use strict";

// Require the module
var http = require("http");
var url = require("url"); // To parse the route from the url

var qs = require('querystring'); // Query
var util = require('util');
var child = require('child_process');


//CREATE SERVER
var server = http.createServer((req, res) => {

    var ipAddress,
        urlParts,
        route,
        query,
        queryString;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    //Check what route is requested
    urlParts = url.parse(req.url, true);
    route = url.parse(req.url).pathname;


    //Check for arguments passed in query string
    query = urlParts.query;
    queryString = qs.stringify(query);
    console.log("Incoming route " + route + " from ip " + ipAddress + " with querystring " + queryString);
    // Inspect the details of the object created for the query string
    console.log(util.inspect(query));


    //Query commands

    // Loop through all query variables
    Object.keys(query).forEach(key => {
        console.log("all input: ");
        console.log(`'${key}' : '${query[key]}'`);
    });


    //Execute shell command (Nodejs to BASH)

    //function bashCommand(command) {
    //    // Execute a child process, in this case "uptime".
    //    child.exec(command, (error, stdout, stderr) => {
    //        if (error || stderr) {
    //            // Do something with the error(s)
    //            console.log("Something went wrong...", error, stderr);
    //        }
    //
    //        // Write the result of standard output as plain text.
    //        res.writeHead(200, { "Content-Type": "text/plain" });
    //        res.end(stdout);
    //    });
    //}



    //Switch (route) on the path.

    switch (route) {

        //4. Din server skall svara på routen / med strängen “Hello World!” enligt content type text/plain.
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello world!\n");
            break;

            //5. Skapa en fil index.html med innehållet “This is the file index.html.”.
            //på routen /index.html skall filens innehåll levereras enligt content type text/html.
        case "/index.html":
            var fs = require("fs");
            var filename = "index.html";
            fs.readFile(filename, "utf8", (err, data) => {
                // If readFile got an error we throw it
                if (err) {
                    // Sends to the client that the server failed
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal server error");
                    console.log("Internal server error");
                    throw err;
                }
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end(data);
            });
            break;

            //6. På routen /status skall servern ge ett JSON-objekt, content type application/json,
            //som innehåller utskriften av kommandot uname -a enligt strukturen:
            //{
            //    "uname": "Utskiften av kommandot uname -a"
            //}
        case "/status":

            child.exec("uname -a", (error, stdout, stderr) => {
                if (error || stderr) {
                    // Do something with the error(s)
                    console.log("Something went wrong...", error, stderr);
                }

                var statusPrint = {
                    "uname": stdout
                };

                res.writeHead(200, { 'Content-Type': 'application/json' });
                var jsonObjStatus = JSON.stringify(statusPrint);
                res.end(jsonObjStatus);
            });
            break;

            //7. På routen /sum skall servern summera alla argument som kommer i querystring efter
            //enligt /sum?2&3 skall ge svaret 5 i en JSON struktur { "sum": 5 } enligt application/json.
            //Routern skall klara oändligt antal parametrar i querystringen.
        case "/sum":
            // Make an array of the object
            //console.log(Object.keys(query));
            function sum(obj) {
                return Object.keys(obj)
                    .reduce(function(sum, key) {
                        return sum + parseFloat(obj[key]);
                    }, 0);
            }

            var total = sum(Object.keys(query));
            var sumPrint = {
                "sum": total
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            var jsonObjSum = JSON.stringify(sumPrint);
            res.end(jsonObjSum);
            break;

            //8. På routen /filter?value1&value2&value3 skall servern filtrera bort alla värden som är större än 42.
            //De kvarvarande värdena skall samlas i en array och skickas tillbaka i svaret i ett JSON-objekt.
            //Till exempel så ger routen /filter?1&2&3&42&99 svaret:
            //{
            //"filter": [1, 2, 3, 42]
            //}
        case "/filter":
            // Filter values larger than 42.
            var filtered = Object.keys(query).filter(value => value <= 42);
            console.log(filtered);

            var filterPrint = {
                "filter": filtered
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            var jsonObjFilter = JSON.stringify(filterPrint);
            res.end(jsonObjFilter);
            break;

            //9. På alla andra routes skall svaras med statuskod 404 och “The resource does not exists.”
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("The resource does not exists.\n");
            break;
    }

});

// Export the server as a module.
export default server;
