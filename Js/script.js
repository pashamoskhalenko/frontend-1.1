function test() {
    return 7;
};

function wrap(constanta) {
    console.log(constanta)
}

wrap(test());

function age(name, yearOfBirth) {
    var myAge = 2016 - yearOfBirth;
    console.log("hello, my name is " + name + "and I'm " + myAge)
};

age("Pasha", 1990);


function toDegree(number, degree) {
    var result = number;
    if (degree >= 0) {
        for (var i = 2; i <= degree; i++) {
            result *= number
        }

    }
    else {

    }
    console.log("Expected value is " + Math.pow(number, degree));
    console.log("Returned value is " + result);
};
var x = [
    {entered: [2,3], expected: 8},
    {entered: [2,3], expected: 8},
    {entered: [0.5, -1], expected: 8},
    {entered: [0, 0], expected: 8},
    {entered: [-1, 3], expected: 8}
];
toDegree(2, -1);

for (var f = 0; f < x.length, f++) {
    x[f].entered[0] = 
}