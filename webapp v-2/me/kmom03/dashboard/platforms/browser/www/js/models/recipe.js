/* Model for Recipe
 * models/recipe.js
 */
"use strict";

var m = require("mithril");
var publicAPI = function (xhr) {
    xhr.withCredentials = false;
};

var Recipe = {
    allrecipes: [],
    load: function () {
        var apiURL = "http://food2fork.com/api/search?key=92091fb965f23b577f7d902ebe2d4b52&q=vegetarian";

        return m.request({
            method: "GET",
            url: apiURL,
            config: publicAPI,
            /*          headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
                        'Access-Control-Request-Method': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
                    }*/
        }).then(function (result) {
            Recipe.title = result.recipes[1].title;
            Recipe.url = result.recipes[1].f2f_url;
            Recipe.img = result.recipes[1].image_url;

            Recipe.allrecipes = result.recipes.map(function (rec) {
                return {
                    title: rec.title,
                    url: rec.f2f_url,
                    img: rec.image_url
                };
            });
        });
    }
};

module.exports = Recipe;
