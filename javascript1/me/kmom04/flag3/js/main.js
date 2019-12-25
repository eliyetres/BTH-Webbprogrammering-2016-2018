 (function(){
    'use strict';
    //flag links
    //var flagLink3 = document.getElementById('draw-sverige');
    var flagLink = document.getElementById('draw-romania');
    var flagLink1 = document.getElementById('draw-indonesia');
    var flagLink2 = document.getElementById('draw-latvia');

    // default flag variable
    var flag = {
        title: "",
        target: document.getElementById('flag'),
        div: null,
        link: null,
        event: console.log("Event for clicking link"),
        draw: null
    };

    // default create flag object
    flag.init = function(title, div, draw) {
     return Object.create(flag, {title : {value : ""},
                                  div : {value : div},
                                  draw : {value : draw}});
};

// swedish flag
var swedishFlag = Object.create(flag);
    swedishFlag.title = "Sverige";
    swedishFlag.link = document.getElementById('draw-sverige');
    swedishFlag.draw = function(){
        var flagSverige = '<div class= "flag3 sverige"> <div class ="part1"></div><div class ="part2"></div>';
        console.log("Drawing flag" + this.title);
        swedishFlag.target.innerHTML = flagSverige;
     //swedishFlag.init( );
    };

swedishFlag.link.addEventListener("click", function() {
        console.log("Event for clicking link Sverige.");
        swedishFlag.draw();
    });

//romanian flag
var romaniaFlag = Object.create(flag);
    romaniaFlag.title = "Romania";
    //romaniaFlag.init( );
    romaniaFlag.draw = function(){
        var flagRomania = '<div class="flag romania"><div class="part1"></div><div class="part2"></div></div>';
        console.log("Drawing flag" + this.title);
        romaniaFlag.target.innerHTML = flagRomania;
    };

    flagLink.addEventListener("click", function() {
        console.log("Event for clicking link romania.");
       romaniaFlag.draw();
    });

// indonesian flag
var indonesiaFlag = Object.create(flag);
    indonesiaFlag.title = "Indonesia";
    //indonesiaFlag.init( );
    indonesiaFlag.draw = function(){
        var flagIndonesia = '<div class= "flag indonesia"><div class ="part1"></div></div>';
        console.log("Drawing flag" + this.title);
        indonesiaFlag.target.innerHTML = flagIndonesia;
    };
   
     flagLink1.addEventListener("click", function() {
         console.log("Event for clicking link Indonesia.");
         indonesiaFlag.draw();
     });

//latvian flag
var latviaFlag = Object.create(flag);
    latviaFlag.title = "Latvia";
    //latviaFlag.init( );
    latviaFlag.draw = function(){
        var flagLatvia = '<div class= "flag2 latvia"><div class ="part1"></div></div>';
        console.log("Drawing flag" + this.title);
        latviaFlag.target.innerHTML = flagLatvia;
    };

     flagLink2.addEventListener("click", function() {
         console.log("Event for clicking link Latvia.");
         latviaFlag.draw();
     });


    console.log('Sandbox is ready!');
})();
