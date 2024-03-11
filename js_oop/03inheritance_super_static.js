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
*/