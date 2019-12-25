/* Layout
 * Creates links to pages specified in ../index.js
 */
"use strict";

var m = require("mithril");

module.exports = {
    view: function (vnode) {
        return m("main", [
            m("nav", [
                m("div.container", [
                    // Header
                    m("h1.brand", "Winecellar"),
                    // Add new wine
                    m("li", [m("a", {
                        href: "/new",
                        oncreate: m.route.link
                    }, "Add wine")]),
                    // Startpage, list wines
                    m("li", [m("a", {
                        href: "/",
                        oncreate: m.route.link
                    }, "My wines")])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
