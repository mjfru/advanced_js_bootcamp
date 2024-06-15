const input = document.querySelector("#usernameInput");
const h1 = document.querySelector("#usernameDisplay");

const userInfo = {
  username: ""
};

const handler = {
  set: function(obj, property, newValue) {
    // console.log("You are setting a property!");
    obj[property] = newValue;
    h1.textContent = "Hello there, " + newValue;
  }
}

const userProxy = new Proxy(userInfo, handler);

input.addEventListener('keyup', (e) => {
  userProxy.username = e.target.value;
})