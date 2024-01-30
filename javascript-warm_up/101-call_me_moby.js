/**
 * Write a function that executes x times a function.
 * The function must be visible from outside
 * Prototype: function (x, theFunction)
 * You are not allowed to use var
 */

// Declare an object with a method named 'executeXTimes'

const objectXtimes = {
    Xtimes: function (x, theFunction) {
        for (let i = 0; i < x; i++) {
            theFunction()
        }
    }

}

// Example:

// objectXtimes.Xtimes(3, function() {
//     console.log("C is fun")
// })

