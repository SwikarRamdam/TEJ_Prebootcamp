// // YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {
    for (let i = 0; i<10 ;i++){
        currentNum = currentNum * 2;
        if (currentNum >= targetNum) {
            return (i + 1)*20;
            
        }
    }
}
let result = bacteriaTime(1, 4);
console.log(result); // 3


// what if I hadn't added the break statement? Is it necessary?
// The break statement is not necessary in this case because the return statement will exit the function and stop the loop.
//Is it always true that the return statement will exit the function and stop the loop?
// Yes, the return statement will always exit the function and stop the loop.
// If you hadn't added the break statement, the loop would continue to run until it reached the maximum iteration limit of 10.

//How would the above code work with while loop? Give me the code.
// The above code can be rewritten using a while loop as follows:
// function bacteriaTime(currentNum, targetNum) {
//     let i = 0;
//     while (i < 10) {
//         currentNum = currentNum * 2;
//         if (currentNum >= targetNum) {
//             return (i + 1) * 20;
//             break;
//         }
//         i++;
//     }
// }
// let result = bacteriaTime(1, 4);

//anyway we will have to give the iteration limit from our side, right?
// Yes, in both the for loop and the while loop versions of the code, we have to provide an iteration limit.


//How did bacteriaTime knew that currentNum and targetNum were numbers?
// Because the function is designed to work with numbers, and the input values are expected to be numbers.
//but how, it could be a string or an object
//but the function is designed to work with numbers, and the input values are expected to be numbers.
//What if the input values are not numbers?
// The function would still work, but it would not produce the expected results.
// Is it always the same? Does the function automatically know that the input values are numbers?
// No, the function does not automatically know that the input values are numbers.
// It is designed to work with numbers, and the input values are expected to be numbers.
// Then how will it work for the strings or objects?
// It will not work for strings or objects, and it will produce unexpected results.
//If I had passed strings or objects, what would have happened?
// The function would still work, but it would not produce the expected results.
//it wouldn't work only because the function is designed to work with numbers, and the input values are expected to be numbers, otherwise it would work.
