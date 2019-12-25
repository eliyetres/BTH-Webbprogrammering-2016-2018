/* Modul för Date
 * js/models/date.js
 */
"use strict";

var m = require("mithril");

var Date = {
    load: function () {
        var apiURL = "http://numbersapi.com/random/date?json";
        return m.request({
            method: "GET",
            url: apiURL

        }).then(function (result) {
            // OBS Not all objects contain these variables
            //Year
            if (result.year === undefined) {
                Date.year = "";
            } else {
                Date.year = result.year;
            }
            //Info about day
            Date.text = result.text;
        });

    }
};

module.exports = Date;
