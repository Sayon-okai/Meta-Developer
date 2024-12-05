class Person {
    constructor(name = 'John', age = 25)
 {
        this.name = name;
        this.age = age;
   }
introduce() {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
}
celebrateBirthday() {
     this.age += 1;    
    return `Happy Birthday, ${this.name}! you are now ${this.age} years old!`;
}
}

const Mary = new Person ('Mary Brown', 35);

// running all prototype method on mary 
console.log(Mary.introduce());
console.log(Mary.celebrateBirthday());