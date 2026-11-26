//creating class

class Person {
  //constructor function
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.printUserInfo = function () {
      return ` 
            Person Name : ${this.name}\t Person Age : ${this.age}\tPerson Gender : ${this.gender}\t `;
    };
  }
}

const person1 = new Person("John", 25, "Male");
const person2 = new Person("Jane", 30, "Female");
const person3 = new Person("Mike", 35, "Male");

console.log(person1.printUserInfo());
console.log(person2.printUserInfo());
console.log(person3.printUserInfo());
