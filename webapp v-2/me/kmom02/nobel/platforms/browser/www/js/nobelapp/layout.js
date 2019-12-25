/* 
 * Layout for Nobel App
 */
"use strict";
var m = require("mithril");

module.exports = {
    view: function (vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("h1", "Nobel laureates"),
                    m(".nobelicon"),
                    m("ul.nav", [
                        m("li", [m("a", {
                            href: "/",
                            oncreate: m.route.link
                        }, "Home")])

                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};
