/* Modul för Winecellar
 * js/models/winecellar.js
 */
"use strict";

var m = require("mithril");

// Web
var apiURL = "http://rem-rest-api.herokuapp.com/api/winecellar";

// Local
//var apiURL = "http://localhost:8000/api/winecellar";

// Android
// var urlApi = "http://10.0.2.2:8000/api/winecellar";

var Winecellar = {
    wineList: [],

    // Get API
    load: function () {
        return m.request({
                method: "GET",
                url: "http://rem-rest-api.herokuapp.com/api/winecellar",
                withCredentials: true,
            })
            .then(function (result) {
                Winecellar.wineList = result.data;
            });
    },

    currentWine: {},

    // GET, get object from id
    get: function (id) {
        return m.request({
            method: "GET",
            url: apiURL + "/:id",
            data: {
                id: id
            },
            withCredentials: true
        }).then(function (result) {
            Winecellar.currentWine = result;
        });
    },

    //PUT, update object
    update: function () {
        return m.request({
            method: "PUT",
            url: apiURL + "/:id",
            data: Winecellar.currentWine,
            withCredentials: true
        }).then(function () {
            console.log("Updating");
        });
    },

    //DELETE, delete object
    delete: function (id) {
        return m.request({
            method: "DELETE",
            url: apiURL + "/:id",
            data: {
                id: id
            },
            withCredentials: true
        }).then(function () {
            Winecellar.load();
        });
    },
    // POST, create new object
    new: function () {
        return m.request({
            method: "POST",
            url: apiURL,
            data: Winecellar.currentWine,
            withCredentials: true
        });

    },
};

module.exports = Winecellar;
