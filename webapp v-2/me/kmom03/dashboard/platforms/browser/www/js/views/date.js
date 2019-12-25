/* date
 * js/date.js */
"use strict";

var m = require("mithril");

var Date = require("../models/date.js");

module.exports = {
    oninit: function () {
        //Year.load(vnode.attrs.user);
        Date.load();
    },
    view: function () {
        return [
            m("div.widget", [
            m("h1", Date.year + ", " + Date.number),
            m("p", Date.text),
                  ])
    ];
    }
};
