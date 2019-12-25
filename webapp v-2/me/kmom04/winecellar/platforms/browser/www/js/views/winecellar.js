/* Winecellar
 * js/winecellar.js
 */
"use strict";
var m = require("mithril");

var Winecellar = require("../models/winecellar");

var currentwine = {
    name: "",
    grape: "",
    stock: "",
    vintage: "",
};

module.exports = {
    oninit: function () {
        Winecellar.wineList.forEach(function (bottle) {
            currentwine.name = bottle.name;
            currentwine.vintage = bottle.vintage;
            currentwine.grape = bottle.grape;
            currentwine.stock = bottle.stock;
        });
    },
    view: function (vnode) {
        return m("div.", [
            m("h1", currentwine.name),
            m("ul", [
                m("li", "Vintage: " + currentwine.vintage),
                m("li", "Grape: " + currentwine.grape),
                m("li", "Stock: " + currentwine.stock)
            ]),
            m("a.button", {
                href: "/edit?id=" + vnode.attrs.id,
                oncreate: m.route.link
            }, "Edit wine")

        ]);
    }
};
