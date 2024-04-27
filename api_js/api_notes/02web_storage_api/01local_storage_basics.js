/*
! Local Storage Basics
* Allows web applications to store key-value pairs in a web browsers pesistently across sessions.
? This is restricted using size (typically capped from browser to browser)
This information is available to view in your browser!

* To add something to our local storage, we can use:
  localStorage.setItem('myKey', 'myValue');
* Conversely, you can also remove, get, and set with similar syntax:
  localStorage.removeItem('color'), .setItem('username', 'Matt')
  localStorage.clear(); is also an option to remove all items.

  ! We can only store Strings in local storage!
* The work-around for this is to use JSON.stringify()

*/

localStorage.setItem('color', 'magenta');

localStorage.setItem('score', 1000); // 1000 will be converted to a string.

const score = localStorage.getItem('score'); // '1000'

const nums = [1, 2, 3, 4]
localStorage.setItem('nums', nums) // nums are stored as a comma-seperated list of strings!

localStorage.setItem('nums', JSON.stringify(nums)); // '[1, 2, 3, 4]'
//? When retrieving
JSON.parse(localStorage.getItem('nums')); // [1, 2, 3, 4]

/*
! What Should and Shouldn't Go into Local Storage?
* It should be used to store only -non-sensitive data-!
Analytics, ad tracking, user preferences, user interactions...nothing senstitive!!

! Syncing Tabs
* Often times, users have multiple tabs open in their browser for the same site (shopping on Amazon, comparing products, etc.)
* Therefore, it's important to keep these pages, changes, etc. in sync!

! sessionStorage
* Allows web applications to store key-value pairs in a web browser for a -single session-.

sessionStorage.setItem('sessionKey', 'sessionValue');
const sessionValue = sessionStorage.getItem('sessionKey');
sessionStorage.removeItem('sessionKey');
sessionStorage.clear();
*/
