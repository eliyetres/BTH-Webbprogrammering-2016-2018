/**
 * KRAV 2 SERVER för att visa och söka bland salar
 */

"use strict";

// A better router to create a handler for all routes
import Router from "./router";
//import Router from "../router/router";
var router = new Router();


// Require the module
var http = require("http");
var url = require("url"); // To parse the route from the url

var qs = require('querystring'); // Query
var util = require('util');
//var child = require('child_process');

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

/**
 * Uppgift: Servern skall skriva ut en loggtext som visar vilken route den tar emot,
 * från vilken klient (hostnamnet/ip-adressen).
 */
    //Check for arguments passed in query string
    query = urlParts.query;
    queryString = qs.stringify(query);
    console.log("Incoming route " + route + " from ip " + ipAddress + " with querystring " + queryString);
    // Inspect the details of the object created for the query string
    console.log(util.inspect(query));


    // TESTFUNKTION
    function testar() {
        console.log("Test.");
    }


    /**
     * Query commands
     */
    // Loop through all query variables
    Object.keys(query).forEach(key => {
        console.log("all input: ");
        console.log(`'${key}' : '${query[key]}'`);
    });

    /**
     * Wrapper function for sending a JSON response
     *
     * @param  Object        res     The response
     * @param  Object/String content What should be written to the response
     * @param  Integer       code    HTTP status code
     */
    function sendJSONResponse(res, content, code = 200) {
        res.writeHead(code, "Content-Type: application/json");
        res.write(JSON.stringify(content, null, "    "));
        res.end();
    }



    /**
     * Display a helptext about the API. (Visa en lista av de routes som stöds.)
     *
     * @param Object req The request
     * @param Object res The response
     */
    router.get("/", (req, res) => {

        res.writeHead(200, "Content-Type: text/plain");
        res.write("Welcome the BTH server. This is the API of what can be done.\n\n" +
            " /                             Display this helptext.\n" +
            " /room/list                    Display all rooms.\n" +
            " /room/view/id/:number         Details about room by room number.\n" +
            " /room/view/house/:house       All rooms in a house.\n" +
            " /room/search/:search          Rooms matching search.\n"
        );
        res.end();
    });

    var message = "OK.";



    /**
     * Visa samtliga salar.
     */
    router.get("/room/list", (req, res) => {
        function room_list(){
        var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);
var result = [];
//bconsole.log(json_data.salar);
for (var i = json_data.salar.length - 1; i >= 0; i--) {
    if (json_data.salar[i].Salsnamn !== null) {
    
    result.push(json_data.salar[i].Salsnamn);}
}
console.log("Alla salar:\n---------\n" );
console.log( result);
});
}

        try {
            room_list();
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "message": message,
            });
    });
    /**
     * Visa detaljer om salen med valt salsnummer.
     */
    router.get("/room/view/id/:number", (req, res) => {
        function room_view_id (room_number){
        
var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);


var result = [];

for (var i = json_data.salar.length - 1; i >= 0; i--) {
if (json_data.salar[i].Salsnr === room_number){
    result.push(json_data.salar[i]);
}}

console.log( result);
}


});
        try {
            room_view_id(room_number);
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "message": message,
        });
    });

    /**
     * Visa samtliga salar som finns i ett visst hus.
     */
    router.get("/room/view/house/:house", (req, res) => {

        try {
            testar();
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "message": message,
        });
    });
    /**
     * Visa de salar som matchar söksträngen. Sökning skall ske på delsträng i samtliga fält.
     */
    router.get("/room/search/:search", (req, res) => {

        try {
            testar();
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "message": message,
        });
    });


    //Switch (route) on the path.

    switch (route) {

        //Visa en lista av de routes som stöds.
        case "/":

            break;

            //Visa samtliga salar.
        case "/room/list":

            break;

            //Visa detaljer om salen med valt salsnummer.
        case "/room/view/id/:number":


            break;

            //Visa samtliga salar som finns i ett visst hus.
        case "/room/view/house/:house":

            break;

            //Visa de salar som matchar söksträngen.
            //Sökning skall ske på delsträng i samtliga fält
        case "/room/search/:search":

            break;

            //På alla andra routes svaras med statuskod 404 och “The resource does not exists.”
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("The resource does not exists.\n");
            break;
    }

});

// Export the server as a module.
export default server;
