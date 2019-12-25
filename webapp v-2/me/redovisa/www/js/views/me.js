/*
 * About me
 */
"use strict";

var m = require("mithril");


/* Skapar en “virtual DOM node” (vnode).
 * En vnod = ett JavaScript-objekt som representerar ett DOM-element.
 * elementet skapas när den används i en render eller mount-funktion.
 */
module.exports = {
    view: function() {
        return [
        m("div", [
        m("h1", "Elin Hagman"),
        m(".elin"),
        m("p", "I'm a student at GU.")
                    ])
        ];
    }
};

