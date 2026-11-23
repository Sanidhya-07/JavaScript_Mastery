
const map = new Map();

map.set("A",1);
map.set("B",2);
map.set("C",3);

console.log(map);
console.log("\n-----------------------------------------------------\n");

console.log(map.keys());
console.log("\n-----------------------------------------------------\n");

console.log(map.values());
console.log("\n-----------------------------------------------------\n");

console.log(map.get("A"));
console.log("\n-----------------------------------------------------\n");

console.log(map.size);
console.log("\n-----------------------------------------------------\n");

console.log(map.delete("B"));
console.log(map);
console.log("\n-----------------------------------------------------\n");