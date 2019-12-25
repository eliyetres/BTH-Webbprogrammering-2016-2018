/*
 * Github
 */
"use strict";

var m = require("mithril");

// Module
var Github = require("../models/github.js");

module.exports = {
    oninit: function () {
        Github.load();
    },
    view: function () {
        return [

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

    ];
    }
};
