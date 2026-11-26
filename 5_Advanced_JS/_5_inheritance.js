//creating class (it is parant class)
class Hero {
  //constructor function
  constructor(name, level) {
    //instance members
    this.name = name;
    this.level = level;

    this.printInfo = function () {
      return `hello my name is ${this.name} and my level is ${this.level}`;
    };
  }

  //instance metho
  greet() {
    return `hello from ${this.name}`;
  }
}

const hero1 = new Hero("sanidhya", 8);
console.log(hero1.greet());
console.log(hero1.printInfo());
console.log("------------------------------------------------------------------------------\n");

//--------------------------------------------------------------------------------

//child class
class Mega extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
}

const mega1 = new Mega("prem", 6, "this is spell");
console.log(mega1.greet());
console.log(mega1.printInfo());
