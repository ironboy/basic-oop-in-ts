import Person from './Person.js';

export default class Pet {

  name: string;
  species: string;
  owner!: Person;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  addOwner(owner: Person) {
    this.owner = owner;
  }

  sayHi() {
    return `I'm ${this.name} and I'm a ${this.species}! ` +
      (this.owner ? `My owner is ${this.owner.name}.` : '');
  }

}