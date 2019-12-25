/*
 * Nobel App model
 * nobel.js
 */
"use strict";

var m = require("mithril");

var Nobel = {
    //variables
    yearlist: [],
    prizes: [],
    motivation: "",
    year: "",

    load: function (year) {
        Nobel.year = year;

        // http://api.nobelprize.org/v1/prize.:format
        //var apiURL = "http://api.nobelprize.org/v1/prize.json?year=" + Nobel.toyear + "&yearTo=" + Nobel.fromyear;
        var apiURL = "http://api.nobelprize.org/v1/prize.json?year=" + year;
        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (results) {

            Nobel.results = results;
            Nobel.prizes = results.prizes;


            // Object with results for API selected year
            Nobel.winners = results.winners;

        });
    }
};

module.exports = Nobel;
