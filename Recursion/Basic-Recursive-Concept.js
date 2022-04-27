// 1. Indentify the base case : means this is a codition to stop the recursion 
// 2. Indentify the recursive case
// 3. Get closer and closer an return when needed. Usually you have two returns
let counter = 0;
function recursive(){
    console.log(counter);
    if(counter > 3){
        return 'to the end';
    }
    counter++;
    return recursive();
}

console.log(recursive()); // return to the end

