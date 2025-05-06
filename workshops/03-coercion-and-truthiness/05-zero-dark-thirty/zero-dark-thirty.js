// YOUR CODE BELOW
function zeroDarkThirty(num) {
  result = "";
  if (num === 0) {
    return NaN;
  }
  a = num.toString();
  for (let i = 0; i < a.length; i++) {

    if (a[i] === '0') {
      continue; // skip the 0
    } 
      result += a[i];

  }
  return parseFloat(result);
}
check = zeroDarkThirty(12300456789);
console.log(check); // => 123456789

