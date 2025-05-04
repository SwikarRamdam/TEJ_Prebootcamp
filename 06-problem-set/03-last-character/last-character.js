// // YOUR CODE BELOW
function last_character(string1, string2){
    if(string1.charAt(string1.length -1)===  string2.charAt(string2.length -1)){
        return true;
    }
    else{
        return false;
    }
}
result1 = last_character("banana", "mango"); // => false
result2 = last_character("bananas", "mangoes"); // => false
console.log(result1);
console.log(result2);


