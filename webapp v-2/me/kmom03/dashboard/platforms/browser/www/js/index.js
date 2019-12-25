"use strict";

var m = require("mithril");
var Main = require("./views/main");
//var Github = require("./views/github");
//var Year = require("./views/year");
//var Date = require("./views/date");

var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function () {
        m.route(document.body, "/", {
            "/": {
                render: function () {
                    return m(Main);
                }
            },
        });
    }
};

app.initialize();
