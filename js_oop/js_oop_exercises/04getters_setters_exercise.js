class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ")
    this.firstName = first;
    this.lastName = last;
  }
}

const me = new Person("Mats", "Olsson");
console.log(me.fullName);
me.fullName = "Bart Simpson"
console.log(me.fullName);
