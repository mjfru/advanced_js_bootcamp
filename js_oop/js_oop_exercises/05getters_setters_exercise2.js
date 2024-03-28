/*
! Getters & Setters Exercise
Create a class UserProfile that encapsulates a user's profile information.

This class should have fields for username, email, and birthdate.
Use getters and setters to validate that the username is a non-empty string, the email includes an '@' symbol, and the birthdate is a valid date string.

If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'

If the email does not include a @ character - throw an error with the message of 'Invalid email.'

If the birthdate is not a valid date string (for example '1990-01-01') - throw an error with the message of 'Invalid birthdate.'

Make sure to also use the setters that you write (with the implemented validations) in the constructor function of the class, so it also validates the fields when the object is initially created from the class (i.e., when the constructor function is initially executed).

Note - the Udemy IDE does not run the latest version of JavaScript, so you will be unable to use private fields.
Instead, you can have fields that start with an underscore.
*/

class UserProfile {
  constructor(username, email, birthdate) {
    this._username;
    this._email;
    this._birthdate;
    
    this.username = username;
    this.email = email;
    this.birthdate = birthdate;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Invalid username.');
    } else {
      this._username = value;
    }
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Invalid email.');
    } else {
      this._email = value;
    }
  }

  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
      throw new Error ('Invalid birthdate.');
    } else {
      this._birthdate = value;
    }
  }
}