"use strict";


// var smArr =  [1, 4, , 7, , , , , , , 2];
//
// function removeBlanks(arrayName) {
//     for (var i = 0; i < arrayName.length; i++) {
//         if (arrayName[i] === undefined) {
//             arrayName.splice(i, 1);
//             i--;
//             console.log("There are " + arrayName.length + " elements left in array")
//         }
//     }
//     console.log(arrayName);
// }
//
// console.log("In the beginning I had " + smArr.length + " elements");
// removeBlanks(smArr);

var test = [1, 2];
var test1 = [1, 2];
console.log(test.toString());
console.log(test == test1);

/**
 *  Converts text to 2007 font-style (every odd char to UpperCase).
 *  @param smText {String} text to convert
 *  @return {String} converted text
 */
function font2007(smText) {
    if (smText.length == 0) {
        throw alert("Write some text");
    }
    smText = smText.toLowerCase();
    var prevResult = "";
    var result = "";
    for (var i = 0; i < smText.length; i++) {
        if (isNaN(+smText[i])) {
            prevResult += smText[i];
        }
    }
    for (var j = 0; j < prevResult.length; j++) {
            console.log(j);
            j % 2 ?
                result += prevResult[j].toUpperCase() :
                result += prevResult[j].toLowerCase();
    }
    console.log(result);
}

font2007("прив5445етики");

