/*
! Newer Feature in JavaScript OOP
* Getters & Setters
? JS provides special methods, termed 'getters' and 'setters', which allow you to define the ways to retrieve or change the values of object properties respectively.

* Getters - Allow us to retrieve the value of an object's property.
? get methodName();
*/

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  // Getter for the diameter:
  get diameter() {
    return this._radius * 2;
  }
  // Something like this._diameter = radius * 2 or getDiameter() { return this._radius * 2 } but we would be calling this as a method.
  // Using the getter allows us to access it like we would any other property.
  //! Especially helpful when we have properties that are derived off of other values (like radius to diameter).

  get radius() {
    return this._radius; // I don't want you to access this directly, please use the getter instead.
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10, notice no parentheses!
//? The '_' indicates that something is not meant to be accessed outside of the class to other developers. Purely stylistic but is becoming antiquated with newer features.
console.log(circle.radius); // 5

/*
! Setters
* Setters allow us to set the value of an object's property.
? The 'set' keyword in front of a function allows us to update and use a property (with some logic if needed).
The setter in the example below ensures that the radius of the circle is NOT set to a negative value.
* Setters can be very useful for validation and to make the constructor shorter.
*/

class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    this._radius = radius;
    if (Circle.allowedColors.has(color)) {
      this._color = color;
    } else {
      throw new Error("That color is not allowed.");
    }
    this._color = color;
  }
  // Setter for the radius
  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }

  get radius() {
    return this._radius;
  }

  set color(newColor) {
    if (allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That color is not allowed.");
    }
  }

  get color() {
    return this._color;
  }
}

const circleTwo = new Circle(4, "green");
circleTwo.radius = 3; // Radius cannot be negative!

const c = new Circle(10, "red");
console.log(c);
