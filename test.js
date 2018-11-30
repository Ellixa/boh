"use strict";
exports.__esModule = true;
var nome = 'pippo';
var cognome = 'xxx';
var age = 18;
age = 18;
var hasPowers = true;
var children = ['ciao', 'ss', 'das'];
var Person;
Person = { nome: "Pippo", age: 30 };
function go(direction, distance) {
    if (direction === void 0) { direction = 'left'; }
    if (distance === void 0) { distance = 100; }
    //se a direction non metto string vuol dire any//    
    //il valore di default è a sinistra//
    console.log(direction, distance);
}
go();
go('right');
go('left', 50);
function drive(param) {
}
//let params= {distance:100}
//drive{params}//
function add(x, y) {
    return x + y;
}
add(10, 50);
var p = add(10, 50) + 100;
var add2 = function (x) {
};
//const multiply= (x) => x*2; //quello che viene dopo la freccia ritorna 
//è meglio farle con le graffe 
var multiply = function (x) {
    return x * 2;
};
var multiply2 = function (x) {
    return x * 2;
};
