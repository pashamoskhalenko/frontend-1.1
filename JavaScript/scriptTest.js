"use strict";

var smArr =  [1, 4, , 7, , , , , , , 2];

function removeBlanks(arrayName) {
    for (var i = 0; i < arrayName.length; i++) {
        if (arrayName[i] === undefined) {
            arrayName.splice(i, 1);
            i--;
            console.log("There are " + arrayName.length + " elements left in array")
        }
    }
    console.log(arrayName);
}

console.log("In the beginning I had " + smArr.length + " elements");
removeBlanks(smArr);