// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    // Step 1: If startIdx is not provided, set it to 0 (start searching from the beginning)
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    // Step 2: Loop through the source string starting from startIdx
    for (let i = startIdx; i <= source.length - searchValue.length; i++) {
      // Step 3: Assume the searchValue is found at the current index (i)
      let found = true;
  
      // Step 4: Check each character of searchValue against the corresponding characters in source
      for (let j = 0; j < searchValue.length; j++) {
        if (source[i + j] !== searchValue[j]) {
          // Step 5: If any character doesn't match, set found to false and break out of the loop
          found = false;
          break;
        }
      }
  
      // Step 6: If found is still true, return the current index (i)
      if (found) {
        return i;
      }
    }
  
    // Step 7: If the loop completes without finding searchValue, return -1
    return -1;
  }
    // Test cases
    console.log(myIndexOf("hello world", "world")); // 6
    console.log(myIndexOf("hello world", "lo")); // 3