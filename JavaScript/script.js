//                                           arabic chars to romans

var oneR = "I";
var fourR = "IV";
var fiveR = "V";
var nineR = "IX";
var tenR = "X";
var fiftyR = "L";
var houndredR = "C";
var fiveHoundredR = "D";
var thousandR = "M";

var oneA = 1;
var fourA = 4;
var fiveA = 5;
var nineA = 9;
var tenA = 10;
var fiftyA = 50;
var houndredA = 100;
var fiveHoundredA = 500;
var thousandA = 1000;

function convertArabicToRoman (arNumber) {
    var result = "";
    if (arNumber < 0) {
        arNumber = -arNumber;
        var arNumberForResult = -arNumber;
        result = "-";
    }
    else if (!arNumber) {
        console.log("0 digit doesn't exists among Roman numbers");
        return;
    }
    else {
        arNumberForResult = arNumber;
    }
        var toCalc = arNumber;
        if (Math.floor(arNumber / thousandA) >= 1) {
            for (var i = 1; i <= arNumber / thousandA; i++) {
                result += thousandR;
                toCalc -= thousandA;
            }
        }
        var toCalc1 = toCalc;
        if (Math.floor(toCalc / fiveHoundredA) >= 1) {
            for (var i = 1; i <= toCalc / fiveHoundredA; i++) {
                result += fiveHoundredR;
                toCalc1 -= fiveHoundredA;
            }
        }
        var toCalc2 = toCalc1;
        if (Math.floor(toCalc1 / houndredA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc1 / houndredA); i++) {
                result += houndredR;
                toCalc2 -= houndredA;
            }
        }
        var toCalc3 = toCalc2;
        if (Math.floor(toCalc2 / fiftyA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc2 / fiftyA); i++) {
                result += fiftyR;
                toCalc3 -= fiftyA;
            }
        }
        var toCalc4 = toCalc3;
        if (Math.floor(toCalc3 / tenA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc3 / tenA); i++) {
                result += tenR;
                toCalc4 -= tenA;
            }
        }
        var toCalc5 = toCalc4;
        if (Math.floor(toCalc4 / nineA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc4 / nineA); i++) {
                result += nineR;
                toCalc5 -= nineA;
            }
        }
        var toCalc6 = toCalc5;
        if (Math.floor(toCalc5 / fiveA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc5 / fiveA); i++) {
                result += fiveR;
                toCalc6 -= fiveA;
            }
        }
        var toCalc7 = toCalc6;
        if (Math.floor(toCalc6 / fourA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc6 / fourA); i++) {
                result += fourR;
                toCalc7 -= fourA;
            }
        }
        var toCalc8 = toCalc7;
        if (Math.floor(toCalc7 / oneA) >= 1) {
            for (var i = 1; i <= Math.floor(toCalc7 / oneA); i++) {
                result += oneR;
                toCalc8 -= oneA;
            }
        }
        console.log(result + " is equal to " + "" + arNumberForResult);
}
convertArabicToRoman(1);


//                                                let's count matches!

var unitTest = [
    {entered: 7, expected: 4},
    {entered: 77, expected: 8},
    {entered: 125, expected: 5},
    {entered: 95643, expected: 14}
];


function numberToMatchesQuantity(numberToConvert) {
    var quantOfMatchesNeded = 0;
    for (var i = 0; i < String(numberToConvert).length; i++) {
        switch (String(numberToConvert).charAt(i)){
            case "1" :
                quantOfMatchesNeded += 1;
                break;
            case "2" :
                quantOfMatchesNeded += 2;
                break;
            case "3" :
                quantOfMatchesNeded += 3;
                break;
            case "4" :
                quantOfMatchesNeded += 3;
                break;
            case "5" :
                quantOfMatchesNeded += 2;
                break;
            case "6" :
                quantOfMatchesNeded += 3;
                break;
            case "7" :
                quantOfMatchesNeded += 4;
                break;
            case "8" :
                quantOfMatchesNeded += 5;
                break;
            case "9" :
                quantOfMatchesNeded += 3;
        }
    }
    console.log(quantOfMatchesNeded)
}

numberToMatchesQuantity(125);

for (var i = 0; i < unitTest.length; i++) {
    numberToMatchesQuantity(unitTest[i].entered);
    console.log(unitTest[i].expected + " is expected");
}





