"use strict";
/**
 * Declaring original and outcome arrays
 */
var arrayName = [1, 17,,, 54, "sds", "",, 3121];
var arrayWithoutBlanks = [];

/**
 * Remove blanks from array by pushing numbers to the new array
 * @param arrayName  {Array} array that going to "lose weight"
 * @result arrayWithoutBlanks {Array} new array that will get ONLY numbers
 */

function pusshingToNewArray (arrayName) {
    for (var index = 0; index < arrayName.length; index++) {
        if (typeof arrayName[index] == "number") {
            arrayWithoutBlanks.push(arrayName[index]);
        }
    }
    return arrayWithoutBlanks;
}

/**
 * Removing blanks by editing original array
 * @param arrayName {Array} original array
 * @returns {Array} original array without blanks
 */

function removeBlanks(arrayName) {
    for (var i = 0; i < arrayName.length; i++) {
        if (typeof arrayName[i] !== "number") {
            arrayName.splice(i, 1);
            i--;
        }
    }
    return arrayName;
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

console.log(pusshingToNewArray(arrayName).sort(compareFunction));
console.log(removeBlanks(arrayName).sort(compareFunction));