/*
! Solid OOP Principles
! I - Interface Segregation Principle (ISP)
* A class should not be forced to implement intertfaces it does not use.
Applies the least to JS because it doesn't use interfaces like Java or TypeScript do.
? However, the principle can still be applied conceptually using duck typing or optional methods.
*/

class Worker {
  work() {
    console.log('Working on work!')
  }
  eat() {
    console.log('Eating some food!')
  }
  sleep() {
    console.log('Sleeping away!')
  }
}

// Not really implementing ISP, they should all be seperated into their own classes...again, it's hard to illustrate in VanillaJS:
function manageWork(worker) {
  worker.work();
}

/*
! D - Dependency Inversion Principle (DIP)
* High-level modules (main application logic) should not depend directly on low-level modules (like specific tools or libraries).
* Both should depend on abstractions (interfaces or general ideas).

? Imagine we're building an application where users sign in. Initially, users sign in using a username and password.
? In the future, you might want to allow sign-in using email, phone number, or even third-party providers like Google.
* If we tightly couple your authentication mechanism to a specific method, every time you ant to introduce a new method, you'll end up rewriting a significant part of your code.
*/

class UsernamePasswordAuth {
  authenticate(username, password) {
    // Logic goes here
  }
}

//? This is too tighly coupled to using authenticate.
class User {
  login(username, password) {
    const auth = new UsernamePasswordAuth();
    return auth.authenticate(username, password);
  }
}
/*
* To solve this using DIP, you create an abstract AuthMethod and ensure that your main User class depends on this abstraction, not a specific implementation.
* This way, adding a new authentication method becomes much easier.
*/

//? With DIP
class AbstractAuthMethod {
  authenticate(credentials) {
    throw new Error('This method should be overriden');
  }
}

class UsernamePasswordAuth extends AbstractAuthMethod {
  authenticate({ username, password }) {
    // Logic here...
  }
}

class EmailAuth extends AbstractAuthMethod {
  authenticate({ email, token }) {
    // Logic here...
  }
}


class User {
  constructor(authMethod) {
    if (!(authMethod instanceof AbstractAuthMethod)) {
      throw new Error('Invalid authentication method!');
    }
    this.authMethod = authMethod;
  }

  login(credentials) {
    return this.authMethod.authenticate(credentials);
  }
}

/*
By using DIP in our authentication example, the User class doesn't need to change every time we introduce a new way to authenticate.
We just create a new class extending AuthMethod and pass it to the User class.
This abstraction ensures that our main logic remains stable and unaffected by changes in lower-level modules (different authentication methods)
*/