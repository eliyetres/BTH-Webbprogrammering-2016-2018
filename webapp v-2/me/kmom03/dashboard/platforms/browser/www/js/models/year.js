/* Modul för Random Year
 * js/models/year.js */
"use strict";

var m = require("mithril");

var Year = {
    load: function () {
        var apiURL = "http://numbersapi.com/random/year?json";
        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Year.comma = "";
            // Not all results contain a variable
            if (result.date === undefined) {
                Year.date = "";
                console.log("date" + result.date);
            } else {
                Year.date = result.date;
                Year.comma = ",";
            }
            if (result.number === undefined) {
                Year.year = "";
                Year.comma = "";
                console.log("number" + result.number);

            } else {
                Year.year = result.number;
            }
            Year.text = result.text;
            console.log(Year.comma);
        });

    }
};

module.exports = Year;
