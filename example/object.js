let 
class Person {
  name;
  age;
  phoneNumber;
  constructor(name, age, phoneNumber) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }
  makeSound() {
    console.log("yea");
  }
}
let temka = new Person("temka", 21, "88090932");
temka.makeSound();
