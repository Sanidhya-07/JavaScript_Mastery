let firstName = "Sanidhya";
let lastName = "Naik";

//1...string concatination

let fullName = firstName + " " + lastName;
// console.log(firstName.concat(" " , lastName));
console.log(fullName);


// 2...UPPERCASE

let name = "PramoD";
console.log(name.toUpperCase());
console.log(name.toLowerCase());


//3...String interpolation
let message = `Hello my name is ${fullName} and I am 22 years old.`;
console.log(message);   


//4...Appending string
let str = "Hello";
str += " Universe";
console.log(str);

//5...String length
let collegeName = "VIT University";
console.log(collegeName.length);


//6...slice
console.log(collegeName.slice(0,9));


// 7...split and join

let degree = "computer Science" ;
console.log(degree.split(" "));
console.log(degree.split(" ").join(" -- "));
