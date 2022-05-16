// const anchor = document.querySelector('a')!; //!; use this if you definitely know that element is not null.

// // if (anchor) {
// //   console.log(anchor.href);
// // }

// console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;

form.addEventListener(('submit'), (e: Event) => {
  e.preventDefault();

  console.log(type.value);
});