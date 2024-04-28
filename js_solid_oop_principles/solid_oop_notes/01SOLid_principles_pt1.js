/*
! Solid OOP Principles
* A series of five design principles that pertain to OOP.
* Not specific to JS, they are applicable to any language that utilizes OOP.
? S.O.L.I.D. is actually an acronym and make up the topics this section will cover.

! S - Single Responsibility Principle (SRP)
* A class should have only one reason to change; it should only have one job or responsibility.
This usually means breaking up a big class into smaller ones to handle specific actions.
*/

// Before, not using SRP
class User {
  constructor(name) {
    this.name = name;
  }

  toJSON() {
    return JSON.stringify(this);
  }
}

// After, using SRP
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserSerializer {
  static toJSON(user) {
    return JSON.stringify(user);
  }
}

/*
* The the second example, each class has a single responsibility.
? The User class is solely concerned with the user's attributes and their management while UserDataManager class is solely concerned with user data persistence.
! Each class now has only one reason to change.
*/

/*
! O - Open/Closed Principle (OCP)
* Software entities (classes, modules, functions) should be open for extension but closed for modification.
? This means that the behavior of a module can be extended without modifying its source code.
Create new classes rather than changing the logic of one to account for more possibilities.

! L - Liskov Substitution Principle (LSP)
* Objects of a superclass should be able to be replaced with objects of a subclass without affecting the correctness of the program.
Ensuring a subclass can stand in for its parent class.
*/

class Bird {
  fly() {
    console.log('This bird can fly!');
  }
}

class Duck extends Bird {
  fly() {
    console.log('Duck flying!')
  }
}

class Eagle extends Bird {
  fly() {
    console.log("Eagle flying!")
  }
}

class Penguin extends Bird {  //! This violates LSP, it cannot use the fly method.
  fly() {
    throw new Error('Hey! Penguins cannot fly!')
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const eagle = new Eagle();

makeBirdFly(duck); // Works fine!
//* To fix the problem above, we might make a new FlyingBirdClass that extends Birds and apply the correct class / subclass to birds that can actually fly.