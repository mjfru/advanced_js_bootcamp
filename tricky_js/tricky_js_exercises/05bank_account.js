/*
! Bank Account Exercise
Write a function called `createAccount` which accepts two arguments, a number for a PIN code and a number for an initial deposit amount.
The return value should be an object with four methods on it:

- checkBalance: Given the correct PIN, return the current balance.
(If the PIN is invalid, return "Invalid PIN.")

- `deposit`: Given the correct PIN and a deposit amount, increment the account balance by the amount.
(If the PIN is invalid, return "Invalid PIN.")

- `withdraw`: Given the correct PIN and a withdrawal amount, decrement the
account balance by the amount. 
You also shouldn't be able to withdraw more than you have. (If the PIN is invalid, return "Invalid PIN.")

- `changePin`: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return "Invalid PIN.")
*/

const createAccount = (pin, amount = 0) => {
  return {
    checkBalance(userPin) {
      if (userPin !== pin) {
        return 'Invalid PIN.'
      } else {
        // console.log(amount);
        return amount;
      }
    },

    deposit(userPin, deposit) {
      if (userPin !== pin) {
        return 'Invalid PIN.'
      } else {
        amount += deposit
        return `Successfully deposited ${deposit}. Current balance: ${amount}.`;
      }
    },

    withdraw(userPin, withdrawal) {
      if (userPin !== pin) {
        return 'Invalid PIN.'
      } else if ( withdrawal > amount ) { 
        return "Withdrawal amount exceeds account balance. Transaction cancelled."
      } else {
        amount -= withdrawal;
        return `Successfully withdrew ${withdrawal}. Current balance: ${amount}.`;
      }
    },

    changePin(oldPin, newPin) {
      if (oldPin !== pin) {
        return 'Invalid PIN.'
      } else {
        pin = newPin;
        return 'PIN successfully changed.'
      }
    }
  }
}

let account = createAccount(7777, 1000)
account.checkBalance(7777);
account.deposit(7777, 1000);
account.withdraw(7777, 500)