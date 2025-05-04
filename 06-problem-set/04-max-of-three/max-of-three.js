// YOUR CODE BELOW
function maxOfThree(a, b, c) {
    // Check if a is greater than b and c
    if (a >= b && a >= c) {
        return a;
    }
    // Check if b is greater than a and c
    else if (b >= a && b >= c) {
        return b;
    }
    // If neither a nor b is the greatest, then c must be the greatest
    else {
        return c;
    }
}
console.log(maxOfThree(1, 2, 3)); // => 3