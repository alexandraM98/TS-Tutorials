var age; //Any is a dynamic type
var year = 2022; //let year be of any type, but for now let's initialise it as 2022.
//In Java, this would be something like "int year = 2022;" since there is no dynamic type in Java.
age = true;
console.log(age);
age = 'Old';
console.log(age);
age = {
    old: true,
    name: 'luigi'
};
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(true);
console.log(mixed);
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
