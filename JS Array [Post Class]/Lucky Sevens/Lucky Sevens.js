function  lucky_sevens(array){
// write your code here
let output = false;
if(array.length < 3){
    output = false;
}
else if(array.length == 3){
    if(array[0] + array[1] + array[2] == 7){
        output = true;
    }
}
else{
    for(let i = 0; i < array.length - 2; i++){
        if(array[i] + array[i+1] + array[i + 2] == 7){
            output = true;
        }
    }
}
console.log(output);
// use console.log to print your output
}
