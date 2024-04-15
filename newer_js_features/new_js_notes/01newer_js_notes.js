/*
! Features in Newer JavaScript

! Optional Chaining
* Optional chaining allows reading the value of a property located deep within a chain of connected objects WITHOUT having to check each reference in the chain.
This can also be used to call a method if it's available
user.greet?.();
*/

const user = {
  name: 'Alice',
  address: {
    city: 'Wonderland'
  }
};

//? Traditional Way: Check each property in the chain:
const city = user && user.address && user.address.city;
//? New Way w/ Optional Chaining:
const optCity = user?.address?.city; // Outputs 'Wonderland'
console.log(optCity);

/*
! Nullish Coalescing Operator
* This crazy sounding operator is a logical operator that returns its -RIGHT-HAND- operand when its left-hand operand is null or undefined...and otherwise returns its left-hand operand.
* This is a way to handle default values more predictably than using the OR || operator.
? The problem with the old way is that if we have any falsy value on the left side, we'll get our default value.
*/

//? Old way:
const streetAddress = user?.address?.city?.street || "street unknown"
console.log(streetAddress);

//? New way:
const NCstreetAddress = user?.address?.city?.street ?? "street unknown";
console.log(NCstreetAddress);

/*
! Numeric Seperators
* These enhance readability by allowing underscores inserted between digits in numeric literals.
*/

//? Long numeric values can be hard to parse at a glance with our usual commas.
const withoutSeperator = 1000000000;
console.log(withoutSeperator);

//? Using the numeric seperator for better readability
const withSeperator = 1_000_000_000;
console.log(withSeperator);

/*
! Array.prototype.at()
* This allows us to access elements out of an array at an index!
? While this is similar to what we can already do, it also accepts negative values (-1) gives us the last thing in the array, for example.
*/

const colors = ['red', 'orange', 'yellow', 'green']
console.log(colors.at(-1));

/*
! .replaceAll() - method for strings
* Allows us to replace all occurences of a substring within a string.
*/

const str = "I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cat. cat. cat. cat...";
//? The existing .replace() method replaces only the first instance of the string.

const newStr = str.replaceAll("cat", "dog");
console.log(newStr);

//? You can pass in a regular expression with the 'g' (global flag) to account for different capitalization, etc.
str.replaceAll(new RegExp("cat", "g"), "dog");