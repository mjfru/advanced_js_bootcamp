/*
! Design Patterns in JavaScript Pt. 2
! Observer, Registry

! Observer Pattern
* The Observer Pattern enables a subscription model where objects (observers) "listen" to events to get notified when events occur.

* Real-world examples:
  - JavaScript's own event handling in browsers (DOM event listeners) is built upon the Observer pattern!
  - Vue.js uses a reactive data model where component re-renders are triggered by data changes, which is an application of this pattern.
  - RxJS is a library that provides utilities for working with observables, making extensive use of this pattern.
*/

class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((o) => o !== fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const observer1 = data => console.log(`Observer 1!`, data);
const observer2 = data => console.log(`Observer 2!`, data);
const observer3 = data => console.log(`Observer 3!`, data);

const subject = new Subject();
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

/*
! Registry Pattern
* The registry pattern is a design pattern used to store and retrieve instances of objects.
* It acts like a central place to manage the objects and it's particularly useful when you want to access the instances from different parts of your application without needing to pass them around as parameters.

? Imagine a farm scenario where we need to keep track of all our chickens.
? Instead of passing around a list of chickens or trying to remember where we last accessed a particular chicken, we can use the registry pattern to provide centralized access.
? In the example below, each chicken will have a unique ID (e.g. a tag number) and some properties like name, age, and breed.
*/

class Chicken {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

class ChickenRegistry {
  // Private class field and map to store the list of chickens
  #chickens = new Map();

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error("Chicken must have an ID!");
    }
    this.#chickens.set(chicken.id, chicken);
  }

  getChicken(id) {
    return this.#chickens.get(id);
  }

  removeChicken(id) {
    this.#chickens.delete(id);
  }

  getAllChickens() {
    return [...this.#chickens.values()];
  }
}

const chicken1 = new Chicken(1, 'Henry', 3, 'Silkie');
const chicken2 = new Chicken(2, 'Banjo', 3, 'Leghorn');

const farm = new ChickenRegistry();
farm.addChicken(chicken1);
farm.addChicken(chicken2);

console.log(farm.getChicken(1));