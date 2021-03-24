// Build a Car class!
class Car {
  constructor(make, model) {
    this.model = model
    this.make = make
    this.odometer = 0
  }
  drive(dist) {
    this.odometer += dist
    return dist
  }
}

module.exports = Car
