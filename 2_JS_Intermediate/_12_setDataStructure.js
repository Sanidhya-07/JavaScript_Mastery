
const values = [1,2,3,4,4,1,2,5,4,3];

const mySet = new Set(values);
console.log(mySet);

console.log("\n--------------------------------------\n");


const letters = new Set() ;
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);
console.log("\n--------------------------------------\n");

for(let letter of letters){
    console.log(letter);
}
console.log("\n--------------------------------------\n");