class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
      console.log(`${this.username} is logged in`);
    } else {
      throw new Error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.username} is logged out`);
  }
}

// Test
const user1 = new User("JohnDoe", "password123", 25);
console.log(user1);


module.exports = User
