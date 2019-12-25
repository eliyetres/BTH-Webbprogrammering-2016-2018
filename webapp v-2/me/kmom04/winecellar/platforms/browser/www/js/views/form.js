/* Load form
 * js/view/form.js
 */
"use strict";
var m = require("mithril");
var Winecellar = require("../models/winecellar");

var saved = {
    view: function () {
        return m("div.saveholder", [
            m("p.saved", "Saved")
        ]);
    }
};

module.exports = {
    oninit: function (vnode) {
        if (!vnode.attrs.id) {
            Winecellar.currentWine = {};
        } else {
            Winecellar.get(vnode.attrs.id);
        }
    },
    view: function () {
        return [
            m("div.flex-box", [
                m("div.content", [
                    m("form", {
                        // Prevent new page to open
                        onsubmit: function (event) {
                            event.preventDefault();

                            var holder = document.getElementById('saved');
                            if (Winecellar.currentWine.id) {
                                Winecellar.update();
                            } else {
                                Winecellar.new();
                                m.mount(holder, saved);
                            }


                        }
                    }, [
            // Name, type: text
            m("label.label", "Name"),
            m("input.input[type=text][required=''][placeholder=Name]", {
                            oninput: m.withAttr("value", function (value) {
                                Winecellar.currentWine.name = value;
                            }),
                            value: Winecellar.currentWine.name
                        }),
            // Grape, type: text
            m("br"),
            m("label.label", "Grape"),
            m("input.input[type=text][required=''][placeholder=Grape type]", {
                            oninput: m.withAttr("value", function (value) {
                                Winecellar.currentWine.grape = value;
                                console.log("Grape");
                            }),
                            value: Winecellar.currentWine.grape
                        }),
            // Vintage, type: number
            m("br"),
            m("label.label", "Vintage"),
            m("input.input[type=number][required=''][placeholder=Vintage]", {
                            oninput: m.withAttr("value", function (value) {
                                Winecellar.currentWine.vintage = value;
                                console.log("Vintage");
                            }),
                            value: Winecellar.currentWine.vintage
                        }),
            // Stock, type: number
            m("br"),
            m("label.label", "Stock"),
            m("input.input[type=number][required=''][placeholder=Stock]", {
                            oninput: m.withAttr("value", function (value) {
                                Winecellar.currentWine.stock = value;
                                console.log("Stock");
                            }),
                            value: Winecellar.currentWine.stock
                        }),
            m("br"), m("br"), m("br"),
            // Save form button
   /*         m("button.button.save", {
                            onclick: function () {
                                Winecellar.update(vnode);
                            }
                                }, "Save")*/
                        m("button.button[type=submit]", "Save"),
m("br"), m("br"),
                       m("div#saved")
                    ])])])];
    }
};
