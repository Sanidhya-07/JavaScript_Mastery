const person = {
  name: "Pramod",
  age: 24,
  country: "India",
  gender: "Male",
};

const arr = ["prem","om","deep","sunny"];

//for-in loop (for objects)
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
console.log("-----------------------------------------------\n");

//for-in loop (for objects)
for (let key in arr) {
    console.log(`${key} : ${arr[key]}`);
}
console.log("-----------------------------------------------\n");


//for of loop (for arrays-directly iterate over elements not on keys)

for(let element of arr){
    console.log(element);
}