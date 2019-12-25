/* Main för Random Year
 * js/year.js */
"use strict";

var m = require("mithril");

var Year = require("../models/year.js");

module.exports = {
    oninit: function () {
        //Year.load(vnode.attrs.user);
        Year.load();
    },
    view: function () {
        return [
            m("div.widget", [
            m("h1", Year.year + ", " + Year.date),
            m("p", Year.text),
                  ])
    ];
    }
};
