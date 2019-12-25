/* View all wines
 * js/views/list.js
 */
"use strict";

var m = require("mithril");
var Winecellar = require("../models/winecellar");

var Bottles = {
    view: function (vnode) {
        return m("div.widget", [
            m("div", m("a", {
                class: "list",
                href: "/view/" + vnode.attrs.id,
                oncreate: m.route.link
            }, m("h2", (vnode.attrs.name + " - " + vnode.attrs.vintage)))),
            m("div", m("button", {
                class: "button",
                onclick: function () {
                    Winecellar.remove(vnode);
                }
            }, "Drink wine"))
        ]);
    }
};

module.exports = {
    oninit: function () {
        Winecellar.get();
    },
    view: function () {
        return [
                    m("h1", "Winecellar"),
                    m("div.flex-container", Winecellar.wineList.map(function (wine) {
                return m(Bottles, wine);
            })),
                    m("a", {
                class: "button",
                href: "/new",
                oncreate: m.route.link
            }, "Add wine")
                ];
    }
};
