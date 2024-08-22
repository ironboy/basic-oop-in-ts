import Pet from './Pet.js';

export default class Person {

  name: string;
  age: number;
  myFriends: Person[];
  myPets: Pet[];

  constructor(name = 'Jane Doe', age = 30) {
    this.name = name;
    this.age = age;
    this.myFriends = [];
    this.myPets = [];
  }

  sayHi() {
    return `Hi! I am ${this.name} and I am ${this.age} years old!`;
  }

  sayHiToAnotherPerson(person: Person) {
    if (this.myFriends.includes(person)) {
      return `Hi there my friend, ${person.name}!`;
    }
    let sayHiResult = this.sayHi();
    sayHiResult = sayHiResult.replace('Hi!', `Hi ${person.name}!`);
    return sayHiResult;
  }

  addFriend(person: Person) {
    // this.myFriends.push(person); - old school
    this.myFriends = [...this.myFriends, person];
  }

  tellMeAboutYourFriends() {
    return `Hi! I am ${this.name} and I have some friends: ` +
      `${this.myFriends.map(friend => friend.name).join(', ')}!`;
  }

  addPet(pet: Pet) {
    // remember that this is "me"
    pet.addOwner(this);
    this.myPets = [...this.myPets, pet];
  }

  tellMeAboutYourPets() {
    return `Hi! I am ${this.name} and I have some pets:\n` +
      `${this.myPets.map(pet =>
        `A ${pet.species} named ${pet.name}.`
      ).join('\n')}`
  }
}