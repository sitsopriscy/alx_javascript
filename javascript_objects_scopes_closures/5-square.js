// Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:

// You must use the class notation for defining your class and extends
// The constructor must take 1 argument: size
// The constructor of Rectangle must be called (by using super())


const Rectangle = require('./4-rectangle')

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }
}

module.exports = Square



// const s1 = new Square(4)
// s1.print()

// console.log('Double:')
// s1.double()
// s1.print()
