// YOUR CODE BELOW
// ### How Equal

// Define a function, `howEqual`, that accepts two arguments of any type.

// `howEqual` should return the string 'loosely' if the two values passed into
// the function are loosely equal. `howEqual` should return 'strictly' if the two
// values are strictly equal. `howEqual` should return the string 'not equal' if
// the two values are neither strictly nor loosely equal.

// ```javascript
// howEqual(0, '0'); // => loosely
// howEqual(3, 9/3); // => strictly
// howEqual(true, 'truthy') // => not equal

function howEqual(a, b) {
  if (a == b) {
    return 'loosely';
  } else if (a === b) {
    return 'strictly';
  } else {
    return 'not equal';
  }
}
check = howEqual(0, '0'); // => loosely
console.log(check);