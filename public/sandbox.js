"use strict";
var greet;
greet = function () {
    console.log('Hello, world!');
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 50);
//c? = optional parameter
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7); //it automatically infers the type from the function's return, so now the 'result' variable can only be assigned a number value
