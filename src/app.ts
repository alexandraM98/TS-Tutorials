import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values); //the spread operator (...)
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});

// TUPLES  (tiupal)
let arr = ['ryu', 2, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [false, 'yoshi, 30'];

let tup: [string, number, boolean] = ['ryu', 25, true];

// let student: [string, number];
// student = ['Alex', 23];
