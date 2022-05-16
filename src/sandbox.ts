let greet: Function;

greet = () => {
  console.log('Hello, world!');
};

const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, 50);

//c? = optional parameter

const minus = (a: number, b: number): number => {
    return a + b;
};

let result = minus(10, 7); //it automatically infers the type from the function's return, so now the 'result' variable can only be assigned a number value