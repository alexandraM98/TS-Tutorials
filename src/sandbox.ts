// let greet: Function;
//Example 1
let greet: (a: string, b: string) => void;

greet = (name, description) => {
  console.log();
}

//Example 2
let calc: (a: number, b: number, c?:string) => number; //Function signature

calc = (num1, num2, desc) => {
  return num1 + num2;
}

let n1 = 5;
let n2 = 10;

console.log(calc(n1, n2));

//Example 3
let calc1: (a: number, b: number, c: string) => number;

calc1 = (numberOne, numberTwo, action) => {
  if (action === "sum") {
    return numberOne + numberTwo;
  } else {
    return numberOne - numberTwo;
  }
}

//Example 4
let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja) => {
  console.log(ninja.name, ninja.age);
}

let ninja = {
  name: 'Alex',
  age: 23
};

logDetails(ninja);