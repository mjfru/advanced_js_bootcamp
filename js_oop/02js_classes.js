//! Classes in JavaScript
/*
If we need an object pattern in large quantities, it's quite a pain to replicate it over and over.
* The most popular way to solve this problem is with JavaScript classes.
* Classes are a 'blueprint' of functionality added in ES2015.
? They allow us to extract a pattern to combine functionality with data to generate instances of that pattern.
* Define the blueprint -> build things (objects) based on that blueprint.

* We can then instanstiate a new instance of using the 'new' keyword.

* Class names should be UpperCamelCase.
This reduces confusion between triangle (individual triangle) and Triangle (the class of -all- triangles).
*/

class Triangle {
  // This is not used until we actually instantiate an instance (below)
  getArea() {
    // Here we are defining the two methods every instance of a Triangle will have.
    return (this.a & this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

let myTri = new Triangle(); // Instantiation here
myTri.a = 3; // Can add or look at arbitrary properties
myTri.b = 4;
console.log(myTri);

myTri.getArea(); // 6
myTri.getHypotenuse(); // 5

myTri instanceof Triangle; // true

/*
! Constructors
Think about how we just made 'myTri'...we had to manually give it values in order to use some of our methods that required an 'a' and 'b' argument.
* Adding a particular-named method, constructor, will accomplish this for us.
* Any method named constructor will be called upon making a new instance.
? Here, we can initialize properties on an object.

The most common things to do with a constructor is to assign properties and validate data!
*/

class TriangleV2 {
  constructor(a, b) {
    //? This static method determines whether the passed value is a finite number -- checks if it is a number and if the number is neither positive infinity, negative infinity, nor NaN.
    if (!Number.isFinite(a) || a <= 0) throw new Error(`Invalid a: ${a}`);

    if (!Number.isFinite(b) || b <= 0) throw new Error(`Invalid b: ${b}`);

    // The provided a and b arguments will be assigned to...a and b!
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a & this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  describe() {
    return `The triangle with the side A of ${this.a} and side B of ${this.b} and has a total area of ${this.getArea()}.`;
  }
}

const tri = new TriangleV2(5, 12);
console.log(tri);

/*
! Methods
* Functions placed in a class are technically methods (formally, instance menthods).
! They have access to properties of the object with 'this'.
They take arguments and return data like any other function.
* A method can call another method as well! However, to do this, you need to call it on 'this'. (See above class example, called below).
*/

console.log(tri.describe());