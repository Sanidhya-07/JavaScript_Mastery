const mySymbol = Symbol("foo");

console.log(typeof mySymbol);
console.log("\n-----------------------------------------------\n");


const symbol_1 = Symbol("name");

const huxn = {}
huxn["name"] = "sanidhya";
huxn["age"] = 23;
huxn["gender"] = "Male";
huxn["gender"] = "Female"; 
huxn[symbol_1] = "John";
huxn[symbol_1] = "alex";


console.log(huxn);
console.log("\n-----------------------------------------------\n");
