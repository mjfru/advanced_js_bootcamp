/*
! Inheritance - The Basics
Imagine we want something very similar to a class we already have; maybe one or two methods are slightly different.
? While we can create an entirely new class, it's a lot of duplication!
* The better way to do this is with inheritance!
  
  ? class NewClass extends OriginalClass {}
  ! Now, you can use all the methods of the OriginalClass but you can overwrite what you want to be unique for your NewClass.


! Super
If we want to add a new property to a pre-existing class (like adding on a color from our previous triangle example)...we run into problems!
We need a way to call the constructor from the parent...but add our own new properties to this new class.
* Enter 'super'; it calls the parent constructor and expects its arguments and then allows you to add on whatever you want afterwards.
! You only need to do this if you need to add-on to the parent constructor.

  ? class NewClass extends OriginalClass {
  ? constructor(a, b, c)    <--- 'c' is new for this example
  ?   super(a, b);          <--- using the parent class
  ?   this.c = c;           <--- adding a new property
  ? };


! Static Properties
* Modern JS also offers "static properties", where individual pieces of data are on the class, not on instances.
? Other OO languages often all this idea a "class attribute".

Examples:
*/
class CatWithStaticProp {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  // Good example of a static property: All instances of cats are the same species, it doesn't vary one to another!
  // It will never be tied to any instance of this class, it'll always be the same and be included with every instance instantiated in this class.
  static genusSpecies = "feline catus";

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}.`;
  }

  //? Static Method:
  static meow() {
    return "MEOOOOOOOW";
  }
}

console.log(CatWithStaticProp.genusSpecies);
cat = new CatWithStaticProp("Tom", "Tabby");
console.log(cat.name);
console.log(cat.describe());
// cat.meow() will NOT work, it will only work as CatWithStaticProp.meow();

/*
! Static Methods
* Static methods, similar to static properties, are methods that are called on a Class, not an object!
*   Therefore, it cannot have access to individual object attributes.
? In a static method, 'this' will refer to...the entire class itself.
Almost every other OO language more properly calls this a 'class method' since it does have access to the class itself.

? So, when would we ever use these?
When we want to group together related functionality...think about the Math object that we can use and access within JavaScript!
These are all functions that could exist on their own, but it's more convenient to have them grouped together.

Another common use case if to create factory methods.
These can help us in the create of a new instance of a class.
*/
class User {
  static registerUser(username, password) {
    return {
      username: username,
      password: password
    }
  }
}