"use strict";
/**
 * Declaring original and outcome arrays
 */
var arrayName = [1, 17,,, 54, "sds", "",, 3121];
var arrayWithoutBlanks = [];

/**
 * Remove blanks from array
 * @param arrayName  {Array} array that going to "lose weight"
 * @result arrayWithoutBlanks {Array} new array that will get ONLY numbers
 */

function removeBlanks(arrayName) {
    for (var index = 0; index < arrayName.length; index++) {
        if (typeof arrayName[index] == "number") {
            arrayWithoutBlanks.push(arrayName[index]);
        }
    }
    return arrayWithoutBlanks;
}

/**
 * Compare function for sort method. It sorts ONLY numbers
 * @param previous {number} value to be compare
 * @param next {number} value to be compare
 */

function compareFunction(previous, next) {
    return previous - next;
}
/**
 * Printing sorted array without blanks
 */

console.log(removeBlanks(arrayName).sort(compareFunction));