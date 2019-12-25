/*
 * Nobel App functions
 * models/nobel.js
 */
"use strict";

var m = require("mithril");
var Nobel = require("../models/nobel");

module.exports = {
    oninit: function (vnode) {
        Nobel.load(vnode.attrs.year);
    },
    view: function () {
        return [
            m("h2", Nobel.year),
            m(".prizes", Nobel.prizes.map(function (prize) {
                return m("section.prize", [
                    m(".bold", prize.category),
                    m(".quote", prize.laureates[0].motivation),
                    m("ol", prize.laureates.map(function (person) {
                        return m("li", person.firstname + " " + person.surname);
                    }))

                ]);
            }))
        ];
    }
};
