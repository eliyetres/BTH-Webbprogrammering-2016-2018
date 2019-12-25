/*
/* Gomoku App
 */
"use strict";

var m = require("mithril");
var Layout = require("./views/layout");
var Main = require("./views/main");
var Winner = require("./views/winner");
var Board = require("./views/gameboard");

var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        m.route(document.body, "/", {
            "/": {
                render: function () {
                    return m(Layout, m(Main));
                }
            },
            "/winner": {
                render: function () {
                    return m(Layout, m(Winner));
                }
            },
            "/gameboard": {
                render: function () {
                    return m(Layout, m(Board));
                }
            },

        });


    }
};

app.initialize();
