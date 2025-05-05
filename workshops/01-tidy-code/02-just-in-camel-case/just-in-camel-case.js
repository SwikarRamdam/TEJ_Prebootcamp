// YOUR CODE BELOW
function justInCamelCase(undername) {
  let camelCaseoutput = "";
    let foundunder = false;
    for(let i = 0; i<undername.length; i++) {
    if (undername[i] === "_") {
      foundunder = true;
      } else {
        if (foundunder) {
        camelCaseoutput += undername[i].toUpperCase();
      foundunder = false;
    } else {
      camelCaseoutput += undername[i];
      }
  }
  }
      return camelCaseoutput;
}
