/* Modul för Github-vy
 * js/models/github.js */
"use strict";

var m = require("mithril");

// GET https://api.github.com/users/eliyetres

var Github = {
    userName: "eliyetres",
    load: function () {
        var user = Github.userName;
        var apiURL = "https://api.github.com/users/" + user;
        //var repo_aipURL = apiURL + "repos";
        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Github.lastUpdated = result.updated_at;
            Github.userFirstName = result.name;
            Github.userPicture = result.avatar_url;
            Github.link = result.html_url;
            Github.repos = result.repos_url;
        });

    }
};

module.exports = Github;
