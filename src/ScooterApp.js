// Require the User and Scooter classes
const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  constructor() {
    this.stations = {
      "Station A": [],
      "Station B": [],
      "Station C": []
    };
    this.registeredUsers = {};
  }
  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered");
    }
    if (age < 18) {
      throw new Error("User is too young to register");
    }
    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    console.log(`${username} has been registered`);
    return user;
  }
  
  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
      throw new Error("Username or password is incorrect");
    }
    user.login(password);
    console.log(`${username} is logged in`);
  }
  
  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("No such user is logged in");
    }
    user.logout();
    console.log(`${username} is logged out`);
  }
  
  createScooter(stationName) {
    if (!this.stations[stationName]) {
      throw new Error("No such station");
    }
    const scooter = new Scooter(stationName);
    this.stations[stationName].push(scooter);
    console.log(`Created new scooter at ${stationName}`);
    return scooter;
  }
  
  dockScooter(scooter, stationName) {
    if (!this.stations[stationName]) {
      throw new Error("No such station");
    }
    if (scooter.station === stationName) {
      throw new Error("Scooter is already at the station");
    }
    scooter.dock(stationName);
    this.stations[stationName].push(scooter);
    console.log(`Scooter ${scooter.serial} is docked at ${stationName}`);
  }
  
  rentScooter(scooter, user) {
    if (scooter.user) {
      throw new Error("Scooter is already rented");
    }
    const station = this.findScooterStation(scooter);
    if (!station) {
      throw new Error("Scooter is not at any station");
    }
    const index = station.indexOf(scooter);
    station.splice(index, 1);
    scooter.rent(user);
    console.log(`Scooter ${scooter.serial} is rented to ${user.username}`);
  }
  
}


module.exports = ScooterApp
