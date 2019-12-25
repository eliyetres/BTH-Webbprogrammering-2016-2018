/* Om vi vill ha navigering i alla vyer kan vi lägga till länkar längst upp,
 * men som vanligt vill vi hålla vår kod DRY. I mithril kan vi använda oss av
 * layouts för att återanvända kod i flera vyer. Vi skapar först ett nytt vy
 * js/views/layout.js, som blir vår mall för andra vyer.
 */
"use strict";
var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main", [
            m("navbar", [
                m("div.container", [
                    m("h1.brand", "Me App"),
                    m("ul.nav", [
                        m("li", [m("a", {href: "/", oncreate: m.route.link}, "Me")]),
                        m("li", [m("a", {href: "/report", oncreate: m.route.link}, "Report")]),
                        m("li", [m("a", {href: "/about", oncreate: m.route.link}, "About")])
                    ])
                ])
            ]),
            m("section.container", vnode.children)
        ]);
    }
};