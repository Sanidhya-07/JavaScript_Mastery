function CreatePerson(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.info = function () {
    return ` 
        Person Name : ${this.name}\t 
        Person Age : ${this.age}\t
        Person Gender : ${this.gender}\t 
        `;
  };
}

const p1 = new CreatePerson("John", 25, "Male");
const p2 = new CreatePerson("Jane", 30, "Female");
const p3 = new CreatePerson("Mike", 35, "Male");

console.log(p1.info());
console.log(p2.info());
console.log(p3.info());
