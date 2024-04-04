/*
! OOP Under the Hood
? What's behind the syntactic sugar of Class, new? What the hecko are prototypes? Another meaning for constructor functions?

! The 'New' Keyword
* Of course, we use the word 'new' to create instances of a class or even arrays and/or object.
* It does four main things for us:
  1. Creates an empty object
  2. Sets the keyword 'this' to be that object
  3. Returns the object - return this
  4. Creates a link to the object's prototype.
? For now, let's focus on the first three points.

Before modern OOP, we used to have to write a constructor function.
*/

// The capital letter would indicate a constructor function.
function Dog(name, breed) {
  console.log("This is: ", this)
  this.name = name;
  this.breed = breed;
}

Dog("Wyatt", "Golden Retriever");
// What happened here? -- This is refering to the window!
new Dog("Wyatt", "Golden"); // Now it returns what we expect, it set 'this' to be the object.

function User(username, email) {
  this.username = username;
  this.email = email;
  this.isAdmin = false;
}

new User("John", "jj@gmail.com");