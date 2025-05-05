// YOUR CODE BELOW
// ### Crazy Caps

// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.

// ```javascript
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
// ```
// function crazyCaps(str) {
//   // YOUR CODE BELOW
//   let result = "";          // Initialize an empty string to store the result
//     // Loop through each character in the input string
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       result += str[i].toLowerCase();
//     } else {
//       result += str[i].toUpperCase();
//     }
//   }
//   return result + "!";
// }
// console.log(crazyCaps('fullstack is amazing')); // => fUlLsTaCk iS AmAzInG!

function crazyCaps(str) {
  let result = "";          // Initialize an empty string to store the result
  for(let i = 0; i<str.length;i++){
    if(i%2===0){
      result += str[i].toLowerCase();
    }
    else{
      result += str[i].toUpperCase();
    }
  }
  return result;
}
check = crazyCaps('fullstack is amazing');
console.log(check); // => fUlLsTaCk iS AmAzInG!
// => fUlLsTaCk iS AmAzInG!