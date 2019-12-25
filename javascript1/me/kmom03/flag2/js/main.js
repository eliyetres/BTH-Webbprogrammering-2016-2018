 (function(){
    'use strict';

    var flagTarget = document.getElementById('flag');
    var flagLink = document.getElementById('draw-romania');
    var flagLink1 = document.getElementById('draw-indonesia');
    var flagLink2 = document.getElementById('draw-latvia');
    var flagLink3 = document.getElementById('draw-sverige');

    //myContent.innerHTML = '<h3>This is a MEGA template!</h3>';

    function drawFlagRomania()  {
        var flagRomania = '<div class="flag romania"><div class="part1"></div><div class="part2"></div></div>';
        console.log("Drawing flag");
        flagTarget.innerHTML = flagRomania;
    }


    flagLink.addEventListener("click", function() {
        console.log("Event for clicking link romania.");
        drawFlagRomania();
    });

   function drawFlagIndonesia()  {
        var flagIndonesia = '<div class= "flag indonesia"><div class ="part1"></div></div>';
        console.log("Drawing flag");
        flagTarget.innerHTML = flagIndonesia;
    }
    flagLink1.addEventListener("click", function() {
        console.log("Event for clicking link Indonesia.");
        drawFlagIndonesia();
    });


    function drawFlagLatvia()  {
        var flagLatvia = '<div class= "flag2 latvia"><div class ="part1"></div></div>';
        console.log("Drawing flag");
        flagTarget.innerHTML = flagLatvia;
    }
    flagLink2.addEventListener("click", function() {
        console.log("Event for clicking link Latvia.");
        drawFlagLatvia();
    });

    function drawFlagSverige()  {
        var flagSverige = '<div class= "flag3 sverige"> <div class ="part1"></div><div class ="part2"></div>';
        console.log("Drawing flag");
        flagTarget.innerHTML = flagSverige;
    }
    flagLink3.addEventListener("click", function() {
        console.log("Event for clicking link Sverige.");
        drawFlagSverige();
    });



    console.log('Sandbox is ready!');
})();
