// Write a class Rectangle that defines a rectangle:

// You must use the class notation for defining your class
// The constructor must take 2 arguments: w and h
// Initialize the instance attribute width with the value of w
// Initialize the instance attribute height with the value of h
// If w or h is equal to 0 or not a positive integer, create an empty object
// Create an instance method called print() that prints the rectangle using the character X
// Create an instance method called rotate() that exchanges the width and the height of the rectangle
// Create an instance method called double() that multiples the width and the height of the rectangle by 2

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w
            this.height = h
        }
    }

    print() {
        if (this.width && this.height) {
            for (let i = 0; i < this.height; i++) {
                console.log('X'.repeat(this.width))
            }
        }
    }

    rotate() {
        [this.width, this.height] = [this.height, this.width]
    }

    double() {
        this.width *= 2
        this.height *= 2
    }
}

module.exports = Rectangle


// const r1 = new Rectangle(2, 3);
// console.log('Normal:');
// r1.print();

// console.log('Double:');
// r1.double();
// r1.print();

// console.log('Rotate:');
// r1.rotate();
// r1.print();
