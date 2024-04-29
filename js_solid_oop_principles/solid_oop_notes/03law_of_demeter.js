/*
! Law of Demeter - Standalone outside of the SOLID principles.
! The Principle of Least Knowledge
* The main idea is to ensure that our objects don't reveal too much about their structure or their collaborators' structures.
? Only talk to your immediate friends! Don't reach through multiple objects. Use 'one dot'.

? Consider a scenario where cats have a favorite toy and each toy has a color.
? If someone wants to know the color of a cat's favorite toy, it would be inappropriate for them to directly inquire about the toy's color from the cat object.
*/

class Wallet {
  constructor(money) {
    this.money = money;
  }

  debit(amount) {
    this.money -= amount;
  }

  getMoney() {
    return this.money;
  }
}

class Person {
  constructor(wallet) {
    this.wallet = wallet;
  }

  getWallet() {
    return this.wallet;
  }

  payAmount(amount) {
    this.wallet.debit(amount);
  }
}

class ShoppingMall {
  chargeCustomer(person, amount) {
    person.payAmount(amount);
  }
}

let wallet = new Wallet(100);
let person = new Person(wallet);
let mall = new ShoppingMall();

mall.chargeCustomer(person, 50);