"use strict";
function splitIntoThousands(number) {
    var tensOfThousands = {value: 10000, string: " tens of thousands"};
    var Thousands = {value: 1000, string: " thousands"};
    var hundreds = {value: 100, string: " hundreds"};
    var dozens = {value: 10, string: " dozens"};
    var units = {value: 1, string: " units"};
    if (typeof number !== "number") {
        throw new Error();
    }
    var calcNewNumber = number;
    if (Math.floor(number / 10000) >= 0) {
        console.log("this number has " + Math.floor(number / 10000) + " tens of thousands");
        calcNewNumber -= Math.floor(number / 10000) * 10000;
    }
    var calcNewNumber1 = calcNewNumber;
    if (Math.floor(calcNewNumber / 1000) >= 0) {
        console.log("this number has " + Math.floor(calcNewNumber / 1000) + " thousands");
        calcNewNumber1 -= Math.floor(calcNewNumber / 1000) * 1000;
    }
    var calcNewNumber2 = calcNewNumber1;
    if (Math.floor(calcNewNumber1 / 100) >= 0) {
        console.log("this number has " + Math.floor(calcNewNumber1 / 100) + " hundreds");
        calcNewNumber2 -= Math.floor(calcNewNumber1 / 100) * 100;
    }
    var calcNewNumber3 = calcNewNumber2;
    if (Math.floor(calcNewNumber2 / 10) >= 0) {
        console.log("this number has " + Math.floor(calcNewNumber2 / 10) + " dozens");
        calcNewNumber3 -= Math.floor(calcNewNumber2 / 10) * 10;
    }
        console.log("this number has " + Math.floor(calcNewNumber3) + " units");
}
splitIntoThousands(-1);

// var test = [];
// test.forEach(function(){
//
// });
function forEach(callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


var names = ["Rustam", "Valya", "Andrey", "Dima", "Pasha", "Alex"];

function test (oneOfNames) {
    for (var i = 0; i < names.length; i++) {
        if (names[i] === oneOfNames) {
            console.log("user found!!");
            return;
        }
    }
    console.log("user not found");
}
test("Pasha");


function test1 (oneOfNames) {
    for (var i = 0; i < names.length; i++) {
        if (oneOfNames.indexOf(names[i]) !== -1) {
            console.log("user found!!");
            return;
        }
    }
    console.log("user not found");
}
test1("Andrey");



