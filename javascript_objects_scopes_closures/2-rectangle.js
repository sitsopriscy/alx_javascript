// Write a class Rectangle that defines a rectangle:

// You must use the class notation for defining your class
// The constructor must take 2 arguments w and h
// Initialize the instance attribute width with the value of w
// Initialize the instance attribute height with the value of h
// If w or h is equal to 0 or not a positive integer, create an empty object



class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w
      this.height = h
    }
  }
}

module.exports = Rectangle

// const r1 = new Rectangle(2, 3)
// console.log(r1)
// console.log(r1.width)
// console.log(r1.height)

// const r2 = new Rectangle(2, -3)
// console.log(r2)
// console.log(r2.width)
// console.log(r2.height)

// const r3 = new Rectangle(2)
// console.log(r3)
// console.log(r3.width)
// console.log(r3.height)

// const r4 = new Rectangle(2, 0)
// console.log(r4)
// console.log(r4.width)
// console.log(r4.height)

