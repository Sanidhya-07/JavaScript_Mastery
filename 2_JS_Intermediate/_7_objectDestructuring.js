const person = {
  name: "Pramod",
  age: 24,
  country: "India",
  gender: "Male",
};

const { name, age } = person;

console.log(name);
console.log(age);
console.log("--------------------------------------------------\n");

//Renaming object values

const { name: personName, age: personAge, country: personCountry } = person;

console.log(personName);
console.log(personAge);
console.log(personCountry);
console.log("--------------------------------------------------\n");

const nums = { a: 100, b: 200, c: 300, d: 400, e: 500 };

const { a, b, ...rest } = nums;

console.log(a);
console.log(b);
console.log(rest);
