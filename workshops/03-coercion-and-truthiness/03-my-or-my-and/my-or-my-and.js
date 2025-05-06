// YOUR CODE BELOW
// ### My Or, My And

// Define a function, `myOr`, that accepts three arguments of any type.

// `myOr` should return the same result as the built-in `||` operator:

// ```javascript
// ```

// Then, define a function, `myAnd`, that accepts three arguments of any type.

// `myAnd` should return the same result as the built-in `&&` operator:

// ```javascript
// myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
// ```

// function myOr(a, b, c) {
//     if (a === true) {
//         return a;
//     } else if (b === true) {
//         return b;
//     } else if (c === true) {
//         return c;
//     } else {
//         return false;
//     }
// }
// check = myOr(1, 'apples', true)
// console.log(check); // => true
function myAnd(a, b, c) {
    if (a === false) {
        return a;
    } else if (b === false) {
        return b;
    } else if (c === false) {
        return c;
    } else {
        return true;
    }
}

// check = myAnd(1, 'apples', true)
check = myAnd(1, 'apples', false)
console.log(check); // => true


//what is the difference between myOr and myAnd?
// myOr returns true if any of the arguments are true, while myAnd returns true only if all of the arguments are true.
// myOr returns false if all of the arguments are false, while myAnd returns false if any of the arguments are false.
//How is the logic used here?
// The logic used in myOr and myAnd is based on the truthiness and falsiness of the arguments passed to them.

//why we equated to true in myOr and false in myAnd?
// In myOr, we check if any of the arguments are true, so we return true if any of them are true.
// In myAnd, we check if all of the arguments are true, so we return false if any of them are false.