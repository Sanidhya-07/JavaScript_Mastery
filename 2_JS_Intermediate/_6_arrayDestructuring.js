const colors = ["red", "green", "blue", "yellow", "orange"];

//first
const [color1, color2, color3] = colors;
console.log(color1);
console.log(color2);
console.log(color3);

console.log("----------------------------------------------------------\n");


//second
const [first,second,...remaining]=colors;
console.log(first);
console.log(second);
console.log(remaining);