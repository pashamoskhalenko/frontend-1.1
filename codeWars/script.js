"use strict";

//
// var test1 =([1,2,3,4,5]);
// var test2 =([5,3,2,1,4]);
// var test3 =([2,2,1,2,1]);
//
//
//
// function removeSmallest(numbers) {
//     var min = numbers[0];
//     for (var i = 1; i < numbers.length; i++) {
//         if (numbers[i] < min) {
//             min = numbers[i];
//         }
//     }
//     numbers.splice(numbers.indexOf(min),1);
//     console.log(numbers);
//
// }
//
// removeSmallest(test3);

function titleCase(title, minorWords) {
    var res = title[0].toUpperCase();
    var word = "";
    for (var i = 1; i < title.length; i++) {

            for (var j = i; j < title.slice(0, res.length).indexOf(" "); j++) {
                console.log(j);
                title[j - 1] == " " ? word += title[j].toUpperCase() : word += title[j].toLowerCase();
            }
            (!minorWords || minorWords.search(word) !== -1) ?
                res += word :
                res += word.toLowerCase();
            word = "";
        }
        console.log(res);
        console.log(res.length);
}

titleCase('a clash of KINGS', 'a an the of');