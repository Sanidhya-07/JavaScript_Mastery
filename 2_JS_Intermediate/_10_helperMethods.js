//forEach helper

const nums = [10, 20, 45, 36, 58, 25];

let sum = 0;

nums.forEach((num) => {
  sum = sum + num;
});
console.log(sum);

console.log("------------------------------------\n");

//Map() helper

const numbers = [1,2,3,4,5];

let result = numbers.map((num) => num*10);
console.log(result);
console.log("------------------------------------\n");