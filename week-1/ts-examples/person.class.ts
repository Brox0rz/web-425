import { IPerson } from './person.interface';

export class Person implements IPerson {
  constructor(public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Usage
const person = new Person("Brock", "Hemsouvanh");
console.log(person.getFullName());
