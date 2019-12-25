/////Salnamn

var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);
var result = [];
//bconsole.log(json_data.salar);
for (var i = json_data.salar.length - 1; i >= 0; i--) {
	if (json_data.salar[i].Salsnamn !== null) {
	
	result.push(json_data.salar[i].Salsnamn);}
}
console.log("Alla salar:\n---------\n" );
console.log( result);
});

/////Salnamn + salsnr

var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);
var result = [];

for (var i = json_data.salar.length - 1; i >= 0; i--) {

var nulled = "";
if (json_data.salar[i].Salsnamn === null){
	nulled = "Inget namn";}
	else {
		nulled = json_data.salar[i].Salsnamn;
	}


	result.push(nulled + ": " + json_data.salar[i].Salsnr);
}
console.log("Alla salar:\n---------\n" );
console.log( result);
});



///// Sal för sök på salsnr
var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);

function search_room (room_id){

var result = [];

for (var i = json_data.salar.length - 1; i >= 0; i--) {

if (json_data.salar[i].Salsnr === room_id){

	result.push(json_data.salar[i]);
}}

console.log( result);
}
search_room("H315G");

});

//Alla salar i ett hus

var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);

function search_house (house_id){

var result = [];

for (var i = json_data.salar.length - 1; i >= 0; i--) {

if (json_data.salar[i].Hus === house_id){

	result.push(json_data.salar[i]);
}}

console.log( result);
}
search_house("H-huset");

});

///sökstring
//funkar bara exakt, behöver fungera med wildcards

var fs = require('fs');
var json_data;
fs.readFile('salar.json', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
  console.log('Done reading file.');

  json_data = JSON.parse(data);

function search_string (search){

const result = [];

     const alternativ =        ["Salsnr",
            "Salsnamn",
            "Lat",
            "Long",
            "Ort",
            "Hus",
            "Våning",
            "Typ",
            "Storlek"];


	for (var u = alternativ.length - 1; u >= 0; u--) {
		
	
function ss (alt) {
	for (var i = json_data.salar.length - 1; i >= 0; i--) {
	//console.log(json_data.salar[i][alternativ[u]]);
	if (search == json_data.salar[i][alt[u]]){
result.push(json_data.salar[i]);
}}


}
ss(alternativ);
//console.log(json_data.salar[i][alternativ[u]]);


console.log(result);
}}
search_string("H206D");
});