let counter = 0;
function incrementalChange(num) {
    counter += num;
    return counter;
}
check = incrementalChange(2);
console.log(check); // => 2
check = incrementalChange(6);
console.log(check); // => 8
check = incrementalChange(-1);
console.log(check); // => 7
check = incrementalChange(2);

//why are the results not as expected?
// The results are not as expected because the variable check is not being updated after each call to incrementalChange.
// In the last line, check should be assigned the result of incrementalChange(2), but it is not.
// This means that the value of check will always be 2 after the last line is executed, regardless of the previous calls to incrementalChange.
// To fix this, we need to assign the result of incrementalChange(2) to check.