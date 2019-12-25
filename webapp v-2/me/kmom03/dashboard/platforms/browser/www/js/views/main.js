/* Main
 * js/main.js */

"use strict";

var m = require("mithril");
// Module
var Github = require("../models/github.js");
var Date = require("../models/date.js");
var Year = require("../models/year.js");
var Recipe = require("../models/recipe.js");

var Cook = {
    view: function (vnode) {
        return m("div.widget", [
            m("h2", vnode.attrs.title),
            m("img", {
                src: vnode.attrs.img
            }),
              m('a', {
                href: vnode.attrs.url,
                oncreate: m.route.link
            }, 'Get recipe!')
        ]);
    }
};

module.exports = {
    oninit: function (vnode) {
        Date.load();
        Year.load();
        Github.load(vnode.attrs.user);
        Recipe.load(vnode.attrs);
    },
    view: function () {
        return [
            m("div.flex-container", [
            //Date
            m("div.widget", [
                m("h1", Date.year),
            m("p", Date.text),
                  ]),
            //Github
            m("div.widget", [
            m("h1", Github.userFirstName + "'s Github repository"),
            m("div", {
                            class: 'profile_picture'
                        },
                        m("img", {
                            src: Github.userPicture,
                            width: '80px',
                            height: '80px',
                            class: 'profile_picture',
                        })
            ),
            m("h2", Github.userName),
    m("p", "Last updated: " + Github.lastUpdated)
    ]),
            //Year
            m("div.widget", [
            m("h1", Year.year + Year.comma + " " + Year.date),
            m("p", Year.text),
                  ]),
            // Recept
            Recipe.allrecipes.map(function (recip) {
                    return m(Cook, recip);
                })
])



                                    ];
    }
};
