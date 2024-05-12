class Scooter {
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge > 20 && !this.isBroken) {
      this.user = user;
      this.station = null;
      console.log(`Scooter ${this.serial} is rented to ${user.username}`);
    } else {
      if (this.isBroken) {
        throw new Error("Scooter needs repair");
      } else {
        throw new Error("Scooter needs to charge");
      }
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
    console.log(`Scooter ${this.serial} is docked at ${station}`);
  }

  static nextSerial = 1;
}

// Test
const myScooter = new Scooter("Station A");
console.log(myScooter);


module.exports = Scooter
