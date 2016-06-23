"use strict";
/**
 * Converts Rome number to arabic.
 * @param numberToConvert {String}
 * @return {Number} converted number.
 */
function convertNumbers(numberToConvert) {
	var numberParts = numberToConvert.replace(/[^A-Za-z]/g, "").toLowerCase().split("");
	var result = 0;
	var iAmount;
	var numbersDictionary = {
		"i": 1,
		"v": 5,
		"x": 10,
		"l": 50,
		"c": 100,
		"d": 500,
		"m": 1000
	};
	getIfNumberIsCorrect(numberParts, numbersDictionary);

	numberParts.forEach(function(value){
		result += numbersDictionary[value];
	});
	iAmount = numberToConvert.toLowerCase().split("i").length - 1;
	if (numberParts.reverse()[0] != "i") {
		result -= 2 * iAmount;
	}
	return result;
}

/**
 * Checks if the entered value is a valid Rome number.
 * @param numberParts {Array} Rome numbers.
 * @param numbersDictionary {Object} Contains key-value pairs of Rome and Arabic numbers.
 * @throws Will throw an error if numberParts argument will contain incorrect Rome number or will be empty.
 */
function getIfNumberIsCorrect(numberParts, numbersDictionary) {
	var tempFlag = 2000;
	var iCounter = 0;
	var currentSymbolValue;
	var errorMessages = {
		empty: "Nothing entered",
		illegal: "Illegal symbol",
		incorrect: "Incorrect value entered"
	};

	if (!numberParts.length) {
		throw new Error(errorMessages.empty);
	}
	numberParts.forEach(function(value) {
		currentSymbolValue = numbersDictionary[value];
		/**
		 * Checks if the value is a valid Rome number.
		 */
		if (!numbersDictionary.hasOwnProperty(value)) {
			throw new Error(errorMessages.illegal);
		}
		/**
		 * Checks if there is permissible amount of "I" symbols in number.
		 */
		if (value == "i") {
			iCounter++;
			if (iCounter > 3) {
				throw new Error(errorMessages.incorrect);
			}
		}
		/**
		 * Checks if the sequence of numbers is correct.
		 */
		if (currentSymbolValue <= tempFlag) {
			tempFlag = currentSymbolValue;
		} else if (currentSymbolValue != 1 && tempFlag != 1) {
			throw new Error(errorMessages.incorrect);
		}
	});

	checkINumbers(numberParts, iCounter);
}
/**
 * Checks if the "I" numbers have correct positions.
 * @param numberParts {Array} Rome numbers.
 * @param iCounter {Number} Amount of "I" symbols.
 */
function checkINumbers(numberParts, iCounter) {
	//todo: Implement correct "I" symbol processing (check if stands before "V" and "X", checks if hac correct position)
}

/**
 * Checks if tested function returns expected values.
 * @param testData {Object} Data to test.
 * @param method {Function} Function to test.
 */
function runTests(testData, method) {
	if (!Object.getOwnPropertyNames(testData).length) {
		return;
	}
	for (var key in testData) {
		if (testData.hasOwnProperty(key)) {
			if (method(key) == testData[key]) {
				console.log(key + " == " + testData[key]);
			} else {
				console.log("Fail");
			}
		}
	}
}

var testData = {
	// "I": 1,
	// "XVI": 16,
	// "II": 3,
	"IV": 4
};

runTests(testData, convertNumbers);
