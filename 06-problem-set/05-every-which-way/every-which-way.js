// YOUR CODE BELOW
function everyWhichWay(x,y,z){
    if(x+y ===z){
        return "sum";
    }
    if(x-y ===z){
        return "diff";
    }
    if(x*y ===z){
        return "prod";
    }
    if(x/y ===z){
        return "quot";
    }
    else{
        return "null";
    }
}
everyWhichWay(1,2,3);
everyWhichWay(10,9,1);
everyWhichWay(10,5,50);
everyWhichWay(30,3,10);
everyWhichWay(124,2345,1);

console.log(everyWhichWay(1,2,3));
console.log(everyWhichWay(10,9,1));
console.log(everyWhichWay(10,5,50));
console.log(everyWhichWay(30,3,10));
console.log(everyWhichWay(124,2345,1));