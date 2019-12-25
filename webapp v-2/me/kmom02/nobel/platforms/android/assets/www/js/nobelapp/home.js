/*
 * Nobel App Home
 * home.js
 */
"use strict";

var m = require("mithril");
var Nobel = require("../models/nobel");

module.exports = {
    oninit: function () {
        Nobel.load();
    },
    view: function () {

        // Year list from 2017-2007
        var yearlist = [];
        var i;
        for (i = 2005; i < 2016; i++) {
            yearlist.push(i + 1);
        }
        console.log(yearlist);
        return [
            m("h2", "Laurates 2006-2016"),
            // Varje årtal skall vara en länk till en sida som visar det årets nobelpristagare.            
            m("ul", yearlist.map(function (year) {
                return m("li", [m("a", {
                    href: "/winners/" + year,
                    oncreate: m.route.link
                }, year)]);
            }))

        ];
    }
};
