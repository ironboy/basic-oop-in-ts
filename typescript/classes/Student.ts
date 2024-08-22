import Person from './Person.js';

// What does Student extends Person mean?
// * Another common way of saying this is:
//   "Student is a class the inherits from Person"
// * But what does it really mean?
//   A Student inherits all properties and methods
//   that a Person has, but then we can add our own
//   extra properties and methods
export default class Student extends Person {

  education: string;

  constructor(name: string, age: number, education: string) {
    /*this.name = name;
    this.age = age;*/

    // call the constructor of my super class
    super(name, age);

    this.education = education;
  }

  tellMeAboutYourEducation() {
    return super.sayHi() + ` And I study to become a ${this.education}!`;
  }

  // override: a method with the same name in a sub class
  // does something different than the method in the super class
  sayHi() {
    return this.tellMeAboutYourEducation();
  }

}