/**
 * Write a function that executes x times a function.
 * The function must be visible from outside
 * Prototype: function (x, theFunction)
 * You are not allowed to use var
 */



// const objectXtimes = {
//     Xtimes: function (x, theFunction) {
//         for (let i = 0; i < x; i++) {
//             theFunction()
//         }
//     }

// }

// Example:

// objectXtimes.Xtimes(3, function() {
//     console.log("C is fun")
// })

const objectXtimes = {
    Xtimes: function(x, theFunction) {
      for (let i = 0; i < x; i++) {
        theFunction()
      }
    }
  }
  
  // Example usage
  const callMeMoby = () => console.log("C is fun")
  
  objectXtimes.Xtimes(5, callMeMoby)
  

