"use strict";
// const anchor = document.querySelector('a')!; //!; use this if you definitely know that element is not null.
// // if (anchor) {
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
console.log(form.children);
var type = document.querySelector('#type');
form.addEventListener(('submit'), function (e) {
    e.preventDefault();
    console.log(type.value);
});
