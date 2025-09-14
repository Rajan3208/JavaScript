function setUsername(username) {
  this.username = username;
  console.log("Username set to:", username);
}

function newUser(username, email, phonenumber) {
  // Borrow setUsername function and set `this` context to current object
  setUsername.call(this, username);

  this.email = email;
  this.phonenumber = phonenumber;
}

// Create a new user object
const user1 = new newUser("Rajan", "rajan@example.com", "1234567890");

console.log(user1);
