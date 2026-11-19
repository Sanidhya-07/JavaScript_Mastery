let a = 1;
let b = 2;
let c = 3;

//ES5 way
// const obj = {
//     a:a,
//     b:b,
//     c:c
// }

//ES6 way
const obj = { a, b, c };
console.log(obj);

console.log("---------------------------------------------------------------");

const lib = {
  sum: (a, b) => a + b,
  mul: (a, b) => a * b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
};

console.log(lib.sum(10, 20));
console.log(lib.sub(10, 20));
console.log(lib.mul(10, 20));
console.log(lib.div(10, 20));

console.log("--------------------------------------------------------------");

const info = (name, age, height) => {
  return {
    name,
    age,
    height,
  };
};

console.log(info("sanidhya",18,173));
