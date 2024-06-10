/*
! Design Patterns in JavaScript Pt. 3
! Mixin Pattern (Mix-in)
* A pattern involving mixing functionality from one object to another.
*/

const fly = {
  fly() {
    return `${this.name} flies!`
  },
  land() {
    return `${this.name} lands!`
  }
}

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  greet() {
    return `${this.name} says hi!`;
  }
}

const bernie = new Animal("Bernie", "Pelican");
Object.assign(bernie, fly);
console.log(bernie); // Now has fly and land