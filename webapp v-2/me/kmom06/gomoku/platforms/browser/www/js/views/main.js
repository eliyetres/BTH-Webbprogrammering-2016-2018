/* Main for Gomoku App
 * js/views/main.js
 *
 * This is the main page from which the game launches
 */
"use strict";
var m = require("mithril");
module.exports = {
    view: function () {
        return [
            m("div.flex-container", [
                m("div.content", [
                    m("h2", "Fem i rad"),
                    m("h1.title", "Gomoku"),
                    m("img", {
                        src: "img/t5.png",
                        width: '220px',
                        height: '200px',
                        padding: '20px',
                    }),
                    m("br"),
                    m("button.button", {
                            // Create a link on clicking
                            onclick: function () {

                                console.log("Starting new game");
                            },
                            href: "/gameboard/",
                            oncreate: m.route.link,

                        },
                        "Go!")])])];
    }
};
