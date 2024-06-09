/*
! Design Patterns in JavaScript Pt. 1
! Module & Singleton
* These are common approaches to common problems but there's no single 'silver bullet'.

! Module Pattern
* The Module Pattern ensures private and public encapsulation in JavaScript, protecting the global namespace and diminishing naming conflicts

* Real-world Examples:
  - jQuery uses the Module Pattern to protect internal details and reveal only the public API.
  - RequireJS, another open-source library that manages module loading and dependencies, implements a variation of the Module Pattern.
*/

const ChickenModule = (() => {
  const eggColor = 'white'; // private variable
  const cluck = () => {
    console.log('Cluck cluck!'); // private function
  }
  // What do we actually want people to interact with? 
  return {
    layEgg: () => {
      console.log(`Laid a ${eggColor} egg.`);
      cluck();
    }
  };
})();

ChickenModule.layEgg();

//

const myModule = (() => {
  const privateVariable = 'I am private!';
  const privateMethod = () => 'I am a private method!';
  return {
    publicVar: "I am public!",
    publicMethod: () => {
      console.log("Calling private method...: ", privateMethod());
    }
  };
})();

myModule.publicMethod();

//

const counter = (() => {
  let count = 1;
  return {
    getCount: () => count,
    increment: () => count++
  };
})();

counter.getCount();

/*
! The Singleton Pattern
* A Singleton Pattern assures only one instance of a class.
? Why would we want this? -- Consistent logging, having one configuration file, database connections are all instances of what we would only ever want one instance of.

* Real-world Examples:
  - The Redux store in React applications acts as a Singleton, ensuring a singular store instance.
  - Node.js module system caches modules, so repeated require calls for the same module don't recreate the module but return the cached version, acting like a Singleton.
*/

// Provides a method called getInstance, which returns an object by calling createInstance but only ONE time.
const ChickenFarm = (() => {
  let instance;
  const createInstance = () => ({ totalChickens: 100 });
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

//

class DatabaseConnection {
  constructor() {
    if (!DatabaseConnection.instance) {
      this.connect = this.createConnection();
      // Assume createConnection establishes a database connection
      DatabaseConnection.instance = this;
    }
    return DatabaseConnection.instance;
  }

  createConnection() {
    // Logic to connect to the database:
    console.log('Creating a connection to the database...');
    return { connection: 'I am the database connection object.' };
  }
}