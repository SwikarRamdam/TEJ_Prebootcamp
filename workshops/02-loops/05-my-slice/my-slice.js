// YOUR CODE BELOW
function mySlice(string,startIdx, endIdx){
    let result = "";
    if(startIdx == undefined){
        startIdx = 0;
    }
    if(endIdx == undefined){
        endIdx = string.length;
    }
    for(let i=startIdx; i<endIdx; i++){
       result += string[i];
    }
    return result;

}

check = mySlice("hello world", 0, 5);
check = mySlice("slice and dice",2,0);
console.log(check); // hello




