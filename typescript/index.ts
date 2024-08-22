import Person from './classes/Person.js';
import Student from './classes/Student.js';
import Pet from './classes/Pet.js';

function betterTypeOf(value: any) {
  if (value === undefined) { return 'undefined' };
  if (value === null) { return 'null'; }
  return value.constructor.name;
}

// create an array with some instances of the Person classes
const somePersons = [
  new Person('Gabriel', 28),
  new Person('Thomas', 51),
  new Student('Mikaela', 35, 'Frontendutvecklare'),
  new Person()
];

for (let person of somePersons) {
  console.log(`A ${betterTypeOf(person)} says hi`, person.sayHi());
}

let gabriel = somePersons[0];
let mikaela = somePersons[2];

console.log('mikaela: Calling sayHi');
console.log(mikaela.sayHi());
console.log('mikeala: Calling sayHiToAnotherPerson');
console.log(mikaela.sayHiToAnotherPerson(gabriel));

mikaela.addFriend(gabriel);
// mikaela makes friends easily
mikaela.addFriend(somePersons[1]);
mikaela.addFriend(somePersons[3]);

gabriel.addFriend(mikaela);

console.log("mikaela tellMeAboutYourFrinends",
  mikaela.tellMeAboutYourFriends());

console.log("gabriel tellMeAboutYourFrinends",
  gabriel.tellMeAboutYourFriends());

let garfield = new Pet('Garfield', 'cat');
let fido = new Pet('Fido', 'dog');
let sam = new Pet('Sam', 'snake');

mikaela.addPet(garfield);
mikaela.addPet(sam);
gabriel.addPet(fido);

let thePets = [garfield, fido, sam];
for (let pet of thePets) {
  console.log(pet.sayHi());
}

console.log(mikaela.tellMeAboutYourPets());
console.log(gabriel.tellMeAboutYourPets());

// Mikaela is the only Person that is a Student
// let her tell you about herself and her education
// - here TypeScript is not intelligent enough
//   to infer that the mikaela variable was
//   created as an instance of Studnet
//   so we have to help it with a type check
//   using instanceof...
mikaela instanceof Student &&
  console.log(mikaela.tellMeAboutYourEducation());

// instanceof 
// check if an object is an instance of class
console.log('Is Mikeala a person?', mikaela instanceof Person);
console.log('Is Mikeala a student?', mikaela instanceof Student);
console.log('Is Gabriel a person?', gabriel instanceof Person);
console.log('Is Gabriel a student?', gabriel instanceof Student);