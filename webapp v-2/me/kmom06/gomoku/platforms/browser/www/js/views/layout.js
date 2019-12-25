/* Layout for Gomoku App
 * js/views/layout.js
 */
"use strict";
var m = require("mithril");

module.exports = {
    view: function (vnode) {
        return m("main", [
            m("nav", [
                m("div.container", [
                    // Header
                    m("li", [m("h2.brand", {
                        href: "/",
                        oncreate: m.route.link
                    }, "Play Gomoku!")]),
                     // Startpage
      /*                 m("li", [m("a", {
                        href: "/",
                        oncreate: m.route.link
                    }, "Start page")]),
                     m("li", [m("a", {
                        href: "/winner",
                        oncreate: m.route.link
                    }, "winner")]),*/
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
