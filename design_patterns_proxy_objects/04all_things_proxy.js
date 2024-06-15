/*
! The Proxy Pattern & Proxy Objects
* 
*/

const cat = {
  name: "Blue",
  age: 7,
  breed: "Scottish Fold"
}
// Instead of interacting with the object itself, we can use the Proxy!

const catProxy = new Proxy(cat, {});
// Changes made to the Proxy will not have any bearing on the original object.

const handler = {
  get: function(obj, property) {
    // return "Haha";
    console.log(`Accessing ${property} from object.`);
    return obj[property]
  },
  set: function(obj, property, value) {
    if(property === "age") {
      if (value < 0)  {
        obj[property] = 0;
      } else {
        obj[property] = value;
      }
    }
  },
};

const catProxy2 = new Proxy(cat, handler);
// All values now return...'Haha' (if not commeneted out).
console.log(catProxy.age);

/*
! Proxying Function Calls
*/

function multiply(a, b) {
  console.log(a * b);
}

const proxyHandler = {
  apply: function(targetFunc, thisArg, argsList) {
    console.log("You ran the function!");
    console.log("args are: ", argsList);
    targetFunc(...argsList);
  }
}

const multiplyProxy = new Proxy(multiply, proxyHandler);