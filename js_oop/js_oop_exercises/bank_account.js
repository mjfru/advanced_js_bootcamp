// BankAccount class
// - Properties
//    - Balance (Defaults to 0 if not provided)
//    - accountHolder
//    - accountNumber
//  - Methods
//    - deposit(amt) - Increase balance by amt
//    - withdraw(amt) - Decrease balance by amt.

class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  
  deposit(amt) {
    if (amt > 0) {
      this.balance += amt;
      console.log(`Deposit of $${amt} successful. Your new balance is $${this.balance}.`);
    } else {
      console.log('Deposit amount must be more than $0.01.')
    }
  }
  
  withdraw(amt) {
    if (amt > this.balance) {
      console.log(`Insufficient funds. Your current balance is $${this.balance}.`);
    } else {
      this.balance -= amt;
      console.log(`Your withdrawal of $${amt} was successful. Your new balance is $${this.balance}.`)
    }
  }

  getBalance() {
    console.log(`Your balance is $${this.balance}.`)
  }
}

myAcct = new BankAccount("1234", "Matt")
myAcct.deposit(500);
myAcct.withdraw(150);
myAcct.getBalance();