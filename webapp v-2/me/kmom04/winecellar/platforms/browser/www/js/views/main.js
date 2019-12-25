/*
 * Wiew wines
 */
"use strict";
var m = require("mithril");
var Winecellar = require("../models/winecellar");

module.exports = {
    oninit: Winecellar.load,
    view: function () {
        return m("div", Winecellar.wineList.map(function (wine) {
            return m("a.wineholder", [
                m("h2", wine.name),
                m("p", "Grape: " + wine.grape),
                m("p", "Vintage: " + wine.vintage),
                m("p", "Stock: " + wine.stock),
                m("button.button", {
                    href: "/edit/" + wine.id,
                    oncreate: m.route.link
                }, "Edit"),
                m("button.button", {
                    onclick: function () {
                        if (window.confirm("Are you sure?")) {
                            Winecellar.delete(wine.id);
                        }
                    }
                }, "Delete")

            ]);
        }));
    }
};
