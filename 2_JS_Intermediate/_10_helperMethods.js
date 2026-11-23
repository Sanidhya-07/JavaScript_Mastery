//forEach helper...1

const nums = [10, 20, 45, 36, 58, 25];

let sum = 0;

nums.forEach((num) => {
  sum = sum + num;
});
console.log("ForEach helper");
console.log(sum);
console.log("------------------------------------\n");

//Map() helper...2

const numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => num * 10);
console.log("Map helper");
console.log(result);
console.log("------------------------------------\n");

//filter() helper...3

const ages = [10, 22, 54, 31, 26, 21, 47, 85];

const older = ages.filter((age) => age > 30);
console.log("Filter helper");
console.log(older);
console.log("------------------------------------\n");

//find() helper
const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];

console.log("Find helper");
const emp101 = peoples.find((p) => p.name == "alex");
console.log(emp101);
console.log("------------------------------------\n");

//every() and some() helper
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

console.log("Every helper");
const answer1 = products.every((product) => product.category == "Toys");
console.log(answer1);

console.log("Some helper");
const answer2 = products.some((product) => product.category == "Toys");
console.log(answer2);
console.log("------------------------------------\n");

//reduce() helper
const marks = [10, 25, 36, 14, 56];

const totalMarks = marks.reduce((pre, curr) => {
  return pre + curr;
}, 0);

console.log("Reduce helper");
console.log(totalMarks);
console.log("------------------------------------\n");