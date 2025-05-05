// YOUR CODE BELOW
function exponentiate(base, exponent) {
    let final = 1;
    for(let i=0;i<exponent;i++){
        final = final * base;
        if(i==exponent-1){
            return final;
        }
    }

}
result = exponentiate(2, 3);
console.log(result); // 8

//what's wrong with the above code?
// The code is incorrect because it multiplies the base by itself in each iteration, which results in an exponential growth of the base.
// Now?
// The code is correct because it multiplies the base by itself in each iteration, which results in an exponential growth of the base.



