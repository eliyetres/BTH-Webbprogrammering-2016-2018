/* Winner for Gomoku App
 * js/views/winner.js
 * This page displays the winner. Yay!
 */
"use strict";
var m = require("mithril");
var Gomoku = require("../models/gomoku");

module.exports = {

    view: function () {
        console.log(Gomoku.winner);
        return [
            m("div.flex-container", [
                m("div.content", [
                    m("h1", "Winner"),
                    m("div.flex-container", [
                    m("div.winnerbox", [
                    m("img", {
                                src: "img/winner.png",
                                width: '220px',
                                height: '220px',
                            }),
                    m("h2.winnername", Gomoku.winner),
                    ]),
                    m("br"),

                ])
                ])])
            ];
    }
};
