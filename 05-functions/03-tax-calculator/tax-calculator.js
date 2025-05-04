// YOUR CODE BELOW
// Define a function `taxCalculator` that accepts the price of an item and a state.
// `taxCalculator` should return the after-tax cost of the item, assuming NY's tax
// is 4% and NJ's sales tax is 6.625%.

function taxCalculator(price, state) {
    // YOUR CODE HERE
    let tax;
    if (state === "NY") {
        tax = 0.04;
    } else if (state === "NJ") {
        tax = 0.06625;
    } else {
        return "Invalid state";
    }
    return price + (price * tax);
}
var result = (taxCalculator(100, "NY")); // => 104
console.log(result);
var result2 = taxCalculator(100, "NJ"); // => 106.625 
console.log(result2);