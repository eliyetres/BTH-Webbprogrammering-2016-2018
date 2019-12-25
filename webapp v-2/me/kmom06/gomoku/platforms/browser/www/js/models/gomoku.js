/* Modul för Gomoku
 * js/models/gomoku.js
 */
"use strict";
var m = require("mithril");
//var current_platform = device.platform;
var gameURL = "http://localhost:1337/";
//Main object
var Gomoku = {};
Gomoku = {
    currentPlayer: "",
    currentPlayerMarker: "",
    winner: "elin",
    winnermsg: "",
    infomessage: "",
    size: 10,
    // Start a new game
    start: function () {
        var isAndroid = (device.platform === "Android") ? true : false;
        if (isAndroid) {
            console.log("Device : Android");
            gameURL = "http://10.0.2.2:1337";

        } else {
            console.log("Device : Browser");
            gameURL = "http://localhost:1337/";

        }
        m.request(gameURL + "start/10")
            .then(function (result) {
                console.log("Starting new game");
                console.log(result);
                Gomoku.currentPlayer = result.nextPlayer;
                Gomoku.currentPlayerMarker = result.nextPlayerMarker;
                console.log(result.message);
            });
    },
    // Place a new marker
    place: function (x, y) {
        m.request(gameURL + "place/" + x + "/" + y)
            .then(function (result) {
                console.log(result);
                console.log(result.action + " - " + result.message);
                //Check if the board is full
                Gomoku.winner = result.winner;
                if (result.boardIsFull !== false) {
                    Gomoku.winner = "Draw!";
                    m.route.set("/winner");
                }
                // Check if someone won
                if (result.winner == "Player 1") {
                    m.route.set("/winner");
                }
                if (result.winner == "Player 2") {
                    m.route.set("/winner");
                }
            });
    },
    // Load the game board for viewing
    loadBoard: function () {
        var boardList = [];
        m.request(gameURL + "view/json")
            .then(function (result) {
                console.log(result);
                console.log("Fetching game board for viewing");
                Gomoku.boardList = result.board;
                Gomoku.currentPlayer = result.nextPlayer;
                Gomoku.currentPlayerMarker = result.nextPlayerMarker;
            });
        return boardList;
    },
};

module.exports = Gomoku;
