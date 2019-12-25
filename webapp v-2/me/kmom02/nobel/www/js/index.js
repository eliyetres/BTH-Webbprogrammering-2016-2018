/*
 * Nobel App 
 * index.js
 */
"use strict";

var m = require("mithril");

var Layout = require("./nobelapp/layout");
var Home = require("./nobelapp/home");

var Nobel = require("./nobelapp/nobel");

var app = {
    //Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    /*
     deviceready Event Handler
     Bind any cordova events here. Common events are:
     'pause', 'resume', etc.*/

    onDeviceReady: function () {
        m.route(document.body, "/", {
            "/": {
                render: function () {
                    return m(Layout, m(Home));
                }
            },
            "/winners/:year": {
                render: function (vnode) {
                    return m(Layout, m(Nobel, vnode.attrs));
                }
            }
        });
    },

};

app.initialize();
