/*
 * Winecellar App
 */
"use strict";
var m = require("mithril");
var Main = require("./views/main");
var Form = require("./views/form");
var Layout = require("./views/layout");

var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        // Start
        m.route(document.body, "/", {
            "/": {
                render: function () {
                    return m(Layout, m(Main));
                }
            },
            // Add wine
            "/new": {
                render: function () {
                    return m(Layout, m(Form));
                }
            },
            // Edit existing wine
            "/edit/:id": {
                render: function (vnode) {
                    return m(Layout, m(Form, vnode.attrs));
                }
            }

        });
    }
};

app.initialize();
