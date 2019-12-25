/* Recipe main
 * cook.js
 */
"use strict";
var m = require("mithril");

var Recipe = require("../models/recipe");

var Cook = {
    view: function (vnode) {
        return m("div.widget", [
            m("h1", vnode.attrs.title),
            m("img", {
                src: vnode.attrs.img
            }),
            m("a", vnode.attrs.url)
        ]);
    }
};
module.exports = {
    oninit: function () {
        Recipe.load();
    },
    view: function () {
        return [
            // Recept 2
            m("div.flex-container", Recipe.allrecipes.map(function (recip) {
                return m(Cook, recip);
            }))
                    ];
    }
};
// Recept
/*            m("div.widget", [
            m("h1", Recipe.title),
            m("img", {
                    src: Recipe.img,
                    //width: '80px',
                    //height: '80px',
                    //class: 'profile_picture',
                }),
                m('a', {
                    href: Recipe.url,
                    oncreate: m.route.link
                }, 'Get recipe!')
                ]),*/
