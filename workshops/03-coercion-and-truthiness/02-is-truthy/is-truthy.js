// YOUR CODE BELOW
function isTruthy(value) {
    if (value === undefined || value === null || value ===0 || value === "" || value === false || Number.isNaN(value))
{
    return "Argument is falsy";
  }
  else{
      return "Argument is truthy";
  }
}
check = isTruthy(0);
console.log(check);