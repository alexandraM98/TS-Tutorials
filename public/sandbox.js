"use strict";
// let greet: Function;
//Example 1
var greet;
greet = function (name, description) {
    console.log();
};
//Example 2
var calc; //Function signature
calc = function (num1, num2, desc) {
    return num1 + num2;
};
var n1 = 5;
var n2 = 10;
console.log(calc(n1, n2));
//Example 3
var calc1;
calc1 = function (numberOne, numberTwo, action) {
    if (action === "sum") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
//Example 4
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name, ninja.age);
};
var ninja = {
    name: 'Alex',
    age: 23
};
logDetails(ninja);
