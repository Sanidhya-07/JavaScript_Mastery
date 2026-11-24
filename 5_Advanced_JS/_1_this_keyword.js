// console.log(this);
// console.log(window===this);

const person = {
  name: "Sanidhya Naik",
  age: 23,

  //this represent owner object (person)
  greetRegular: function () {
    return `Hello my name is ${this.name} and I am ${this.age} years old`;
  },

  //this represent global object (window)
  greetArrow: () => {
    return `Hello my name is ${this.name} and I am ${this.age} years old`;
  },
};

const resRegular = person.greetRegular()
console.log(resRegular);

console.log("\n--------------------------------------------------\n");

const resArrow = person.greetArrow()
console.log(resArrow);

