/**
 * Front for GomokuServer
 */
"use strict";

// The main class for the Gomoku game
import GomokuBoard from "./GomokuBoard.js";
var gameBoard = new GomokuBoard();



// A better router to create a handler for all routes
import Router from "./router";
//import Router from "../router/router";
var router = new Router();




// Import the http server as base
var http = require("http");
var url = require("url");



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
 * Display a helptext about the API.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/", (req, res) => {

    res.writeHead(200, "Content-Type: text/plain");
    res.write("Welcome the GomokuBoard server. This is the API of what can be done.\n\n" +
        " /             Display this helptext.\n" +
        " /start/:size  Start a new game with a board of :size.\n" +
        " /view         View details on the game.\n" +
        " /view/ascii   View the gameboard and whos next in turn.\n" +
        " /place/:x/:y  Place a marker at choosen place.\n" +
        " /place/random Place a random marker for the player in turn.\n"
    );
    res.end();
});



/**
 * Initialize the game
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/start/:size", (req, res) => {

    // get the value of the parameter :size
    var size = req.params.size;

    // Init the Gomoku board
    var message = "The board is initialized.";
    try {
        gameBoard.start(size);
    } catch (e) {
        message = e.message;
    }

    // Send the response
    sendJSONResponse(res, {
        "message": message,
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker()
    });
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view", (req, res) => {

    sendJSONResponse(res, {
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker(),
        "boardAscii": gameBoard.asAscii()
    });
});



/**
 * View the gameboard as ascii.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/ascii", (req, res) => {

    res.writeHead(200, "Content-Type: text/plain");
    res.write(gameBoard.asAscii() +
        "\nPlayer in turn is '" +
        gameBoard.playerInTurn() +
        "' playing the marker " +
        gameBoard.playerInTurnMarker() +
        ".\n");
    res.end();
});


/**
 * Returns a random integer between y (included) and x (included)
 * Using Math.round() will give you a non-uniform distribution!
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandoytInclusive(y, x) {
    return Math.floor(Math.random() * (x - y + 1)) + y;
}


/**
 * Place a random marker on the board.
 * @param Object req The request
 * @param Object res The response
 */
router.get("/place/random", (req, res) => {
    function placeRandom() {
        var x, y;

        var size = Number.parseInt(gameBoard.getSize());

        x = Number.parseInt(getRandoytInclusive(0, size));
        y = Number.parseInt(getRandoytInclusive(0, size));
        //console.log("placement x: " + x);
        //console.log("placement y: " + y);
        //while (!gameBoard.isFull()) {
        //if (x > size || y > size) {
        //    console.log("Placement is out of range. Table size is " + size + "x" + size + ".");
        //    return;
        //}

        //}

        // Place the marker
        console.log("Trying to place " + x + ", " + y);
        if (gameBoard.isPositionTaken(x, y)) {
            console.log("Position is aleady taken.");
            return;
        }

        var message = "Ok.";
        try {
            gameBoard.place(x, y);
        } catch (e) {
            message = e.message;
        }
        //console.log("message: " + message);


        sendJSONResponse(res, {
            "message": message,
            "boardSize": gameBoard.getSize(),
            "nextPlayer": gameBoard.playerInTurn(),
            "nextPlayerMarker": gameBoard.playerInTurnMarker(),
            "boardIsFull": gameBoard.isFull()
        });
    }
    placeRandom();
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/place/:x/:y", (req, res) => {

    // get the value of the parameter :x and :y
    var x = Number.parseInt(req.params.x);
    var y = Number.parseInt(req.params.y);

    // Place the marker
    var message = "Ok.";
    try {
        gameBoard.place(x, y);
    } catch (e) {
        message = e.message;
    }

    sendJSONResponse(res, {
        "action": "Trying to place " + x + ", " + y,
        "message": message,
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker(),
        "boardIsFull": gameBoard.isFull()
    });
});



/**
 * Create and export the server
 */
var server = http.createServer((req, res) => {
    var ipAddress,
        route;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    route = url.parse(req.url).pathname;
    console.log("Incoming route " + route + " from ip " + ipAddress);

    // Let the router take care of all requests
    router.route(req, res);

});

/** 2. Uppdatera skriptet så att det läser av environment-variabeln LINUX_PORT och, om variabeln är definierad,
 * använder dess innehåll som portnummer att koppla upp sig mot. Standardvärde skall vara 1337.
 */
console.log("Attemting connect to LINUX_PORT:");
if ('LINUX_PORT' in process.env) {
    server.listen(process.env.LINUX_PORT);
    console.log("Server listen on " + process.env.LINUX_PORT + " with process id " + process.pid + ".\n");
} else {
    console.log("LINUX_PORT not found.");
    server.listen(1337);
    console.log("Server listen on default port 1337 with process id " + process.pid + ".\n");
}

export default server;
