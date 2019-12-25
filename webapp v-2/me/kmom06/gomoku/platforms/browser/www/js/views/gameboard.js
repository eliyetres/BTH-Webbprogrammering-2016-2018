/* Gameboard for Gomoku App
 * js/views/gameboard.js
 */
"use strict";
var m = require("mithril");
var Gomoku = require("../models/gomoku");
/*function restart() {
    if (Gomoku.winner || Gomoku.error !== null || Gomoku.boardIsFull || window.confirm("Är du säker på att du vill börja om? All data kommer gå förlorad.")) {
        //GomokuBoard.clear();
        m.route.set("/");
    }
}*/
// Place the marker by clicking a cell in the table
function place(id) {
    var x = id % 10;
    var y = (id - x) / 10;
    var cell = document.getElementById(id);
    if (cell.classList.contains("o") || cell.classList.contains("x")) {
        console.log("Place already taken!");
        Gomoku.infomessage = "Place already taken!";
        return;
    }
    if (Gomoku.currentPlayer == "Player 1") {
        // X marker
        cell.className += "x";
    } else {
        // O marker
        cell.className += "o";
    }
    // Place marker and reload board
    Gomoku.place(x, y);
    Gomoku.loadBoard();
}
//Draw the JSON array as a 10x10 table
function drawTableBoard() {
    var rows = [];
    for (var i = 0; i < 10; i++) {
        var cols = [];
        for (var j = 0; j < 10; j++) {
            cols.push(m("td", {
                "id": i * 10 + j,
                onclick: function () {
                    console.log("id " + this.id);
                    // Placing the marker in a cell
                    place(this.id);
                },

            }, m("div.cell", m("span", " "))));
        }
        rows.push(m("tr", cols));
    }
    return rows;
}
module.exports = {
    oncreate: function () {
        Gomoku.start();
        Gomoku.loadBoard();
    },
    view: function () {
        return m("div.flex-box", [
                    m("div.content", [
                        m("h2", "Gameboard!"),
                        m("p", Gomoku.currentPlayer + " plays " + Gomoku.currentPlayerMarker + " marker"),
                        //Draw the board as a table
                        m("div.boardbox", [
                            m("table", {
                        id: "board"
                    }, drawTableBoard()),
                        ]),
                        m("div.messagebox", Gomoku.infomessage),
/*                        m("button.button", {
                                onclick: function () {
                                    if (window.confirm("Är du säker på att du vill starta om spelet?")) {
                                        m.route("/main/");
                                    }
                                }
                            },
                            "Restart")*/
                    ]), ]);
    }
};
