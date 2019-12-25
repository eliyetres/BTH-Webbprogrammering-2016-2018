/*
 * Den befintliga filen js/index.js är vår utgångspunkt för appen
 * och den pekar ut vad som ska visas när en användare kommer till vår app.
 * Vi skapar desutom en katalog för våra vyer, med vårt första mithril vy me.js.
 */
"use strict";

var m = require("mithril");
var Layout = require("./views/layout");
var Me = require("./views/me");
var About = require("./views/about");
var Report = require("./views/report");

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. 
    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(Layout, m(Me));
                }
            },
            "/about": {
                render: function() {
                    return m(Layout, m(About));
                }
            },
            "/report": {
                render: function() {
                    return m(Layout, m(Report));
                }
            }
        });
    }

};

app.initialize();
